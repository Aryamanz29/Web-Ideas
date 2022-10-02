from flask import Flask,render_template,Response
import cv2

app=Flask(__name__)

camera=cv2.VideoCapture(0) 
# for cctv camera use 'rtsp://username:password@ip_address:554/user=username_password='password'_channel=channel_number_stream=0.sdp'

def genFrames():
    while True:
            
        success,frame=camera.read()
        if not success:
            break
        else:
            ret,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()

        yield(b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/live') 
def liveVideo():
    print("==========",genFrames())
    return Response(genFrames(),mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    app.run(debug=True)
