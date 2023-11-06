// import  { useEffect } from 'react';
// import './welcome.css';

// const WelcomePage = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       document.querySelector('.fly-in-text').classList.remove('hidden');
//     }, 500);
//   }, []);

//   return (
//     <>
//       <ul className="fly-in-text hidden">
//         <li className='colors'>W</li>
//         <li className='colors'>E</li>
//         <li className='colors'>L</li>
//         <li className='colors'>C</li>
//         <li className='colors'>O</li>
//         <li className='colors'>M</li>
//         <li className='colors'>E</li>
//       </ul>
//     </>
//   );
// };

// export default WelcomePage;


import { useEffect } from 'react';
import './welcome.css';

const WelcomePage = () => {
  useEffect(() => {
    const audioElement = new Audio('../../public/music_second.mp3');

    const playSound = () => {
      audioElement.play();
    };

    playSound();
    const timeout = setTimeout(() => {
      document.querySelector('.fly-in-text').classList.remove('hidden');
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ul className="fly-in-text hidden">
        <li className='colors'>W</li>
        <li className='colors'>E</li>
        <li className='colors'>L</li>
        <li className='colors'>C</li>
        <li className='colors'>O</li>
        <li className='colors'>M</li>
        <li className='colors'>E</li>
      </ul>
    </>
  );
};

export default WelcomePage;