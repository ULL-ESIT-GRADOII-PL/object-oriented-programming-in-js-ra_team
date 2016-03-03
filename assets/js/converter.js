

(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
        if(!tipo){
          var expresion = XRegExp('(?<num>   [-+]?[0-9]+(\.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
                                  '(?<tipo>    [fkcml])[ ]*                                       # inputTemp \n','x' + 'i');

          var valor = XRegExp.exec(valor, expresion);

          this.valor = valor.num;
          this.tipo = valor.tipo;
        }
        /* ademas de new Medida(45.2, "Km") */
        else{
          this.valor = valor;
          this.tipo = tipo;
        }

    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }


  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }

  function Celsius(valor)
  {
  }

  function Farenheit(valor)
  {
  }

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;

  exports.convert = function() {
        var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
            /* Extienda la RegeExp a la especificación. use una XRegExp */

        expresion = XRegExp('(?<num>   [-+]?[0-9]+(\.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
                                '(?<input>    [fkcml])[ ]*                                       # inputTemp \n' +
                                '(?<to>       (?:to)?)[ ]*                                        # to           \n' +
                                '(?<output>    [fkcml])[ ]*                                       # outputTemp','x' + 'i');

        valor = XRegExp.exec(valor, expresion);


      if (valor) {
       var inputTemp = new Medida(valor.num, valor.input);

       var tipo   = valor.output;

       //numero = parseFloat(numero);
       console.log("Valor: " + valor.input);

       switch (tipo) {
         case 'c':
           var celsius = new Celsius(numero);
           elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
           break;
         case 'f':
           var farenheit = new Farenheit(numero);
           elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
           break;

         default:
          /* rellene este código */
       }
     }
    else
      elemento.innerHTML = "";
  };
})(this);
