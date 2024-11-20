import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function main4() {
  const eventTime = new Date('December 14, 2024').getTime();

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

  return (
    <div className="main-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.3 }
        }}
      >
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
      </motion.div>
    </div>
  );
}

export default main4;
