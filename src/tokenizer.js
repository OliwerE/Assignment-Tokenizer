export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.potentialTokens = []
    this.tokenizerResultTokens = []
    this.activeToken
    
  }
  startTokenizer(string) {
    try {
      this.setString(string)
      this.trimCurrentString()
      this.createAllTokens()
      this.setupActiveToken()
    } catch (err) {
      this.handleError(err)
    }
  }

  setString(string) {
    this.string = string
  }

  trimCurrentString() {
    this.string = this.string.trim()
  }

  createAllTokens() {
    while (this.string.length > 0) {
      this.matchAllTokenTypes()
      const token = this.getBestTokenMatch()
      this.addToken(token)
      this.removeTokenFromString(token.value)
      this.trimCurrentString()
    }
    this.createEndToken()
  } 

  matchAllTokenTypes() {
    this.resetPotentialTokens()
    for (const key in this.grammar) {
      const matchString = this.getTokenTypeMatchString(key)
      const token = this.createTokenTypeMatchObject(key, matchString)
      this.addIfPotentialToken(token)
    }
  }

  resetPotentialTokens() {
    this.potentialTokens = []
  }

  getTokenTypeMatchString(key) {
    const matchTest = this.string.match(this.grammar[key])
    if (matchTest === null) {
      return ''
    } else {
      return matchTest[0]
    }
  }

  createTokenTypeMatchObject(key, matchString) {
    if (matchString === '') {
      return {
        tokenType: key,
        value: null
      }      
    } else {
      return {
        tokenType: key,
        value: matchString
      }
    }
  }

  addIfPotentialToken(token) {
    if(token.value !== null) {
        this.potentialTokens.push(token)
    }
  }

  getBestTokenMatch() {
    let bestMatchingToken = {
      tokenType: null,
      value: ''
    }
    for (let i = 0; i < this.potentialTokens.length; i++) {
      bestMatchingToken = this.findBetterTokenMatch(this.potentialTokens[i], bestMatchingToken)
    }
    this.handleLexicalError(bestMatchingToken)
    return bestMatchingToken
  }

  findBetterTokenMatch(alternativeToken, bestMatchingToken) {
    if (alternativeToken.value.length > bestMatchingToken.value.length) {
      return alternativeToken
    }
  }

  handleLexicalError(token) {
    if (token.tokenType === null && token.value === '') {
      throw new Error('Lexical Error')
    }
  }

  addToken(token) {
    this.tokenizerResultTokens.push(token)
  }

  removeTokenFromString(tokenValue) {
    this.string = this.string.substring(tokenValue.length, this.string.length)
  }

  createEndToken() {
    const endToken = {
      tokenType: 'END',
      value: ''
    }
    this.addToken(endToken)
  }

  setupActiveToken() {
    this.setActiveToken(this.tokenizerResultTokens[0])
  }

  handleError(err) {
    if (err.message === 'Lexical Error') {
      const token = this.createLexicalErrorToken()
      this.addToken(token)
      this.setupActiveToken()
    } else {
      console.log(err.message)
      process.exit(1)
    }
  }

  createLexicalErrorToken() {
    return {
      tokenType: 'Lexical Error',
      value: `No lexical element matches "${this.string}"`
    }
  }

  setNextActiveToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex >= this.tokenizerResultTokens.length - 1) {
      this.setActiveToken(this.tokenizerResultTokens[0])
    } else {
      this.setActiveToken(this.tokenizerResultTokens[currentIndex + 1])
    }
  }

  setPrevActiveToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === 0) {
      this.setActiveToken(this.tokenizerResultTokens[this.tokenizerResultTokens.length - 1])
    } else {
      this.setActiveToken(this.tokenizerResultTokens[currentIndex - 1])
    }
  }

  getCurrentTokenIndex() {
    return this.tokenizerResultTokens.findIndex(token => token.tokenType === this.activeToken.tokenType && token.value === this.activeToken.value)
  }

  setActiveToken(token) {
    this.activeToken = token
  }

  getActiveToken() {
    return this.activeToken
  }
}
