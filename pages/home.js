import styles from "@/styles/Home.module.css";
import Navigation from "@/components/nav";
import Footer from "@/components/foot";
import Main_module from "@/components/part_module";

function home() {
  return (
    <>
      <div className={styles.app_container}>
        <Navigation/>
        <Main_module/>
        <Footer/>
      </div>
    </>
  );
}

export default home;