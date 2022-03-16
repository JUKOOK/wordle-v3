import { getRandomNumber } from "../utils";
import WORDLIST from "./word-list";

const getWordList = (letters) => {
  switch (letters) {
    case 4:
      return WORDLIST.WORD4;
    case 5:
      return WORDLIST.WORD5;
    case 6:
      return WORDLIST.WORD6;
  }
};

class WordleManager {
  constructor(letters) {
    const wordList = getWordList(letters);
    const randomIdx = getRandomNumber(wordList.length);
    this.letters = letters;
    this.answer = wordList[randomIdx];
    this.answerChars = this.answer.split("");
  }

  getResults(inputChars) {
    const answerChars = this.answer.split("");

    return inputChars.map((char, idx) => {
      if (char === answerChars[idx]) return "correct";
      else if (answerChars.includes(char)) return "other";
      else return "none";
    });
  }
}

export default WordleManager;
