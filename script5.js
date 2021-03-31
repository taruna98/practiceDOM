// ambil icon besar
const bImg = document.querySelector('.bigImg');

// ambil icon kecil
const sImgs = document.querySelectorAll('.thumb');

// ambil target dari icon kecil
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target);

    // cek apakah yang di klik adalah thumb
    if (e.target.className == 'thumb') {
        bImg.src = e.target.src;
        bImg.classList.add('fade');
        setTimeout(function () {
            bImg.classList.remove('fade');
        }, 3500);

        sImgs.forEach(function (sImg) {
            // if (sImg.classList.contains('active')) {
            //     sImg.classList.remove('acvite');
            // }
            sImg.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});