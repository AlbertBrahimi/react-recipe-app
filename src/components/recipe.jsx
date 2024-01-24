import React, { useState } from 'react';
import './button.css';

const Recipe = ({ image, title, ingredients }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleShowIngredients = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="main-container">
      <div className="main">
        <img src={image} alt="" className="img" />
        <div className="show__details">
          <div className="recipe__name">
            <h1>{title}</h1>
          </div>
        </div>
          <div className='btn__contanier'>
            <button onClick={handleShowIngredients} className='btn'>Show Ingredients</button>
          </div>
      </div>

      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{title} Ingredients</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <button onClick={handleCloseModal} className='btn'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
