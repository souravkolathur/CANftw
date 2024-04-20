import styles from "./SignUp.module.css";
import heroImg from "../../assets/signupImg.svg";
import { useState } from "react";
import { toast } from "react-hot-toast";

function SignUp() {
  const handleSignUp = () => {
    toast.success("Sign Up Successful");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroText}>FINANCIAL QUEST</div>
        <img src={heroImg} />
        <div className={styles.subText}>
          <div className={styles.line} />
          <div className={styles.loginText}>SIGN UP</div>
          <div className={styles.line} />
        </div>
        <div className={styles.username}>
          <label className="Username">USERNAME</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.username}>
          <label className="Username">PASSWORD</label>
          <input
            type="text"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.username}>
          <label className="Username">CONFIRM PASSWORD</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.button}>
          <button className={styles.loginButton} onClick={handleSignUp}>
            Sign Up
          </button>
          <h3 className={styles.or}>Login instead</h3>
        </div>
        <div className={styles.forgotText}></div>
      </div>
    </>
  );
}

export default SignUp;
