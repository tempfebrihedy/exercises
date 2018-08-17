// UBAH HURUF
function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyza';
    var result = '';
    for (var i=0; i<kata.length; i++) {
        var indexAbjad = abjad.indexOf(kata[i]); // huruf dari kata di convert ke abjad
        result += abjad[indexAbjad + 1]; // a menjadi b
    } return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

/*
var abjad = a-a
var result = ''
looping, 

TO DO: coba ga pake indexOf!!!
*/