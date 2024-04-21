import styles from "./Home.module.css";
import lessonImg from "../../assets/lessonImg.png";
import React, { useEffect } from "react";
import Navbar from "../../modules/navbar/Navbar";
import Roadmap from "../Roadmap/Roadmap";
import { useState } from "react";
import { supabase } from "../../utils/supa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [pageSelect, setPageSelect] = useState("home");

  const [username, setUsername] = useState("Reo");
  const navigate = useNavigate();

  useEffect(() => {
    // get user
    const getUser = async () => {
      const { data, error: err } = await supabase.auth.getUser();
      if (err) {
        console.log(err);
      } else {
        setUsername(data.user.email.split("@")[0]);
      }
    };

    getUser();
  }, []);
  return (
    <div className={styles.outerContainer}>
      {pageSelect == "home" && (
        <div className={styles.container}>
          <div className={styles.heroText}>FINANCIAL QUEST</div>
          <div className={styles.welcome}>
            WELCOME BACK{" "}
            <span className={styles.baseSpan}>{username.toUpperCase()}</span>{" "}
          </div>
          <div className={styles.graph}>
            <div className={styles.percent}>95%</div>
            <div className={styles.complete}>COMPLETE</div>
            <div className={styles.basetext}>
              <span className={styles.baseSpan}>8 </span>CHAPTERS OVER
            </div>
          </div>
          <div className={styles.statusBar} />
          <h3 className={styles.basetext}>
            <span className={styles.baseSpan}>3</span>/5 LESSONS DONE FOR <br />{" "}
            CHAPTER 9
          </h3>
          <div className={styles.nextLesson}>
            <div className={styles.less}> NEXT LESSON &rarr;</div>
            <img src={lessonImg} className={styles.lessonImg} alt="" />
          </div>
          <button
            className={styles.logout}
            onClick={() => {
              supabase.auth.signOut();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
      {pageSelect == "map" && <Roadmap />}
      {pageSelect == "streak" && <div>Streak</div>}
      {pageSelect == "profile" && <div>Profile</div>}

      <Navbar setPageSelect={setPageSelect} />
    </div>
  );
}

export default Home;
