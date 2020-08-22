// Function
// yg bisa dilakukan function : method, class, constructor, module.

// Function is sub-program/ sub-routine yang dapat dipanggil dibagian lain pada program

//kurang efesien terlalu banyak menggunakan variable
function jumlahVolume(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total;
}

console.log(jumlahVolume(8, 3));

//Lebih efesien menghemat variable
function jumlahVolume(a, b) {
	return a * a * a + b * b * b;
}

console.log(jumlahVolume(8, 3));

//

function tambah(a, b) {
	return a + b;
}

function kali(a, b) {
	return a * b;
}
// sebelum menajankan fungsi kali kita jalan kan dlu fungsi tambah 10+5=15, 1+4=5 kemudia baru di kali 15*5=75
var hasil = kali(tambah(10, 5), tambah(1, 4));
console.log(hasil);

//

function siap() {
	var hasil = 1;
	for (var i = 0; i < arguments.length; i++) {
		hasil *= arguments[i]; // arguments function dijavascript
    }
           

	return hasil;
}
var sum = siap(8, 6, 9, 100);
console.log(sum);

//

// Global Scope & Local Scope

var a = 3;

function tes() {
    //name conflict
      var a = 5;
     
}

tes();
 console.log(a);


// "use strict" // akan membuat variable local, klo tidak diguanakan maka akan membuat variable global
//  function tes() {
    
//       a = 2;
//       console.log(a);
// }

// tes();


function angka(n) {
    if( n === 0 ) {
        return;     // gunakan base case agar rekursifnya berhenti 
    }
    console.log(n);
    angka(n - 1);
}

angka(10)