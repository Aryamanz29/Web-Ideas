## DESCRIPTION

I've created a Product Landing Page by using HTML, CSS.

## SETUP INSTRUCTIONS

1. In my product landing page there's a `header` element with a corresponding `id="header"`.

2. Within the header element there's a image with corresponding id="header-img". 

3. Within the `#header` element there's a `nav` element with a corresponding `id="nav-bar"`.

Here’s how that would look:
  ```html
   <header id="header">
    <div class="logo">
      <img id="header-img" src="https://s3.amazonaws.com/freecodecamp/original_trombones.png" alt="original trombones logo"/>
    </div>
    <nav id="nav-bar">
      <ul>
        <li><a class="nav-link" href="#features">Features</a></li>
        <li><a class="nav-link" href="#how-it-works">How It Works</a></li>
        <li><a class="nav-link" href="#pricing">Pricing</a></li>
      </ul>  
    </nav>
   </header>
  ```
  
4. Whenever I'll click a .nav-link button in the nav element, I am taken to the corresponding section of the landing page.

5. There's a `form` element with a corresponding `id="form"`.  

6.  Within the form, there is an input field with id="email" where I can enter an email address.

7. The `#email` input field has a placeholder text that let's user to know what the field is for.

8. Within the form, there is a submit `input` with a corresponding `id="submit"`.

9. Whenever I'll click the `#submit` element, the email is submitted to a static page.

Here’s how that would look:
```html
<form id="form" action="https://www.freecodecamp.com/email-submit">
      <input
             name="email"
             id="email"
             type="email"
             placeholder="Enter your email address"
             required
      />
      <input id="submit" type="submit" value="Get Started" class="btn"/>
</form>
```

## RESULT

![Product_Landing_Page](https://user-images.githubusercontent.com/52233275/138464383-5901790c-b689-413b-8458-318cd11a220d.png)
