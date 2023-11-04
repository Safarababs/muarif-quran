import SooratHud1to60 from "./futureTestPlan/SooratHud1to60";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [
  ...SooratHud1to60
];

const questions = shuffleArray(allQuestions);

export default questions;
