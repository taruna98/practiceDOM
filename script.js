// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const pChild = document.querySelector('section#b ul');

//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Ini adalah li Baru');

//     liBaru.appendChild(teksLiBaru);

//     pChild.appendChild(liBaru);

// });

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
});

const tAcak = document.createElement('button');
const teksT = document.createTextNode('Spin Color');
tAcak.appendChild(teksT);
tAcak.setAttribute('type', 'button');
btn.after(tAcak);

tAcak.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sRed = document.getElementsByTagName('input')[0];
const sGreen = document.getElementsByTagName('input')[1];
const sBlue = document.getElementsByTagName('input')[2];

sRed.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sGreen.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});
sBlue.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    // console.log(event.clientY);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    // console.log(xPos);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 0)';
});
