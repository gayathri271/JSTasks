let InputData=document.getElementById("inputData")
let SearchData=document.getElementById("searchitem")

SearchData.addEventListener("click",()=>{
  let city=InputData.value.trim()

  weather(city)
})
async function weather(city) {
  try {
    const apiKey = "75f77b66c641246a9a82744fb081a0a4";
    // const city = "Hyderabad";
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    let result = await data.json();
    console.log(result);
    // if(result.cod===200){
    if (result.name?.toLowerCase() === city.toLowerCase()) {
      console.log("Temperature:", result.main?.temp);
      console.log("Description:", result.weather?.[0]?.description);
    }else{
      console.log("City not found. Please enter a valid city name."); 
    }
  // }
  } catch (error) {
    console.log("Error:", error);
  }
}

