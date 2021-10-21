import { Tokenizer } from "./tokenizer.js"

export class ActiveToken {
  #tokenizer
  #activeToken
  #activeTokenIndex = 0
  #tokens

  constructor(grammar) {
    this.#tokenizer = new Tokenizer(grammar)
  }

  start(inputString) {
    this.#tokens = this.#tokenizer.start(inputString)
    this.#setupActiveToken()
  }

  #setupActiveToken() {
    this.#setActiveToken(this.#tokens[0])
  }

  #setActiveToken(token) {
    this.#activeToken = token
  }

  getActiveToken() {
    return this.#activeToken
  }

  setNextActiveToken() {
    if (this.#activeTokenIndex >= this.#tokens.length - 1) {
      this.#activeTokenIndex = 0
      this.#setActiveToken(this.#tokens[this.#activeTokenIndex])
    } else {
      this.#activeTokenIndex += 1
      this.#setActiveToken(this.#tokens[this.#activeTokenIndex])
    }
  }

  setPrevActiveToken() {
    if (this.#activeTokenIndex === 0) {
      this.#activeTokenIndex = this.#tokens.length - 1
      this.#setActiveToken(this.#tokens[this.#activeTokenIndex])
    } else {
      this.#activeTokenIndex -= 1
      this.#setActiveToken(this.#tokens[this.#activeTokenIndex])
    }
  }
}
