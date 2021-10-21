import { ActiveToken } from "./activeToken.js"
import readline from 'readline'

export class TokenizerUI {
  #activeToken
  #string
  #inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  #isRequestingStringFromUser = true

  constructor(grammar) {
    this.#activeToken = new ActiveToken(grammar)
  }

  start() {
    this.#getString()
  }

  #getString() {
    this.#readUserInput('Enter string:')
  }

  #readUserInput(question) {
    this.#inputReader.question(`${question} `, (value) => {
      this.#handleUserInput(value)
    })
  }

  #handleUserInput(value) {
    if (this.#isRequestingStringFromUser === true) {
      this.#setString(value)
      this.#setIsRequestStringFromUser(false)
      this.#setupTokenizer()
      this.#startTokenUI()
    } else {
      this.#handleNavigationInput(value)
    }
  }

  #setString(value) {
    this.#string = value
  }

  #setIsRequestStringFromUser(value) {
    this.#isRequestingStringFromUser = value
  }

  #setupTokenizer() {
    this.#activeToken.start(this.#string)
  }

  #startTokenUI() {
    this.#handleActiveToken()
  }

  #handleNavigationInput(value) {
    if (value === 'next') {
      this.#activeToken.setNextActiveToken()
      this.#handleActiveToken()
    } else if (value === 'prev') {
      this.#activeToken.setPrevActiveToken()
      this.#handleActiveToken()
    } else if (value === 'exit') {
      this.#closeTokenizer()
    } else {
      this.#renderWrongInputError(value)
      this.#readUserInput('Change token (next/prev/exit):')
    }
  }

  #handleActiveToken() {
    this.#renderToken(this.#activeToken.getActiveToken())
    this.#readUserInput('Change token (next/prev/exit):')
  }

  #closeTokenizer() {
    this.#inputReader.close()
    console.log('Closes application...')
  }

  #renderWrongInputError(value) {
    console.log(value + ' is not an alternative!')
  }

  #renderToken(token) {
    console.clear()
    console.log(`Tokentyp: ${token.getTokenType()}\nVärde: ${token.getTokenValue()}`)
  }

}
