function slide1() {
    document.getElementById('lancamento').src = "/image/slide/slide1.jpg";
    setTimeout("slide2()", 2500)
    document.getElementById('lancamentos').href="http://127.0.0.1:5500/saopaulo.html"    
}

function slide2() {
    document.getElementById('lancamento').src = "/image/slide/slide2.jpg";
    setTimeout("slide3()", 2500)
    document.getElementById('lancamentos').href="link2.html" 
}

function slide3() {
    document.getElementById('lancamento').src = "/image/slide/slide3.jpg";
    setTimeout("slide1()", 2500)
    document.getElementById('lancamentos').href="link2.html"
}