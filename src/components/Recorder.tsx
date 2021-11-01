import React, { useState, useEffect } from 'react';
const MicRecorder = require('mic-recorder-to-mp3');

function Recorder() {

    const [isRecording, setIsRecording] = useState(false)
    const [recording, setRecording] = useState<string | undefined>()
    const [mR, setMR] = useState<any>()
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const newMr = new MicRecorder({ bitrate: 128 })
                setMR(newMr)
            }, () => {
                setError('Microphone blocked by browser.')
            })
    }, [])

    const record = () => {
        if (!mR) return
        setIsRecording(!isRecording)

        if (!isRecording) {
            setIsRecording(true)
            mR.start()
        } else {
            setIsRecording(false)
            mR.stop().getMp3()
                .then(([buffer, blob]: any[]) => {
                    const blobUrl = URL.createObjectURL(blob)
                    setRecording(blobUrl)
                })
        }
    }

    const play = () => {
        if (recording) {
            const audio = new Audio(recording)
            audio.play()
        }
    }

    return (
        <div className="section has-text-centered ">
            { error ? <div className="message is-danger"><div className="message-body">{error}</div></div> : null}
            <button className="button is-success" onClick={record} >{isRecording ? "Stop" : "Record"}</button>
            <span>   </span>
            <button className="button is-success" onClick={play} >Play</button>
            <br />
        </div>
    )
}

export default Recorder