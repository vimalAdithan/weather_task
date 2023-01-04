var url='https://restcountries.com/v3.1/all';
var w1_button=document.querySelector('.card-body-1 .w1_button');
var w2_button=document.querySelector('.card-body-2 .w2_button');
var w3_button=document.querySelector('.card-body-3 .w3_button');
w1_button.addEventListener('click',()=>{
    async function rest(){
        var country_n=document.querySelector('.country-name1');
        var country_name=country_n.innerText;
        var ur=await fetch(url);
        var res=await ur.json();
        var name=res.filter(res=>res.name.common==`${country_name}`);
        var latitude=name.map(e=>e.latlng[0]);
        var longitude=name.map(e=>e.latlng[1]);
        var url1=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9251b7e59f446a1b0d1eafbc3dbbd96f`;
        var ur1=await fetch(url1);
        var res1=await ur1.json();
        var weather=res1.weather[0].main;
        var weather_para=document.querySelector('.weathers1');
        weather_para.innerText=(`weather: ${weather}`);
        weather_para.style.display="block";
    }
    
    rest();
})

w2_button.addEventListener('click',()=>{
    async function rest(){
        var country_n=document.querySelector('.country-name2');
        var country_name=country_n.innerText;
        var ur=await fetch(url);
        var res=await ur.json();
        var name=res.filter(res=>res.name.common==`${country_name}`);
        var latitude=name.map(e=>e.latlng[0]);
        var longitude=name.map(e=>e.latlng[1]);
        var url1=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9251b7e59f446a1b0d1eafbc3dbbd96f`;
        var ur1=await fetch(url1);
        var res1=await ur1.json();
        var weather=res1.weather[0].main;
        var weather_para=document.querySelector('.weathers2');
        weather_para.innerText=(`weather: ${weather}`);
        weather_para.style.display="block";
    }
    
    rest();
    
})

w3_button.addEventListener('click',()=>{
    async function rest(){
        var country_n=document.querySelector('.country-name3');
        var country_name=country_n.innerText;
        var ur=await fetch(url);
        var res=await ur.json();
        var name=res.filter(res=>res.name.common==`${country_name}`);
        var latitude=name.map(e=>e.latlng[0]);
        var longitude=name.map(e=>e.latlng[1]);
        var url1=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9251b7e59f446a1b0d1eafbc3dbbd96f`;
        var ur1=await fetch(url1);
        var res1=await ur1.json();
        var weather=res1.weather[0].main;
        var weather_para=document.querySelector('.weathers3');
        weather_para.innerText=(`weather: ${weather}`);
        weather_para.style.display="block";
    }
    
    rest();
    
})



