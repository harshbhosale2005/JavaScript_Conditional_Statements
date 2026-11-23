//conditional statements

let num=4;

if(num>0){
    console.log("Positive No: "+num);   
}
else if(num === 0){
    console.log("Neutral No: "+num);
    
}
else{
    console.log("Negative No: "+num);
    
}

let choice =4;

switch(choice){
    case 1 : console.log("Monday");
    break;

    case 2 : console.log("Tuesday");
    break;

    case 3 : console.log("Wednesday");
    break;

    case 4 : console.log("Thursday");
    break;

    case 5 : console.log("Friday");
    break;

    case 6 : console.log("Saturday");
    break;

    case 7 : console.log("Sunday");
    break;

    default:
        console.log("INVALID CHOICE....!");
        
}