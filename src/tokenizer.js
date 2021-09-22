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
      // this.inputReader.close()
    }.bind(this))
  }

  handleUserInput(value) {
    if (value === 'next') {

    } else if (value === 'prev') {

    } else if (value === 'exit') {
      this.inputReader.close()
      console.log('Closes application...')
    } else {
      console.log(value + ' is not an alternative!')
      this.readUserInput()
    }
  }

  setupActiveToken() {
    this.activeToken = this.tokens[0]
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
