import { STACK_MARQUEE } from '../../data'
import styles from './Marquee.module.css'

export default function Marquee() {
  // Duplicate items so the seamless loop works
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE]

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <div className={styles.item} key={i}>
            {item}
            <span className={styles.sep}>◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
