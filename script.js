const date = new Date();
console.log(date.getDay());
if(date.getDay() === 0){
    console.log('Pühapäev');
} else if(date.getDay() === 1){
    console.log('Esmaspäev');
} else if(date.getDay() === 2){
    console.log('Teisipäev');
} else if(date.getDay() === 3){
    console.log('Kolmapäev');
} else if(date.getDay() === 4){
    console.log('Nejapäev');
} else if(date.getDay() === 5 || date.getDay() === 6){
    console.log('Pidu');
}

switch(date.getDay()){
    case 0:
        console.log('Pühapäev');
        break;
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
        console.log('Teisipäev');
        break;
    case 3:
        console.log('Kolmapäev');
        
    case 4:
        console.log('Neljapäev');
        break;
    case 5:
    case 6:
        console.log('Pidu');
        break;
    default:
        console.log('WTF?');
        break;        
}