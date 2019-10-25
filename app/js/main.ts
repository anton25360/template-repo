var isDark:boolean = false //default is light

document.querySelector('#toggleDarkMode').addEventListener('click', function () {
    isDark = !isDark;
    console.log(isDark);
    if (isDark) {
        document.querySelector('#toggleDarkMode').innerHTML = '<i class="fas fa-moon fa-2x"></i>'        
    }else{
        document.querySelector('#toggleDarkMode').innerHTML = '<i class="fas fa-sun fa-2x"></i>'
    }
})