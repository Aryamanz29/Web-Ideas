//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    
      const query = req.body.cityName;
    
    url="https://api.openweathermap.org/data/2.5/weather?q=" + query + " &appid=cb5ca3a42f47141e1648a38ee785a83a&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            
            const temp = weatherData.main.temp;
            
            const weatherDesc = weatherData.weather[0].description;
            
            const weatherImage = weatherData.weather[0].icon;
            
            const imageUrl = "http://openweathermap.org/img/wn/" + weatherImage + "@2x.png"
            
//            res.send("<h1>The Weather in Fatehgarh is " + temp +  " Degree </h1>\n <h2> The weather is currently "+ weatherDesc + "</h2>");
        
           
                
             res.send("<h2>The Weather is: " + weatherDesc + "</h2>\n <h1>The temperature in " + query + " is " + temp + " deg cel </h1> \n <img src=" + imageUrl + ">");
        });
        
      
    });
    
});








app.listen(3000, function(){
   console.log("Server is running on port 3000");
});