import SooratYounasLast from "./futureTestPlan/SooratYounas51To109";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [
  ...SooratYounasLast
];

const questions = shuffleArray(allQuestions);

export default questions;
