function calc_Camisa() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 150;
    document.getElementById('cTot').value = tot;
}
