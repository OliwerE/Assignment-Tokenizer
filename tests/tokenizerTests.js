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
    console.log('TC4: PASS')
  } else {
    console.log('TC4: FAIL, expected value: "b" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "WORD" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc4()

const tc5 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('aa. b')
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getNextToken()
  if (wordAndDotTokenizer.getActiveToken().value === 'b' && wordAndDotTokenizer.getActiveToken().tokenType === 'WORD') {
    console.log('TC5: PASS')
  } else {
    console.log('TC5: FAIL, expected value: "b" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "WORD" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc5()

const tc6 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a .b')
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getPrevToken()
  if (wordAndDotTokenizer.getActiveToken().value === '.' && wordAndDotTokenizer.getActiveToken().tokenType === 'DOT') {
    console.log('TC6: PASS')
  } else {
    console.log('TC6: FAIL, expected value: "." got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "DOT" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc6()

const tc7 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('')
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getPrevToken()
  if (wordAndDotTokenizer.getActiveToken().value === '' && wordAndDotTokenizer.getActiveToken().tokenType === 'END') {
    console.log('TC7: PASS')
  } else {
    console.log('TC7: FAIL, expected value: "" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "END" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc7()

const tc8 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer(' ')
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getNextToken()
  wordAndDotTokenizer.getPrevToken()
  if (wordAndDotTokenizer.getActiveToken().value === '' && wordAndDotTokenizer.getActiveToken().tokenType === 'END') {
    console.log('TC8: PASS')
  } else {
    console.log('TC8: FAIL, expected value: "" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "END" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc8()

