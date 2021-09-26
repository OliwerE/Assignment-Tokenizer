import { Tokenizer } from "./tokenizer.js"
import readline from 'readline'

export class TokenizerUI {
  constructor(grammar) {
    this.tokenizer = new Tokenizer(grammar)
    this.string
    this.inputReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
    this.isRequestingStringFromUser = true
  }

  start() {
    this.getString()
  }

  getString() {
    this.readUserInput('Enter string:')
  }

  readUserInput(question) {
    this.inputReader.question(`${question} `, (value) => {
      this.handleUserInput(value)
    })
  }

  handleUserInput(value) {
    if (this.isRequestingStringFromUser === true) {
      this.setString(value)
      this.setIsRequestStringFromUser(false)
      this.setupTokenizer()
      this.startTokenUI()
    } else {
      this.handleNavigationInput(value)
    }
  }

  setString(value) {
    this.string = value
  }

  setIsRequestStringFromUser(value) {
    this.isRequestingStringFromUser = value
  }

  setupTokenizer() {
    this.tokenizer.startTokenizer(this.string)
  }

  startTokenUI() {
    this.handleActiveToken()
  }

  handleNavigationInput(value) {
    if (value === 'next') {
      this.tokenizer.getNextToken()
      this.handleActiveToken()
    } else if (value === 'prev') {
      this.tokenizer.getPrevToken()
      this.handleActiveToken()
    } else if (value === 'exit') {
      this.closeTokenizer()
    } else {
      this.renderWrongInputError(value)
      this.readUserInput('Change token (next/prev/exit):')
    }
  }

  handleActiveToken() {
    this.renderToken(this.tokenizer.getActiveToken())
    this.readUserInput('Change token (next/prev/exit):')
  }

  closeTokenizer() {
    this.inputReader.close()
    console.log('Closes application...')
  }

  renderWrongInputError(value) {
    console.log(value + ' is not an alternative!')
  }

  renderToken(token) {
    console.clear()
    console.log(`Tokentyp: ${token.tokenType}\nVärde: ${token.value}`)
  }

}
