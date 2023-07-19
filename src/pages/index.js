// import ParallaxComponent from "@/components/ParallaxComponent";
// import React, { useEffect, useRef, useState } from "react";
// import SmoothScroll from "../components/SmoothScroll";

// export default function HomePage() {
//     const videoRef = useRef(null);
//     const [scrollPosition, setScrollPosition] = useState(0);
//     const [firstLoad, setFirstLoad] = useState(false);

//     const videoTimeMapping = (input) => {
//         const times = [0, 2.1, 4.2, 4.6, 9];
//         const pauses = [0, 0, 0, 0, 10];

//         for (let i = 0; i < times.length; i++) {
//             const elapsedPauseTime = pauses
//                 .slice(0, i)
//                 .reduce((a, b) => a + b, 0);
//             if (input < times[i] + elapsedPauseTime + pauses[i]) {
//                 if (input < times[i] + elapsedPauseTime) {
//                     return input - elapsedPauseTime;
//                 } else {
//                     return times[i];
//                 }
//             }
//         }

//         return 0;
//     };

//     useEffect(() => {
//         setFirstLoad(true);
//         // initialize scroll event
//         window.onscroll = () => {
//             setScrollPosition(window.pageYOffset);
//             if (videoRef.current) {
//                 // calculate scroll percentage and update video time
//                 const scrollPos = window.pageYOffset;
//                 const maxScrollPos =
//                     document.body.scrollHeight - window.innerHeight;
//                 const scrollPercent = scrollPos / 1000;

//                 // videoRef.current.currentTime = videoTimeMapping(scrollPercent);
//                 videoRef.current.currentTime = scrollPercent;
//             }
//         };

//         return () => {
//             // cleanup function to remove scroll event when component is unmounted
//             window.onscroll = null;
//         };
//     }, []);

//     return (
//         // <SmoothScroll>
//         <div
//             style={{
//                 color: "white",
//                 // fontFamily: 'Korataki'
//             }}
//         >
//             <div
//                 // className="pulsing-element"
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                     overflow: "hidden",
//                     // background:
//                     //     scrollPosition > 3000 && scrollPosition < 6300
//                     //         ? "#410"
//                     //         : scrollPosition > 8400 && scrollPosition < 16000
//                     //         ? "#033"
//                     //         : "#000",
//                     //         transition: 'background 0.3s ease-in-out'
//                 }}
//             >
//                 <video
//                     ref={videoRef}
//                     style={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         mixBlendMode: "screen",
//                     }}
//                     src="/0000-0420 copy.mp4"
//                     type="video/mp4"
//                 />
//             </div>
//             <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     width: "100%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     padding: "1vw 7vw",
//                     backgroundColor: "transparent",
//                     color: "white",
//                     zIndex: 1000,
//                 }}
//             >
//                 <div>
//                     <h1
//                         style={{
//                             color: "#00FFFF",
//                             fontWeight: 500,
//                             lineHeight: "90%",
//                             fontSize: "1.6vw",
//                         }}
//                     >
//                         3<span style={{ color: "white" }}>LAWS</span>
//                     </h1>
//                     <p
//                         style={{
//                             color: "white",
//                             letterSpacing: "1.35em",
//                             fontSize: "0.55vw",
//                         }}
//                     >
//                         ROBOTICS {scrollPosition}
//                     </p>
//                 </div>
//                 <div
//                     style={{
//                         color: "#fff9",
//                         display: "flex",
//                         gap: "4vw",
//                         fontSize: "0.7vw",
//                         fontWeight: 300,
//                     }}
//                 >
//                     <div>Home</div>
//                     <div>Tech</div>
//                     <div>Contact</div>
//                     <div>About</div>
//                 </div>
//             </div>
//             {/* <div
//                 style={{
//                     position: "fixed",
//                     height: "100vh",
//                     width: "100vw",
//                     border: "3px solid #9ff",
//                     opacity: scrollPosition >= 2000 ? "100%" : 0,
//                     transition: "opacity 0.3s ease-in-out",
//                 }}
//             ></div> */}

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 600 && scrollPosition < 2000
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "Inter",
//                         marginLeft: "10vw",
//                         marginTop: "30vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Task Under Way
//                 </div>
//             </div> */}

