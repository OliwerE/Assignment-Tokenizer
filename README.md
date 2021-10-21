# Tokenizer

## Instruktioner

## Skapa grammatik
* Skapa en javascript fil (grammatiknamn.js) i /src/grammars
* Skapa ett objekt som exporteras:
```javascript
export const grammatiknamn = {}
```
* Varje nyckel i objektet är en token typ och värdet är regex för token typen:
```javascript
export const grammatiknamn = {
  "WORD": /^[\w|åäöÅÄÖ]+/,
  "DOT": /^\./
}
```

## ActiveToken
* Används för att stega igenom alla tokens.
* Skapa en app.js modul i /src
* Importera activeToken.js och en grammatik:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
```
* Skapa en instans av ActiveToken med grammatiken som argument:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new ActiveToken(wordAndDotGrammar)
```
* För att starta tokeniseraren, skapa en sträng och skicka med den i ett argument till metoden start:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new ActiveToken(wordAndDotGrammar)

tokenizer.start("Meningen består av ord.")
```
* För läsa aktivt token anropa getActiveToken:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new ActiveToken(wordAndDotGrammar)

tokenizer.start("Meningen består av ord.")

const token = tokenizer.getActiveToken()
const tokenType = token.getTokenType()
const tokenValue = token.getTokenValue()

console.log('type: ' + tokenType + ', value: ' + tokenValue)
```
* För att ändra till nästa token:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new ActiveToken(wordAndDotGrammar)

tokenizer.start("Meningen består av ord.")

tokenizer.setNextActiveToken()
```
* För att ändra till förra token:
```javascript
import { ActiveToken } from './activeToken.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new ActiveToken(wordAndDotGrammar)

tokenizer.start("Meningen består av ord.")

tokenizer.setPrevActiveToken()
```


## Tokenizer (om TokenizerUI eller ActiveToken inte används!)
* Skapa en app.js modul i /src
* Importera tokenizer.js och en grammatik:
```javascript
import { Tokenizer } from './tokenizer.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
```
* Skapa en instans av Tokenizer med grammatiken som argument:
```javascript
import { Tokenizer } from './tokenizer.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new Tokenizer(wordAndDotGrammar)
```
* För att använda tokeniseraren, skapa en sträng och skicka med den i ett argument till metoden start:
```javascript
import { Tokenizer } from './tokenizer.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new Tokenizer(wordAndDotGrammar)

const tokens = tokenizer.start("Meningen består av ord.")
```
* För läsa ett token värde:
```javascript
import { Tokenizer } from './tokenizer.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new Tokenizer(wordAndDotGrammar)

const tokens = tokenizer.start("Meningen består av ord.") // Returnerar array med tokens

console.log(tokens[0].getTokenValue())
```
* För att läsa en token typ:
```javascript
import { Tokenizer } from './tokenizer.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const tokenizer = new Tokenizer(wordAndDotGrammar)

tokenizer.setNextActiveToken()

const tokens = tokenizer.start("Meningen består av ord.") // Returnerar array med tokens

console.log(tokens[0].getTokenType())
```

## TokenizerUI
* Skapa en app.js modul i /src
* Importera tokenizerUI.js och en grammatik:
```javascript
import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'
```
* Skapa en instans av TokenizerUI med grammatiken som argument:
```javascript
import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const ui = new TokenizerUI(wordAndDotGrammar)

```
* Starta TokenizerUI:
```javascript
import { TokenizerUI } from './tokenizerUI.js'
import { wordAndDotGrammar } from './grammars/wordAndDotGrammar.js'

const ui = new TokenizerUI(wordAndDotGrammar)
ui.start()
```
* Ange sträng visas i terminalen:

![Ange sträng](./img/enter-string.PNG)
* Ange sträng och tryck enter:

![Ange sträng](./img/enter-string2.PNG)
* Första aktiva strängen visas:

![Ange sträng](./img/loaded.PNG)
* Skriv next och tryck enter för att ändra till nästa token:

![Ange sträng](./img/next1.PNG)
* Nästa token visas:

![Ange sträng](./img/next2.PNG)
* Skriv prev och tryck enter för att ändra till förra token:

![Ange sträng](./img/prev1.PNG)
* Förra token visas:

![Ange sträng](./img/loaded.PNG)
* Skriv exit och tryck enter för att stänga applikationen:

![Ange sträng](./img/exit1.PNG)
* Appliationen stängs:

![Ange sträng](./img/exit2.PNG)