function totalDigitRekursif(angka) {
    var strAngka = String(angka);
    if (strAngka.length === 0) {
        return 0;
    }
    else {
        var result = strAngka[0];
        var modifAngka = strAngka.substring(1, strAngka.length);
        return Number(result) + totalDigitRekursif(modifAngka);
    }
    
}
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

