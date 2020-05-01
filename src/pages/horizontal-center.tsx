import * as React from 'react'
import styles from './horizontal-center.module.scss'

const HCenterPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles['inline-block']}`}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
      <div className={`${styles.container} ${styles['float']}`}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
      <div className={`${styles.container} ${styles['grid']}`}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
      <div className={`${styles.container} ${styles['flex']}`}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
    </main>
  )
}

export default HCenterPage
