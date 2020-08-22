// menambah isi array

// var arr = [];
// arr[0] = "aldo";
// arr[1] = "cukil";
// arr[2] = "cepot";
// arr[4] = "agus"; // pada index ke 3 akan mengalami undefined

// Menghapus array

// var arr = ["aldo", "cepot", "cukil"];
// arr[1] = undefined; // elemetnya tidak hilang tapi cepot menjadi undefined
// console.log(arr);

// Menampilkan isi Array

// var arr = ["aldo", "cepot", "cukil", "katamani"];

// for( var i = 0; i < arr.length; i++) { // methodlength menghitung element yg ada di var arr
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }

// Method pada Array
// -join = menaggabungkan isi array mengubahnya jadi string
// push, pop, shift, unshift
// slice, splice

// var arr = ["aldo", "cepot", "cukil", "katamani"];
// console.log(arr.join(' '))

// arr.push('kotok'); // menabahkan array pada bagian belakang
// arr.pop(); // menghapus bagian paling belakang pada array
// arr.unshift("boetd", "masbuns"); // menambahkan array pada bagian depan
// arr.shift(); // menghapus bagian depan pada array
// splice(indexAwal, mauDihapusberapa, elemenBaru1, elemenBaru2, ... dan seterusnya)
// arr.splice(2, 0, "buncit", "ibab" );
// slice diiris:(awal, akhir) mengiris sebuah array menjadi array yg baru

// console.log(arr.join(' '));

// Method looping pada array
// forEach, map
// -ForEach
// ForEach tidak bisa mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7];
// menggunkan fo
// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// menggunakan ForEach
// angka.forEach(function (e) {
// 	console.log(e);
// });

// var arr = ["aldo", "cepot", "cukil", "katamani"];

// arr.forEach(function (e, i) {
// 	console.log("Mahasiswa Ke-" + (i + 1) + " adalah : " + e);
// });

// -map
// map dapat mengembalikan array

// var angka = [1, 2, 3, 5, 6, 7, 4 ];
// var angka2 = angka.map(function (e) {
//     return e * 2;

// });

// console.log(angka2.join(" "));

// Method Sort
// mengurutkan
// angka.sort();
// console.log(angka.join(' '));

// Method filter dan fin
// Filter dapat mengembalikan banyak angka
// var angka = [1, 2, 3, 5, 6, 7, 4 ];
// var angka2 = angka.filter(function(e){
//     return e > 4; 
// });

// console.log(angka2.join(" "));

// Find dapat mengembalikan hanya 1 array []
var angka = [1, 2, 90, 5, 6, 7, 4 ];
var angka2 = angka.find(function(e){
    return e > 4; 
});

console.log(angka2);