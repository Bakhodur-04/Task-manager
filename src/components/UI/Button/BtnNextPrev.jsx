import React from 'react'
import styles from './BtnNextPrev.module.css'

const BtnNextPrev = () => {
  return (
    <div className={styles.btnGroup}>
        <button id='btnPrev' className={`${styles.btn} ${styles.prev}`}>&#60;</button>
        <button id='btnNext' className={`${styles.btn} ${styles.next}`}>&#62;</button>
    </div>
  )
}

export default BtnNextPrev