function squareDigits(num){
    const numArr = Array.from(String(num), Number);
    let arr = [];
    let result;
    
    for (let i = 0; i < numArr.length; i++) {
      arr.push(Math.pow(numArr[i], 2));
      console.log(arr);
    }
    result = Number(arr.join(""));
    console.log(result);
    
    return result;
}

console.log("Hello World!");