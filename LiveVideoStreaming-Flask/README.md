# Live-Video-Streamer
Using OpenCV and Flask. A Flask Web-App to stream live from local webcam or CCTV (RTSP link)

## For Built-in Webcam of Laptop

### Put Zero (O) in cv2.VideoCapture(0) in Line 5 of app.py

``` cv2.VideoCapture(0) ```

## For CCTV Camera

### Put Ip Camera/CCTV/RTSP Link in cv2.VideoCapture('') in Line 5 of app.py

``` cv2.VideoCapture('rtsp://username:password@camera_ip_address:554/user=username_password='password'_channel=channel_number_stream=0.sdp') ```

### [Reference](https://blog.miguelgrinberg.com/post/video-streaming-with-flask)
