var generateBtn = document.querySelector("#generate");

var values = {
    special: ["!@#$%^&*()"],
    numeric: ["1234567890"],
    lowercaseletters: ["abcdefghijklmnopqrstuvwxyz"],
    uppercaseletters: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    none: [],
}

do{

    var length = prompt("How many characters would you like?");

        if (length < 8){
            alert("Number too small");
        }

        else if (length > 128){
            alert("Number to big");
        }

}
    while(length < 8 || length > 128);

console.log(length);

var spec = confirm("Would you like to include special characters?")
    
    if (spec === true){
        spec = values.special;
    }

    else if(spec === false){
        spec = values.none;
    }

    console.log(spec);

    var num = confirm("Would you like to include numerics?");

    if (num === true){
        num = values.numeric;
    }

    else if(num === false){
        num = values.none;
    }

    console.log(num);

    var lowercase = confirm("Would you like to include lowercase letters?");
    
    if (lowercase === true){
        lowercase = values.lowercaseletters;
    }

        else if (lowercase === false){
            lowercase = values.none;

        }
        console.log(lowercase);

        var uppercase = confirm("Would you like to include uppercase letters?");

        if (uppercase === true){
            uppercase = values.uppercaseletters;
        }
    
            else if (uppercase === false){
                uppercase = values.none;
    
            }
            console.log(uppercase);

            function generate(){

                let characters = spec + num + lowercase + uppercase;
                console.log(characters)
                
                let password = "";
                
                
                
                for (var i = 0; i <= length; i++){
                   password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length -1)));
                }
                
                document.getElementById("password").value = password;
                }
                
                generateBtn.addEventListener("click", generate);