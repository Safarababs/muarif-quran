import SooratAadiaat from "./16-july-23 soorat no 97-103/SooratAadiaat";
import SooratZalzila from "./16-july-23 soorat no 97-103/SooratZalzila";
import SooratAsar from "./16-july-23 soorat no 97-103/SooratAsar";
import SooratTakasur from "./16-july-23 soorat no 97-103/SooratTakasur";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [
  ...SooratAadiaat,
  ...SooratZalzila,
  ...SooratAsar,
  ...SooratTakasur
];

const questions = shuffleArray(allQuestions);

export default questions;
