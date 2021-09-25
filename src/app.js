import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from './grammars/arithmeticGrammar.js'


// const tokenizer = new TokenizerUI(arithmeticGrammar, '3 + hej 2')
// tokenizer.start()

const tokenizer2 = new TokenizerUI(wordAndDotGrammar, 'Meningen består av ord.')
tokenizer2.start()