// // console.dir(document);
// console.log(document.title);
// document.title='Items';
// // console.log(document.forms);
// // console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header')
// // console.log(headerTitle);
// header.style.borderBottom='solid 3px #000'

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello 2';
// items[1].style.fontweight='bold';
// items[1].style.backgroundColor='yellow'
// items[3].style.backgroundColor='green';
// items.style.fontweight='bold'
// for(var i=0;i<items.length;i++){
//     items[i].style.fontweight='bold'
// }


// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello 2';
// li[1].style.fontweight='bold';
// li[1].style.backgroundColor='yellow'
// li[3].style.backgroundColor='green';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontweight='bold'
// }

// var header= document.querySelector("#main-header");
// header.style.borderBottom='solid 3px #ccc';
// var item = document.querySelector(".list-group-item");
// item.style.color='red';


var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor ='green';
   
}