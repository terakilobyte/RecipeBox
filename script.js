var arr;
var newArr;

localStorage.setItem("key",[1,2,3,4,5]);
arr = localStorage.getItem("key");
newArr = arr.split(',');

console.log(newArr);
// for(var prop in localStorage) {
//   console.log(localStorage[prop]);
// }

for(var i = 0; i < newArr.length; i++) {
  $('body').append(" " + newArr[i]);
 }
