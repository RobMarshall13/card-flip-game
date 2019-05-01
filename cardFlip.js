var array = [1,0,1,1,0,0,0]
console.log('original array ' + array)

function checkSolvable(){
    for( i =0; i < array.length; i++){
        //this if statement does not execute
        if ((array[i] == '.') && ((i > 0) || (i < array.length))) {
           
            lowerArray = array.slice(0,i);
            console.log('lower array ' + lowerArray);
            upperArray = array.slice(i, array.length)
            console.log('upper array ' + upperArray)
            if(upperArray.includes(1)){
                if( lowerArray.includes(1)){
                findOne();
            }else{
                console.log('unsolvable')
            }
        }else{
            console.log('unsolvable')
        }
    }findOne();
}
}

function findOne(){
    for ( i = 0; i < array.length; i++){
        if ((array[i]) == 1){
         array[i] = '.';
         if((i-1 >= 0)){
         if ((array[i-1] != 1) && (array[i-1] != '.') ){
             array[i-1] = 1;
         }else if((array[i-1] != 0) && (array[i-1] != '.') ){
                array[-1] = 0;
         }else{};
        }
        if((i+1 < array.length)){
            if ((array[i+1] != 1) && (array[i+1] != '.') ){
                array[i+1] = 1;
            }else if((array[i+1] != 0) && (array[i+1] != '.') ){
                   array[+1] = 0;
            }else{};
           }
           checkSolvable();
         console.log(array);
        }
    }
    
}



// findOne();
checkSolvable();