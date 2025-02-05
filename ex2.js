function maxNum(arr){
    if(arr.length === 0)return"array is empty"
    let max = 0
    for( let i = 0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
        } 
    }
    return max ;
}
console.log(maxNum([2,4,3,8,5,1,2,4]))
 function y(n){
    let jam = 0;
    for(let i = 0 ; i<n.length; i++){
        if(n[i]>jam){
            jam = n[i]
        }
    }
    return jam;
 }