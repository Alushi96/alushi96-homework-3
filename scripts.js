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
