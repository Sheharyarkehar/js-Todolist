add=document.getElementById('Add');
localStorage.clear();
add.addEventListener("click", ()=> {
tit=document.getElementById('title').value;
desc=document.getElementById('desc').value;

 if(localStorage.getItem('itemsJson')==null)
 {
    console.log('updating list...');
   itemsJsonArray=[];
    itemsJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
  }
  else{
    itemsJsonArrayStr=localStorage.getItem('itemsJson');
    itemsJsonArray=JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));

  }

  

// for (let index = 0; index < itemsJsonArray.length; index++) {
//   console.log(itemsJsonArray[index]);
  
// }
let str='';
itemsJsonArray.forEach((element,index) => { 
  str+=`<tr> 
                   <th>${index}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn sm btn-primary">Delete</button></td>
                  
                </tr>`

})          
document.getElementById("tbd").innerHTML=str;
});