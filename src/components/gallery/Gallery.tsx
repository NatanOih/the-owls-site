import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];
  const [isDragging, setIsDragging] = useState(false);
  const [mouseStart, setMouseStart] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const maxDelta = window.innerWidth / 2; // Adjust as needed

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setMouseStart(clientX);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) {
      const mouseEnd = "touches" in e ? e.touches[0].clientX : e.clientX;
      let newPercentage =
        Math.floor(((mouseEnd - mouseStart) / maxDelta) * -100) / 2;
      newPercentage += prevPercentage;
      newPercentage = Math.max(Math.min(newPercentage, 0), -100); // Ensure between 0% and -100%
      setPercentage(newPercentage);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPrevPercentage(percentage); // Save the final position after drag ends
  };

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      className="h-[40vh] w-full px-4 cursor-grab active:cursor-grabbing relative overflow-hidden "
    >
      <motion.div
        animate={{
          x: `${percentage}%`,

          y: "-50%",
        }}
        transition={{ duration: 0.1 }}
        id="#image-track"
        className={`flex w-fit gap-[4vmin] select-none pointer-events-none  absolute left-[50%] top-[50%]`}
      >
        {[...images, ...images, ...images].map((image, index) => {
          return (
            <div key={image + index} className="w-[40rem]">
              <img
                style={{ userSelect: "none" }}
                className="w-[40rem] select-none pointer-events-none  h-[56vmin] object-cover object-center"
                draggable="false"
                alt={`Image ${index + 1}`}
                src={image}
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
