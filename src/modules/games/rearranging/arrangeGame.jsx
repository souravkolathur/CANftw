import React, { useState } from "react";
import styles from "./arrangeGame.module.css";

const InvestmentGame = () => {
  const [investments, setInvestments] = useState([
    { id: 1, name: "Government Bonds", risk: "Low", top: 0 },
    { id: 2, name: "Blue Chip Stocks", risk: "Medium", top: 80 },
    { id: 3, name: "Mutual Funds", risk: "Medium", top: 160 },
    { id: 4, name: "Cryptocurrency", risk: "High", top: 240 },
  ]);

  const correctOrder = ["Low", "Medium", "Medium", "High"];
  const [isCorrect, setIsCorrect] = useState(false);
  const [draggedId, setDraggedId] = useState(null);
  const [initialY, setInitialY] = useState(0);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    setDraggedId(id);
    setInitialY(e.clientY);
  };
  const handleDragOver = (e, id) => {
    e.preventDefault();
    const draggedIndex = investments.findIndex((item) => item.id === draggedId);
    const draggedItem = investments[draggedIndex];
    const overIndex = investments.findIndex((item) => item.id === id);
    const overItem = investments[overIndex];
    const offsetY = e.clientY - initialY;
    const newInvestments = [...investments];
    newInvestments.forEach((item) => {
      if (item.id === draggedId) {
        item.top = draggedItem.top + offsetY;
      } else if (item.id === id) {
        item.top = overItem.top - offsetY;
      }
    });
    setInvestments(newInvestments);
    setInitialY(e.clientY);
  };

  const handleDrop = () => {
    setDraggedId(null);
  };

  const handleSubmit = () => {
    const userOrder = investments.map((investment) => investment.risk);
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Arrange the Investments by Risk (Low to High)</h2>
      <div className={styles.investmentList}>
        {investments.map((investment) => (
          <div
            key={investment.id}
            className={styles.investment}
            style={{ top: `${investment.top}px` }}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, investment.id)}
            onDragOver={(e) => handleDragOver(e, investment.id)}
            onDrop={handleDrop}
          >
            <span>
              {investment.name} ({investment.risk})
            </span>
            <div className={styles.dragIndicator}></div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect && <p className={styles.correct}>Correct Order!</p>}
      {isCorrect === false && (
        <p className={styles.incorrect}>Incorrect Order!</p>
      )}
    </div>
  );
};

export default InvestmentGame;
