var array=[1,1,1,1,1,1,1]
console.log(array);
var modifiedArray = [];
var wasOne=[];


function CheckingForOne (){
   
        var i;
        for (i = 0; i < array.length; i++) {
        // if there is a one  save index to variable(wasOne) and flipEitherSide()
        if (array[i] == 1){
            wasOne = array.indexOf(i);
            array[wasOne] = '.';
            console.log(array[wasOne]);
            // flipEitherSide(wasOne);
        }else{
            console.log(" no ones" + array);
        }
        
      };
//if there are no 1's check for 0, if 0 is true alert cant be solved
// if no ones and no zero's alert solved

}

function flipEitherSide(wasOne){
    let oneAbove = wasOne += 1;//index of one above
    let oneBelow = wasOne -= 1;// index of one below
    //change array[wasOne] to '.' and flipEitherSide()
   
    // if
    // array[oneAbove] = 1 ? 0 : 1;
    // array[oneBelow] = 1 ? 0 : 1;
  
    // CheckingForOne();
    
//charAt wasOne +=1/-=1 change to 1?0:1
}
CheckingForOne();