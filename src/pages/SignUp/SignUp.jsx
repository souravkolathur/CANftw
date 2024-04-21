import styles from "./SignUp.module.css";
import heroImg from "../../assets/signupImg.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { supabase } from "../../utils/supa";

function SignUp() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    let { data: res, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    if (error) {
      throw error.message;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(data).some(
      (value) => value.trim() === ""
    );
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (isAnyFieldEmpty) {
      toast.error("Please fill out all fields.");
      return;
    }

    toast.promise(handleSignUp(), {
      loading: "Signing up...",
      success: () => {
        navigate("/login");
        return "Signed up successfully"; // Return a string instead of JSX
      },
      error: (error) => {
        return error.message; // Return the error message directly
      },
    });
  };

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
          <label className={styles.usernameh}>Email</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className={styles.username}>
          <label className="Username">PASSWORD</label>
          <input
            type="password"
            className={styles.input}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className={styles.username}>
          <label className="password">CONFIRM PASSWORD</label>
          <input
            type="password"
            className={styles.input}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className={styles.button}>
          <button className={styles.loginButton} onClick={handleSubmit}>
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
