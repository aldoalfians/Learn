var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
	// jika angkot kosong nambang penumpang
	if (penumpang.length == 0) {
		// tambah pemnumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
		//else
	} else {
		// Telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// Tambah penumpang dikuri tersebut
				penumpang[i] = namaPenumpang;
				// Kembalikan isi array & keluar dari function
				return penumpang;

				// jika sudah ada nama yang sama
			} else if (penumpang[i] == namaPenumpang) {
				// tampilkan pesan kesalahannya
				console, log(namaPenumpang + " Sudah Ada di dalam Angkot");
				// kembalikan isi array & keluar dari funtion
				return penumpang;
			} else if (i == penumpang.length - 1) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
};

var hapusPenumpang = function (namapenumpang, penumpang) {
	if (penumpang.length == 0) {
		console.log("Angkot Masih Kosong");
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namapenumpang) {
				penumpang[i] == undefined 
			} else if (i == penumpang.length - 1) {
                console.log(namapenumpang + " tidak ada di dalam penumpang");
                return penumpang;
			}
		}
	}
	return penumpang;
};


// console.log(hapusPenumpang("aldo", penumpang));
console.log(tambahPenumpang('galih', penumpang));
console.log(tambahPenumpang('boetd', penumpang));
console.log(tambahPenumpang('cukil', penumpang));
console.log(hapusPenumpang('boetd', penumpang));