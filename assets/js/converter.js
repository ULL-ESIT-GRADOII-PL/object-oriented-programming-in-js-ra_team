

(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
        if(!tipo){
        //  var expresion = XRegExp('(?<num>   [-+]?[0-9]+(\.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
        //                          '(?<tipo>    [fkcml])[ ]*                                       # inputTemp \n','x' + 'i');

//          var valor = XRegExp.exec(valor, expresion);

      //    this.valor = valor.num;
      //    this.tipo = valor.tipo;
        }
        /* ademas de new Medida(45.2, "Km") */
        else{
          this.valor = valor;
          this.tipo = tipo;
        }

    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }

  Medida.prototype.constructor = Medida;

  Medida.prototype.getValue = function () {
    return this.valor;
  }

  Medida.prototype.getType = function () {
    return this.type;
  }



  function Temperatura(valor,tipo)
  {
    Medida.call (this, valor, tipo);
  }

  // There we set the inheritance
  Temperatura.prototype = new Medida ();
  Temperatura.prototype.constructor = Temperatura;


  function Celsius(valor) {
    Temperatura.call (this, valor, 'Celsius');
  }

  // There we set the inheritance
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFarenheit = function () {
    return (this.valor * 1.8 + 32);
  }

  Celsius.prototype.toKelvin = function () {
    return (this.valor + 273.15);
  }

  function Farenheit(valor) {
    Temperatura.call (this, valor, "Farenheit");
  }

  // There we set the inheritance
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;

  Farenheit.prototype.toCelsius = function () {
    return (this.valor - 32) * 5 / 9;
  }

  Farenheit.prototype.toKelvin = function () {
    return (5 * (this.valor - 32) / 9) + 273.15);
  }

  function Kelvin (valor) {
    Temperatura.call (this, valor, "Kelvin");
  }

  // There we set the inheritance
  Kelvin.prototype = new Temperatura ();
  Kelvin.prototype.constructor = Kelvin;

  Kelvin.prototype.toCelsius = function () {
    return (this.valor - 273.15);
  }

  Kelvin.prototype.toFarenheit = function (){
    return ((this.valor * 1.8) - 459.67);
  }




  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convert = function() {
        var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
            /* Extienda la RegeExp a la especificación. use una XRegExp */

        expresion = XRegExp('(?<num>   [-+]?[0-9]+(\.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
                                '(?<input>    [fkcml])[ ]*                                       # inputTemp \n' +
                                '(?<to>       (?:to)?)[ ]*                                        # to           \n' +
                                '(?<output>    [fkcml])[ ]*                                       # outputTemp','x' + 'i'),

        valor = XRegExp.exec(valor, expresion);


      if (valor.length == 6) {

       switch (valor.input) {
         case 'c':
           var celsius = new Celsius(valor.num);
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
      elemento.innerHTML = "MAL";
  };
})(this);
