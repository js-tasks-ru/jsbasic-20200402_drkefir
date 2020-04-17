/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let breakTheLine = str.split('-'); //разбили фразу
    //console.log(`предложение выглядит так: ${breakTheLine}`);  
    let capitalLetter = breakTheLine.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)); //сделал заглавную букву 
    //console.log(capitalLetter);
    let readypPhrase = capitalLetter.join(""); //спаял вместе 
   // console.log(readypPhrase);  
    return readypPhrase;
}
