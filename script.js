console.log("HELLO");

// NAVIGATION BAR
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
	burgerMenu.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});

	bgOverlay.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});
}

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		navbarMenu.classList.remove("is-active");
		bgOverlay.classList.remove("is-active");
	});
});

//SLIDER SINGLE PRODUCT
var vargu = [
    'img/car_1.jpg',
    'img/car_inside.jpg',
    'img/car_inside2.jpg',
    'img/car_rear.jpg',
]

var index = 0;
var koha = 3000;

function rentalSlider(){
    document.getElementById('rental_slider').src = vargu[index];
    index++;
    
    if(index == vargu.length){
        index = 0;
    }

    setTimeout("rentalSlider()", koha);
}
rentalSlider();



//Validate Contact Form
function validateContactForm(){  
    var names = document.form.firstname.value;
    var email = document.form.email.value;
      
    if (names==null || names==""){  
      alert("Emri nuk mund te jete i thate");  
      return false;  
    }else if(email==null || email==""){  
      alert("Email nuk mund te jete i thate");  
      return false;  
      }else{
        alert("U dergua me sukses");
        return true;
      }
    } 
        

    //Login Form
function validateform(){  
    var name=document.myform.username.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Username nuk mund te jete thate");  
      return false;  
    }else if(password.length<6){  
      alert("Password duhet te jete te pakten 6 karaktere i gjate");  
      return false;  
      }  
    }  

    //Register Form
    function validateRegister(){  
        var names = document.myform.name.value;
        var username = document.myform.username.value;
        var email = document.myform.email.value;
        var password = document.myform.password.value;
        var confirmPassword = document.myform.confirm_psw.value;
          
        if (names==null || names==""){  
          alert("Emri nuk mund te jete thate");  
          return false;  
        }
        else if( username==null || username=="" || username.length < 3){  
            alert("Usename duhet te jete te pakten 3 karaktere i gjate dhe nuk duhet te jete i thate");  
            return false;  
            }
            else if(email==null || email==""){  
            alert("Email nuk mund te jete i thate");  
            return false;  
            }
             else if(password.length<6  || password==null || password==""){  
            alert("Password duhet te jete te pakten 6 karaktere i gjate dhe nuk duhet te jete i thate");  
            return false;  
          } 
          else if(confirmPassword.length<6  || confirmPassword==null || confirmPassword==""){
            if(confirmPassword != password){
                alert("Ju lutem shkruajeni passwordin si me larte.");
                return false;
            }
            return false;
          }
        }  