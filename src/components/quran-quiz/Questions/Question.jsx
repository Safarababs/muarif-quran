import SooraTehreem from "./soorat Tehreem/SoroatTehreem";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [...SooraTehreem];

const questions = shuffleArray(allQuestions);
// const questions = SooraTehreem;

export default questions;
