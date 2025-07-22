import { Alphabet } from "eslint-plugin-perfectionist/alphabet";

export default Alphabet.generateRecommendedAlphabet() //
  .placeAllWithCaseBeforeAllWithOtherCase("uppercase")
  .getCharacters();
