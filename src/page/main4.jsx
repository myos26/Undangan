import { useState, useEffect } from "react";

function main4() {
  const eventTime = new Date('November 25, 2024').getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = (eventTime - now) / 1000;

      if (distance > 0) {
        setDays(Math.floor(distance / (60 * 60 * 24)));
        setHours(Math.floor((distance % (60 * 60 * 24)) / (60 * 60)));
        setMinutes(Math.floor((distance % (60 * 60)) / 60));
        setSeconds(Math.floor(distance % 60));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventTime]);

    // Lokasi yang akan dibuka di Google Maps (gunakan koordinat atau alamat)
    const location = "https://www.google.com/maps?q=-8.44536018371582,114.104682922363";  // Contoh: Koordinat San Francisco

    const openInMaps = () => {
      // Membuka Google Maps di aplikasi (Android/iOS) atau browser
      window.open(location, "_blank");
    };

  return (
    <div className="main-4">
        <div className="detail-undangan">
            <h2>AKAD NIKAH</h2>
            <p>Senin, 25 November 2024</p>
            <p>09.00 WIB</p>
            <p>Dsn. Blokagung Rt 02/Rw 05<br />Desa Karangdoro Kec. Tegalsari</p>
        </div>
        <div className="lokasi">
            <button onClick={openInMaps}>View Maps</button>
        </div>
        <div className="timer">
            <h2>Beberapa Langkah Menuju Selamanya</h2>
          <div className="cuntdown">
            <div>
                <span>{days}</span>
                <p>Hari</p>
            </div>
            <div>
                <span>{hours}</span>
                <p>Jam</p>
            </div>
            <div>
                <span>{minutes}</span>
                <p>Menit</p>
            </div>
            <div>
                <span>{seconds}</span>
                <p>Detik</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default main4;
