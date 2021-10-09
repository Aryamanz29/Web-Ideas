# HTML Hypertext markup language

## It is the primary building block for building Front end.

![Image](https://www.bitdegree.org/learn/storage/media/images/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg)

### While HTML is a skeleton structure of a document, CSS beautifies it and Javascript makes it dynamic

10 Important Concepts to know

### 1. HTML Document, DOM

            <!DOCTYPE html>
             <html>
              <head>
                <meta charset="UTF-8">
                      <title>Title of the document</title>
              </head>

                <body>
            Content of the document......
               </body>

            </html>
          
### 2. Understanding HTML Element/Tag
     Attributes provide additional information about HTML elements.
     
### 3. Block vs. Inline Elements

![Imgae](https://miro.medium.com/max/1050/0*MCqFavRL-oBvqr6M.jpeg)

![Image](https://miro.medium.com/max/1050/1*zK3-dZ5KrhXwkA6NwSr3MQ.png)

### 4. HTML Input Attributes

Resource - https://www.w3schools.com/html/html_form_attributes.asp

### 5. HTML Graphics & Media

Resource - https://www.w3schools.com/html/html5_canvas.asp 

### 6. HTML API

Resource - https://www.w3schools.com/html/html5_geolocation.asp

### 7. HTML + CSS + JavaScript

               <!DOCTYPE html>
              <html>
                <head>
              <meta name="viewport" content="width=device-width, initial-scale=1">
               <style>
               .alert {
               padding: 20px;
               background-color: #f44336;
               color: white;
              opacity: 1;
              transition: opacity 0.6s;
               margin-bottom: 15px;
                 }
              </style>
                </head>
                <body>
                  <h2>Alert Messages</h2>
                   <p>Click on the "x" symbol to close the alert message.</p>
                <div class="alert">
                 <span class="closebtn">&times;</span>  
                 <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                </div>
                 <script>
                   var close = document.getElementsByClassName("closebtn");
                      var i;
                  for (i = 0; i < close.length; i++) {
                   close[i].onclick = function(){
                        var div = this.parentElement;
                         div.style.opacity = "0";
                             setTimeout(function(){ div.style.display = "none"; }, 600);
                          }
                       }
                  </script>
                     </body>
                        </html>


### Custom HTML Elements?
   Custom Elements are custom Web components created similar to HTML elements like div, span, etc.
   We have the ability to build Custom Elements for custom use cases. Custom HTML elements enable the browser to render new HTML elements with specific use cases.

