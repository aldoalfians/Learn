// var noAngkot = 10;
// var angkotBeroperasi = 6;
// var i = 1; 

// while(i <= angkotBeroperasi) {
//     console.log("Angkot No. " + i + " Beroperasi dengan baik");
//     i++;
// }

// for( i = angkotBeroperasi + 1; i <= noAngkot; i++ ) {
//     console.log("Angkot No. " + i + " Sedang Tidak Beroperasi.")
// }


// var duaBuahMangga = 2;
// duaBuahMangga++; // --; //increment Decrement
// console.log(duaBuahMangga);


// for(i = 1; i <= noAngkot; i++ ) 
// {

//     if (i <= angkotBeroperasi) {
//         console.log("Angkot No. " + i + ' Beroperasi dengan baik.' );
//     } else {
//         console.log("Angkot No. " + i +  ' Tidak Beroperasi Dengan Baik');
//     }
// }


// for(i = 1; i <= noAngkot; i++ ) 
// {

//     if (i <= angkotBeroperasi && i !== 5) {
//         console.log("Angkot No. " + i + ' Beroperasi dengan baik.' );
//     } else if ( i === 8 || i === 10 || i === 5) { // Efektif 
//         console.log("Angkot No. " + i + " Sedang Lembur");
//     // } else if (i === 10 ) { // Tidak efektif 
//     //     console.log("Angkot No. " + i + " Sedang Beroperasi");    
//     } else {
//         console.log("Angkot No. " + i +  ' Tidak Beroperasi Dengan Baik');
//     }
// }

// apapun yg di input oleh user akan diproses oleh parseInt akan berubah menjadi intger/number  
// var orang = parseInt(prompt('Masukan Angka :')); 

// if(orang === 1) {
//     console.log("dia orang No 1");
// } else if(orang === 2) {
//     console.log("dia orang No 2");
// } else if(orang === 3) {
//     console.log("dia orang No 3");
// } else {
//     console.log("dia bukan orang");
// }

// switch( orang ) {
//     case 1: 
//         alert('dia orang No 1');
//         break;
//     case 2: 
//         alert('dia orang No 2');
//         break;
//     case 3:
//         alert('dia orang No 3');
//         break;
//     default :
//         alert('dia bukan orang');
//         break;   
// }


var item = prompt('Masukan nama motor / mobil : \n (cth: yaris, avansa, alphard, mio, supra)');

switch ( item ) {
    case 'yaris':
    case 'avansa':
    case 'alphard':
        alert("Ini Mobill");
        break;
    case 'mio':
    case 'supra':
        alert("ini Motor");
        break;
    default : 
        alert("bukan motor / mobil")
}