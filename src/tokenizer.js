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
      this.findAllTokens()
      this.setupActiveToken()
    return
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

  findAllTokens() { // Lägg till end token i slutet
    while (this.string.length > 0) {
      const token = this.matchAllTokenTypes()
      this.addToken(token)
      this.removeTokenFromString(token.value)
      this.trimCurrentString()
    }
    this.addEndToken()
  }

  matchAllTokenTypes() {
    this.resetPotentialTokens()
    for (const key in this.grammar) {
      const token = this.matchTokenType(key)
      this.addIfPotentialToken(token)
    }
    return this.bestTokenMatch(this.potentialTokens)
  }

  resetPotentialTokens() {
    this.potentialTokens = []
  }

  matchTokenType(key) {
    const matchTest = this.string.match(this.grammar[key])
    return {
      tokenType: key,
      value: (matchTest === null ? null : matchTest[0])
    }
  }

  addIfPotentialToken(token) {
    if(token.value !== null) { // NÄSTLAD I FOR LOOP DÅLIGT ÄNDRA!
        this.potentialTokens.push(token) // Add matched token.
    }
  }

  bestTokenMatch(potentialTokens) {
    let bestMatchingToken = {
      tokenType: null,
      value: ''
    }
    for (let i = 0; i < potentialTokens.length; i++) {
      bestMatchingToken = this.findBetterTokenMatch(potentialTokens[i], bestMatchingToken)
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
      throw new Error('lexikalfel')
    }
  }

  addToken(token) {
    this.tokenizerResultTokens.push(token)
  }

  removeTokenFromString(tokenValue) {
    this.string = this.string.substring(tokenValue.length, this.string.length)
    // this.string = this.string.substring(this.string.indexOf(token) + 1).trim() // båda skapar olika fel! Old solution: this.string.split(token).pop().trim()
  }

  addEndToken() {
    const endToken = {
      tokenType: 'END',
      value: ''
    }
    this.tokenizerResultTokens.push(endToken)
  }

  setupActiveToken() {
    this.setActiveToken(this.tokenizerResultTokens[0])
  }

  handleError(err) {
    if (err.message === 'lexikalfel') {
      this.createLexicalErrorToken()
      this.setupActiveToken()
    } else if (err.message === 'Active token is not a token!') {
      console.log(err.message)
      process.exit(1)
    } else {
      console.log(err.message)
      process.exit(1)
    }
  }

  createLexicalErrorToken() {
    const token = {
      tokenType: 'Lexikalfel',
      value: `No lexical element matches "${this.string}"`
    }
    this.tokenizerResultTokens.push(token)
  }

  getNextToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === -1) { // current token existerar inte i this.tokens
      throw new Error('Active token is not a token!')
    } else if (currentIndex >= this.tokenizerResultTokens.length - 1) { // Visa första eller error??
      this.setActiveToken(this.tokenizerResultTokens[0])
      return this.activeToken
    } else {
      this.setActiveToken(this.tokenizerResultTokens[currentIndex + 1])
      return this.activeToken
    }
  }

  getPrevToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === -1) {
      throw new Error('Active token is not a token!')
    } else if (currentIndex === 0) {
      this.setActiveToken(this.tokenizerResultTokens[this.tokenizerResultTokens.length - 1])
      return this.activeToken
    } else {
      this.setActiveToken(this.tokenizerResultTokens[currentIndex - 1])
      return this.activeToken
    }
  }

  getCurrentTokenIndex() {
    return this.tokenizerResultTokens.findIndex(t => t.tokenType === this.activeToken.tokenType && t.value === this.activeToken.value)
  }

  setActiveToken(token) {
    this.activeToken = token
  }

  getActiveToken() {
    return this.activeToken
  }
}
