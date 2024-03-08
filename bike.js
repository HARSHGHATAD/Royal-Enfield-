//ZIPCODE

var input = document.querySelector('#zipcode');
var info = document.querySelector('.info');
var codelength = /^\d{6}$/

input.addEventListener('keyup', () => {
    if (input.value.match(codelength)) {
        $.ajax({
            type: "GET",
            url: "https://api.postalpincode.in/pincode/" + input.value,
            success: (response) => {
                info.innerHTML = (response[0].PostOffice[0].Name);
            }
        });
    }
    else {
        info.innerHTML = "Type valid zipcode";
    }
}); 

//PHONE NUMBER

const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    //<a href="#"><img src="bullet_350.jpg" width="100%" height="100%">Bullet 350</a>
    //<a href="#"><img src="super_meteor_650.jpeg" width="100%">Super Meteor 650</a>
    //<a href="#"><img src="hunter_350.jpg" width="100%">Hunter 350</a>
    //<a href="#"><img src="scram_411.jpeg" width="100%">scram 411</a>
    //<a href="#"><img src="meteor_350.webp" width="100%">Meteor 350</a>
    //<a href="#"><img src="interceptor.avif" width="100%">Interceptor 650</a>
    //<a href="#"><img src="continental_gt.png" width="100%">Continental GT</a>
    //<a href="#"><img src="classic_350.png" width="100%">Classic 350</a>