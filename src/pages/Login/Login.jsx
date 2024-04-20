import styles from "./Login.module.css";
import heroImg from "../../assets/loginImg.svg";
function Login() {
  const handleLogin = async () => {
    let { data: res, error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      throw error.message;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroText}>FINANCIAL QUEST</div>
        <img src={heroImg} />
        <div className={styles.subText}>
          <div className={styles.line} />
          <div className={styles.loginText}>LOGIN</div>
          <div className={styles.line} />
        </div>
        <div className={styles.username}>
          <label className={styles.usernameh}>USERNAME</label>
          <input type="text"  className={styles.input} />
        </div>
        <div className={styles.username}>
          <label className={styles.usernameh}>PASSWORD</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.button}>
          <button className={styles.loginButton} OnClick={handleLogin}>
            Login
          </button>
          <a className={styles.or}>sign up instead</a>
        </div>
        <div className={styles.forgotText}>oops i forgot my password</div>
      </div>
    </>
  );
}

export default Login;
