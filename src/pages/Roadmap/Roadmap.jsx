// Roadmap.jsx
import React, { useState } from 'react';
import styles from './Roadmap.module.css';

const Roadmap = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const topics = [
        {
            title: 'Budgeting and Saving',
            subtopics: ['Understanding Income and Expenses', 'Creating a Budget', 'Expense Management']
        },
        {
            title: 'Interest and Debt',
            subtopics: ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3']
        },
        {
            title: 'Investing Basics',
            subtopics: ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3']
        },
        {
            title: 'Risk Management',
            subtopics: ['Subtopic 2.1', 'Subtopic 2.2', 'Subtopic 2.3']
        },
        // Add more topics as needed
    ];

    return (

      <div className={styles.container}>

      <div className={styles.heroText}>ROAD MAP</div>

          <ol className={styles.roadmap}>
              {topics.map((topic, index) => (
                  <li className={styles.topic}key={index}>
                      <div className={styles.title} aria-expanded={selectedTopic === topic.title} onClick={() => setSelectedTopic(topic.title === selectedTopic ? null : topic.title)}>
                          {topic.title}
                      </div>
                      {selectedTopic === topic.title && (
                          <ul className={styles.subtopics}>
                              {topic.subtopics.map((subtopic, index) => (
                                  <li key={index}>{subtopic}</li>
                              ))}
                          </ul>
                      )}
                  </li>
              ))}
          </ol>
      </div>
    );
};

export default Roadmap;