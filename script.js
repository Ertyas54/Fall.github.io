let test = document.getElementsByClassName('sec4');

function setWhiteTheme() {
    document.body.classList.remove('dark_theme');
    document.body.classList.add('white_theme');
    document.getElementById('testimonialiss').style.backgroundColor = '#D8D8EB';
    document.getElementById('one').style.backgroundColor = 'White';
    document.getElementById('two').style.backgroundColor = 'White';
}

function setBlackTheme() {
    document.body.classList.remove('white_theme');
    document.body.classList.add('dark_theme');
    document.getElementById('testimonialiss').style.backgroundColor = 'DimGray';
    document.getElementById('one').style.backgroundColor = 'Gray';
    document.getElementById('two').style.backgroundColor = 'Gray';
}

window.addEventListener('load', function () {
    const loader = document.querySelector('.load');
    loader.classList.add('hide');
});

   