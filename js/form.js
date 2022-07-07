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

  function userDetails(){
    let userData = {};
    let usersData = {};

    let userSalutation = document.getElementsByName("salutation").value;
    let userFirstName = document.getElementById("firstName").value;
    let userLastName = document.getElementById("lastName").value;
    let userMailAddress1 = document.getElementById("mailAddress1").value;
    let userMailAddress2 = document.getElementById("mailAddress2").value;
    let userCity = document.getElementById("city").value;
    let userState = document.getElementById("state").value;
    let userZip = document.getElementById("zip").value;
    let userPhoto = document.getElementById("photo").value;
    let userEmail = document.getElementById("email").value;
    let userMobile = document.getElementById("mobile").value;
    let userLanguage = document.getElementsByName("lang").value;
    let userInfo = document.getElementById("info").value;
    alert ("Hello "+userSalutation+" "+userFirstName+" " );

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
    usersData.push(userData);
    console.log(userData);
    console.log(usersData);
    alert(userData);
    preventDefault(event);

  }

  let userData1 = {
    firstName : "Satyawan",
    lastName : "Auti",
    mailAddres1 : "Rajuri",
    mailAddres2 : "Junnar",
    city : "Pune",
    state : "Maharashtra",
    zip : 412411,
    photo : "img_8.jpg",
    email : "auti.satyavan3@gmail.com",
    mobile : 8888044524,
    language : "English ,Hindi, Marathi",
    additionalInfo : "None"
};
// let usersData1 = {};
// usersData1.push(userData1);
console.log(userData1);
// console.log(usersData1);