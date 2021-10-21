import { Tokenizer } from "../src/tokenizer.js"
import { wordAndDotGrammar } from '../src/grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from '../src/grammars/arithmeticGrammar.js'

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
  wordAndDotTokenizer.setNextActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
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
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().value === '' && wordAndDotTokenizer.getActiveToken().tokenType === 'END') {
    console.log('TC8: PASS')
  } else {
    console.log('TC8: FAIL, expected value: "" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "END" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc8()

const tc9 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().value === '' && wordAndDotTokenizer.getActiveToken().tokenType === 'END') {
    console.log('TC9: PASS')
  } else {
    console.log('TC9: FAIL, expected value: "" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "END" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc9()

const tc10 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().value === '' && wordAndDotTokenizer.getActiveToken().tokenType === 'END') {
    console.log('TC10: PASS')
  } else {
    console.log('TC10: FAIL, expected value: "" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "END" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc10()

const tc11 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('!')
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().value === 'No lexical element matches "!"' && wordAndDotTokenizer.getActiveToken().tokenType === 'Lexical Error') {
    console.log('TC11: PASS')
  } else {
    console.log('TC11: FAIL, expected value: "No lexical element matches "!"" got: ' + wordAndDotTokenizer.getActiveToken().value + ' expected token type: "Lexical Error" got: ' + wordAndDotTokenizer.getActiveToken().tokenType)
  }
}
tc11()

const tc12 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3')
  if (arithmeticTokenizer.getActiveToken().value === '3' && arithmeticTokenizer.getActiveToken().tokenType === 'NUMBER') {
    console.log('TC12: PASS')
  } else {
    console.log('TC12: FAIL, expected value: "3" got: ' + arithmeticTokenizer.getActiveToken().value + ' expected token type: "NUMBER" got: ' + arithmeticTokenizer.getActiveToken().tokenType)
  }
}
tc12()

const tc13 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3.14')
  if (arithmeticTokenizer.getActiveToken().value === '3.14' && arithmeticTokenizer.getActiveToken().tokenType === 'NUMBER') {
    console.log('TC13: PASS')
  } else {
    console.log('TC13: FAIL, expected value: "3.14" got: ' + arithmeticTokenizer.getActiveToken().value + ' expected token type: "NUMBER" got: ' + arithmeticTokenizer.getActiveToken().tokenType)
  }
}
tc13()

const tc14 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3 + 54 * 4')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().value === '*' && arithmeticTokenizer.getActiveToken().tokenType === 'MUL') {
    console.log('TC14: PASS')
  } else {
    console.log('TC14: FAIL, expected value: "*" got: ' + arithmeticTokenizer.getActiveToken().value + ' expected token type: "MUL" got: ' + arithmeticTokenizer.getActiveToken().tokenType)
  }
}
tc14()

const tc15 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3+5 # 4')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().value === 'No lexical element matches "# 4"' && arithmeticTokenizer.getActiveToken().tokenType === 'Lexical Error') {
    console.log('TC15: PASS')
  } else {
    console.log('TC15: FAIL, expected value: "No lexical element matches "# 4"" got: ' + arithmeticTokenizer.getActiveToken().value + ' expected token type: "Lexical Error" got: ' + arithmeticTokenizer.getActiveToken().tokenType)
  }
}
tc15()

const tc16 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3.0+54.1     + 4.2')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setPrevActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().value === '+' && arithmeticTokenizer.getActiveToken().tokenType === 'ADD') {
    console.log('TC16: PASS')
  } else {
    console.log('TC16: FAIL, expected value: "+" got: ' + arithmeticTokenizer.getActiveToken().value + ' expected token type: "ADD" got: ' + arithmeticTokenizer.getActiveToken().tokenType)
  }
}
tc16()


