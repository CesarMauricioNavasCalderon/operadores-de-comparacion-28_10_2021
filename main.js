let nombre = 'cesar mauricio navas calderon ';
console.log(nombre);
console.log(Object(nombre,));

let numero1 = 3;

let numero2 = "3";

let mystyle = `font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
color:#1B0466;
font-weight: 500;
border-radius: 10px;
background:#FFF69C;
padding: 5px;`;

let mystyledata = `font-family:curive;
color:#1B0466;
font-weight: 500;
border-radius: 10px;
background:#D1936F;
padding: 5px;
`;


console .group ("tipos de datos");
 console.log (`variable numero1, datos: ${numero1} tipo de dato '${typeof(numero1)}'.`);
 console.log (`variable numero2, datos: ${numero2} tipo de dato '${typeof(numero2)}'.`);
 console.groupEnd();


console.log ( `%coperador igualdad%c ,(${numero1} == ${numero2}) :`,mystyle,mystyledata,numero1 == numero2); 
console.log ( `%coperador identico%c ,(${numero1}, ${typeof(numero1)} == ${numero2}, ${typeof(numero2)}):` ,mystyle,mystyledata,numero1 == numero2 );

console.log ( `%coperador diferente %c(${numero1} != ${numero2}): ` ,mystyle,mystyledata,numero1 != numero2 );
console.log ( `%coperador no identico%c (${numero1}, ${typeof(numero1)} !== ${numero2}, ${typeof(numero2)}):` ,mystyle,mystyledata,numero1 !== numero2 );

console.log ( `%coperador mayor%c (${numero1} > ${numero2} ) : ` ,mystyle,mystyledata,numero1 > numero2 );
console.log ( `%coperador mayor igual%c(${numero1} >= ${numero2}): ` ,mystyle,mystyledata,numero1 >= numero2 );

console.log ( `%coperador menor%c (${numero1} < ${numero2} ): ` ,mystyle,mystyledata,numero1 < numero2 );
console.log ( `%coperador menor igual%c (${numero1} <= ${numero2} ): ` ,mystyle,mystyledata,numero1 <= numero2 );



