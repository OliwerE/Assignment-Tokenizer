export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.tokens = []
    
  }
  startTokenizer(string) {
    this.string = string
    console.log(this.grammar)
    this.findAllTokens()
  }

  findAllTokens() {
    while (this.string.length > 0) {
      const token = this.findOneToken()
      this.tokens.push(token)
      console.log('tokens: ')
      console.log(this.tokens)
      console.log('Sträng innan tagit bort token:' + this.string)
      this.removeTokenFromString(token)
      console.log('Sträng efter tagit bort token:' + this.string)
    }
    console.log('END')
  }

  findOneToken() {
    let possibleToken = []
    for (const key in this.grammar) {
      const testTokenType = this.testIfTokenMatch(key)
      if(testTokenType !== null) {
        possibleToken.push(testTokenType[0]) // Add matched token.
      }
    }
    console.log(possibleToken)
    return this.findBestMatchingToken(possibleToken)
  }

  testIfTokenMatch(key) {
    console.log(key)
    console.log(this.string.match(this.grammar[key]))
    return this.string.match(this.grammar[key])
  }

  findBestMatchingToken(possibleToken) {
    let bestMatchingToken = ''
    for (let i = 0; i < possibleToken.length; i++) {
      if (possibleToken[i].length > bestMatchingToken.length) {
        bestMatchingToken = possibleToken[i]
      }
    }
    return bestMatchingToken
  }

  removeTokenFromString(token) {
    this.string = this.string.split(token).pop().trim()
  }
}

/*
findTokens() { // test
    const regex = /^[\w|åäöÅÄÖ]+/
    for (let i = 0; i < 5; i++) { // this.string.length
      if (this.string.match(regex) === null) {
        // Matchar inte regex byt token-typ!

        // this.string = this.string.split('.').pop()
        // this.string = this.string.trim()
        console.log(i)
      } else {
        const token = this.string.match(regex)[0] // OBS! måste prova alla token alternativ, (den som passar bäst)
        this.tokens.push(token)

        this.string = this.string.split(this.string.match(regex)).pop()
        this.string = this.string.trim()
      }
    }
    console.log(this.string)
    console.log(this.tokens)
  }
*/
