function updateTime()
{
    let dateTime = new Date();
    //Using the Get Hours Method, returns the hour from 0-23. 
    let hours = dateTime.getHours();
    //Using the getMinutes method, returns minutes 0-59. 
    let minutes = dateTime.getMinutes();
    //Using get.Seconds method, returns seconds from 0-59.
    let seconds = dateTime.getSeconds();
    //
    let am_or_pm = document.getElementById("am-or-pm");

    // If our variable of hours is greater than or equal to 12, than display "PM".
    //If not, display AM.
    if(hours >= 12)
    {
        am_or_pm.innerHTML = 'PM';
    }
    else
    {

        am_or_pm.innerHTML = 'AM';
    }

    //If our clock exceeds 12, than, we subtract 12 from our variable of hours, thus starting us from 0. 
    if(hours > 12)
    {
        hours = hours - 12;
    }

    //Uses inner html to apply the value of our variables to the HTML. 
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
setInterval( updateTime, 1000);
