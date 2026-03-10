import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Shelf({ products, selected, setIndex }) {

  const itemWidth = 190;       // 170 card + 20 margin
  const viewportWidth = 600;
  const total = products.length;

  const centerOffset = viewportWidth / 2 - itemWidth / 2;

  const x = useMotionValue(centerOffset - selected * itemWidth);

  useEffect(() => {
    animate(x, centerOffset - selected * itemWidth, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  }, [selected]);

  const handleDragEnd = () => {

    const current = x.get();

    let newIndex = Math.round((centerOffset - current) / itemWidth);

    newIndex = (newIndex + total) % total;

    setIndex(newIndex);

    animate(x, centerOffset - newIndex * itemWidth, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });

  };

  return (
    <div className="viewport">

      <motion.div
        className="reel"
        drag="x"
        style={{ x }}
        dragConstraints={false}
        onDragEnd={handleDragEnd}
      >

        {products.map((p, i) => {

          const distance = useTransform(
            x,
            v => (centerOffset - v) / itemWidth - i
          );

          const scale = useTransform(distance, [-1, 0, 1], [0.8, 1.2, 0.8]);
          const opacity = useTransform(distance, [-2, 0, 2], [0.3, 1, 0.3]);
          const rotateY = useTransform(distance, [-1, 0, 1], [40, 0, -40]);

          return (
            <motion.div
              key={i}
              className="item"
              style={{
                scale,
                opacity,
                rotateY
              }}
            >
              <div className="emoji">{p.emoji}</div>
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </motion.div>
          );

        })}

      </motion.div>

    </div>
  );
}

export default Shelf;