let RegEx = (date) => {
  let a, b, c, d, e;

  let vocales = date.match(/[aeiou]/g, "");
  let palabras = date.match(/[^\s]+/g, "");
  let numeros = date.match(/[0-9]/g, "");
  let mayusculas = date.match(/\b[A-Z]/g, "");
  //let novocales = date.match( /[a-zA-z]+[aeiou]\b/g,"");
  let novocales = date.match(/[^aeiou\W\d]\b/g, "");

  //Cuenta las vocales en todo el texto
  if(vocales === null){
    a = 0;
  }else{
    a = vocales.length;
  }
  //Cuenta el total de palabras recibidas
  if(palabras === null){
    b = 0;
  }else{
    b = palabras.length;
  }
  //Cuenta los numeros uno por uno
  if(numeros === null){
    c = 0;
  }else{
    c = numeros.length;
  }
  //palabras que inicin con mayuscula
  if(mayusculas === null){
    d = 0;
  }else{
    d = mayusculas.length;
  }
  //Que no termine en vocal
  if(novocales === null){
    e = 0;
  }else{
    e = novocales.length;
  }
 
  return `<p class="results"> 
    Cantidad de vocales recibidas: ${a}  
    <br>Cantidad de palabra recibidas: ${b}  
    <br>Cantidad de numeros contenidos en el mensaje enviado: ${c} 
    <br>Cantidad de palabras que inician con mayuscula: ${d} 
    <br>Palabras que finalizan con letras que no son vocal: ${e}  
          </p>`;
}
