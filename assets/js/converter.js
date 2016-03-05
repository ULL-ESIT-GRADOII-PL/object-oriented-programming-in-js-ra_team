

(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    if(!tipo){
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

  Celsius.prototype.to = function (outputType) {
    switch (outputType.toLowerCase()) {
      case 'f':
         return this.toFarenheit() + " Farenheit";
      case 'k':
         return this.toKelvin() + " Kelvin";
      default:
         return 0;
    }
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
    return (5 * (this.valor - 32) / 9) + 273.15;
  }

  Farenheit.prototype.to = function (outputType) {
    switch (outputType.toLowerCase()) {
      case 'c':
         return this.toCelsius() + " Celsius";
      case 'k':
         return this.toKelvin() + " Kelvin";
      default:
         return 0;
    }
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

  Kelvin.prototype.to = function (outputType) {
    switch (outputType.toLowerCase()) {
      case 'c':
         return this.toCelsius() + " Celsius";
      case 'f':
         return this.toFarenheit() + " Farenheit";
      default:
         return 0;
    }
  }



  function Longitud(valor,tipo)
  {
    Medida.call (this, valor, tipo);
  }

  // There we set the inheritance
  Longitud.prototype = new Medida ();
  Longitud.prototype.constructor = Longitud;

  function Meters (valor) {
    Longitud.call (this, valor, "Meters");
  }

  Meters.prototype = new Longitud ();
  Meters.prototype.constructor = Meters;

  Meters.prototype.toInches = function () {
    return (this.valor * 39.3701);
  }

  function Inches (valor) {
    Longitud.call (this, valor, "Inches");
  }

  Inches.prototype = new Longitud ();
  Inches.prototype.constructor = Inches;

  Inches.prototype.toMeters = function () {
    return (this.valor / 39.3701);
  }


  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.Longitud = Longitud;
  exports.Meters = Meters;
  exports.Inches = Inches;

  exports.convert = function() {
      var valor = document.getElementById('convert').value,
      elemento  = document.getElementById('converted'),
      expresion = XRegExp('(?<num>      [-+]?[0-9]+(\.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
                          '(?<input>    [fkcmi])[ ]*                                           # inputTemp    \n' +
                          '(?<to>       (?:to)?)[ ]*                                           # to           \n' +
                          '(?<output>   [fkcmi])[ ]*                                           # outputTemp', 'x' + 'i'),

      valor = XRegExp.exec(valor, expresion);
      if (valor.length == 6) {
       switch (valor.input.toLowerCase()) {
         case 'c':  // CELSIUS TO X
           var celsius = new Celsius (parseFloat (valor.num));
           elemento.innerHTML = celsius.to (valor.output);
           break;
         case 'f':  // FARENHEIT TO X
           var farenheit = new Farenheit (parseFloat (valor.num));
           elemento.innerHTML = farenheit.to (valor.output);
           break;
         case 'k': // KELVIN TO X
           var kelvin = new Kelvin (parseFloat (valor.num));
           elemento.innerHTML = kelvin.to (valor.output);
           break;
         case 'm':  // METERS TO X
           var meters = new Meters (valor.num);
           elemento.innerHTML = meters.toInches () + " Inches";
           break;
         case 'i':  // INCES TO X
           var inches = new Inches (valor.num);
           elemento.innerHTML = inches.toMeters () + " Meters";
           break;
         default:
           window.alert ("The input value is very strange for me..");
       }
     }
    else
      elemento.innerHTML = "";
  };
})(this);
