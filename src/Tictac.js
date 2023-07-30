// import { useState } from "react";

    let brr=[ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ]
    let arr=[]
    let a
    for(let i=0;i<3;i++){
        a=[]
for(let j=0;j<3;j++){
    a.push(0)
}
arr.push(a)
    }
export let arry=arr
export function validation(arr,i,j,player){
    let common=player
   for(a=0;a<3;a++){
    if(arr[i][a]!=player){
        break;
    
   }
   else if(a==2){
    return true;
   }
}

for(a=0;a<3;a++){
    if(arr[a][j]!=player){
        break;
    
   }
   else if(a==2){
    return true;
   }
}
if(i+j==2){
    for(a=0;a<3;a++){
        if(arr[2-a][a]!=player){
            break;
        }
        else if(a==2){
            return true;
           }
    }
}
if(i==j){
    for(a=0;a<3;a++){
        if(arr[a][a]!=player){
            break;
        }
        else if(a==2){
            return true;
           }
    }
}
return false;
}
//  const Tictactoe =()=>{
//     let data = new Map(arr);

//     return(<div>
        
//         </div>)
//  }
console.log(validation(brr,0,0,1))
console.log('titanic lkdlsdlkadladjladj')