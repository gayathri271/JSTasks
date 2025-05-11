let Name = localStorage.getItem("username");
let count = localStorage.getItem("countnumber");




if (!Name) {
  Name = prompt("Enter your name:");
  count = 1;
  localStorage.setItem("username", JSON.stringify(Name));
}else{
    count=parseInt(count)+1
}
  localStorage.setItem("countnumber", count);

let displayInfo = document.getElementById("info");
displayInfo.innerHTML = `Hello ${Name},this is your ${count} visit!`;

function resetButton(){
    localStorage.clear()
    // alert("reset done successfully")
    location.reload()
}