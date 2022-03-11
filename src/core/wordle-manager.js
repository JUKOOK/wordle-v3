import WORDLIST from "./word-list";
import { getRandomNumber } from "../utils";

class WordleManager {
  constructor() {
    const length = WORDLIST.WORD5.length;
    this.answer = WORDLIST.WORD5[getRandomNumber(length)]; // 문제 선정
  }

  checkResult(inputString) {
    const answerChars = this.answer.split(""); // ['a', 'p', 'p', 'l', 'e']
    const inputChars = inputString.split(""); // [ ] 5개짜리 알파벳

    return inputChars.map((char, idx) => {
      if (char === answerChars[idx]) return "currect";
      else if (answerChars.includes(char)) return "other";
      else return "none";
    });
  }
}

export default WordleManager;
