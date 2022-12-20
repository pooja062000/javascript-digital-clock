function getTime(){

    let timesNow = new Date()

    let hrs = timesNow.getHours()
    let mints = timesNow.getMinutes()
    let seds = timesNow.getSeconds()
    

    
    if(hrs > 12){
        hrs = hrs - 12
        document.querySelector('#sess').innerText = 'PM'
    }else{
        document.querySelector('#sess').innerText = 'AM'
    }


    

    if(hr < 10){
        hrs = '0' + hrs
    } else if (mints < 10){
        mints = '0' + mints
    } else if (seds < 10){
        seds = '0' + seds
    }

    document.querySelector('#hr').innerText = hrs;
    document.querySelector('#mint').innerText = mints;
    document.querySelector('#sed').innerText = seds;
  
  
    
}

setInterval(getTime, 1000)