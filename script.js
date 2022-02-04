const switch_btn = document.getElementById('checkbox');


switch_btn.addEventListener('click', function() {
    document.body.classList.toggle('dark_theme');
    const container2 = document.getElementById('container2');
    container2.classList.toggle('container2_2');
    const overview_today = document.getElementById('overview_today');
    overview_today.classList.toggle('overview_today_2');
    const container3 = document.getElementById('container3');
    container3.classList.toggle('container3_2');
})
