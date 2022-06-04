const arr=[7,10,4,3,20,15];
const k=3;

function kth(arr,k){
    let obj={};
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=1;
    }
    let arr2=Object.keys(obj);
    return Number(arr2[k-1]);

}
console.log(kth(arr,k));