//             <div
//                 className="pulsing-element"
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 3000 && scrollPosition < 4200
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#fa8",
//                         marginLeft: "65vw",
//                         marginTop: "20vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Robot Down
//                 </div>
//             </div>

//             <div
//                 className="pulsing-element"
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 5050 && scrollPosition < 7000
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#fd8",
//                         marginLeft: "16vw",
//                         marginTop: "20vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Reparing
//                 </div>
//             </div>

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 4800 && scrollPosition < 6000
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "Inter",
//                         marginLeft: "10vw",
//                         marginTop: "30vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Reparing
//                 </div>
//             </div> */}

//             <div
//                 className="pulsing-element"
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 7080 && scrollPosition < 8200
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#9f9",
//                         marginLeft: "18vw",
//                         marginTop: "24vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     ready
//                 </div>
//             </div>

//             <div
//                 className="pulsing-element"
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 9190 && scrollPosition < 10800
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#6ff",
//                         marginLeft: "48vw",
//                         marginTop: "16vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Installing Supervisor
//                 </div>
//             </div>

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 8400 && scrollPosition < 10000
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "Inter",
//                         marginLeft: "10vw",
//                         marginTop: "30vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Install safety Supervisor
//                 </div>
//             </div> */}

//             <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 11270 && scrollPosition < 12200
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#C1FFFF",
//                         marginLeft: "10vw",
//                         marginTop: "20vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Safety Supervisor Activated
//                 </div>
//             </div>

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 14200 && scrollPosition < 15000
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "Inter",
//                         marginLeft: "10vw",
//                         marginTop: "30vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Hazard Avoided
//                 </div>
//             </div> */}

//             <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                 }}
//             >
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         fontWeight: 300,
//                         fontSize: "3.2vw",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         opacity:
//                             scrollPosition > 16400 && scrollPosition < 17200
//                                 ? "100%"
//                                 : 0,
//                         transition: "opacity 0.3s ease-in-out",
//                         fontFamily: "space mono",
//                         color: "#C1FFFF",
//                         marginLeft: "44vw",
//                         marginTop: "20vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Goal Acheived
//                 </div>
//             </div>

//             <div
//                 style={{
//                     width: "100vw",
//                     height: "15000px",
//                     display: "flex",
//                     flexDirection: "column",
//                     position: "absolute",
//                     paddingLeft: "6vw",
//                     width: "30vw",
//                 }}
//             ></div>

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     left: "8vw",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     opacity: scrollPosition <= 50 ? '100%' : 0,
//                     transition: 'opacity 0.3s ease-in-out',
//                 }}
//             >
//                 <h2
//                     style={{
//                         marginTop: '1vw',
//                         fontFamily: "Inter, sans-serif",
//                         fontWeight: "800",
//                         fontSize: "3.6vw",
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.12em',
//                         lineHeight: '111%',
//                         width: '24vw',
//                     }}
//                 >
//                     Navigate Unhindered
//                 </h2>
//                 <div
//                     style={{
//                         marginTop: '1.4vw',
//                         width: "6vw",
//                         height: "2px",
//                         background: '#6687FF',
//                         borderRadius: '100vw'
//                     }}
//                 />
//                 <p
//                     style={{
//                         marginTop: '3vw',
//                         fontFamily: "Inter, sans-serif",
//                         color: "#fffc",
//                         fontSize: "1.1vw",
//                         letterSpacing: '0.03em',
//                         lineHeight: '195%',
//                         width: "30vw",
//                         fontWeight: '300',
//                     }}
//                 >
//                     Experience a world unhindered by obstacles with 3Laws' cutting-edge collision avoidance algorithm.
//                 </p>

