import { useState } from 'react'
import { products } from '../data/products'
import { useCarousel } from '../hooks/useCarousel'
import { getCardTransform } from '../utils/getCardTransform'
import ProductCard from './ProductCard'
import styles from './ArcadeCarousel.module.css'

export default function ArcadeCarousel() {
  const [added, setAdded] = useState(false)
  const {
    current,
    animate,
    go,
    jumpTo,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useCarousel(products.length)

  const active = products[current]

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className={styles.root}>
      <div className={styles.scanlines} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.headerLabel}>Select Your Item</p>
        <h1 className={styles.headerTitle}>ARCADE STORE</h1>
      </header>

      {/* Stage */}
      <div className={styles.stageWrapper}>
        <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={() => go(-1)}>
          ←
        </button>
        <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={() => go(1)}>
          →
        </button>

        <div
          className={styles.stage}
          style={{ touchAction: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
         <div className={styles.track} style={{ transformStyle: 'preserve-3d' }}>
  {products.map((product, i) => {
    const cardStyle = getCardTransform(i, current, 7, animate)
    const isActive = i === current
    return (
      <ProductCard
        key={`${product.name}-${i}`}
        product={product}
        cardStyle={{
          ...cardStyle,
          boxShadow: isActive
            ? `0 0 60px ${product.accent}55, 0 20px 40px rgba(0,0,0,0.7)`
            : '0 10px 30px rgba(0,0,0,0.5)',
        }}
        onClick={() => jumpTo(i)}
      />
    )
  })}
</div>
          <div className={styles.floorLine} />
        </div>
      </div>

      {/* Info Panel */}
      <div className={styles.infoPanel}>
        <h2 className={styles.infoName}>{active.name}</h2>
        <p className={styles.infoDesc}>{active.desc}</p>

        <button
          className={styles.ctaBtn}
          style={{ background: added ? '#00ff9a' : '#00ffc8' }}
          onClick={handleAddToCart}
        >
          {added ? 'Added!' : 'Add to Cart'}
        </button>

        <div className={styles.dots}>
          {products.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => jumpTo(i)}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

