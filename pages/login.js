import React from "react";
import Link from "next/link";
import styles from "@/styles/Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.logincontainer}>
        <div className={styles.card}>
          <h2>Connexion</h2>
          <div className={styles.content}>
            <div className={styles.labelTop_inputDown}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                pattern=".+@example.com"
                required
              />
            </div>
            <div className={styles.labelTop_inputDown}>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength="8"
                required
              />
            </div>
          </div>
            <button className={styles.button}>Se connecter</button>
        </div>
      </div>
    </>
  );
}

export default Login;
