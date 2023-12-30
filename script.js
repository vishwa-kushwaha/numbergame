const id1 = document.getElementById("id1");
const facts= document.querySelector(".facts")
const display= document.querySelector(".display-4")

let name= prompt("Enter your name")
display.innerHTML=`Hello  ${name}`

id1.addEventListener('submit', (e) => {
  e.preventDefault();  
  const number = e.target.querySelector('input[type="number"]').value;
  fetch(`http://numbersapi.com/${number}`)
  .then((res)=>{
    return res.text()
  })
  .then((value)=>{
    console.log(value)
    facts.innerHTML = value
  })
  .catch((err)=>{
    console.log(err)
  })
  


}) 


// console.log("hello")


// var input = document.getElementById("input");




// function fetchNum()
// {
//   preventDefault()
//   input.addEventListner("input",fetchNum)
//   var input_value=input.value;

//   try
//   {
//     fetch("http://numbersapi.com/" + input_value)
//     .then(response => response.text())
//     .then(data => p.innerHTML = data)
//   }
//   catch
//   {console.log("error")}
        
// }

// input.addEventListener('Submit', fetchNum);