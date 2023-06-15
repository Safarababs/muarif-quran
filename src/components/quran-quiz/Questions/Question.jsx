import SooratINasar from "./sooratNasar";
import SooratMahoon from "./SooratMahoon";
import SooratFeel from "./SooratFeel";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allQuestions = [
  ...SooratINasar,
  ...SooratFeel,
  ...SooratMahoon
];

const questions = shuffleArray(allQuestions);

export default questions;
