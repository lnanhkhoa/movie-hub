# FFmpeg Video Conversion Commands

## Keep Original (Copy codec)

```bash
ffmpeg -i input.mp4 -c:v copy -c:a copy -movflags +faststart output_original.mp4
```

## Multi-Resolution HLS (480p, 720p, 1080p) - Single Command

```bash
ffmpeg -i input.mkv \
  -filter_complex \
  "[0:v]split=3[v1][v2][v3]; \
   [v1]scale=842:480[v1out]; \
   [v2]scale=1280:720[v2out]; \
   [v3]scale=1920:1080[v3out]" \
  -map "[v1out]" -c:v:0 libx265 -preset fast -b:v:0 1400k -map 0:a -c:a:0 aac -b:a:0 128k \
    -f hls -hls_time 10 -hls_list_size 0 -hls_segment_filename "480p/segment%03d.ts" 480p/playlist.m3u8 \
  -map "[v2out]" -c:v:1 libx265 -preset fast -b:v:1 2800k -map 0:a -c:a:1 aac -b:a:1 128k \
    -f hls -hls_time 10 -hls_list_size 0 -hls_segment_filename "720p/segment%03d.ts" 720p/playlist.m3u8 \
  -map "[v3out]" -c:v:2 libx265 -preset fast -b:v:2 5000k -map 0:a -c:a:2 aac -b:a:2 192k \
    -f hls -hls_time 10 -hls_list_size 0 -hls_segment_filename "1080p/segment%03d.ts" 1080p/playlist.m3u8
```

**Note**: Create folders first: `mkdir -p 480p 720p 1080p`

Then create `master.m3u8`:
```m3u8
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=1528000,RESOLUTION=842x480
480p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2928000,RESOLUTION=1280x720
720p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=5192000,RESOLUTION=1920x1080
1080p/playlist.m3u8
```

---

## Individual Resolution Commands

### 480p (842x480) - HLS Output

<!-- preset: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow -->

```bash
ffmpeg -i input.mkv \
-map 0:v:0 -map 0:a:0 \
-vf "scale=842:480" \
-c:v libx265 -preset medium -b:v 1400k \
-c:a aac -vbr 3 -b:a 128k -ac 6 \
-start_number 0 -hls_time 10 -hls_list_size 0 -hls_segment_filename "480p/segment%03d.ts" \
-f hls 480p/playlist.m3u8
```

### 720p (1280x720) - HLS Output

```bash
ffmpeg -i input.mkv \
-map 0:v:0 -map 0:a:0 \
-vf "scale=1280:720" \
-c:v libx265 -preset slow -b:v 2800k \
-c:a aac -vbr 3 -b:a 128k -ac 6 \
-start_number 0 -hls_time 10 -hls_list_size 0 -hls_segment_filename "720p/segment%03d.ts" \
-f hls 720p/playlist.m3u8
```

### 1080p (1920x1080) - HLS Output

```bash
ffmpeg -i input.mkv \
-map 0:v:0 -map 0:a:0 \
-vf "scale=1920:1080" \
-c:v libx265 -preset slow -b:v 5000k \
-c:a aac -vbr 3 -b:a 192k -ac 6 \
-start_number 0 -hls_time 10 -hls_list_size 0 -hls_segment_filename "1080p/segment%03d.ts" \
-f hls 1080p/playlist.m3u8
```

## 2k (2560x1440) - HLS Output

```bash
ffmpeg -i input.mkv \
-map 0:v:0 -map 0:a:0 \
-vf "scale=2560:1440" \
-c:v libx265 -preset slow -tag:v hvc1 -b:v 8000k \
-x265-params "keyint=48:min-keyint=48:scenecut=0" \
-c:a aac -b:a 192k -ac 6 -ar 48000 \
-movflags +faststart \
-start_number 0 -hls_time 10 -hls_list_size 0 \
-hls_segment_filename "2k/segment%03d.ts" \
-f hls 2k/playlist.m3u8
```
