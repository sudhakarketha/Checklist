// import React from 'react'

// const Setting = () => {
//     return (
//         <div>
//             <div className='setting'>
//                 <h2>Finish setting up your page</h2>
//                 <p > complete actions to unlock new features along the way. On average, completed pages get 30% more traffic.</p>
//             </div>
//             <div className='loading'>
//                 <div class="frame-child"></div>
//                 <div class="frame-item"></div>
//                 <div class="frame-child"></div>
//                 <div class="frame-item"></div>
//                 <div class="frame-child"></div>
//                 <div class="frame-child"></div>
//                 <div class="frame-child3"></div>
//                 <div class="frame-child4"></div>
//                 <div class="frame-child3"></div>
//                 <div class="frame-child4"></div>
//             </div>
//             <div className='remaining'>
//                 <i className='remaining-count'>4 remaining to complete</i>
//                 <div className='arrows'>
//                 <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
//                 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Setting

import React, { useState } from 'react';
// import './Setting.css'; // Import your CSS file here

const Setting = () => {
    const [progress, setProgress] = useState(0);

    const handleLeftArrowClick = () => {
        // Decrease the progress by 1, but limit it to a minimum of 0
        setProgress((prevProgress) => Math.max(prevProgress - 1, 0));
    };

    const handleRightArrowClick = () => {
        // Increase the progress by 1, but limit it to a maximum of 9
        setProgress((prevProgress) => Math.min(prevProgress + 1, 9));
    };

    return (
        <div>
            <div className='setting'>
                <h2>Finish setting up your page</h2>
                <p>Complete actions to unlock new features along the way. On average, completed pages get 30% more traffic.</p>
            </div>
            <div className='loading'>
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className={`frame-child${index + 1} ${index < progress ? 'filled' : ''}`}
                    ></div>
                ))}
            </div>
            <div className='remaining'>
                <i className='remaining-count'>{`${10 - progress} remaining to complete`}</i>
                <div className='arrows'>
                    <i className="fa fa-long-arrow-left" aria-hidden="true" onClick={handleLeftArrowClick}></i>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" onClick={handleRightArrowClick}></i>
                </div>
            </div>
        </div>
    );
};

export default Setting;


// import React, { useState } from 'react';

// import './Main.css'

// const Setting = () => {
//     const [progress, setProgress] = useState(0); // Initialize progress to 0

//     const handleRightArrowClick = () => {
//         // Increase the progress by 1, but limit it to a maximum of 4
//         setProgress((prevProgress) => Math.min(prevProgress + 1, 4));
//     };

//     return (
//         <div>
//             <div className='setting'>
//                 <h2>Finish setting up your page</h2>
//                 <p>Complete actions to unlock new features along the way. On average, completed pages get 30% more traffic.</p>
//             </div>
//             {/* <div className='loading'>
//                 {[...Array(4)].map((_, index) => (
//                     <div
//                         key={index}
//                         className={`frame-${index + 1} ${index < progress ? 'filled' : ''}`}
//                     ></div>
//                 ))}
//             </div> */}
//              <div className='loading'>
//         <div className={`frame-child ${progress >= 1 ? 'filled' : ''}`}></div>
//         <div className={`frame-item ${progress >= 2 ? 'filled' : ''}`}></div>
//         <div className={`frame-child ${progress >= 3 ? 'filled' : ''}`}></div>
//         <div className={`frame-item ${progress >= 4 ? 'filled' : ''}`}></div>
//       </div>
//             <div className='remaining'>
//                 <i className='remaining-count'>{`${4 - progress} remaining to complete`}</i>
//                 <div className='arrows'>
//                     <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
//                     <i className="fa fa-long-arrow-right" aria-hidden="true" onClick={handleRightArrowClick}></i>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Setting;
