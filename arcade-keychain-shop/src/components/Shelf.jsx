import { motion, useMotionValue, useTransform } from "framer-motion"

function Shelf({ products }) {

  const rotation = useMotionValue(0)

  const radius = 320
  const step = 360 / products.length

  const handleDrag = (e, info) => {
    rotation.set(rotation.get() + info.delta.x * 0.4)
  }

  return (

    <div className="ring">

      {/* Drag layer */}
      <motion.div
        className="dragLayer"
        drag="x"
        dragMomentum={false}
        onDrag={handleDrag}
      />

      {products.map((p, i) => {

        const angle = useTransform(rotation, r => i * step + r)

        const x = useTransform(angle, a =>
          Math.sin((a * Math.PI) / 180) * radius
        )

        const z = useTransform(angle, a =>
          Math.cos((a * Math.PI) / 180) * radius
        )

        const scale = useTransform(z, [-radius, 0, radius], [0.7, 0.85, 1])

        return (
          <motion.div
            key={i}
            className="item"
            style={{
              x,
              scale,
              rotateY: angle
            }}
          >
            <div className="emoji">{p.emoji}</div>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </motion.div>
        )

      })}

    </div>
  )
}

export default Shelf