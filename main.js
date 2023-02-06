window.addEventListener('DOMContentLoaded', () => {

    const warnings = document.querySelectorAll('.warning_items'),
          select =  document.querySelector('.sex');
          inputDate = document.querySelector('input[type="date"]');
          noneDisplay();          
    
    // Вимикаю усі класи 
    function noneDisplay() {warnings.forEach(item => {
        item.style.display = 'none';
    })};

    // Вибір статі
    let changeSex = '';
    select.addEventListener('change', (event) => {
        changeSex = event.target.value;
        console.log(changeSex);
    
        if (changeSex == 'man') {
            noneDisplay();
            warnings[0].style.display = 'block';
        } 

        if (changeSex == 'woman') {
            noneDisplay();
            warnings[1].style.display = 'block';
        }

        if (changeSex == '0') {
            noneDisplay();
            warnings[2].style.display = 'block';
        }

    });

    // данні року народження
    inputDate.addEventListener('change', (event) => {
        let date = new Date(event.target.value);
        let dateNow = new Date().getFullYear();
        let howOld = dateNow - date.getFullYear();
        console.log(howOld);
        
        if (howOld < 18) {
            noneDisplay();
            warnings[0].style.display = 'block';
            warnings[3].style.display = 'block';
        }
        
        if (howOld >= 18) {
            noneDisplay();
            warnings[0].style.display = 'block';
            warnings[4].style.display = 'block';
        }

    });

});
