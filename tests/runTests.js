import * as tokeniserTests from './tokenizerTests.js'

const start = () => {
console.table({ "TC1: första aktiv token": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a',
    Sekvens: '[]',
    Förväntat: 'WORD("a")',
    Resultat: (tokeniserTests.tc1() ? 'PASS' : 'FAIL')
  },
  "TC2: andra aktiv token word": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a aa',
    Sekvens: '[>]',
    Förväntat: 'WORD("aa")',
    Resultat: (tokeniserTests.tc2() ? 'PASS' : 'FAIL')
  },
  "TC3: andra aktiv token dot": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a.b',
    Sekvens: '[>]',
    Förväntat: 'DOT(".")',
    Resultat: (tokeniserTests.tc3() ? 'PASS' : 'FAIL')
  },
  "TC4: tredje aktiv token word": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a.b',
    Sekvens: '[>>]',
    Förväntat: 'WORD("b")',
    Resultat: (tokeniserTests.tc4() ? 'PASS' : 'FAIL')
  },
  "TC5: tredje aktiv token word": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'aa. b',
    Sekvens: '[>>]',
    Förväntat: 'WORD("b")',
    Resultat: (tokeniserTests.tc5() ? 'PASS' : 'FAIL')
  },
  "TC6: fjärde aktiv token dot": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a .b',
    Sekvens: '[>><]',
    Förväntat: 'DOT(".")',
    Resultat: (tokeniserTests.tc6() ? 'PASS' : 'FAIL')
  },
  "TC7: fjärde aktiv token end": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: '',
    Sekvens: '[]',
    Förväntat: 'END',
    Resultat: (tokeniserTests.tc7() ? 'PASS' : 'FAIL')
  },
  "TC8: fjärde aktiv token end": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: ' ',
    Sekvens: '[]',
    Förväntat: 'END',
    Resultat: (tokeniserTests.tc8() ? 'PASS' : 'FAIL')
  },
  "TC9: andra aktiv token end": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a',
    Sekvens: '[>]',
    Förväntat: 'END',
    Resultat: (tokeniserTests.tc9() ? 'PASS' : 'FAIL')
  },
  "TC10: Gå bakåt till end token": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: 'a',
    Sekvens: '[<]',
    Förväntat: 'END',
    Resultat: (tokeniserTests.tc10() ? 'PASS' : 'FAIL')
  },
  "TC11: Gå bakåt till lexikalfel": {
    Grammatik: 'WordAndDotGrammar',
    Sträng: '!',
    Sekvens: '[]',
    Förväntat: 'Exception',
    Resultat: (tokeniserTests.tc11() ? 'PASS' : 'FAIL')
  },
  "TC12: Första aktiv token number": {
    Grammatik: 'ArithmeticGrammar',
    Sträng: '3',
    Sekvens: '[]',
    Förväntat: 'NUMBER("3")',
    Resultat: (tokeniserTests.tc12() ? 'PASS' : 'FAIL')
  },
  "TC13: Första aktiv token number": {
    Grammatik: 'ArithmeticGrammar',
    Sträng: '3.14',
    Sekvens: '[]',
    Förväntat: 'NUMBER("3.14")',
    Resultat: (tokeniserTests.tc13() ? 'PASS' : 'FAIL')
  },
  "TC14: Fjärde aktiv token mul": {
    Grammatik: 'ArithmeticGrammar',
    Sträng: '3 + 54 * 4',
    Sekvens: '[>>>]',
    Förväntat: 'MUL("*")',
    Resultat: (tokeniserTests.tc14() ? 'PASS' : 'FAIL')
  },
  "TC15: Fjärde aktiv token lexikalfel": {
    Grammatik: 'ArithmeticGrammar',
    Sträng: '3+5 # 4',
    Sekvens: '[>>>]',
    Förväntat: 'Lexikalfel("# 4")',
    Resultat: (tokeniserTests.tc15() ? 'PASS' : 'FAIL')
  },
  "TC16: 6:e aktiv token add": {
    Grammatik: 'ArithmeticGrammar',
    Sträng: '3.0+54.1     + 4.2',
    Sekvens: '[><>>>]',
    Förväntat: 'ADD("+")',
    Resultat: (tokeniserTests.tc16() ? 'PASS' : 'FAIL')
  }
})
}
start()
