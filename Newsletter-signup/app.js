//jshint esversion:6

const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const request = require("request");

const app = express();
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}));
//To use static files in server make folder public
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    const fName = req.body.firstName;
    const lName  = req.body.lastName;
    const email = req.body.email;
    
    const data = {
        
        members : [
            {
               email_address : email,
                status : "subscribed",
                merge_fields: {
                    FNAME : fName,
                    LNAME : lName
                }

                
 
            }
        ]
    };
    
    const jsonData = JSON.stringify(data);
    
    const url = "https://us19.api.mailchimp.com/3.0/lists/dd914356a0";
    const options = {
        method: "POST",
        auth: "abhinav:974eae1ad8cf0f603ee368e6565815a7-us19"
    }
    
  const request =   https.request(url, options, function(response){
      
      if(response.statusCode === 200){
          res.sendFile(__dirname + "/success.html");
      }else{
          res.sendFile(__dirname + "/failure.html");
      }
      
      
      
     response.on("data", function(data){
         console.log(JSON.parse(data));
         
     })   
        
        
    });
    
    request.write(jsonData);
    request.end();
    
});

app.post("/failure", function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});



//api Key
//974eae1ad8cf0f603ee368e6565815a7-us19

//list id
//dd914356a0
