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
    this.tokenizer.startTokenizer(this.string)
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

  handleUserInput(value) {

  }
}
