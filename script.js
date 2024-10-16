const date = new Date('1993-03-21T12:00:00');
console.log(date);
console.log(date.getDay());

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
        console.log('Reede');
        break;
    case 6:
        console.log('Laupäev');
        break;
    default:
        console.log('WTF?');
        break;        
}