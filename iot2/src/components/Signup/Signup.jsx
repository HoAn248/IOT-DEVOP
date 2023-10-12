import React, { useEffect, useRef, useState } from 'react'
import style from './signup.module.css'
import { Link } from 'react-router-dom'
import * as faceapi from 'face-api.js'
export default function Signup() {
  const videoRef = useRef()
  const canvasRef = useRef()

  const [idsv, setIDsv] = useState('')
  const [tensv, setTenSV] = useState('')
  const [tuoi, setTuoi] = useState('')
  const [ngaysinh, setNgaySinh] = useState('')
  const [lop, setLop] = useState('')
  const [img, setImg] = useState('')

  function doiTen(e) {
    setTenSV(e.target.value)
  }
  function doiID(e) {
    setIDsv(e.target.value)
  }
  function doiTuoi(e) {
    setTuoi(e.target.value)
  }
  function doiNgaySinh(e) {
    setNgaySinh(e.target.value)
  }
  function doiLop(e) {
    setLop(e.target.value)
  }

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo()
    videoRef && loadModels()

  }, [])

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")

    ]).then(() => {
      faceMyDetect()
    })
  }

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)

      faceapi.matchDimensions(canvasRef.current, {
        width: 270,
        height: 200
      })

      const resized = faceapi.resizeResults(detections, {
        width: 270,
        height: 200
      })

      faceapi.draw.drawDetections(canvasRef.current, resized)


    }, 1000)
  }

  function capture(e) {
    const videoElement = videoRef.current
    const canvas = faceapi.createCanvasFromMedia(videoElement)
    const context = canvas.getContext('2d')
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    const screenshot = canvas.toDataURL('image/png')
    setImg(screenshot);
    alert("Chụp ảnh thành công")
  }

  function createSinhVien() {
    fetch('http://localhost:4000/sinhvien', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ten: tensv,
        idsv: idsv,
        tuoi: tuoi,
        ngaysinh: ngaysinh,
        lop: lop,
        img: img
      }),
    })
      .then((res) => {
        if (res.status === 200) alert('Tạo thành công')
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  return (
    <div className={style.login_page} >
      <div className={style.form}>
        <div className={style.login_form}>
          <input onChange={doiTen} value={tensv} type="text" placeholder="tên" />
          <input onChange={doiLop} value={lop} type="text" placeholder="lớp" />
          <input onChange={doiID} value={idsv} type="text" placeholder="id" />
          <input onChange={doiTuoi} value={tuoi} type="text" placeholder="tuổi" />
          <input onChange={doiNgaySinh} value={ngaysinh} type="text" placeholder="ngày sinh" />
          <div className={style.login_box_camera}>
            <video width="270" height="200" crossOrigin="anonymous" autoPlay ref={videoRef}></video>
            <canvas width="270" height="200"
              className="appcanvas" ref={canvasRef} />
          </div>

          <button onClick={capture} >Chụp ảnh</button>
          <hr />
          <button onClick={createSinhVien}>Đăng Ký</button>
          <p className={style.message}><a href="/" rel="noopener noreferrer">Home Page</a></p>
          <p className={style.message}>Already registered?<Link to="/signin" rel="noopener noreferrer">Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}
