// import Link from 'next/link'
// import React from 'react'
// import {motion} from "framer-motion"

// const MotionLink = motion(Link);

// const Logo = () => {
//   return (
//     <div className='flex items-center justify-center mt-2 '>
//         <MotionLink href="/" 
//         className='w-16 h-16 bg-dark text-light flex justify-center items-center
//         rounded-full text-2xl font-bold
//         '
        
//         whileHover={{
//             backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
//             transition:{duration:1 , repeat: Infinity},
//         }}
//         >NG</MotionLink>

//         </div>
//   )
// }

// export default Logo








// import Link from "next/link";
// import React from "react";
// import { motion } from 'framer-motion';

// const MotionLink = motion(Link);

// const Logo = () => {
//   return (
//     <div className="flex items-center justify-center  mt-2">
//       <MotionLink
//         href="/"
//         className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold p-2 border border-solid border-transparent dark:border-light" 
       
//           animate={{
//             scale: [1, 1, 1, .5, 1],
//             rotate: [0, 0, 180, 180, 0],
//             borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//             times: [0, 0.2, 0.5, 0.8, 1],
//             repeat: Infinity,
//             repeatDelay: 1
//           }}
//           whileHover={{
//                         backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
//                         transition:{duration:1 , repeat: Infinity},
//                     }}
       
//       >
//         NG
//       </MotionLink>
//     </div>
//   );
// };

// export default Logo;






// import Link from "next/link";
// import React from "react";
// import { motion } from 'framer-motion';

// const MotionLink = motion(Link);

// const Logo = () => {
//   return (
//     <div className="flex items-center justify-center mt-2">
//       <MotionLink
//         href="/"
//         className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold p-2 border border-solid border-transparent dark:border-light" 
       
//         animate={{
//           scale: [1, 0.5, 1], // Circular to star and back to circular
//           rotate: [0, 1440, 0], // 1440 degrees for one full rotation
//           borderRadius: ["50%", "0%", "50%"], // Circular to no radius and back to circular
//         }}
//         transition={{
//           duration: 4, // Total duration of the animation
//           ease: "easeInOut",
//           times: [0, 0.5, 1], // Times for each step in the animation
//           repeat: Infinity,
//           repeatDelay: 1
//         }}
//         whileHover={{
//                     backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
//                     transition:{duration:1 , repeat: Infinity},
//                 }}

       
//       >
//         NG
//       </MotionLink>
//     </div>
//   );
// };

// export default Logo;




import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 z-40 bg-dark text-light flex items-center justify-center rounded-full text-2xl 
        font-bold p-2 border border-solid border-transparent dark:border-light dark:border-[2px] " 
       
        animate={{
          scale: [1, 0.5, 1], // Circular to star and back to circular
          rotate: [0, 1440, 0], // 1440 degrees for one full rotation
          borderRadius: ["50%", "0%", "50%"], // Circular to no radius and back to circular
        }}
        transition={{
          duration: 4, // Total duration of the animation
          ease: "easeInOut",
          times: [0, 0.5, 1], // Times for each step in the animation
          repeat: Infinity,
          repeatDelay: 1
        }}
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity },
        }}
       
      >
        NG
      </MotionLink>
    </div>
  );
};

export default Logo;