//                 <p
//                     style={{
//                         marginTop: '1.6vw',
//                         fontFamily: "Inter, sans-serif",
//                         color: "#fff9",
//                         fontSize: "1vw",
//                         letterSpacing: '0.03em',
//                         lineHeight: '195%',
//                         width: "30vw",
//                         fontWeight: '300',
//                     }}
//                 >
//                    Paired with our advanced live metrics, gain unmatched control and insight into every robotic maneuver.
//                 </p>
//                 <div style={{
//                         marginTop: '5vw',
//                     background: '#6687FF',
//                     fontWeight: "400",
//                     fontSize: "0.9vw",
//                     textTransform: 'uppercase',
//                     textAlign: 'center',
//                     paddingBlock: '1vw',
//                     borderRadius: '3px',
//                     width: '20vw',

//                 }}>Schedule a Consultation→</div>
//             </div>
//             <NumberedTitle
//                 number={1}
//                 title="Unexpected Obstacle"
//                 text="In a dynamic world, robots encounter barriers blocking there ideal path."
//                 color="#FFC875"
//                 scrollPosition={scrollPosition}
//                 scrollStart={380*5}
//                 scrollEnd={580*5}
//             />
//             <NumberedTitle
//                 number={2}
//                 title="Dangerous Collision"
//                 text="Hazardous and costly collisions can be avoided with ease using 3Laws’ state of the art collision avoidance algorithm."
//                 color="#FF6661"
//                 scrollPosition={scrollPosition}
//                 scrollStart={950*5}
//                 scrollEnd={1150*5}
//             />
//             <NumberedTitle
//                 number={3}
//                 title="optimal path"
//                 text="Our product allows your robot to avoid obstacles while still reaching its goal ensuring the safety of your robot and everyone and everything around it."
//                 color="#66FFFE"
//                 scrollPosition={scrollPosition}
//                 scrollStart={1880*5}
//                 scrollEnd={100000*5}
//             /> */}

