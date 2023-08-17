function mudaCamisa(tipo) {
    if (tipo == 1) {
        arquivo = "/image/camisas/saopaulo/camisa1.png";
    }
    if (tipo == 2) {
        arquivo = "/image/camisas/saopaulo/camisa2.png";
    }
    if (tipo == 3) {
        arquivo = "/image/camisas/saopaulo/camisa3.png";
    }
    if (tipo == 4) {
        arquivo = "/image/camisas/saopaulo/camisa4.png";
    }
    document.getElementById("camisaAqui").src = arquivo
}