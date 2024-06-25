

const exit = document.getElementById('exit');
const preview = document.getElementById('preview-box');
const pageFilm = document.getElementById('film-overlay');
const wrappers = document.getElementsByClassName('wrapper');
const overlays = document.querySelectorAll('.overlay');
const curImage = document.getElementById('cur-image');
const curCaption = document.getElementById('caption');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

exit.addEventListener('click', ()=> {
    preview.classList.add('gallery');
    pageFilm.classList.add('gallery');
});

overlays.forEach((overlay)=> {
    overlay.addEventListener('click', ()=>{
        preview.classList.remove('gallery');
        pageFilm.classList.remove('gallery');
        openCurImage(overlay);
    });
});


function openCurImage(overlay) {
    curImage.src = overlay.previousElementSibling.src;
    curCaption.innerHTML = overlay.firstElementChild.innerHTML;
}


function findCurImageIndex() {
    let i;
    for (i=0; i < wrappers.length; i++) {
        if (wrappers[i].firstElementChild.src === curImage.src) {
            return i;
        }
    }
    return 0;
}

function goPrevNext(forward) {
    let i = findCurImageIndex();
    
    if (forward) i++;
    else i--;
        
    if (i >= wrappers.length) i=0;
    if (i < 0) i = wrappers.length-1;
    curImage.src = wrappers[i].firstElementChild.src;
    curCaption.innerHTML = wrappers[i].lastElementChild.firstElementChild.innerHTML;
}


next.addEventListener('click', ()=> {goPrevNext(true);});
prev.addEventListener('click', ()=> {goPrevNext(false)});
