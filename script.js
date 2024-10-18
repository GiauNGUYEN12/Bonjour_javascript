function sayHello(firstname,hour){
    if (hour >= 18){
        console.log("Bonsoir "+ firstname+"!")
    }
    else{
let message = "Bonjour !"
message = "Bonjour " + firstname + "!"
console.log (message)
    }
} 
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);