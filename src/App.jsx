import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Homepage from './page/Homepage'
import Main1 from './page/main1'
import Main2 from './page/main2'
import Main3 from './page/main3'
import Main4 from './page/main4'
// import lagu from './assets/song/wedding song.mp3';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(prevState => !prevState);
  };

  // const audioRef = useRef(null);

  // Efek samping untuk memutar lagu ketika kelas active ditambahkan
  // useEffect(() => {
  //   if (isActive) {
  //     audioRef.current.play(); 
  //   } else {
  //     audioRef.current.pause(); 
  //   }
  // }, [isActive]);

  return (
    <>
        <div className={`homepage ${isActive ? 'active' : ''}`}>
          <Homepage toggleClass={toggleClass} />
        </div>

        <div className="main">
          <Main1 />
          <Main2 />
          <Main3 />
          <Main4 />
        </div>
    </>
  );
}

export default App;
