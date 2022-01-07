function x () {
  let n = 99;
  while (n > 1) {
    console.log(n + ' bottles of beer on the wall,' + n + ' bottles of beer. Take one down and pass it around,' )
    n--;
  } 
  if (n == 1) {
    console.log( n + ' bottle of beer on the wall. '+ n +' bottle of beer on the wall, '+n+' bottle of beer. Take one down and pass it around, ');
    n--;
  }
  if (n == 0) {
console.log('no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
  }
     
} 
console.log(x());