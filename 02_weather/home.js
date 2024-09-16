// creating an api request grasping the async fetch concept of the javascript
// wronge code shyd?

// const fetchWeather = async () => {
//     const response = await fetch("http://api.weatherapi.com/v1/current.json?key=c4d5ead1180e48cd858220207240609&q=Mumbai&aqi=no")
//     const data = await response.json();
//     console.log(data);
//     const locname = document.getElementById('cityInput')
//     const btn = document.getElementById('searchBtn')
//     const feted = data.location;
//     console.log(feted)
//     const cel = data.current;
//     console.log(cel)
    

//     const addTemp = () => {
//      const temVal = document.getElementById('tempValue');
//      temVal.innerHTML = cel.temp_c;

//     }

//     const updateWeather = () =>{
//     let city;
//     for (const key in feted) {
//            const similar =  feted[key].toLowerCase();
//            city = locname.value.toLowerCase()
//            if (city === similar) {
//             addTemp();
//            }      
//     }
//     }
//     btn.addEventListener('click',updateWeather)
    
// }

// fetchWeather();

//rigth code absoulte
// creating an api request grasping the async fetch concept of the javascript

let fetchWeather = async () => {
    const btn = document.getElementById('searchBtn')
    const inputF = document.getElementById('cityInput')
    const tempreture = document.getElementById('tempValue')
    const slectedCity = document.getElementById('cityName')

    const addVal = (temp) =>{
        tempreture.innerHTML = `${temp}`;
    }
    
    const addCity = (c) =>{
        slectedCity.innerHTML =`${c.toUpperCase()}`
    }

    const updateWeather = async () => {
        let city = inputF.value.trim();
      
        if(city === '') {
            alert('PLEASE SELECT THE CITY')
            return;
        }
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c4d5ead1180e48cd858220207240609&q=${city}&aqi=no`)
            const data = await response.json();
            
            const hum = data.current;
            console.log(hum.temp_c)
            addVal(hum.temp_c);
            addCity(city)
            

        } catch (error) {
            console.error('OCCURED THE ERROR FETCHTING DATA : ',error)
            alert('NETWORK INSTABILITY')
            
        }
    }
    btn.addEventListener('click', updateWeather)
}
fetchWeather();


// const requestUrl = 'http://api.weatherapi.com/v1/current.json?key=c4d5ead1180e48cd858220207240609&q=Mumbai&aqi=no'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',requestUrl)
// xhr.send()
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState)
//     if(xhr.readyState === 4){
//        let data = JSON.parse(this.responseText);
//        console.log(data)
//     }
// }
