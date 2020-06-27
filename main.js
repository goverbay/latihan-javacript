const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1;i<=5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
}

/* Display image clicked */
thumbBar.onclick = function(e){
    displayedImage.setAttribute('src', e.target.src);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(e){
    var status = btn.getAttribute("class");
    if(status == 'dark'){
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.innerHTML = 'Lighten';
    }else{
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.innerHTML = 'Darken';

    }
}
