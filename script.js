const convertButton = document.querySelector(".convert-button")   /*mapear o click do botâo ou seja habilitar o botâo */

/* const currencySelect = document.querySelector(".currency-select")*/

 function convertValues(){  /*funçâo que vai fazer a conversão das moedas no projeto */

const inputCurrencyValue = document.querySelector(".input-currency").value /*ir la no html  procurar e pegar o valor do input real */

const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /*valor em real */

const  currencyValueConverted = document.querySelector(".currency-value") /*outras moedas*/

/*console.log(currencySelect.value)*/
const dolarToday = 5.2 /* um vaz de conta que o dolar de hoje esteja com esse valor */
/*const euroToday= 6,2*/

/*fazer a mesma coisa com o dolar , o if permite que se tome  decisões no projeto
if(currencySelect.Value==euro){
currencyValueConverted.innerHtml= new INTL.NumberFormat("de-DE",{
style:"currency"
currency:"EUR"


}).format(inputCurrencyValue/euroToday)
}*/


const convertedValue = inputCurrencyValue / dolarToday  /*variavel que pega o valor convertido do input real dividido pelo valor do dolar hj */


currencyValueToConvert.innerHTML = inputCurrencyValue /* valor colocado no input a ser mudado quando convertido em real */
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{  /*operaçâo pra ajeitar e colocar as virgulas certa na opreçâo de converçâo eo idioma*/
   style:"currency", /*estilo de moeda ,  que vai ser o real */
   currency:"BRL" /* especificando a moeda*/
}).format(inputCurrencyValue) /* o valor que a pessoa  digitar*/


currencyValueConverted.innerHTML = convertedValue /* vai mudar o valor do dolar */
currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{  /*operaçâo pra ajeitar e colocar as virgulas certa na operaçâo de conversão eo idioma que e ingles */
style:"currency", /*estilo da moeda , que vai ser o dolar*/
currency:"USD" /* especificando a moeda*/
}).format(convertedValue) /*o valor obtido da conversâo do real em dolar*/


console.log(convertedValue) /*confirmar se realmente fez a oprecaçâo da conversâo */

console.log(inputCurrencyValue) /* confirmar se realmente ta pegando o valor do input real */


 }


/*trocar a bandeira dolar pro euro quando clicar no euro


function changeCurrency(){
 const currencyName = document.getElememntById("currency-name")  foi mudado no html o texto dolar com a id currency-name pra fazer a troca no java
agora trocar imagem
const currencyImage = document.querySelector(".currency-img")

console.log("trocou de moeda")
if (currencySelect.value =="dolar"){
currencyName.innerHTML = "dolar americano"
currencyImage.src="./assets/dolar.png"
}

if (currencySelect.value == "euro"){
currencyName.innerHTML = "Euro"
currencyImage.src="./assets/euro.png"
}
 
convertValue() pra fazer  a mudança de valores pro dolar e euro
}

currencySelect.addEventListiner("change",changecurrency)
*/

convertButton.addEventListener("click",convertValues) /*ouvinte de funçâo vai habilitar o click no botâo */
