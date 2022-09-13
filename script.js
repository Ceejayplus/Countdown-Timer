
const countDown = () =>{
    let myHours = hours.value;
    let myMinutes = minutes.value;
    let mySeconds = seconds.value;
    setTime = setTimeout(countDown, 1000)
    if(myHours == 0 && myMinutes == 0 && mySeconds == 0){
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    }
    else if(seconds.value !=0){
        seconds.value--
    }
    else if(minutes.value !=0 && seconds.value == 0){
        seconds.value =59;
        minutes.value--;
    }
    else if(hours.value !=0 && minutes.value == 0){
        minutes.value =60;
        hours.value--;
    }
}

const pauseButton = () => {
    clearTimeout(setTime)
}

const resetInput = () => {
    // location.reload()
    clearInterval(setTime);
    seconds.value = 00;
    minutes.value = 00;
    hours.value = 00
}