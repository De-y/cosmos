function get_date_time() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dotw = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const now     = new Date();
    const day_of_the_week = dotw[now.getDay()] 
    var year    = now.getFullYear();
    
    var month   = monthNames[now.getMonth()]; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 

    if(day.toString().length == 1) {
         day = '0' + day;
    }   
    if(hour.toString().length == 1) {
         hour = '0' + hour;
    }
    if(minute.toString().length == 1) {
         minute = '0' + minute;
    }
    if(second.toString().length == 1) {
         second = '0' + second;
    }
    return (day_of_the_week + ', '  + month + ' ' + day + ' '+ year + '; ' + hour + ':' + minute);
}

document.addEventListener('DOMContentLoaded', function() {  
     time = document.getElementById('time')
     setInterval(() => {
         time.innerHTML = get_date_time();
     }, 1000);
     document.getElementById('time').innerHTML = get_date_time();  
});
 