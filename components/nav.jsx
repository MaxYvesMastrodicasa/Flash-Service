import style from "@/styles/Nav.module.css";

function Navigation() {
  return (
    <>
      <div className={style.main_navigation}>
        <div className={style.content_navigation}></div>
        <div className={style.title_navigation}>
            <a href="/"><h1>Flash Service</h1></a>
        </div>
        <div className={style.content_navigation}></div>
      </div>
    </>
  );
}

export default Navigation;
