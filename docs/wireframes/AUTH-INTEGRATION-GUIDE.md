# Authentication Pages - Integration Guide

**Quick reference for developers integrating the authentication system**

---

## 🚀 Quick Start

### Files Needed
```
docs/wireframes/
├── login.html
├── signup.html
├── password-reset.html
├── css/auth.css
└── js/auth.js
```

### Include in Your HTML
```html
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/auth.css">
<script src="js/main.js"></script>
<script src="js/auth.js"></script>
```

---

## 📋 API Integration Points

### 1. Login Form (`login.html`)

**Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Error Response** (401):
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**Code Location**: `js/auth.js` → Line 184-218 (Login form submission)

**Replace This**:
```javascript
// Simulate login API call
setTimeout(() => {
    // Success/failure logic
}, 1500);
```

**With This**:
```javascript
try {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
        localStorage.setItem('authToken', data.token);
        window.location.href = 'index.html';
    } else {
        const errorBanner = document.getElementById('errorBanner');
        if (errorBanner) errorBanner.style.display = 'flex';
    }
} catch (error) {
    console.error('Login failed:', error);
    showError('email', 'Unable to connect. Please try again.');
}
```

---

### 2. Sign Up Form (`signup.html`)

**Endpoint**: `POST /api/auth/signup`

**Request Body**:
```json
{
  "fullName": "John Doe",
  "email": "user@example.com",
  "password": "SecurePass123!",
  "acceptedTerms": true
}
```

**Success Response** (201):
```json
{
  "success": true,
  "message": "Account created successfully",
  "userId": "123"
}
```

**Error Response** (400):
```json
{
  "success": false,
  "message": "Email already exists"
}
```

**Code Location**: `js/auth.js` → Line 330-398 (Signup form submission)

**Replace This**:
```javascript
// Simulate sign up API call
setTimeout(() => {
    // Success logic
}, 1500);
```

**With This**:
```javascript
try {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullName,
            email,
            password,
            acceptedTerms: termsAccepted
        })
    });

    const data = await response.json();

    if (data.success) {
        showToast('Account created! Redirecting to login...');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    } else {
        showError('email', data.message);
    }
} catch (error) {
    console.error('Signup failed:', error);
    showToast('Unable to create account. Please try again.', 'error');
}
```

---

### 3. Password Reset - Step 1 (`password-reset.html`)

**Endpoint**: `POST /api/auth/password-reset/request`

**Request Body**:
```json
{
  "email": "user@example.com"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Reset link sent to email"
}
```

**Code Location**: `js/auth.js` → Line 448-478 (Reset request form)

---

### 4. Password Reset - Step 3 (New Password)

**Endpoint**: `POST /api/auth/password-reset/confirm`

**Request Body**:
```json
{
  "token": "reset-token-from-email",
  "newPassword": "NewSecurePass123!"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

**Code Location**: `js/auth.js` → Line 593-643 (New password form)

---

### 5. Social Login (OAuth)

**Endpoints**:
- `GET /api/auth/google` → Initiates Google OAuth
- `GET /api/auth/facebook` → Initiates Facebook OAuth
- `GET /api/auth/apple` → Initiates Apple OAuth

**Code Location**: `js/auth.js` → Line 655-670 (Social button handlers)

**Replace This**:
```javascript
socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Simulation logic
    });
});
```

**With This**:
```javascript
socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const provider = button.classList.contains('google-btn') ? 'google' :
                        button.classList.contains('facebook-btn') ? 'facebook' : 'apple';

        // Open OAuth popup
        const width = 500;
        const height = 600;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;

        const popup = window.open(
            `/api/auth/${provider}`,
            'oauth-popup',
            `width=${width},height=${height},left=${left},top=${top}`
        );

        // Listen for OAuth callback
        window.addEventListener('message', (event) => {
            if (event.data.type === 'oauth-success') {
                localStorage.setItem('authToken', event.data.token);
                window.location.href = 'index.html';
            }
        });
    });
});
```

---

## 🔧 Environment Variables

```env
# Backend API Base URL
VITE_API_URL=https://api.moviehub.com

# OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
FACEBOOK_APP_ID=your-facebook-app-id
APPLE_CLIENT_ID=your-apple-client-id

# JWT Secret
JWT_SECRET=your-secret-key

# Email Service
SENDGRID_API_KEY=your-sendgrid-key
FROM_EMAIL=noreply@moviehub.com

# Session
SESSION_SECRET=your-session-secret
```

---

## 🔒 Security Checklist

### Frontend
- ✅ Validate all inputs client-side
- ✅ Sanitize user input
- ✅ Use HTTPS only
- ✅ Implement CSRF tokens
- ✅ Never store passwords in localStorage
- ✅ Use httpOnly cookies for tokens
- ✅ Implement rate limiting UI feedback

### Backend
- ✅ Hash passwords (bcrypt, argon2)
- ✅ Validate inputs server-side
- ✅ Use parameterized queries
- ✅ Implement rate limiting
- ✅ Add CAPTCHA on signup/login
- ✅ Secure password reset tokens
- ✅ Token expiration (15 min for reset)
- ✅ Email verification required

---

## 📧 Email Templates Needed

### 1. Welcome Email (After Signup)
**Subject**: Welcome to Movie Hub!
**Trigger**: Successful signup
**Contains**: Account verification link (if needed)

### 2. Password Reset Email
**Subject**: Reset Your Movie Hub Password
**Trigger**: Password reset request
**Contains**:
- Reset link with token
- Token expiration time (1 hour)
- Security notice

### 3. Password Changed Confirmation
**Subject**: Your Movie Hub Password Was Changed
**Trigger**: Successful password reset
**Contains**: Security notice, support contact

---

## 🎨 Customization

### Update Brand Colors
**File**: `css/auth.css`

```css
/* Change primary red accent */
--accent-red: #E50914;  /* Change to your brand color */