//             <div
//                 style={{
//                     position: "absolute",
//                     top: "34vw",
//                     display: "flex",
//                     flexDirection: "column",
//                     width: "100vw",
//                 }}
//             >
//                 <div
//                     style={{
//                         paddingLeft: "7vw",
//                     }}
//                 >
//                     {/* <div
//                         style={{
//                             marginTop: "5vw",
//                             background: "#6687FF",
//                             fontWeight: "400",
//                             fontSize: "0.9vw",
//                             textTransform: "uppercase",
//                             textAlign: "center",
//                             paddingBlock: "1vw",
//                             borderRadius: "3px",
//                             width: "20vw",
//                         }}
//                     >
//                         Schedule a Consultation →
//                     </div>
//                     <p
//                         style={{
//                             marginTop: "3vw",
//                             color: "#fffc",
//                             fontSize: "1.1vw",
//                             fontFamily: "Inter",
//                             letterSpacing: "0.03em",
//                             lineHeight: "195%",
//                             width: "30vw",
//                             fontWeight: "300",
//                             fontWeight: "300",
//                         }}
//                     >
//                         + Avoid obsticles and downtime
//                     </p>
//                     <p
//                         style={{
//                             marginTop: "1vw",
//                             fontFamily: "Inter",
//                             color: "#fffc",
//                             fontSize: "1.1vw",
//                             letterSpacing: "0.03em",
//                             lineHeight: "195%",
//                             width: "30vw",
//                             fontWeight: "300",
//                             fontWeight: "300",
//                         }}
//                     >
//                         + Get your robot saftey certified
//                     </p>
//                     <p
//                         style={{
//                             marginTop: "1vw",
//                             fontFamily: "Inter",
//                             color: "#fffc",
//                             fontSize: "1.1vw",
//                             letterSpacing: "0.03em",
//                             lineHeight: "195%",
//                             width: "30vw",
//                             fontWeight: "300",
//                             fontWeight: "300",
//                         }}
//                     >
//                         + Live metrics
//                     </p>
//                     <div
//                         style={{
//                             marginTop: "1.4vw",
//                             width: "6vw",
//                             height: "2px",
//                             background: "#6687FF",
//                             borderRadius: "100vw",
//                         }}
//                     /> */}
//                     {/* <h2
//                         style={{
//                             marginTop: "1vw",
//                             fontWeight: "600",
//                             fontSize: "7.2vw",
//                             textTransform: "uppercase",
//                             letterSpacing: "0.18em",
//                             lineHeight: "90%",
//                             width: "24vw",
//                             // fontFamily: 'Inter',
//                         }}
//                     >
//                         Navigate Unhindered
//                     </h2> */}
//                     {/* <h2
//                         style={{
//                             marginTop: "1vw",
//                             fontWeight: 600,
//                             fontSize: "4.2vw",
//                             textTransform: "uppercase",
//                             letterSpacing: "0.12em",
//                             lineHeight: "90%",
//                             width: "24vw",
//                             // fontFamily: 'Korataki',
//                         }}
//                     >
//                         Navigate Unhindered
//                     </h2> */}
//                     {/* <div
//                         style={{
//                             marginTop: "5vw",
//                             background: "#5855EB",
//                             fontWeight: 300,
//                             fontSize: "0.7vw",
//                             // textTransform: "uppercase",
//                             letterSpacing: "0.12em",
//                             textAlign: "center",
//                             paddingBlock: "1vw",
//                             width: "20vw",
//                         }}
//                     >
//                         Schedule a Consultation →
//                     </div> */}
//                     {/* <p
//                     style={{
//                         marginTop: '3vw',
//                         color: "#fffc",
//                         fontSize: "1.1vw",
//                         letterSpacing: '0.03em',
//                         lineHeight: '195%',
//                         width: "30vw",
//                         fontWeight: '300',
//                     }}
//                 >
//                     Experience a world unhindered by obstacles with 3Laws' cutting-edge collision avoidance algorithm.
//                 </p> */}
//                     {/* <p
//                     style={{
//                         marginTop: '1.6vw',
//                         color: "#fff9",
//                         fontSize: "1vw",
//                         letterSpacing: '0.03em',
//                         lineHeight: '195%',
//                         width: "30vw",
//                         fontWeight: '300',
//                     }}
//                 >
//                    Paired with our advanced live metrics, gain unmatched control and insight into every robotic maneuver.
//                 </p> */}
//                 </div>
//                 <div
//                     style={{
//                         height: "160vw",
//                     }}
//                 />
//                 {/* <NumberedTitle
//                     number={1}
//                     title="Unpredictable Hazards"
//                     text="In real-world settings, robots face dangerous and unforseen obstacles"
//                     color="#FFC875"
//                     scrollPosition={scrollPosition}
//                     scrollStart={380 * 5}
//                     scrollEnd={580 * 5}
//                 /> */}
//                 <div
//                     style={{
//                         height: "180vw",
//                     }}
//                 />
//                 {/* <NumberedTitle
//                     number={2}
//                     title="Dangerous Collision"
//                     text="Avoid injuries and downtime with ease using 3Laws’ state-of-the-art collision avoidance algorithm."
//                     color="#FF6661"
//                     scrollPosition={scrollPosition}
//                     // scrollStart={950*5}
//                     // scrollEnd={1150*5}
//                 /> */}
//                 <div
//                     style={{
//                         height: "200vw",
//                     }}
//                 />
//                 {/* <NumberedTitle
//                     number={2}
//                     title="Safety Cerified"
//                     text="Avoid injuries and downtime with ease using 3Laws’ state-of-the-art collision avoidance algorithm."
//                     color="#FF6661"
//                     scrollPosition={scrollPosition}
//                     // scrollStart={950*5}
//                     // scrollEnd={1150*5}
//                 /> */}
//             </div>

