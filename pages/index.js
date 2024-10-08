import React, { useState } from "react";
import styles from "@/styles/Main.module.css";
import Login from "./login";
import Signup from "./signup";
import Footer from "@/components/foot";
import Navigation from "@/components/nav";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <header>
        <Navigation />
      </header>
      <main>
        {isLogin ? <Login /> : <Signup />}
        <p className={styles.Sign_IU}>
          {isLogin ? "Pas encore inscrit ? " : "Déjà inscrit ? "}
          <a className={styles.no_underline} onClick={toggleForm}>
            {isLogin ? "S'inscrire" : "Se connecter"}
          </a>
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
