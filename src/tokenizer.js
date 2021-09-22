import readline from 'readline'

export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.tokens = []
    this.activeToken
    this.inputReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
    
  }
  startTokenizer(string) {
    this.string = string
    this.findAllTokens()
    this.startTokenUI()
  }

  startTokenUI() {
    this.setupActiveToken()
    this.handleActiveToken()
  }

  async handleActiveToken() {
    this.renderToken()
    this.readUserInput()
    // console.log(value)
  }

  async readUserInput() {
    this.inputReader.question('Change token (next/prev/exit): ', function (value) {
      this.handleUserInput(value)
    }.bind(this))
  }

  handleUserInput(value) {
    if (value === 'next') {
      const token = this.getNextToken()
      // this.setToken(token)
    } else if (value === 'prev') {
      const token = this.getPrevToken()
      // this.setToken(token)
    } else if (value === 'exit') {
      this.inputReader.close()
      console.log('Closes application...')
    } else {
      console.log(value + ' is not an alternative!')
      this.readUserInput()
    }
  }

  getNextToken() {
    const currentIndex = this.getCurrentTokenIndex()
    if (currentIndex === -1) { // current token existerar inte i this.tokens
      throw new Error('Active token is not a token!')
    } else if (currentIndex >= this.tokens.length - 1) { // Visa första eller error??
      this.setActiveToken(this.tokens[0])
      this.handleActiveToken()
    } else {
      this.setActiveToken(this.tokens[currentIndex + 1])
      this.handleActiveToken()
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
      this.handleActiveToken()
    } else {
      this.setActiveToken(this.tokens[currentIndex - 1])
      this.handleActiveToken()
    }
  }

  setActiveToken(token) {
    this.activeToken = token
  }

  setupActiveToken() {
    this.setActiveToken(this.tokens[0])
  }

  renderToken() {
    console.log(`Tokentyp: ${this.activeToken.tokenType}\nVärde: ${this.activeToken.value}`)
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
    return bestMatchingToken
  }

  removeTokenFromString(token) {
    this.string = this.string.split(token).pop().trim()
  }
}
