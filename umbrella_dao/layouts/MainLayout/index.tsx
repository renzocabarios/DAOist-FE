import React from "react";
import style from "./style.module.css";

function MainLayout({ children }: any) {
  return (
    <main>
      <div className="z-10">
        <div className={style.navbar}></div>
        <div className={style.sidenav}></div>
      </div>
      <div className={style.container}>
        <div className={style.sidenav_divider}></div>
        <div className={style.content_container}>
          <div className={style.navbar_divider}></div>
          <div className={style.content}>{children}</div>
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