//             <div
//                 style={{
//                     position: "absolute",
//                     top: "30vw",
//                     display: "flex",
//                     flexDirection: "column",
//                     width: "100vw",
//                     paddingInline: "7vw",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "1.6vw",
//                         letterSpacing: "0.08em",
//                         width: "24vw",
//                         // fontFamily: 'Korataki',
//                     }}
//                 >
//                     Your
//                 </div>
//                 <h2
//                     style={{
//                         fontWeight: 700,
//                         fontSize: "4.2vw",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.09em",
//                         width: "24vw",
//                         // fontFamily: 'Korataki',
//                     }}
//                 >
//                     guardian
//                 </h2>
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         marginTop: '1vw',
//                         fontSize: "1.6vw",
//                         letterSpacing: "0.08em",
//                         // fontFamily: 'Korataki',
//                     }}
//                 >
//                     in the World of Automation
//                 </div>
//                 <div
//                     style={{
//                         marginTop: "5vw",
//                         background: "#5855EB",
//                         fontWeight: 300,
//                         fontSize: "0.7vw",
//                         // textTransform: "uppercase",
//                         letterSpacing: "0.12em",
//                         textAlign: "center",
//                         paddingBlock: "1vw",
//                         width: "20vw",
//                     }}
//                 >
//                     Schedule a Consultation →
//                 </div>
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         fontFamily: "Inter",
//                         marginTop: "70vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Task Under Way
//                 </div>
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         fontFamily: "Inter",
//                         marginTop: "310vw",
//                         lineHeight: "90%",
//                         textAlign: "right",
//                         width: "100%",
//                     }}
//                 >
//                     Down Time
//                 </div>
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         fontFamily: "Inter",
//                         marginTop: "190vw",
//                         lineHeight: "90%",
//                     }}
//                 >
//                     Safety Supervisor
//                 </div>
//                 <div
//                     style={{
//                         fontWeight: 300,
//                         fontSize: "6vw",
//                         fontWeight: "800",
//                         // textTransform: "uppercase",
//                         // letterSpacing: "0.12em",
//                         // textAlign: "center",
//                         // paddingBlock: "1vw",
//                         width: "36vw",
//                         fontFamily: "Inter",
//                         marginTop: "600vw",
//                         marginBottom: "600vw",
//                         lineHeight: "90%",
//                         textAlign: "right",
//                         width: "100%",
//                     }}
//                 >
//                     Success
//                 </div>
//             </div>

//             <div
//                 style={{
//                     fontWeight: 300,
//                     fontSize: "6vw",
//                     fontWeight: "800",
//                     // textTransform: "uppercase",
//                     // letterSpacing: "0.12em",
//                     // textAlign: "center",
//                     // paddingBlock: "1vw",
//                     width: "36vw",
//                     opacity:
//                         scrollPosition > 600 && scrollPosition < 2000
//                             ? "100%"
//                             : 0,
//                     transition: "opacity 0.3s ease-in-out",
//                     fontFamily: "Inter",
//                     marginLeft: "10vw",
//                     marginTop: "30vw",
//                     lineHeight: "90%",
//                 }}
//             >
//                 Task Under Way
//             </div>

//             {/* <div
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     height: "100%",
//                     width: "100%",
//                     background: "#000",
//                     opacity: firstLoad ? 0 : 1,
//                     transition: "opacity 2s ease-in-out",
//                 }}
//             ></div> */}
//         </div>

//         // </SmoothScroll>
//     );
// }

