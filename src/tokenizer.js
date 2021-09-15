export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.tokens = []
    
  }
  startTokenizer(string) {
    this.string = string
    this.findAllTokens()
  }

  findAllTokens() { // Lägg till end token i slutet
    while (this.string.length > 0) {
      const token = this.findOneToken()
      this.tokens.push(token)
      this.removeTokenFromString(token.value)
    }
    console.log('Ska vara 0: ' + this.string.length)
    console.log(this.tokens)
    console.log('END')
  }

  findOneToken() { // Hantera lexikalfel
    let possibleTokens = []
    for (const key in this.grammar) {
      const testTokenType = this.testIfTokenMatch(key)
      if(testTokenType.value !== null) {
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
