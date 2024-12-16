import React from "react";

import styles from "./styles.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>О нас</h1>
      <div className={styles.flex}>
        <img
          src="https://sharovtech.wordpress.com/wp-content/uploads/2021/06/d0be-d0bdd0b0d181.png"
          alt=""
        />
        <div className={styles.text}>
          <h2>Добро пожаловать на наш сайт.</h2>
          <p>
            SHAROV technologies — молодая, динамично развивающаяся компания,
            занимающаяся разработкой и производством оборудования. Основная наша
            продукция — <strong>КЛЕЕМАЗАТЕЛЬНЫЕ МАШИНЫ</strong>. За короткий
            срок мы разработали и запустили в производство машину не имеющую
            аналогов. Она компактна, надежна, технологична. И еще один плюс
            нашей машины МКМ40, ее доступность.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
