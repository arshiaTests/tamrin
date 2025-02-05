function sumOddnumber(arr){
    let sum = 0 ;
    let odd = arr.filter(num => num %2 !=0) // اعداد فرد را جدا میکند
    for(let i = 0 ; i < odd.length; i ++){
        sum += odd[i]
    }
    return sum;

}
console.log(sumOddnumber([1,2,3,4,5,6,7]))