// const NumberedTitle = ({
//     number,
//     title,
//     text,
//     color,
//     scrollPosition,
//     scrollStart,
//     scrollEnd,
// }) => {
//     return (
//         <div
//             style={{
//                 paddingInline: "7vw",
//             }}
//         >
//             {/* <h1
//                 style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontWeight: "200",
//                     fontSize: "2vw",
//                 }}
//             >
//                 {number.toString().padStart(2, "0")}
//             </h1> */}
//             <h2
//                 style={{
//                     marginTop: "1vw",
//                     fontWeight: 600,
//                     fontSize: "6vw",
//                     // textTransform: "uppercase",
//                     letterSpacing: "0.12em",
//                     lineHeight: "90%",
//                     width: "24vw",
//                     // fontFamily: 'Korataki',
//                 }}
//             >
//                 {title}
//             </h2>
//             {/* <div
//                 style={{
//                     marginTop: '3vw',
//                     width: "6vw",
//                     height: "2px",
//                     background: color,
//                     borderRadius: '100vw'
//                 }}
//             /> */}
//             <p
//                 style={{
//                     marginTop: "20vw",
//                     color: "#fffb",
//                     fontSize: "1.1vw",
//                     letterSpacing: "0.12em",
//                     lineHeight: "195%",
//                     width: "32vw",
//                     fontFamily: "Inter",
//                     fontWeight: 300,
//                 }}
//             >
//                 {text}
//             </p>
//         </div>
//     );
//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 left: "7vw",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 opacity:
//                     scrollPosition >= scrollStart && scrollPosition <= scrollEnd
//                         ? "100%"
//                         : 0,
//                 transition: "opacity 0.3s ease-in-out",
//             }}
//         >
//             <h1
//                 style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontWeight: "200",
//                     fontSize: "2vw",
//                 }}
//             >
//                 {number.toString().padStart(2, "0")}
//             </h1>
//             <h2
//                 style={{
//                     marginTop: "1vw",
//                     fontFamily: "Inter, sans-serif",
//                     fontWeight: "800",
//                     fontSize: "2.8vw",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.12em",
//                     lineHeight: "111%",
//                     width: "24vw",
//                 }}
//             >
//                 {title}
//             </h2>
//             <div
//                 style={{
//                     marginTop: "3vw",
//                     width: "6vw",
//                     height: "2px",
//                     background: color,
//                     borderRadius: "100vw",
//                 }}
//             />
//             <p
//                 style={{
//                     marginTop: "2vw",
//                     fontFamily: "Inter, sans-serif",
//                     color: "#fffb",
//                     fontSize: "1vw",
//                     letterSpacing: "0.03em",
//                     lineHeight: "195%",
//                     width: "24vw",
//                 }}
//             >
//                 {text}
//             </p>
//         </div>
//     );
// };

