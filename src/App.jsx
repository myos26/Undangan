import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Main1 from './page/main1';
import Main2 from './page/main2';
import Main3 from './page/main3';
import Main4 from './page/main4';
import Footer from './page/footer';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Untuk kontrol fade-out spinner
  const [audio] = useState(new Audio('/path/to/your/audio-file.mp3')); // Ganti dengan path audio yang sesuai

  const toggleClass = () => {
    setIsActive(prevState => !prevState);
    // Memulai audio ketika homepage diklik
    if (audio.paused) {
      audio.play(); // Memainkan audio
    } else {
      audio.pause(); // Jika sudah diputar, berhenti
    }
  };

  useEffect(() => {
    // Simulasi pemuatan data (misalnya API call)
    setTimeout(() => {
      // Trigger fade-out effect setelah selesai loading
      setFadeOut(true);
      // Setelah fade-out selesai, set loading ke false
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Waktu fade-out (500ms) sebelum mengubah loading state
    }, 3000); // Simulasi loading selama 3 detik
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`spinner ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className={`homepage ${isActive ? 'active' : ''}`}>
            <Homepage toggleClass={toggleClass} />
          </div>

          {/* Tampilan halaman Main hanya ketika homepage diklik */}
          {isActive && (
            <div className="main">
              <Main1 />
              <Main2 />
              <Main3 />
              <Main4 />
            </div>
          )}

          <div className="footer">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
