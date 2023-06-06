import React, { useState } from "react";
import classes from "./ExclusiveFood.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import exclusive_01 from "../assets/exclusive_01.jpg";
import exclusive_02 from "../assets/exclusive_02.jpg";
import exclusive_03 from "../assets/exclusive_03.jpg";

const ExclusiveFood = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className={classes.exclusiveFood}>
      <p className={classes.title}>CHEF SPECIAL FOOD</p>
      <p className={classes.secondTitle}>EXCLUSIVE FOOD</p>
      <div className={classes.cards}>
        <div
          className={classes.card}
          onClick={() => handleCardClick(exclusive_01)}
        >
          <div className={classes.cardImg}>
            <img src={exclusive_01} alt="Food" className={classes.img} />
            <div className={classes.cardHeader}>
              <h5 className={classes.nameCard}>Sausage rolls</h5>
            </div>
          </div>
          <p className={classes.description}>
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className={classes.price}>JUST $19.00</p>
        </div>
        <div
          className={classes.card}
          onClick={() => handleCardClick(exclusive_02)}
        >
          <div className={classes.cardImg}>
            <img src={exclusive_02} alt="Food" className={classes.img} />
            <div className={classes.cardHeader}>
              <h5 className={classes.nameCard}>Cheese pancake</h5>
            </div>
          </div>
          <p className={classes.description}>
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className={classes.price}>JUST $21.00</p>
        </div>
        <div
          className={classes.card3}
          onClick={() => handleCardClick(exclusive_03)}
        >
          <div className={classes.cardImg}>
            <img src={exclusive_03} alt="Food" className={classes.img} />
            <div className={classes.cardHeader}>
              <h5 className={classes.nameCard}>Beef sandwich</h5>
            </div>
          </div>
          <p className={classes.description3}>
            Lorem ipsum is simply dummy text of the printing industry.
          </p>
          <p className={classes.price}>JUST $16.00</p>
        </div>
      </div>

      {selectedCard && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <img src={selectedCard} alt="Food" className={classes.modalImg} />
            <p className={classes.modalDescription}>
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
            </p>
            <button
              className={classes.modalCloseButton}
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExclusiveFood;
