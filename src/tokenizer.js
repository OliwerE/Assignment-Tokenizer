import { Token } from "./token.js"

export class Tokenizer {
  #string = ''
  #grammar
  #potentialTokens = []
  #tokenizerResultTokens = []

  constructor(grammar) {
    this.#grammar = grammar
  }

  start(inputString) {
    try {
      this.#setString(inputString)
      this.#trimCurrentString()
      this.#createAllTokens()
    } catch (err) {
      this.#handleError(err)
    }
    return this.#tokenizerResultTokens
  }

  #setString(string) {
    this.#string = string
  }

  #trimCurrentString() {
    this.#string = this.#string.trim()
  }

  #createAllTokens() {
    while (this.#string.length > 0) {
      this.#matchAllTokenTypes()
      const token = this.#getBestTokenMatch()
      this.#addToken(token)
      this.#removeTokenFromString(token.getTokenValue())
      this.#trimCurrentString()
    }
    this.#addEndToken()
  } 

  #matchAllTokenTypes() {
    this.#resetPotentialTokens()
    for (const key in this.#grammar) {
      const matchString = this.#getTokenTypeMatchString(key)
      const token = this.#createTokenTypeMatchObject(key, matchString)
      this.#addIfPotentialToken(token)
    }
  }

  #resetPotentialTokens() {
    this.#potentialTokens = []
  }

  #getTokenTypeMatchString(key) {
    const matchTest = this.#string.match(this.#grammar[key])
    if (matchTest === null) {
      return ''
    } else {
      return matchTest[0]
    }
  }

  #createTokenTypeMatchObject(key, matchString) {
    if (matchString === '') {
      return new Token(key, null)
    } else {
      return new Token(key, matchString)
    }
  }

  #addIfPotentialToken(token) {
    if(token.getTokenValue() !== null) {
        this.#potentialTokens.push(token)
    }
  }

  #getBestTokenMatch() {
    let bestMatchingToken = new Token(null, '')
    for (let i = 0; i < this.#potentialTokens.length; i++) {
      bestMatchingToken = this.#findBetterTokenMatch(this.#potentialTokens[i], bestMatchingToken)
    }
    this.#handleLexicalError(bestMatchingToken)
    return bestMatchingToken
  }

  #findBetterTokenMatch(alternativeToken, bestMatchingToken) {
    if (alternativeToken.getTokenValue().length > bestMatchingToken.getTokenValue().length) {
      return alternativeToken
    }
  }

  #handleLexicalError(token) {
    if (token.getTokenType() === null && token.getTokenValue() === '') {
      throw new Error('Lexical Error')
    }
  }

  #addToken(token) {
    this.#tokenizerResultTokens.push(token)
  }

  #removeTokenFromString(tokenValue) {
    this.#string = this.#string.substring(tokenValue.length, this.#string.length)
  }

  #addEndToken() {
    const endToken = new Token('END', '')
    this.#addToken(endToken)
  }

  #handleError(err) {
    if (err.message === 'Lexical Error') {
      const token = this.#createLexicalErrorToken()
      this.#addToken(token)
    } else {
      console.log(err.message)
      process.exit(1)
    }
  }

  #createLexicalErrorToken() {
    return new Token('Lexical Error', `No lexical element matches "${this.#string}"`)
  }
}