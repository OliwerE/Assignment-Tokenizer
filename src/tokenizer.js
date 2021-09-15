export class Tokenizer {
  constructor(grammar) {
    this.grammar = grammar
    this.string = ''
    this.tokens = []
    
  }
  startTokenizer(string) {
    this.string = string
    console.log(this.grammar)
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
