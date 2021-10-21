export class Token {
  #tokenType
  #tokenValue

  constructor(tokenType, tokenValue) {
    this.#tokenType = tokenType
    this.#tokenValue = tokenValue
  }

  getTokenType() {
    return this.#tokenType
  }

  getTokenValue() {
    return this.#tokenValue
  }
}