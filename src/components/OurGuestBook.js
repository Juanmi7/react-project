import styles from "./OurGuestBook.module.css";
import Avatar1 from "../assets/avatar_01.jpg";
import Avatar2 from "../assets/avatar_02.jpg";
import Avatar3 from "../assets/avatar_03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//crear una card que contiene una imagen alado del nombre del invitado y debajo un parrafo con el mensaje
const OurGuestBook = () => {
  return (
    <section className={styles.guestBook}>
      <p className={styles.title}>EXCLUSIVE RATING</p>
      <p className={styles.secondTitle}>OUR GUESTBOOK</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={Avatar1} alt="Avatar" className={styles.img} />

            <div className={styles.cardHeader}>
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <h5 className={styles.nameCard}>Herman Miller</h5>
            </div>
          </div>

          <p className={styles.description}>
            Simply superb resort. Management and staff deserve special
            appreciation and thanks for hospitality.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={Avatar3} alt="Avatar" className={styles.img} />

            <div className={styles.cardHeader}>
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <h5 className={styles.nameCard}>Lorreta Smith</h5>
            </div>
          </div>

          <p className={styles.description}>
            We are back home now and feel that it is only right to write to you
            to express our warmest gratitude.
          </p>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardImg}>
            <img src={Avatar2} alt="Avatar" className={styles.img} />

            <div className={styles.cardHeader}>
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
              <h5 className={styles.nameCard}>Jeremy Girard</h5>
            </div>
          </div>

          <p className={styles.description}>
            Wonderful place to live for holidays. Can't belive can have such
            beautiful environment to spend peaceful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGuestBook;
