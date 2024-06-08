import SooratNahal from "../Questions/Soorat Nahal/SooratNahal";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [...SooratNahal];

const questions = shuffleArray(allQuestions);

export default questions;
