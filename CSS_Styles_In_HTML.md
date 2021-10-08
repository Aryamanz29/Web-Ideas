# Cascading Style Sheets in html5 


### CSS (Cascading Style Sheet) describes the HTML elements which are displayed on screen, paper, or in other media. It saves a lot of time. It controls the layout of multiple web pages at one time. It sets the font-size, font-family, color, background color on the page.

It allows us to add effects or animations to the website. We use CSS to display animations like buttons, effects, loaders or spinners, and also animated backgrounds.

![Image](https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png)


## 1. Internal CSS
The Internal CSS
has <style> tag
in the <head>
section of the HTML document. This CSS style is an effective way to style single pages. Using the CSS style for multiple web pages is time-consuming because we require placing the style on each web page.
  
#### We can use the internal CSS by using the following steps:

1. Firstly, open the HTML page and locate the <head>

2. Put the following code after the <head>

           <style type="text/css">  
3. Add the rules of CSS in the new line.

Example:

            body {  
                background-color: black;  
            }   
            h1 {  
                color: white;  
                padding: 50px;  
              }  
4. Close the style tag.

           </style>  
  After adding the internal CSS, the complete HTML
 file looks like the following:

<!DOCTYPE html>  
<html>  
<head>  
<style>  
body {  
    background-color: black;  
}  
h1 {  
    color: red;  
    padding: 50px;  
}   
</style>  
</head>  
<body>  
<h2>CSS types</h2>  
<p>Cascading Style sheet types: inline, external and internal</p>  
</body>  
</html>  
  
##  2. External CSS
In external CSS
, we link the web pages to the external .css file. It is created by text editor. The CSS is more efficient method for styling a website. By editing the .css file, we can change the whole site at once.
  
  
  
  
## 3. Inline CSS
Inline CSS
is used to style a specific HTML element. Add a style attribute to each HTML tag without using the selectors. Managing a website may difficult if we use only inline CSS. However, Inline CSS in HTML is useful in some situations. We have not access the CSS files or to apply styles to element.
  
 ![Image](https://www.bitdegree.org/learn/storage/media/images/8c4493d3-110c-4a95-8b70-7626ce2d2f4e.o.jpg)
  
  
  
