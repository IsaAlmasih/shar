import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div>Главная</div>
        <div>Контакты</div>
        <div>О нас</div>
      </div>
      <div className={styles.wrappe}></div>
      <div>
        Сайт в разработке. Если вы в поиске вашего запроса, свяжитесь по
        контактам ниже.
      </div>
      <div>
        {" "}
        <p>
          119071, Москва, ул Орджоникидзе, 10 Тел.: +7 (977) 424-00-79
          (WhatsApp) E-mail: info@sharov-tech.com Добро пожаловать на наш сайт!
        </p>
      </div>
      <div>Блок 5</div>
    </div>
  );
}
