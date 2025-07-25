import { useEffect, useState } from 'react';
import './cursor.css'
import { motion } from "motion/react"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        ease: "easeOut",

      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    />
  );
};

export default Cursor;
