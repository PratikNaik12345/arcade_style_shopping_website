import ProductArt from './ProductArt'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, cardStyle, onClick }) {
  return (
    <div
      className={styles.card}
      style={{
        background: `linear-gradient(160deg, ${product.bg[0]}, ${product.bg[1]})`,
        ...cardStyle,
      }}
      onClick={onClick}
    >
      <div className={styles.art}>
        <ProductArt name={product.name} accent={product.accent} />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.sub}>{product.sub}</div>
        <div className={styles.price} style={{ color: product.accent }}>
          {product.price}
        </div>
      </div>
    </div>
  )
}
