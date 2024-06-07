import styles from "@/styles/Home.module.css";
import Navigation from "@/components/nav";
import Footer from "@/components/foot";
import Main_module from "@/components/part_module";

export default function Home() {
  return (
    <>
        <div className={styles.main}>
          <Navigation/>
          <Main_module/>
          <Footer/>
        </div>
    </>
  );
}
