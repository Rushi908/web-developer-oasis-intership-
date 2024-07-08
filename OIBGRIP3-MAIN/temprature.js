
const convertFahrenheit = () =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var far = (1.8 * celsius)+32;
    var a = far.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}

const convertCelsius = () =>{
    var Fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var cel = (Fahrenheit -32)/1.8;
    var b = cel.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = Fahrenheit;
}

const reset = () =>{
    document.querySelector("#celsius").value = "";
    document.querySelector("#fahrenheit").value = "";

}