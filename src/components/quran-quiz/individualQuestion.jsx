import React, { useState } from 'react';
import questions from './questions';

const IndividualQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="question-container-individual">
      <h1>Solved Quiz</h1>
      {currentQuestionData && (
        <div>
          <h2>{currentQuestionData.question}</h2>
          <ul>
            {currentQuestionData.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowAnswer(true)}>Submit</button>
          {showAnswer && (
            <div className='answer-section'>
              <p>
                Correct Answer: {currentQuestionData.correctAnswer}
              </p>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
        </div>
      )}
      {!currentQuestionData && <p>Quiz completed!</p>}
    </div>
  );
};

export default IndividualQuestion;
