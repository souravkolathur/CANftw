import styles from './Home.module.css';
import lessonImg from '../../assets/lessonImg.png';
import React from 'react'

function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.heroText}>FINANCIAL QUEST</div>
      <div className={styles.welcome}>WELCOME BACK <span className={styles.baseSpan} >REO</span> </div>
      <div className={styles.graph}>
        <div className={styles.percent}>95%</div>
        <div className={styles.complete}>COMPLETE</div>
        <div className={styles.basetext}><span className={styles.baseSpan} >8 </span>CHAPTERS OVER</div>
      </div>
      <div className={styles.statusBar}/>
      <h3 className={styles.basetext}><span className={styles.baseSpan} >3</span>/5 LESSONS DONE FOR <br /> CHAPTER 9</h3>
      <div className={styles.nextLesson}>
        <div className={styles.less}> NEXT LESSON &rarr;</div>
        <img src={lessonImg} className={styles.lessonImg} alt="" />
      </div>
      <div className={styles.navBar}>
        <div className={styles.navItem}>HOME</div>
        <div className={styles.navItem}>STREAK</div>
        <div className={styles.navItem}>MAP</div>
        <div className={styles.navItem}>PROFILE</div>
      </div>
    </div>
  )
}

export default Home