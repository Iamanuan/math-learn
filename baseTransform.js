/*
*
* 十进制和二进制转换
*
*/

// 十进制转二进制
let decimalNumber = 256

console.log(decimalNumber.toString(2)) // toString

function dec2bin(decNumber){
  if(decNumber<0){
    console.log('请输入一个非负整数！')
  }else{
    let temp = binary(decNumber)
    console.log(`${decNumber}的二进制是：${temp}`)
  }
}
dec2bin(decimalNumber)

function binary(num){
  let resArry = []
  let xresArry = []
  i = 0

  // 除2取余
  for(;num>0;){
    resArry.push(num % 2)
    num = parseInt(num / 2)
    i++
  }

  // 倒序
  for(j = i - 1;j>=0;j--){
    xresArry.push(resArry[j])
  }
  return xresArry.join().replace(/,/g,'')
}

// 二进制转十进制
let binaryNumber = 1010110

console.log(parseInt(binaryNumber,2)) // parseInt

//位运算