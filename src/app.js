import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from './grammars/arithmeticGrammar.js'


// const tokenizer = new TokenizerUI(arithmeticGrammar)
// tokenizer.start()

const tokenizer2 = new TokenizerUI(wordAndDotGrammar)
tokenizer2.start()