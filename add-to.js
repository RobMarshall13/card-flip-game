var mynum = 998;
var digits = [];
function addOne(){

    while(mynum){
        digits.push(mynum % 10);
         mynum = Math.floor(mynum/10)
        console.log(mynum);
       
        }
    } 
    

addOne();
for(i=0; i<digits.length; i++){
    digits[i] = digits[i] += 1;
    mynum = digits.reverse();
    console.log(mynum);
}