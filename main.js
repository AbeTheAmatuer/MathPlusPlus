function sigma(uL, lL, op, incVal){
    let total = 0;
    console.log("incval is " + incVal)
    placeHolder = (incVal === "lL") ? true : false;
    for(let i = lL; i <= uL; i++){
        if(placeHolder){
            incVal = i;
        }
        switch(op){
            case "+":
                total += incVal
                break;
            case "-":
                total -= incVal
                break;
            case "*":
                total *= incVal
                break;
            case "/":
                total /= incVal
                break;
            case "^":
                total += (incVal * incVal)
        }
    }
    return(total);
}


