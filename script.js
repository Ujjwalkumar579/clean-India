// var n = 2;
// function sqr(num)
// {
// 	var ans = num*num;
// 	return ans;
//    // console.log();
// }

// var sqr2 = sqr(n);
// var sqr3 = sqr(4);

// console.log(sqr2);
// console.log(sqr3);

function foo() {
   let x = (y = 0);
   x++;
   y++;
   return x;
 }
 
 console.log(foo(), typeof y,typeof x);