/* Change success green */
.password-strength.strong .strength-bar {
    background: #4CAF50;  /* Your success color */
}

/* Change error red */
.error-message {
    color: #ff6b6b;  /* Your error color */
}
```

### Update Logo
**Files**: `login.html`, `signup.html`, `password-reset.html`

Replace the inline SVG in navbar with your logo:
```html
<a href="index.html" class="logo">
    <img src="/assets/logo.svg" alt="Movie Hub" width="40" height="40">
    <span class="logo-text">Your Brand</span>
</a>
```

### Update Language Options
**Files**: All auth pages

Modify the language selector:
```html
<select class="language-selector" aria-label="Select language">
    <option value="en">English</option>
    <option value="vi">Tiếng Việt</option>
    <option value="ja">日本語</option>
    <!-- Add your languages -->
</select>
```

---

## 🧪 Testing

### Manual Testing Checklist
```
Login Page:
□ Valid credentials → redirects to index.html
□ Invalid credentials → shows error banner
□ Empty fields → shows validation errors
□ Forgot password → navigates to reset page
□ Sign up link → navigates to signup page
□ Social buttons → logs provider name

Signup Page:
□ All valid inputs → redirects to login
□ Password < 8 chars → shows error
□ Passwords don't match → shows error
□ Email already exists → shows error
□ Terms not accepted → prevents submission
□ Password strength updates in real-time

Password Reset:
□ Step 1: Valid email → shows Step 2
□ Step 2: Resend works with countdown
□ Step 3: Valid passwords → shows Step 4
□ Step 4: Continue → navigates to login
```

### Automated Testing (E2E)
```javascript
// Example using Playwright/Cypress
describe('Login Flow', () => {
    it('should login with valid credentials', async () => {
        await page.goto('/login.html');
        await page.fill('#email', 'test@example.com');
        await page.fill('#password', 'SecurePass123!');
        await page.click('#submitBtn');
        await expect(page).toHaveURL('/index.html');
    });

    it('should show error with invalid credentials', async () => {
        await page.goto('/login.html');
        await page.fill('#email', 'wrong@example.com');
        await page.fill('#password', 'wrongpass');
        await page.click('#submitBtn');
        await expect(page.locator('#errorBanner')).toBeVisible();
    });
});
```

---

## 📱 Mobile Optimization

### Touch Targets
- All buttons: min 44px × 44px ✅
- All inputs: 48px height ✅
- Social buttons: 48px height ✅

### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Prevent Zoom on Input Focus (iOS)
```css
@supports (-webkit-touch-callout: none) {
    input[type="text"],
    input[type="email"],
    input[type="password"] {
        font-size: 16px; /* Prevents iOS zoom */
    }
}
```

---

## ⚡ Performance

### Current Metrics
- **HTML**: 9-16KB per page
- **CSS**: 16KB (auth.css)
- **JS**: 24KB (auth.js)
- **Total**: ~65KB uncompressed

### Optimization Tips
1. **Enable GZIP** compression on server
2. **Minify** CSS and JS in production
3. **Lazy load** social login scripts
4. **Defer** non-critical JS
5. **Cache** static assets (1 year)

### Production Build
```bash
# Minify CSS
npx cssnano css/auth.css css/auth.min.css

# Minify JS
npx terser js/auth.js -o js/auth.min.js -c -m

# Update HTML references
<link rel="stylesheet" href="css/auth.min.css">
<script src="js/auth.min.js"></script>
```

---

## 🐛 Common Issues & Fixes

### Issue: Password toggle not working
**Fix**: Ensure `eye-icon` and `eye-slash-icon` SVGs are present

### Issue: Form validation not triggering
**Fix**: Check that input IDs match error element IDs + "Error"

### Issue: Social login buttons not working
**Fix**: Add actual OAuth redirect URLs to button click handlers

### Issue: Toast not appearing
**Fix**: Ensure `<div id="toast">` exists in HTML

### Issue: Mobile keyboard covers inputs
**Fix**: Add `window.scrollTo()` on input focus

---

## 📚 Additional Resources

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [OAuth 2.0 Best Practices](https://oauth.net/2/)
- [Password Security Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

### Tools
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [HTML Validator](https://validator.w3.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🆘 Support

For questions or issues with integration:
1. Check `AUTH-PAGES-SUMMARY.md` for detailed docs
2. Review `js/auth.js` comments for function documentation
3. Test in browser console for debugging
4. Check network tab for API call issues

---

**Last Updated**: November 3, 2025
**Version**: 1.0
**Maintainer**: UI/UX Design Team
