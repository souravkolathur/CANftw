import React from 'react'
import styles from './Learning.module.css';

function Learning() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={statusbar} />
        <div className={styles.backarrow}><img src="" alt="" /></div>
      </div>
      <div className={styles.head} >
        <div className={styles.heading}>CH <span className={styles.headTitle}>1</span>|LS <span className={styles.headTitle} >3</span></div>
        <div className={styles.subhead}>EXPENSE MANAGEMENT</div>
      </div>
    </div>
  )
}

export default Learning