import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
    const videoRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        // initialize scroll event
        window.onscroll = () => {


            const viewportWidth = window.innerWidth;
            const scrollFactor = viewportWidth / 1.44; 

            setScrollPosition(window.pageYOffset / scrollFactor);
            if (videoRef.current) {
                // calculate scroll percentage and update video time
                const scrollPos = window.pageYOffset;
                // const scrollPercent = scrollPos / 1000;
                const scrollPercent = scrollPos / scrollFactor;
                console.log(scrollPercent);

                // videoRef.current.currentTime = videoTimeMapping(scrollPercent);
                videoRef.current.currentTime = scrollPercent;
            }
        };

        return () => {
            // cleanup function to remove scroll event when component is unmounted
            window.onscroll = null;
        };
    }, []);

    return (
        <div
            style={{
                color: "white",
            }}
        >
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
                        mixBlendMode: "screen",
                    }}
                    src="/0000-0420 copy.mp4"
                    type="video/mp4"
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1vw 7vw",
                    backgroundColor: "transparent",
                    color: "white",
                    zIndex: 1000,
                }}
            >
                <div>
                    <h1
                        style={{
                            color: "#00FFFF",
                            fontWeight: 500,
                            lineHeight: "90%",
                            fontSize: "1.6vw",
                        }}
                    >
                        3<span style={{ color: "white" }}>LAWS</span>
                    </h1>
                    <p
                        style={{
                            color: "white",
                            letterSpacing: "1.35em",
                            fontSize: "0.55vw",
                        }}
                    >
                        ROBOTICS
                    </p>
                </div>
                <div
                    style={{
                        color: "#fff9",
                        display: "flex",
                        gap: "4vw",
                        fontSize: "0.7vw",
                        fontWeight: 300,
                    }}
                >
                    <div>Home</div>
                    <div>Tech</div>
                    <div>Contact</div>
                    <div>About</div>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "28vh",
                    paddingBottom: "14vh",
                    width: "100vw",
                    paddingInline: "7vw",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "1.6vw",
                            letterSpacing: "0.08em",
                            width: "24vw",
                        }}
                    >
                        Your
                    </div>
                    <h2
                        style={{
                            fontWeight: 700,
                            fontSize: "4.2vw",
                            textTransform: "uppercase",
                            letterSpacing: "0.09em",
                            width: "24vw",
                        }}
                    >
                        guardian
                    </h2>
                    <div
                        style={{
                            fontWeight: 300,
                            marginTop: "1vw",
                            fontSize: "1.6vw",
                            letterSpacing: "0.08em",
                        }}
                    >
                        in the World of Automation
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.7vw",
                            letterSpacing: "0.08em",
                            lineHeight: "220%",
                            opacity: 0.8,
                        }}
                    >
                        Ensure safety, save time, and reduce costs. <br />
                        Let 3Laws Robotics be the watchful eye for your
                        autonomous systems.
                    </div>
                    <div
                        style={{
                            marginTop: "1.5vw",
                            background: "#5855EB",
                            fontWeight: 300,
                            fontSize: "0.7vw",
                            letterSpacing: "0.12em",
                            textAlign: "center",
                            paddingBlock: "1vw",
                            width: "20vw",
                        }}
                    >
                        Get started today →
                    </div>
                </div>
            </div>




            <Section
                marginTop={"110vw"}
                title={"Operating"}
                text={
                    "In a dynamic world robots face potential hazards and unpredictable scenarios."
                }
            />
            <Section
                right={true}
                marginTop={"370vw"}
                title={"Disruption"}
                text={
                    "Accidents can result in costly downtime, equipment damage, and potential risk to human safety."
                }
            />
            <Section
                marginTop={"630vw"}
                title={"Introducing 3Laws"}
                text={
                    "Our robust safety system effortlessly navigates and mitigates the risks of the dynamic robotic environment."
                }
            />
            <Section
                right={true}
                marginTop={"1230vw"}
                title={"Certified"}
                text={
                    "3Laws takes the complexity out of safety. Achieve swift, hassle-free certification for your robots while smoothly avoiding obstacles."
                }
            />

            <div
                className="pulsing-element"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 3 && scrollPosition < 4.2
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#fa8",
                        marginLeft: "65vw",
                        marginTop: "20vw",
                        lineHeight: "90%",
                    }}
                >
                    Disabled
                </div>
            </div>

            <div
                className="pulsing-element"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 5.050 && scrollPosition < 7.000
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#fd8",
                        marginLeft: "16vw",
                        marginTop: "20vw",
                        lineHeight: "90%",
                    }}
                >
                    Repairing
                </div>
            </div>

            <div
                className="pulsing-element"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 7.080 && scrollPosition < 8.200
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#9f9",
                        marginLeft: "18vw",
                        marginTop: "24vw",
                        lineHeight: "90%",
                    }}
                >
                    ready
                </div>
            </div>

            <div
                className="pulsing-element"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 9.190 && scrollPosition < 10.800
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#6ff",
                        marginLeft: "48vw",
                        marginTop: "16vw",
                        lineHeight: "90%",
                    }}
                >
                    Installing
                </div>
            </div>

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 11.270 && scrollPosition < 12.200
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#C1FFFF",
                        marginLeft: "10vw",
                        marginTop: "20vw",
                        lineHeight: "90%",
                    }}
                >
                    Activated
                </div>
            </div>

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        marginTop: "5vw",
                        fontWeight: 300,
                        fontSize: "3.2vw",
                        width: "36vw",
                        opacity:
                            scrollPosition > 16.200 && scrollPosition < 17.000
                                ? "100%"
                                : 0,
                        transition: "opacity 0.3s ease-in-out",
                        fontFamily: "space mono",
                        color: "#C1FFFF",
                        marginLeft: "44vw",
                        marginTop: "20vw",
                        lineHeight: "90%",
                    }}
                >
                    Success
                </div>
            </div>

        </div>
    );
}

