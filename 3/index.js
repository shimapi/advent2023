/* En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
*/

//Esta solución pasó todos los test, menos un test sorpresa... a probar otra solución.
function findNaughtyStep(original, modified) {
  const originalArr = original.split('');
  const modifiedArr = modified.split('');
  //console.log(originalArr)
  //console.log(modifiedArr)
  const differenceArr = [];

  // comparo originalArr con modifiedArr
  for (let i = 0; i < originalArr.length; i++) {
    if (modifiedArr.indexOf(originalArr[i]) === -1) {
      differenceArr.push(originalArr[i]);
    }
  }

  // comparo modifiedArr con originalArr
  for (let i = 0; i < modifiedArr.length; i++) {
    if (originalArr.indexOf(modifiedArr[i]) === -1) {
      differenceArr.push(modifiedArr[i]);
    }
  }

  console.log(differenceArr)

  if (differenceArr == []) {
    return '';
  } else {
    return differenceArr.toString();
  }
}

findNaughtyStep("stepssfor", "stepfsor")
