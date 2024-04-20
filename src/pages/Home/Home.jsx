import styles from './Home.module.css';
import React from 'react'

function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.heroText}>FINANCIAL QUEST</div>
      <div className={styles.welcome}>Welcome </div>
      <div className={styles.graph}>
        <h3 className={styles.percent}>100%</h3>
        <h2 className={styles.complete}>COMPLETE</h2>
        <h4 className={styles.basetext}><span className={styles.baseSpan} >8</span>CHAPTERS OVER</h4>
      </div>
      <div className={styles.statusB}/>
      <h3 className={styles.basetext}><span className={styles.baseSpan} >3</span>5 LESSONS DONE FOR CHAPTER 9</h3>
      <div className={styles.nextLesson}>
        <div className={styles.welcome}>NEXT LESSON &rarr;</div>
        <img src="" className={styles.lessonImg} alt="" />
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