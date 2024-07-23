import React, { useState, useEffect } from 'react';
import video2 from '../assets/loader.mp4';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const handleProgress = () => {
            const total = document.getElementsByTagName('*').length;
            const loaded = document.querySelectorAll(':not(img):not(script):not(audio):not(video):not(iframe):not(svg)').length;
            const progress = (loaded / total) * 100;
            setLoadingProgress(progress);

            if (progress === 100) {
                onLoadingComplete();
            }
        };

        document.addEventListener('readystatechange', handleProgress);
        window.addEventListener('load', handleProgress);

        return () => {
            document.removeEventListener('readystatechange', handleProgress);
            window.removeEventListener('load', handleProgress);
        };
    }, [onLoadingComplete]);

    const videoPlaybackRate = 0.8 + (loadingProgress / 200);

    return (
        <div className="w-screen h-[100vh] overflow-hidden flex justify-center items-center">
            <video
                preload="auto"
                autoPlay
                muted
                className='w-full object-contain'
                style={{ playbackRate: videoPlaybackRate }}
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LoadingScreen;
