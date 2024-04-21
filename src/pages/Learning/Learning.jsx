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
      Investment refers to the allocation of resources, typically money, with the expectation of generating an income or profit. It can involve purchasing an asset, lending money, contributing time, or expending effort, all in the hope of reaping future benefits. Understanding investment is crucial for anyone looking to grow their wealth and achieve financial stability.
      </p>
      <p className={styles.lessonPara} >
      There are various types of investments, each with its own potential risks and rewards. These include stocks, bonds, mutual funds, real estate, and more. Stocks represent ownership in a company and can provide high returns, but they also come with higher risk. Bonds are loans made to entities like governments or corporations, offering lower returns but also lower risk. Mutual funds are collections of stocks, bonds, or other assets, providing diversification.
      </p>
      <p className={styles.lessonPara} >
      Investment strategies vary widely based on an individual's risk tolerance, time horizon, and financial goals. Some investors may prefer a conservative approach, focusing on steady, long-term growth with minimal risk. Others may adopt a more aggressive strategy, seeking higher returns through riskier investments. Understanding different investment strategies can help individuals make informed decisions that align with their financial goals.
      </p>
      <p className={styles.lessonPara} >
      Investment plays a crucial role in individual financial planning and the broader economy. For individuals, investing can provide income, increase wealth, and help achieve financial goals like retirement or buying a home. At the macroeconomic level, investment drives economic growth by providing capital for businesses to expand and innovate.
      </p>
      <div className={styles.attribution}>Content derived from the Wikipedia article "Investment" by Wikipedia contributors, used under CC BY-SA. [https://en.wikipedia.org/wiki/Investment]
      </div>
      <div className={styles.botton}>
        <img src={minigamebutton} className={styles.playgame} />
      </div>
    </div>
      
  )
}

export default Learning