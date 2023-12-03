/* Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
*/

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

function manufacture(gifts, materials) {
  const giftArray = [];
  const lettersIncluded = materials.split("");
  //console.log("lettersIncluded", lettersIncluded);
  gifts.forEach(element => {
    const giftsWithLetters = element.split("");
    //console.log("giftsWithLetters", giftsWithLetters);
    if (giftsWithLetters.every(letter => lettersIncluded.includes(letter))) {
      // console.log('Sí')
      giftArray.push(element)
    }
  });
  return giftArray;
}

console.log(manufacture(gifts, materials))


