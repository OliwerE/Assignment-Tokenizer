import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
import { arithmeticGrammar } from './grammars/arithmeticGrammar.js'
import { sentenceGrammar } from './grammars/sentenceGrammar.js'


// const tokenizer = new TokenizerUI(arithmeticGrammar)
// tokenizer.start()

const tokenizer2 = new TokenizerUI(sentenceGrammar)
tokenizer2.start()