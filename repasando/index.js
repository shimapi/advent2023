let nombres = ['juanita', 'damian', 'venus', 'dromedaria'];
let nombres2 = ['locura', 'bonita', 'calma', 'paz'];

for (index in nombres) {
  if (index == 2) {
    break;
  }
  console.log(index)
}


for (valor of nombres2) {
  if (valor == "calma") {
    continue;
  }
  console.log(valor);
}


