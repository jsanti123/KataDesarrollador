// Hash MD5
const Md5 = "d4621655bd94041050b1c81a9f9c7b3b";

// Función que retorna el primer número que se encuentre en un hash
function selectedNumber(hash) {
    for (const char of hash) {
        if (!isNaN(parseInt(char))) {
            return parseInt(char);
        }
    }
}

let S = selectedNumber(Md5);
S = 6;

// Función que propone la primera solución al problema
function solution1(lista, S) {
    const resultado = [];

    for (const numero of lista) {
        const temp = [];
        for (const digito of numero.toString()) {
            if (parseInt(digito) < S) {
                temp.push(digito);
            }
        }
        if (temp.length !== 0) {
            const tempNumber = parseInt(temp.join(''));
            resultado.push(tempNumber);
        }
    }

    // Invertir lista
    for (let i = 0; i < Math.floor(resultado.length / 2); i++) {
        const temp = resultado[i];
        resultado[i] = resultado[resultado.length - 1 - i];
        resultado[resultado.length - 1 - i] = temp;
    }

    return resultado;
}

// Pruebas
console.log(solution1([1, 2, 3, 4, 5, 6], S));
console.log(solution1([10, 20, 30, 40], S));
console.log(solution1([6], S));
console.log(solution1([66], S));
console.log(solution1([65], S));
console.log(solution1([6, 2, 1], S));
console.log(solution1([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], S));

console.log("----------------------------------------------------------------------");

// Función de ordenamiento Merge Sort
function mergeSort(array) {
    if (array.length > 1) {
        // Dividir la lista en mitades
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        // Llamadas recursivas para ordenar las mitades
        mergeSort(leftHalf);
        mergeSort(rightHalf);

        // Inicializar índices para recorrer las mitades y la lista principal
        let i = j = k = 0;

        // Fusionar las dos mitades ordenadas
        while (i < leftHalf.length && j < rightHalf.length) {
            //Compara los elementos de las dos mitades(izquierda, derecha) y los agrega a la lista principal
            if (leftHalf[i] < rightHalf[j]) {
                array[k] = leftHalf[i];
                i++;
            } else {
                array[k] = rightHalf[j];
                j++;
            }
            k++;
        }

        // Verificar si hay elementos restantes en ambas mitades
        while (i < leftHalf.length) {
            array[k] = leftHalf[i];
            i++;
            k++;
        }

        while (j < rightHalf.length) {
            array[k] = rightHalf[j];
            j++;
            k++;
        }
    }
}

//Funcion que propone la segunda solucion

function solution2(lista, S) {
    const resultado = [];
    for (const numero of lista) {
        if (Math.pow(numero, 2) < (S * 10) + S) {
            resultado.push(Math.pow(numero, 2));
        }
    }

    mergeSort(resultado);

    return resultado;
}

// Pruebas
console.log(solution2([1, 2, 3, 5, 6, 8, 9], S));
console.log(solution2([-2, -1], S));
console.log(solution2([-6, -5, 0, 5, 6], S));
console.log(solution2([-10, 10], S));

console.log("----------------------------------------------------------------------");


function solution3(lista) {
    mergeSort(lista);
    let acumuladoMoneda = lista[0];
    
    if (acumuladoMoneda > 1) {
        return 1;
    }

    for (let index = 1; index < lista.length; index++) {
        if (lista[index] > acumuladoMoneda + 1) {
            return acumuladoMoneda + 1;
        }
        acumuladoMoneda += lista[index];
    }

    return acumuladoMoneda + 1;
}
//[1,2,3,8]
// Pruebas
console.log(solution3([5, 7, 1, 1, 2, 3, 22]));
console.log(solution3([1, 1, 1, 1, 1]));
console.log(solution3([1, 5, 1, 1, 1, 10, 15, 20, 100]));

console.log("----------------------------------------------------------------------");

