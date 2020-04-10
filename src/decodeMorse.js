decodeMorse = function (morseCode) {
     //codigo morse
     const codMorse = [
          '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
          '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.',
          '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----',
          '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----',
          '...---...', '.-.-.-', '--..--', '..--..', '.----.', '-.-.--', '-..-.', '-.--.',
          '-.--.-', '.-...', '---...', '-.-.-.', '-...-', '.-.-.', '-....-', '..--.-',
          '.-..-.', '...-..-', '.--.-.'
     ]
     //caracteres
     const caracteres = [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
          'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
          '2', '3', '4', '5', '6', '7', '8', '9', '0',
          'SOS', '.', ',', '?', "'", '!', '/', '(', ')',
          '&', ':', ';', '=', '+', '-', '_', '"', '$',
          '@', ' '
     ]
     //guardar uma palavra
     const word = []
     //guardar todas as palavras
     const allWords = []
     //guardar os numeros que relacionam morse e letra
     const index = []
     //guardar as palavras decodificadas
     const decod = []
     //guardar a string em forma de array
     var cod = []
     //guardar a quantidade de espaços antes do texto
     var contador = 0
     //contador para o laço de repetição whila
     var x = 0

     //transformar string em array
     cod = morseCode.split('')

     while (cod[x] == " ") {
          contador = contador + 1
          x++
     }

     //separar a string inicial em um array com as palavras formadas em morse
     for (let i = contador; i <= morseCode.length; i++) {
          const elementAnt = morseCode.charAt(i - 1)
          const element = morseCode.charAt(i)
          if (element == " " || element == "") {
               const element1 = morseCode.charAt(i + 1)
               const element2 = morseCode.charAt(i + 2)
               if (element1 == " " && element2 == " ") {
                    const ini = i - word.length
                    allWords.push(morseCode.substring(ini, i))
                    allWords.push(" ")
                    word.length = 0
               } else if (elementAnt != " ") {
                    const ini = i - word.length
                    allWords.push(morseCode.substring(ini, i))
                    word.length = 0
               }
          } else {
               word.push(element)
          }
     }

     //identificar quais as letras correspondentes ao morse
     for (let i = 0; i <= allWords.length; i++) {
          for (let j = 0; j < codMorse.length; j++) {
               if (allWords[i] == codMorse[j]) {
                    index.push(j)
               }
          }
          if (allWords[i] == " ") {
               index.push(55)
          }
     }

     //decodificar o morse
     for (let i = 0; i < index.length; i++) {
          const ind = index[i]
          decod.push(caracteres[ind])
     }

     //juntar a frase
     const res = decod.join('')

     console.log(res)

}

decodeMorse('... --- ... -.-.--')
