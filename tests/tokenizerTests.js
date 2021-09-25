import { Tokenizer } from "../src/tokenizer.js"
import { wordAndDotGrammar } from '../src/grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from '../src/grammars/arithmeticGrammar.js'



const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)

const tc1 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  if (wordAndDotTokenizer.getActiveToken().value === 'a' && wordAndDotTokenizer.getActiveToken().tokenType === 'WORD') {
    console.log('TC1: PASS')
  } else {
    console.log('TC1: FAIL, expected: "a" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "WORD" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc1()

const tc2 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a aa')
  wordAndDotTokenizer.getNextToken()
  if (wordAndDotTokenizer.getActiveToken().value === 'aa' && wordAndDotTokenizer.getActiveToken().tokenType === 'WORD') {
    console.log('TC2: PASS')
  } else {
    console.log('TC2: FAIL, expected: "aa" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "WORD" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc2()

const tc3 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a.b')
  wordAndDotTokenizer.getNextToken()
  if (wordAndDotTokenizer.getActiveToken().value === '.' && wordAndDotTokenizer.getActiveToken().tokenType === 'DOT') {
    console.log('TC3: PASS')
  } else {
    console.log('TC3: FAIL, expected value: "." got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "DOT" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc3()

const tc4 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a.b')
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getNextToken()
  if (wordAndDotTokenizer.getActiveToken().value === 'b' && wordAndDotTokenizer.getActiveToken().tokenType === 'WORD') {
    console.log('TC3: PASS')
  } else {
    console.log('TC3: FAIL, expected value: "b" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "WORD" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc4()

