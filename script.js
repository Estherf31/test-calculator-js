function insert(num) {
   document.querySelector(".viewfinder").innerHTML += num; 
} 

function clean() {
 document.querySelector(".viewfinder").innerHTML = "";   
}

function calculate() {
  let viewfinder = document.querySelector(".viewfinder").innerHTML;

  if(viewfinder) {
    document.querySelector('.viewfinder').innerHTML = eval(viewfinder);
  } else {
    document.querySelector('viewfinder').innerHTML = "nenhum comando...";
  }
}
