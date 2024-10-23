function recursive(num){
    console.log(num);
    if(num<10){
        // num++;
        recursive(++num);
    }
}

recursive(0);
