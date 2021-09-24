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
    this.readUserInput()
    // console.log(value)
  }

  readUserInput() {
    this.inputReader.question('Change token (next/prev/exit): ', function (value) {
      this.handleUserInput(value)
    }.bind(this))
  }

  handleUserInput(value) {
    if (value === 'next') {

      // GET NEXT TOKEN

    } else if (value === 'prev') {

      // GET PREV TOKEN!

    } else if (value === 'exit') {
      this.closeTokenizer()
    } else {
      console.log(value + ' is not an alternative!')
      this.readUserInput()
    }
  }

  closeTokenizer() {
    this.inputReader.close()
    console.log('Closes application...')
  }

  renderToken() {
    console.clear()
    // console.log(`Tokentyp: ${this.activeToken.tokenType}\nVärde: ${this.activeToken.value}`)
    console.log('"en token"')
  }

}