const Section = ({ title, text, right, marginTop }) => {
    return (
        <div
            style={{
                paddingInline: "7vw",
                position: "absolute",
                top: marginTop,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: right ? "flex-end" : "flex-start",
                height: '100vw',
            }}
        >
            <h2
                style={{
                    marginTop: "1vw",
                    fontWeight: 700,
                    fontSize: "2.7vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                    lineHeight: "100%",
                    width: "36vw",
                    // fontFamily: 'Korataki',
                }}
            >
                {title}
            </h2>
            <h2
                style={{
                    marginTop: "4vw",
                    fontWeight: 300,
                    fontSize: "0.8vw",
                    // textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    lineHeight: "200%",
                    width: "36vw",
                    opacity: 0.8,
                    // fontFamily: 'Korataki',
                }}
            >
                {text}
            </h2>
        </div>
    );
};

const NumberedTitle = ({
    number,
    title,
    text,
    color,
    scrollPosition,
    scrollStart,
    scrollEnd,
}) => {
    return (
        <div
            style={{
                paddingInline: "7vw",
            }}
        >
            {/* <h1
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "200",
                    fontSize: "2vw",
                }}
            >
                {number.toString().padStart(2, "0")}
            </h1> */}
            <h2
                style={{
                    marginTop: "1vw",
                    fontWeight: 600,
                    fontSize: "6vw",
                    // textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    lineHeight: "90%",
                    width: "24vw",
                    // fontFamily: 'Korataki',
                }}
            >
                {title}
            </h2>
            {/* <div
                style={{
                    marginTop: '3vw',
                    width: "6vw",
                    height: "2px",
                    background: color,
                    borderRadius: '100vw'
                }}
            /> */}
            <p
                style={{
                    marginTop: "20vw",
                    color: "#fffb",
                    fontSize: "1.1vw",
                    letterSpacing: "0.12em",
                    lineHeight: "195%",
                    width: "32vw",
                    fontFamily: "Inter",
                    fontWeight: 300,
                }}
            >
                {text}
            </p>
        </div>
    );
    return (
        <div
            style={{
                position: "fixed",
                left: "7vw",
                top: "50%",
                transform: "translateY(-50%)",
                opacity:
                    scrollPosition >= scrollStart && scrollPosition <= scrollEnd
                        ? "100%"
                        : 0,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            <h1
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "200",
                    fontSize: "2vw",
                }}
            >
                {number.toString().padStart(2, "0")}
            </h1>
            <h2
                style={{
                    marginTop: "1vw",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "800",
                    fontSize: "2.8vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    lineHeight: "111%",
                    width: "24vw",
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    marginTop: "3vw",
                    width: "6vw",
                    height: "2px",
                    background: color,
                    borderRadius: "100vw",
                }}
            />
            <p
                style={{
                    marginTop: "2vw",
                    fontFamily: "Inter, sans-serif",
                    color: "#fffb",
                    fontSize: "1vw",
                    letterSpacing: "0.03em",
                    lineHeight: "195%",
                    width: "24vw",
                }}
            >
                {text}
            </p>
        </div>
    );
};
