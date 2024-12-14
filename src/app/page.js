import styles from "./styles.module.css";

import logo from "../assets/sharov.png"

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {" "}
        <img src={logo.src} />
        Дешевле и быстрей наносить клей нашими машинами.
      </div>
      <div>
        <div>
          <a
            href={
              "https://www.google.com/maps/search/119071,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%83%D0%BB%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5,%2010,"
            }
          >
            119071, Москва, ул Орджоникидзе, 10
          </a>
        </div>
        <div>
          Тел: <a href={"tel:+79774240079"}>+7(977)424-00-79(WhatsApp)</a>
        </div>
        <div>
          email:<a href={"mailto:info@sharov-tech.com"}>info@sharov-tech.com</a>
        </div>
      </div>
    </div>
  );
}
