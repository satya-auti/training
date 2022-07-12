// Check Image file & preview Image file
function fileValidation() {
    let fileData = document.getElementById("photo").value;
    
    // var filePath = fileInput.value;

    // Allowing file type
    let allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    if (!allowedExtensions.exec(fileData)) {
        alert('Invalid file type');
        fileData.value = '';
        return false;
        // console.log("False");
    }
    else
    {
    
        // Image preview
        if (fileData.files && fileData.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML ='<img src="'+ e.target.result + '"/>';
            };
            
            reader.readAsDataURL(fileData.files[0]);
        }
    }
}


// Password Validation 
function verifyPassword(){
    var password = document.getElementById("password").value;
    var msg = document.getElementById("errorPassword");
    var regExp=/(?=.*[A-Z])\w{4,15}/;
    if(password.match(regExp)){
        msg.innerHTML="Strong Password";
    } else{
        if(password.length<4){
            msg.innerHTML="poor password";
        }else{
            msg.innerHTML="Please use Special Characters & Capital letter";
        }
    }
}

function validations() {

    // Zip code Validation

     // Get the value of the input field with id="mobile"
     let w = document.getElementById("zip").value;
     // If x is Not a Number or less than 10 digit or greater than 9999999999
   
     if (isNaN(w) || w < 100000 || w > 999999) {
       
       alert("Enter vaild or correct Zip code");
     } else {
        //  alert("Zip code is valid");
     }

    // Mobile Number Validation  

    // Get the value of the input field with id="mobile"
    let x = document.getElementById("mobile").value;
    // If x is Not a Number or less than 10 digit or greater than 9999999999
    if (isNaN(x) || x < 1000000000 || x > 9999999999) {
      
      alert("Mobile Number is Invalid");
    } else {
        // alert("Mobile Number is valid");
    }
  
  }

//   
function userDetails(){
    let userData = {};
    let usersData = [];
    // alert("Hello User");

    // Salutation 
    var sal = document.getElementsByName('salutation');
    let userSalutation;          
            for(i = 0; i < sal.length; i++) {
                if(sal[i].checked)
                {
                    userSalutation = sal[i].value;
                }

            }
    
    // First Name 
    let userFirstName = document.getElementById("firstName").value;
    alert("Hello "+userSalutation+" "+userFirstName);

    // Last Name
    let userLastName = document.getElementById("lastName").value;
    // alert("Hello User "+userLastName);

    // Mail Address1
    let userMailAddress1 = document.getElementById("mailAddress1").value;
    // alert("Hello User "+userMailAddress1);

    // Mail Address2
    let userMailAddress2 = document.getElementById("mailAddress2").value;
    // alert("Hello User "+userMailAddress2);

    // City
    let userCity = document.getElementById("city").value;
    // alert("Hello User "+userCity);

    // State
    // let state1 = document.getElementById("state").value;
    let userState = document.getElementById("state").value;
    // alert("State is "+state1);
    // alert("State is "+userState);

    // Zip
    let userZip = document.getElementById("zip").value;
    // alert("Zip is "+userZip);

    // Photo
    let userPhoto = document.getElementById("photo").value;
    // alert("Photo file is "+userPhoto);

    // Email
    let userEmail = document.getElementById("email").value;
    // alert("Email ID: "+userEmail);

    // Mobile No
    let userMobile = document.getElementById("mobile").value;
    // alert("Mobile No : "+userMobile);

    // Language
    // let userLanguage = document.getElementsByName("lang").value;

    var lang = document.getElementsByName('lang');
    // alert("Language Known length : "+lang.length);

    let userLanguage = " ";          
            for(i = 0; i < lang.length; i++) {
                if(lang[i].checked)
                {
                    userLanguage = userLanguage + " " + lang[i].value;
                }

            }
            // alert("Language Known : "+userLanguage);


    // Additional Info
    let userInfo = document.getElementById("info").value;
    // alert("Additional Info : "+userInfo);

    // All Data Alert Check
    alert("Hello "+userSalutation+" "+userFirstName+" "+userLastName
    
    +" "+userMailAddress1+" "+userMailAddress2+" "+userCity+" "
    
    +userState+" "+userZip+" "+userPhoto+" "+userEmail+" "+userMobile+" "+userLanguage+" "+userInfo);
    
    userData = {
        firstName : userFirstName,
        lastName : userLastName,
        mailAddres1 : userMailAddress1,
        mailAddres2 : userMailAddress2,
        city : userCity,
        state : userState,
        zip : userZip,
        photo : userPhoto,
        email : userEmail,
        mobile : userMobile,
        language : userLanguage,
        additionalInfo : userInfo
    };
    // alert(userData.firstName);

    usersData.push(userData);
    console.log(userData);
    console.log(usersData);
     
    event.preventDefault(event);
//   });
}