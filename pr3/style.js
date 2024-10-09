//
let title=document.getElementById("title");
let price=document.getElementById("price");
let taxes=document.getElementById("taxes");
let ads=document.getElementById("ads");
let discount=document.getElementById("discount");
let total=document.getElementById("total");
let caregory=document.getElementById("category");
let count=document.getElementById("count");
let submit=document.getElementById("submit");

//get total
function gettotal()
{
     if(price.value != ''){
          let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
          total.innerHTML = result;
          total.style.background = '#040';
     }else{
          total.innerHTML = '';
          total.style.background = ' #a00d02';

     }
}
//create produce
let datapro;
if(localStorage.product != null){
     datapro = JSON.parse(localStorage.product);
}else{
     datapro = [];
}
submit.onclick = function(){
     let newpro = {
          title:title.value,
          price:price.value,
          taxes:taxes.value,
          ads:ads.value,
          discount:discount.value,
          total:total.innerHTML,
          count:count.value,
          category:category.value,
     }
     datapro.push(newpro);
     localStorage.setItem('product', JSON.stringify(datapro))
     console.log(datapro); 
     cleardata();
     showdata() ;    
}
//clearn inputs
function cleardata(){
  title.value = '';
  price.value = '';
          taxes.value = '';
          ads.value ='';
          discount.value ='';
          total.innerHTML ='';
          count.value='';
          category.value='';
          

}
//read
function showdata()
{
     let table = '';
     for(let i = 0; i< datapro.length; i++){
          
         table += `
         <tr>
         <td>${i}</td>
         <td>${datapro[i].title}</td>
         <td>${datapro[i].price}</td>
         <td>${datapro[i].taxes}</td>
         <td>${datapro[i].ads}</td>
         <td>${datapro[i].discount}</td>
         <td>${datapro[i].total}</td>
         <td>${datapro[i].caregory}</td>
         <td><button id="update">update</button> </td>
         <td><button onclick="deletedata(${i})" id="delete">delete</button> </td>
         
         </tr>
 `
         
         
         
         
               
                    
          
     }
     document.getElementById('tbody').innerHTML = table;
     let btndelete = document.getElementById('deleteall'); 
      if(datapro.length > 0){
          btndelete.innerHTML = `
          <button onclick="deleteall()">deleteall</button>
          `

      }else{
          btndelete.innerHTML = '';
      }
}
showdata()
//delete
function deletedata(i)
{
     datapro.splice(i,1);
     localStorage.product = JSON.stringify(datapro);
     showdata();
}
function deleteall(){
     localStorage.clear();
     datapro.splice(0);
     showdata();
}

