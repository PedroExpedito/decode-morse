function deCodeMorse(word){
  /* alfabeto em morse */
  const morse = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
    '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.',
    '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----',
    '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----',
    '...---...', '.-.-.-', '--..--', '..--..', '.----.', '-.-.--', '-..-.', '-.--.',
    '-.--.-', '.-...', '---...', '-.-.-.', '-...-', '.-.-.', '-....-', '..--.-',
    '.-..-.', '...-..-', '.--.-.'
  ]
  /* alfabeto correspondente em seila oque kk parece ASCII */
  const alfab = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
    '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'SOS', '.', ',', '?', "'", '!', '/', '(', ')',
    '&', ':', ';', '=', '+', '-', '_', '"', '$',
    '@', ' '
  ]
  /* retWord vai ser o valor retornado */
  var retWord = []
  /* comando interno do java script para divididar conforme o parametro no caso array
   * para char */
  word = word.split(' ');

  for( var i = 0; i < word.length; i++){

    for( var j = 0; j < alfab.length; j++){

      if (word[i] == morse[j]){
        retWord.push(alfab[j]);
      }
    }
  }
  /* parecido com o split porém esse junta de acordo com o parametro */
  retWord = retWord.join('');
  return retWord;
}
console.log(deCodeMorse('... --- ... -.-.--'));

