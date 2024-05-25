(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Form is valid, so you can perform routing here
                    // For example, you can redirect to /submit
                    window.location.href = "/submit"; // Redirect to /submit
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function getCities(country){
    let citiesDropdown = document.querySelector("#cities");
    
    //if country value is empty we will stop the function

    if(country.trim()===""){
        citiesDropdown.disabled=true;
        citiesDropdown.seletedIndex= 0;
        return false;
    }
    

    //AJAX request with fetch()

    fetch("countries.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let cities =data[country];
        let out="";
        out+=`<option value="">Choose a City</option>`;
        for(let city of cities){
            out =out+`<option value="${city}">${city}</option>`;
        }
        citiesDropdown.innerHTML =out;
        citiesDropdown.disabled =false;
    })

 
}
//Homepage script

{/* <script> */}
      let button = document.getElementById("Btn");
      let lightImg = document.querySelector(".light");
      let cognifyLogo=document.querySelector(".cognifyLogo");

      function toggleBtn() {
        button.classList.toggle("active");
        button.childNodes[1].classList.toggle("rightallign");


        if (lightImg.style.opacity == 0) {
          lightImg.style.opacity = "1";
          cognifyLogo.style.opacity="1"
          return false;
        }
        if (lightImg.style.opacity == 1) {
          lightImg.style.opacity = "0";
          cognifyLogo.style.opacity="0"
          return false;
        }


       
      }
    {/* </script> */}