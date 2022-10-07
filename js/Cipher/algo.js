var plaintext = document.getElementById("plaintext");
var result = document.getElementById("result");
var encrypt_type = document.getElementById("encryption_type");
var brief_overlay = document.getElementById("brief_overlay");

// default value for result box
result.innerHTML ="Encrypted text";

var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","/","@"];
var code =["._","_...","_._.","_..",".",".._.","__.","....","..",".___","_._","._..","__","_.","___",".__.","__._","._.","...","_",".._","..._",".__","_.._","_.__","__..",".____","..___","...__","...._",".....","_....","__...","___..","____.","_____","._._._","__..__","..__..","_.._.",".__._."];

var morse_brief = `<strong>Morse Code</strong> is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes or dits and dahs. Morse code is named after Samuel Morse, an inventor of the telegraph.`;
var caesar_brief = `<strong>Caesar Cipher</strong> is a type of substitution cipher in which each letter in the plaintext is replaced by a letter of some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.`;

function choice() {
    result.innerHTML ="Encrypted text";
   
    if(encrypt_type.value==0)
    {
        document.getElementById("brief_overlay").innerHTML = morse_brief;
        document.getElementById("brief_tab").innerHTML = morse_brief;
    }
    else{
        document.getElementById("brief_overlay").innerHTML = caesar_brief;
        document.getElementById("brief_tab").innerHTML = caesar_brief;
    }
}

function submit() {
    plaintext.style.color = "grey";
    result.style.color = "black";

    var text_value = plaintext.value;
    var str = "";

    if(text_value==null || text_value=="")
    {
        result.innerHTML = "Please Enter Text Above";
    }
    else
    {
        if(encrypt_type.value==0)
        {
            text_value = text_value.toUpperCase();
            for(var i=0; i<text_value.length; i++)
            {
                for(var j=0;j<alpha.length;j++)
                {
                    if(text_value.charAt(i)==alpha[j])
                    {
                        str += code[j]+" ";
                    }
                    else if(alpha.includes(text_value.charAt(i))==false){
                        str += text_value.charAt(i)+" ";
                        break;
                    }
                }
            }
        }
        else if(encrypt_type.value==1)
        {
            for(var i=0; i<text_value.length; i++)
            {
                if(text_value.charAt(i)==' ')
                {
                    str+=' ';
                }
                else if (text_value.charAt(i)==text_value.charAt(i).toUpperCase()) 
                { 
                    str += String.fromCharCode((text_value.charCodeAt(i)+5-65)%26+65); 
                } 
                else
                { 
                    str += String.fromCharCode((text_value.charCodeAt(i)+5-97)%26+97); 
                }
            }
        }
    result.innerHTML = str;
    }
}

document.addEventListener("click", function(evt) {
    var k=document.getElementById("brief_overlay_button");
    let target_value = evt.target;

    do {
        if (target_value==k || brief_overlay.contains(target_value)) {
            brief_overlay.style.opacity = "1";
            brief_overlay.style.width = "50%";
            return;
        }
        else if(target_value==plaintext)
        {
            plaintext.style.color = "black";
            result.style.color = "grey";
            return;
        }

        target_value = target_value.parentNode;
    } while (target_value);

    brief_overlay.style.opacity = "0";
    brief_overlay.style.width = "0%";
});
