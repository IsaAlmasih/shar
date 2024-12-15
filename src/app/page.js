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
      <div className={styles.section}>
        <div className={styles.contacts}>
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
            email:
            <a href={"mailto:info@sharov-tech.com"}>info@sharov-tech.com</a>
          </div>
        </div>
        <div className={styles.about}>
          <h2>Добро пожаловать на наш сайт!</h2>
          <p>
            Мы производственная компания SHAROV technologies. Занимаемся
            разработкой и изготовлением оборудования. Основная наша продукция:
            КЛЕЕМАЗАТЕЛЬНЫЕ МАШИНЫ. Наши машины работают от Сахалина до
            Калининграда. В том числе и за рубежом: Казахстан, Киргизия,
            Таджикистан, Белоруссия, Украина, Испания.
          </p>
          <ul>
            <li>
              Мы разрабатываем и постоянно совершенствуем наше оборудование.
            </li>
            <li>
              Используем самые современные материалы и технологии при
              изготовлении продукции.
            </li>
            <li>
              Осуществляем техническую и консультационную поддержку наших
              клиентов.
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <h2>Клеемазательные машины: МКМ39 и МКМ59</h2>
          <p>
            Клеемазательная машина МКМ39 осуществляет нанесение клея на
            материалы типа бумага, картон, бумвинил, искусственная и натуральная
            кожа, и др. материалы. В работе применяется «холодный» клей типа
            ПВА. Ширина вала 39 см. Машина с электроприводом имеет регулировку
            скорости вращения вала и толщины нанесения клея. Детали машины
            практически полностью выполнены из нержавеющей стали. Машина
            разработана нашей компанией с использованием оригинальных
            инновационных технических решений, имеет простую и очень надежную
            конструкцию. Конструкция МКМ59 аналогична МКМ39, с той лишь
            разницей, что увеличена ширина нанесения клея.
          </p>
        </div>
        <div className={styles.aboutTex}>
          <h3>Технические характеристики:</h3>
          <ul>
            <li>Рабочая ширина: МКМ39 – 390 – 590 мм.</li>
            <li>Расположение клеевого аппарата – нижнее</li>
            <li>Загрузка/приёмка листов – вручную</li>
            <li>Электропитание – 220В</li>
            <li>Габариты – 580х250х130</li>
            <li>Вес: МКМ39– 10 кг., МКМ59 – 12 кг.</li>
            <li>Цена: МКМ39 — 57000 руб., МКМ59 — 65000 руб.</li>
          </ul>
        </div>
        <div className={styles.video}>
          <h2>Видео инструкция.</h2>
          <iframe
            title="28 декабря 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/Qx5B9isjumQ?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen=""
          ></iframe>
          <iframe
            title="9 октября 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/cPrfIAsJZFw?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen=""
          ></iframe>
          <iframe
            title="Клеемазательная машина made in RUSSIA"
            width="750"
            height="422"
            src="https://www.youtube.com/embed/VxbTsAnSNwk?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen="">
            </iframe>
        </div>
        <div className={styles.video}>
          <h2>Машина в работе</h2>
          <iframe
            title="Клеемазательная машина made in RUSSIA II"
            width="750"
            height="422"
            src="https://www.youtube.com/embed/tRx2R0ubAvA?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen=""
          ></iframe>
            <div className={styles.video}>
              <h2>Загиб клапанов</h2>
              <iframe
                title="Изготовление обложек для твердого переплета"
                width="750"
                height="422"
                src="https://www.youtube.com/embed/wQYk2HmUy2M?feature=oembed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
              ></iframe>
              <iframe
                title="Клеемазкательная машина и загиб клапанов."
                width="750"
                height="422"
                src="https://www.youtube.com/embed/aaf1NMg0x9A?feature=oembed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
