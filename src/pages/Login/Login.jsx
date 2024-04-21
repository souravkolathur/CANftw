import styles from "./Login.module.css";
import heroImg from "../../assets/loginImg.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supa";
import { toast } from "react-hot-toast";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    let { data: res, error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      throw error.message;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(data).some(
      (value) => value.trim() === ""
    );
    if (isAnyFieldEmpty) {
      toast.error("Please fill out all fields.");
      return;
    }

    toast.promise(handleSignIn(), {
      loading: "Logging in...",
      success: () => {
        navigate("/home");
        return <b>Logged in successfully</b>;
      },
      error: (error) => {
        return <b>{error}</b>;
      },
    });
  };
  useEffect(() => {
    (async () => {
      const res = await supabase.auth.getUser();
      if (res.data.user?.aud == "authenticated") {
        navigate("/home");
      }
    })();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>FINANCIAL QUEST</div>
          <img src={heroImg} />
        </div>
        <div className={styles.subText}>
          <div className={styles.line} />
          <div className={styles.loginText}>LOGIN</div>
          <div className={styles.line} />
        </div>
        <div className={styles.username}>
          <label className={styles.usernameh}>EMAIL</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className={styles.username}>
          <label className={styles.usernameh}>PASSWORD</label>
          <input
            type="password"
            className={styles.input}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className={styles.button}>
          <button className={styles.loginButton} onClick={handleSubmit}>
            Login
          </button>
          <a className={styles.or} href="/signup">
            sign up instead
          </a>
        </div>
        <div className={styles.forgotText}>oops i forgot my password</div>
      </div>
    </>
  );
}

export default Login;
