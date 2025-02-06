function less(num){
    let min= num[0];
    for(let i=1;i<num.length;i++){
        if(num[i]<min){
            min =num[i]; 
        }
    }
    return min
}
console.log(less([3,4,72,2,4,3,4]))