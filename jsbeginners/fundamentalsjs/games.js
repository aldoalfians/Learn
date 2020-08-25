// game pilihan player

var p = prompt("Silahkan dipilih gajah, semut, orang");

// game pilihan komputer
// membangkitkan bilangan random

var comp = Math.random();

if (comp < 0.34) {
	comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
	comp = "orang";
} else {
	comp = "semut";
}

// menentukan rules

var hasil = " ";

// hasil === null ? "asd" : hasil
// hasil ?? "asd" // ES7


if (p == comp) {
	hasil = "HASILNYA SERI";
} else if (p == "gajah") {
	// if(comp == "ORANG") {
	//     hasil = "MENANG";
	// } else {
	//     hasil = "KALAH";
	// }

	hasil = comp == "orang" ? "MENANG" : "KALAH"; // Operator Ternary
} else if (p == "orang") {
	// if(comp == "GAJAH") {
	//     hasil = "KALAH";
	// } else {
	//     hasil = "MENANG";
	// }
    hasil = comp == "gajah" ? 'KALAH' : 'MENANG';
} else if (p == "semut") {
    hasil = comp == "orang" ? 'KALAH' : 'MENANG'; 
} else {
    hasil = 'Memasukan Pilihan Yang Tidak Benar';
}

//tampilkan Hasil 

alert('Kamu memelih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilya : Kamu ' + hasil);