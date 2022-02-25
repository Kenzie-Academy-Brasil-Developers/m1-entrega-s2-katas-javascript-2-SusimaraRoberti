// comece a criar a sua função add na linha abaixo
function add(a, b) {
  let contador = 0;
  for (let i = 0; i < a; i++) {
    contador++;
  }
  for (let i = 0; i < b; i++) {
    contador++;
  }
  return contador;
}

// descomente a linha seguinte para testar sua função
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado"
);

// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
  let multiplica = b;
  let resultado = 0;
  for (let i = 0; i < a; i++) {
    resultado = add(multiplica, resultado);
  }
  return resultado;
}

// descomente a linha seguinte para testar sua função
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// comece a criar a sua função power na linha abaixo
function power(x, n) {
  let potencia = x;
  if (n === 0) return 1;
  for (let i = 0; i < n - 1; i++) {
    potencia = multiply(potencia, x);
  }
  return potencia;
}

// descomente a linha seguinte para testar sua função
console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// comece a criar a sua função factorial na linha abaixo

function factorial(x) {
  let fatorial = 1;
  for (let i = 1; i <= x; i++) {
    fatorial = multiply(fatorial, i);
  }
  return fatorial;
}

// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(termo) {
  let anterior = 0;
  let proximo = 1;
  let aux;

  if (termo === 1) {
    return 0;
  } else if (termo === 2) {
    return 1;
  } else {
    for (let i = 2; i <= termo; i++) {
      aux = proximo;
      proximo = add(anterior, proximo);
      anterior = aux;
    }
    return proximo;
  }
}

// descomente a linha seguinte para testar sua função
console.assert(
  fibonacci(7) === 13,
  "A função fibonacci não está funcionando como esperado"
);
