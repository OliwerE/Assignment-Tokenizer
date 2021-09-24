import { Tokenizer } from "./tokenizer.js"
import readline from 'readline'

export class TokenizerUserInterface {
  constructor(grammar, string) {
    this.tokenizer = new Tokenizer(grammar)
    this.string = string
    this.inputReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
  }

  start() {
    // this.getString()
    this.tokenizer.startTokenizer(this.string) // Fixa så att tokenizer blir färdig innan startTokenUI
    console.log('tokenizer has loaded!')
    this.startTokenUI()
  }
/*
  getString() {
    const test = this.readUserInput('Enter string')
    console.log(test)
  }
*/
  readUserInput(question) {
    this.inputReader.question(`${question} `, (value) => {
      this.handleUserInput(value)
    })
  }

  startTokenUI() {
    // this.setupActiveToken()
    this.handleActiveToken()
  }

  handleActiveToken() {
    this.renderToken()
    this.readUserInput('Change token (next/prev/exit):')
    // console.log(value)
  }

  handleUserInput(value) {
    if (value === 'next') {
      this.tokenizer.getNextToken()
      this.handleActiveToken()
    } else if (value === 'prev') {
      this.tokenizer.getPrevToken()
      this.handleActiveToken()
    } else if (value === 'exit') {
      this.closeTokenizer()
    } else {
      console.log(value + ' is not an alternative!')
      this.readUserInput('Change token (next/prev/exit):')
    }
  }

  closeTokenizer() {
    this.inputReader.close()
    console.log('Closes application...')
  }

  renderToken() {
    const token = this.tokenizer.getActiveToken()
    console.clear()
    console.log(`Tokentyp: ${token.tokenType}\nVärde: ${token.value}`)
  }

}
