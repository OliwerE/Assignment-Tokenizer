import readline from 'readline'

export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.tokens = []
    this.activeToken
    
  }
  startTokenizer(string) {
    try {
    this.string = string
    this.findAllTokens()
    this.setupActiveToken()
    return
    } catch (err) {
      this.handleError(err)
    }
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
    this.tokens.push(token)
  }

  getNextToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === -1) { // current token existerar inte i this.tokens
      throw new Error('Active token is not a token!')
    } else if (currentIndex >= this.tokens.length - 1) { // Visa första eller error??
      this.setActiveToken(this.tokens[0])
      return this.activeToken
    } else {
      this.setActiveToken(this.tokens[currentIndex + 1])
      return this.activeToken
    }
  }

  getCurrentTokenIndex() {
    return this.tokens.findIndex(t => t.tokenType === this.activeToken.tokenType && t.value === this.activeToken.value)
  }

  getPrevToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === -1) {
      throw new Error('Active token is not a token!')
    } else if (currentIndex === 0) {
      this.setActiveToken(this.tokens[this.tokens.length - 1])
      return this.activeToken
    } else {
      this.setActiveToken(this.tokens[currentIndex - 1])
      return this.activeToken
    }
  }

  setActiveToken(token) {
    this.activeToken = token
  }

  getActiveToken() {
    return this.activeToken
  }

  setupActiveToken() {
    this.setActiveToken(this.tokens[0])
  }

  findAllTokens() { // Lägg till end token i slutet
    while (this.string.length > 0) {
      const token = this.findOneToken()
      this.tokens.push(token)
      this.removeTokenFromString(token.value)
    }
    this.createEndToken()
  }

  createEndToken() {
    const endToken = {
      tokenType: 'END',
      value: ''
    }
    this.tokens.push(endToken)
  }

  findOneToken() { // Hantera lexikalfel, OLIKA NIVÅER AV ABSTRAKTION!
    let possibleTokens = []
    for (const key in this.grammar) {
      const testTokenType = this.testIfTokenMatch(key)
      if(testTokenType.value !== null) { // NÄSTLAD I FOR LOOP DÅLIGT ÄNDRA!
        possibleTokens.push(testTokenType) // Add matched token.
      }
    }
    return this.findBestMatchingToken(possibleTokens)
  }

  testIfTokenMatch(key) {
    const matchTest = this.string.match(this.grammar[key])
    return {
      tokenType: key,
      value: (matchTest === null ? null : matchTest[0])
    }
  }

  findBestMatchingToken(possibleTokens) {
    let bestMatchingToken = ''
    for (let i = 0; i < possibleTokens.length; i++) {
      if (possibleTokens[i].value.length > bestMatchingToken.length) {
        bestMatchingToken = possibleTokens[i]
      }
    }

    // FLYTTA METOD GÖR FÖR MKT!
    if (bestMatchingToken === '') {
      throw new Error('lexikalfel')
    } else {
      return bestMatchingToken
    }
  }

  removeTokenFromString(token) {
    this.string = this.string.split(token).pop().trim()
  }
}
