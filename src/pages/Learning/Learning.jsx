import React from 'react'
import styles from './Learning.module.css';
import arrowlesson from '../../assets/lessonarrow.png';
import playbutton from '../../assets/playbutton.png';
import hoverImage from '../../assets/playbuttonhover.png';
import minigamebutton from '../../assets/minigamebutton.png';
function Learning() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={arrowlesson} className={styles.backarrow} alt="" />
        <div className={styles.statusBar} />
      </div>
      <div className={styles.head} >
        <div className={styles.heading}>CH <span className={styles.headTitle}>1 </span>| LS <span className={styles.headTitle} >3</span></div>
        <div className={styles.subhead}>EXPENSE MANAGEMENT</div>
      </div>
      <div className={styles.lessonvideo}>
        <img src={playbutton} className={`${styles.ytbutton} ${styles.original}`} alt="" />
        <img src={hoverImage} className={`${styles.ytbutton} ${styles.hover}`} alt="" />
      </div>
      <p className={styles.lessonPara} >
      Expense management is a crucial aspect of maintaining financial  stability. By effectively managing your expenses, you can ensure that  your income is allocated wisely, allowing you to achieve your financial  goals more efficiently.
      </p>
      <p className={styles.lessonPara} >
      Expense management is a crucial aspect of maintaining financial  stability. By effectively managing your expenses, you can ensure that  your income is allocated wisely, allowing you to achieve your financial  goals more efficiently.
      </p>
      <p className={styles.lessonPara} >
      Expense management is a crucial aspect of maintaining financial  stability. By effectively managing your expenses, you can ensure that  your income is allocated wisely, allowing you to achieve your financial  goals more efficiently.
      </p>

      <div className={styles.botton}>
        <img src={minigamebutton} className={styles.playgame} />
      </div>
    </div>
      
  )
}

export default Learning