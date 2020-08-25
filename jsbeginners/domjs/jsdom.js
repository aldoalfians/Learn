// document object model (dom)
// Manipulasi DOM

// DOM Selcetion
// document.getElementById() -> element
// const titleH1 = document.getElementById("judul");
// judul.style.color = "aqua";
// judul.style.backgroundColor = "rgb(47, 161, 214)";

// document.getElementsByTagName -> HTMLCollections

// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = "rgb(47, 161, 214)";
// }

// document.getElementsByClassName -> HTMLCollections

// const p1 = document.getElementsByClassName("p1") [0];
// p1.style.color = "#fff";

// document.querySelector() -> Element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = 'Aqua';

// document.querySelectorAll() -> nodelist
// const p = document.querySelectorAll("p");
// for( let i = 0; i < p.length; i++) {
// 	p[i].style.color = "red";
// }

// innerHTML

// const judul = document.getElementById("judul");
// judul.innerHTML = "MAS BOATD";

// Attribut
// getAttribute
// setAttribute
// removeAttribute

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("class", "aldo");

// classList
// classList.add() -> menambahkan kelas baru
// classList.remove() -> menghilangkan kelas
// classList.toggle() -> klo tidak ada kelas tertentu akan di tambakan, klo ada sebaiknya akan di hilangkan
// classList.item() -> mengetahui class tertentu pada sebuah element
// classList.contains() -> cek element class tertentu
// classList.replace() -> menganti class yg ada ke yg baru

// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("label");
// p2.classList.toggle("toggle");

// Manipulasi Node
// document.creatElement() -> membuat elementnya
// document.creatTextNode() -> menuliskan apa? element yg dibuat
// node.appenChild() -> menyimpan
// node.insertBefore() -> menyimpan
// parentNode.removeChild()
// parentNode.replaceChild()

// Membuat element baru

// const paragrafBaru = document.createElement("p");
// const teksParagrafBaru = document.createTextNode("Paragraf Baru");
// simpan ke dalam paragraf
// paragrafBaru.appendChild(teksParagrafBaru);

// simpan paragrafBaru diakhir Section A
// const sectionA = document.getElementById("a");
// sectionA.appendChild(paragrafBaru);

// const liBaru = document.createElement("li");
// const teksLiBaru = document.createTextNode("item baru");

// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");

// ul.insertBefore(liBaru, li2);

// parentNode.removeChild()

// const link = document.getElementsByTagName("a")[0];

// sectionA.removeChild(link);

// parentNode.replaceChild()

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru')

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

//
//

// DOM Events
// Event Handler klo menggunakan ini= event pertama akan di timpa samapai selanjutnya akan menimpa klo ada even lagi
// bisa di simpan -inline HTML attribute(tidak efesien), dan -Element Method

const p3 = document.querySelector(".p3");

function ubahWarnaP2() {
	p2.style.backgroundColor = "red";
}

function ubahWarnaP3() {
	p3.style.backgroundColor = "red";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

//

// addEventListerner klo menggunakan ini= event semuanya akan dijalankan tidak menimpa event sebelumnya

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
	const ul = document.querySelector("section#b ul");
	const liBaru = document.createElement("li");
	const teksLiBaru = document.createTextNode("Item Baru");

	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});
