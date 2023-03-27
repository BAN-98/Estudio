// conversion de un tipo de dato a otro
/*
-string=> String(), toString()
-numero=> Number(), parseInt()
-decimal=> Number(), pareFloat()
*/
// De entero a string
let dato = 15 
console.log(typeof(dato));//number

dato = dato.toString()
console.log(typeof(dato));//string

//De string a numero

dato = '45'
console.log(typeof(dato));//string

dato = Number(dato);
console.log(typeof(dato))//number

// De string a Float
dato = '4.5';
dato = parseFloat(dato);

console.log(typeof(dato));//number
