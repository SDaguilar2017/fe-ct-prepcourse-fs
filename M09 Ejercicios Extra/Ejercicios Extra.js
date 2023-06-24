/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let Arr = [];
   for (let prop in objeto) {
     let ArrInt = [prop , objeto[prop]];
      Arr.push(ArrInt);
   }
   return Arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let va1 = 'abcdefghijklmnopqrstuvwxyz'
   let cuenta = 0;
   let obj = {};
      for (let i = 0; i < va1.length; i++) {
         for (let j = 0; j < string.length; j++) {
            if (va1[i] === string[j]) {
               cuenta++
            }
         }
         if (cuenta > 0) obj[va1[i]] = cuenta;
         cuenta = 0;
      }
      return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let stringMay = "";
   let stringMin = "";
   for (let i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
         stringMay = stringMay + string[i];
      } else {
         stringMin = stringMin + string[i];
      }

   }
   string = stringMay + stringMin;
   return string;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let Arr = frase.split(' ');
   let palabra = "";
   let auxpal = '';
   frase = ""
   for (let i = 0; i < Arr.length; i++) {
      palabra = Arr[i];
      if (i > 0) frase = frase + ' ';
         for (let j = 0; j < palabra.length; j++) {
            auxpal = palabra[j] + auxpal;
         }
         frase = frase + auxpal;
         auxpal = '';
   }
   return frase;


}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numstring = numero.toString();
   let escap = "Es capicua";
   for (let i = 0; i < numstring.length/2; i++) {
      if (numstring[i] != numstring[numstring.length-1-i]) {
         escap = "No es capicua";}
   }
   return escap;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let Array = string.split("");
   let newA = [];
   for (let i = 0; i < Array.length; i++) {
      if (Array[i] == 'a' || Array[i] == 'b' || Array[i] == 'c') {
      } else {
         newA.push(Array[i]);
      }
   }
   let newString = newA.join('');
   return newString

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let nuevoArray = [];
   let auxArray = arrayOfStrings.map((str)=>{ return str.length;});
   console.log(auxArray);
   let max = auxArray[0];
   let min = auxArray[0];
   for (let i= 0; i < arrayOfStrings.length; i++) {
     if (max < auxArray[i]) max = auxArray[i];
     if (min > auxArray[i]) min = auxArray[i];
   }
   for (let j = min; j <= max; j++) {
     for (let i= 0; i < arrayOfStrings.length; i++) {
       if (auxArray[i] == j) nuevoArray.push(arrayOfStrings[i]);
     }
   }
   return nuevoArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo3 = []
   for (let i= 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         arreglo3.push(array1[i]);
      }
   }
   return arreglo3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
