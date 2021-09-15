import { Tokenizer } from './tokenizer.js'

const wGrammar = { // End token ska finnas i tokenizer!
  "WORD": /^[\w|åäöÅÄÖ]+/,
  "DOT": /^\./
}

const wordAndDotGrammar = new Tokenizer(wGrammar)

// wordAndDotGrammar.startTokenizer('Meningen består av ord.')


const aGrammar = { // End token ska finnas i tokenizer!
  "NUMBER": /^[0-9]+(\.([0-9])+)?/,
  "ADD": /^[+]/,
  "MUL": /^[*]/ 
}

const arithmeticGrammar = new Tokenizer(aGrammar)

arithmeticGrammar.startTokenizer('3 + 2')