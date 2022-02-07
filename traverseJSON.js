var obj = {a: 1, b: 2, c: {a: 1, b: 2}};
var sum= 0;
function walk(obj) {
//  let sum = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
       if(typeof val == 'number'){
       sum= sum + val;
        // console.log(val);
       }
      walk(val);
    }
  }
  return sum;
}
console.log(walk(obj));