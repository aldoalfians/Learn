// Membuat Object

// 1. Object Literal
// var mhs1 = {
//     nama : "aldo",
//     umur : 18,
//     alamat : {
//         jalan : "Jl flamboyan",
//         kodepos : 15224,
//         provinsi: "banten"
//     }
// };

// var mhs2 = {
//     nama : "aldo",
//     umur : 18,
//     alamat : {
//         jalan : "Jl flamboyan",
//         kodepos : 15224,
//         provinsi: "banten"
//     }
// };

// 2 Function Decaration

// function dataMahasiswa(nama, nim, alamat) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.alamat = alamat;
//     return mhs;

// }

// var mhs3 = dataMahasiswa('Aldo', '009811819', 'ciledug indah 1')

// construcktor

// function Mahasiswa(nama, nim, alamaat) {
//     this.nama = nama;
//     this.nim = nim;
//     this.alamaat = alamaat;
// }
// // must be add word new
// var mhs4 = new Mahasiswa("boetd", "0000091818", "bintaro sektor 9");

// console.log(mhs4);

// latihan Object

// membuat object angkon

function Angkot(supir, trayek, penumpang, kas) {
	this.supir = supir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function (namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	};

	this.penumpangTurun = function (namaPenumpang, bayar) {
		if (this.penumpang.length === 0) {
			console.log("angkot masih kosong ");
			return false;
		}
		for (var i = 0; i < this.penumpang.length; i++) {
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	};
}

var angkot1 = new Angkot("Aldo", ["Arinda", "Lebak Bulus"], [], 0);

angkot1.penumpangNaik('doddy');
angkot1.penumpangNaik('erick');
angkot1.penumpangTurun('erick', 4000);
angkot1.penumpangTurun('doddy', 6000);


console.log(angkot1);
