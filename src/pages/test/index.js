// import React, { useEffect, useRef, useState } from "react";

// export default function HomePage() {
//     const videoRef = useRef(null);
//     const [pauseIndex, setPauseIndex] = useState(0); // index for pauseTimes

//     // Convert frame numbers to time in seconds assuming 24 frames per second
//     const pauseTimes = [59, 99, 119].map((frame) => frame / 24);

//     useEffect(() => {
//         if (!videoRef.current) return;

//         const pauseTime = pauseTimes[pauseIndex];
//         if (pauseTime === undefined) return; // no more pauses

//         const intervalId = setInterval(() => {
//             if (videoRef.current.currentTime >= pauseTime) {
//                 clearInterval(intervalId);
//                 videoRef.current.pause();
//             }
//         }, 100); // check every 100ms

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [pauseIndex]); // effect depends on pauseIndex

//     const handleContinue = () => {
//         if (!videoRef.current) return;
//         setPauseIndex(pauseIndex + 1); // move to next pause time
//         videoRef.current.play();
//     };

//     const handleScroll = () => {
//         if(window.scrollY > 100) {  // Check if scrolled more than 100px
//           handleContinue();
//         //   window.removeEventListener('scroll', handleScroll);  // Remove the event listener after triggering
//         }
//       }

//       useEffect(() => {
//         window.addEventListener('scroll', handleScroll);  // Add the scroll event listener

//         return () => {
//           window.removeEventListener('scroll', handleScroll);  // Remove the scroll event listener when component unmounts
//         };
//       }, []);

//     return (
// <div>
//     <div
//         style={{
//             width: "100vw",
//             height: "500vh",
//         }}
//     />
//             <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                     overflow: "hidden",
//                 }}
//             >
//                 <video
//                     ref={videoRef}
//                     style={{
//                         position: "fixed",
//                         top: "50%",
//                         left: "50%",
//                         minHeight: "100%",
//                         minWidth: "100%",
//                         height: "auto",
//                         width: "auto",
//                         zIndex: "-100",
//                         transform: "translateX(-50%) translateY(-50%)",
//                         backgroundSize: "cover",
//                         transition: "1s opacity",
//                     }}
//                     autoPlay
//                     muted
//                     src="/vid.mp4"
//                 />
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useRef } from "react";

export default function HomePage() {
    const videoRef = useRef(null);

    const videoTimeMapping = (input) => {

        const times = [0, 2.1, 4.2, 4.6, 9]
        const pauses = [1.5,1.5,1.5,0.5,10]


        for (let i = 0; i < times.length; i++) {
            const elapsedPauseTime = pauses.slice(0, i).reduce((a, b) => a + b, 0)
            if (input < times[i] + elapsedPauseTime + pauses[i]) {
                if (input < times[i] + elapsedPauseTime) {
                    return input - elapsedPauseTime
                } else {
                    return times[i]
                }
            } 
        }

        return 0
    };

    useEffect(() => {
        // initialize scroll event
        window.onscroll = () => {
            if (videoRef.current) {
                // calculate scroll percentage and update video time
                const scrollPos = window.pageYOffset;
                const maxScrollPos =
                    document.body.scrollHeight - window.innerHeight;
                const scrollPercent = scrollPos / 140;

                videoRef.current.currentTime = videoTimeMapping(scrollPercent);
                // videoRef.current.currentTime = scrollPercent;
            }
        };

        return () => {
            // cleanup function to remove scroll event when component is unmounted
            window.onscroll = null;
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <video
                    ref={videoRef}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src="/vid3.mp4"
                    type="video/mp4"
                />
            </div>{" "}
            <div
                style={{
                    width: "100vw",
                    height: "500vh",
                    display: "flex",
                    flexDirection: 'column',
                    position: "absolute",
                    paddingLeft: "6vw",
                    width: '30vw',
                }}
            >
                {/* <div
                    style={{
                        fontSize: "5vw",
                        marginTop: "20vw",
                        position: 'fixed',
                    }}
                >
                    SAFEGUARD & MONITOR
                </div>

                <div
                    style={{
                        fontSize: "5vw",
                        marginTop: "70vw",
                    }}
                >
                    GRAB YOUL ORB
                </div> */}
            </div>
        </div>
    );
}
