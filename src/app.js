import { Tokenizer } from './tokenizer.js'

const grammar = { // End token ska finnas i tokenizer!
  "Word": /^[\w|åäöÅÄÖ]+/,
  "Dot": /^\./
}

const wordAndDotGrammar = new Tokenizer(grammar)

wordAndDotGrammar.startTokenizer('Meningen består av ord.')