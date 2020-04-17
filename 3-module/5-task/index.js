/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let numFromStr = '';
   for (let i = 0; i < string.length; i++) {
     if (isFinite(string[i]) || string[i] == '-' || string[i] == '.') {
       numFromStr += string[i]; //присваеваем каждое найденное значение в numFromStr
     } else {
       numFromStr += '/'; //
     }
   }
  let arrStr = numFromStr.split('/');
   for (let j = 0; j < arrStr.length; j++) {
     arrStr = arrStr.map(item => isNaN(parseFloat(item)) ? arrStr.splice(j, item) : parseFloat(item)); 
   }
   let min = Math.min(...arrStr);
   let max = Math.max(...arrStr);
   let result = {min, max};
   return result;
}
