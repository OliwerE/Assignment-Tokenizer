# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] I min tokeniserare finns inga tokentyper eller reg-exp. Dessa finns i mitt testprojekt eftersom de skapas utav användaren.
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt, det bör fungera :) )
  - [x] De enda statiska metoder eller funktioner utanför klasser som jag har är för att starta upp min testapplikation ex main(java).
  - [x] De enda bibliotek och färdiga klasser som används är sådana som måste användas (eller som används för att testa modulen).

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. Då skall du inte lämna in!
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [ ] Kodkvaliterskraven är ifyllda
    - [ ] Reflektion är skriven
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna
    - [ ] Egna testfall för Maximal munch och kantfall
    - [x] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

## Återanvändning
<!-- Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din tokenizer. Om du skrivit instruktioner för din användare länka till dessa. Om inte beskriv här hur någon skall göra för att använda din kod med sin egen grammatik.  -->
Koden har anpassats för återanvändning genom att Tokenizer klassen inte har några beroende till någon av mina andra klasser. Tokenizerns enda uppgift är att tokenizera strängen enligt en grammatik och en textsträng. Alla tokens kan sedan hämtas från Tokenizer genom att gå fram och tillbaks med getNextToken, getPrevToken och getActiveToken. Instruktioner hur man använder tokeniseraren finns i [README.md](./RELEASE.md)

## Beskrivning av min kod
<!-- Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild.  -->
Koden består av två huvudklasser (tokenizer och tokenizerUI).

Tokenizer är den klass som tar emot ett token och en grammatik för att sedan tokenisera strängen enligt grammatiken. Tokenizer kan sedan användas för att läsa aktivt token, läsa nästa token eller lösa föregående token.

TokenizerUI är den klass som hanterar användargränssnittet. klassen använder sig av terminalen för visa och fråga användaren om data. Användaren kan även gå fram och tillbaks mellan olika aktiva token med hjälp av terminalen.

## Hur jag testat
<!-- Beskriv hur du kommit fram till om din kod fungerar. -->
Koden har testats med automatiska testfall i modulen tokenizerTests. Varje testfall är en funktion som skapar ett tokenizer objekt. Sedan startar funktionen tokeniseraren genom att anropa startmetoden med en testfallets sträng som argument. Sedan anropar funktionen next/prev metoderna enligt sekvensen i testfallet och jämför resultatet med det förväntade genom att anropa metoden getActiveToken.

## Testfall
<!-- Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. -->

| Namn      | Grammatik | Sträng | Sekvens | Förväntat Aktivt Token | PASS/FAIL |
| --------- | --------- | ------ | ------- | ------------ | --------- |
|    TC1       |   WordAndDotGrammar        |  “a”      |   []      |     WORD(“a”)         |        PASS   |
|    TC2      |   WordAndDotGrammar        |   “a aa”     |  [>]       |      WORD(“aa”)        |      PASS     |
|   TC3        |  WordAndDotGrammar         |   “a.b”     |   [>]      |       DOT(“.”)       |      PASS     |
|   TC4        |   WordAndDotGrammar        |  “a.b”    |   [>>]      |      **WORD(“b”)**        |    PASS       |
|   TC5        |   WordAndDotGrammar        |  “aa. b”   |   **[>>]**      |     WORD(“b”)         |      PASS     |
|   TC6        |   WordAndDotGrammar        |  “a .b”    |   [>><]      |       DOT(“.”)       |      PASS     |
|   TC7        |   WordAndDotGrammar        |   “”    |     []    |       END       |      PASS     |
|   TC8        |   WordAndDotGrammar        |   “ ”    |    []     |       **END**       |      PASS     |
|   TC9        |   WordAndDotGrammar        |   “a”    |     **[>]**    |        END      |      PASS     |
|   TC10        |  WordAndDotGrammar         |  “a”     |[<]|         **END**     |       PASS    |
|   TC11        |  WordAndDotGrammar         |   “!”    |     []    |    Exception      |      PASS     |
|   TC12        |  ArithmeticGrammar         |   “3”     |     []    |  NUMBER(“3”)   |     PASS      |
|   TC13        |  ArithmeticGrammar         |   “3.14”     |   []      |    NUMBER()   |        PASS   |
|   TC14        |  ArithmeticGrammar         |    “3 + 54 * 4”    |  [>>>]  |  MUL(“*”)  |   PASS     |
|   TC15        |  ArithmeticGrammar         |   “3+5 # 4”     |[>>>]|   **LexicalError(“No lexical element matches "# 4"”)**   |      PASS     |
|   TC16        |  ArithmeticGrammar         |“3.0+54.1     + 4.2”|[><>>>]|  **ADD(“+”)**  |    PASS       |

### Resultat:

![test](./img/test-result.png)

<!-- Du kan tillföra kommentarer om din tokeniserare skiljer sig något från standard.  -->

<!-- ### Testfall för högre betyg

Lista de enskilda testfallen. En rad per testfall.
| Namn      | Grammatik | Sträng | Sekvens | Förväntat Aktivt Token | PASS/FAIL |
| --------- | --------- | ------ | ------- | ------------ | --------- |
|           |           |        |         |              |           | -->

## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. 

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
|                      |                                              |
|                      |                                              |
|                      |                                              |
|                      |                                              |

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
|                      |                                              |
|                      |                                              |
|                      |                                              |
|                      |                                              |

## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 
