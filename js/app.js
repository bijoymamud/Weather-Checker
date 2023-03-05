// const API_KEY = `55daed7eaedb24baf8567e0e892c16ba`;

// const loadTemparature = city => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemparature(data));
// }

// const displayTemparature = data => {
//     const temparature = document.getElementById('temparature');

//     temparature.innerText = data.main.temp;
// }


// loadTemparature('mymensingh');

const API_KEY = `55daed7eaedb24baf8567e0e892c16ba`;

const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}

const displayTemparature = data => {
    const temparature = document.getElementById('temparature');
    temparature.innerText = data.main.temp;
}

document.getElementById('btn-search').addEventListener('click';)

loadTemparature('dhaka');