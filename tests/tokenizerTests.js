import { Tokenizer } from "../src/tokenizer.js"
import { wordAndDotGrammar } from '../src/grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from '../src/grammars/arithmeticGrammar.js'

export const tc1 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === 'a' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'WORD') {
    return true
  } else {
    return false
  }
}

export const tc2 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a aa')
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === 'aa' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'WORD') {
    return true
  } else {
    return false
  }
}

export const tc3 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a.b')
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '.' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'DOT') {
    return true
  } else {
    return false
  }
}

export const tc4 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a.b')
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === 'b' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'WORD') {
    return true
  } else {
    return false
  }
}

export const tc5 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('aa. b')
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === 'b' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'WORD') {
    return true
  } else {
    return false
  }
}

export const tc6 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a .b')
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '.' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'DOT') {
    return true
  } else {
    return false
  }
}

export const tc7 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('')
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'END') {
    return true
  } else {
    return false
  }
}

export const tc8 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer(' ')
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setNextActiveToken()
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'END') {
    return true
  } else {
    return false
  }
}

export const tc9 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  wordAndDotTokenizer.setNextActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'END') {
    return true
  } else {
    return false
  }
}

export const tc10 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('a')
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === '' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'END') {
    return true
  } else {
    return false
  }
}

export const tc11 = () => {
  const wordAndDotTokenizer = new Tokenizer(wordAndDotGrammar)
  wordAndDotTokenizer.startTokenizer('!')
  wordAndDotTokenizer.setPrevActiveToken()
  if (wordAndDotTokenizer.getActiveToken().getTokenValue() === 'No lexical element matches "!"' && wordAndDotTokenizer.getActiveToken().getTokenType() === 'Lexical Error') {
    return true
  } else {
    return false
  }
}

export const tc12 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3')
  if (arithmeticTokenizer.getActiveToken().getTokenValue() === '3' && arithmeticTokenizer.getActiveToken().getTokenType() === 'NUMBER') {
    return true
  } else {
    return false
  }
}

export const tc13 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3.14')
  if (arithmeticTokenizer.getActiveToken().getTokenValue() === '3.14' && arithmeticTokenizer.getActiveToken().getTokenType() === 'NUMBER') {
    return true
  } else {
    return false
  }
}

export const tc14 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3 + 54 * 4')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().getTokenValue() === '*' && arithmeticTokenizer.getActiveToken().getTokenType() === 'MUL') {
    return true
  } else {
    return false
  }
}

export const tc15 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3+5 # 4')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().getTokenValue() === 'No lexical element matches "# 4"' && arithmeticTokenizer.getActiveToken().getTokenType() === 'Lexical Error') {
    return true
  } else {
    return false
  }
}

export const tc16 = () => {
  const arithmeticTokenizer = new Tokenizer(arithmeticGrammar)
  arithmeticTokenizer.startTokenizer('3.0+54.1     + 4.2')
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setPrevActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  arithmeticTokenizer.setNextActiveToken()
  if (arithmeticTokenizer.getActiveToken().getTokenValue() === '+' && arithmeticTokenizer.getActiveToken().getTokenType() === 'ADD') {
    return true
  } else {
    return false
  }
}


