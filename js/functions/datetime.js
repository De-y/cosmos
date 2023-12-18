function get_date_time() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var now     = new Date(); 
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
    return (day + ', ' + month + ', ' + year + '; ' + hour + ':' + minute);
}

document.addEventListener('DOMContentLoaded', function() {  
     time = document.getElementById('time')
     setInterval(() => {
         time.innerHTML = get_date_time();
     }, 1000);
     document.getElementById('time').innerHTML = get_date_time();
 
     if(window.lightdm !== undefined && lightdm.hostname !== undefined) {
         document.getElementById('pagetitle').innerText = lightdm.hostname;
     }
 
     if(window.lightdm !== undefined && lightdm.users.length === 1) {
         // document.getElementById('username').value = lightdm.users[0].username;
         document.getElementById('password').focus();
     }
 
     add_session_options()
     init_session_menu()
     
 });
 