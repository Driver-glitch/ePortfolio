import React from 'react'
import './CertImages.css'
import Footer from '../footer/Footer';


function CertImages() {
    return (
        <div>
            <video src='/videos/video-10.mp4' autoPlay loop muted />
            
            <div>
                <div className='center'>
                    <div className="cert1">
                        <img src='images/Daniel-Cert1.jpg' alt="cert1"
                        />
                    </div>

                </div>
                
            </div>
            <div className='center'>
                <div className="cert2">
                    <img src='images/NSLS.jpg' alt="cert2"
                    />

                </div>
            </div>
                
            <Footer/>
        </div>
    )
}

export default CertImages;
