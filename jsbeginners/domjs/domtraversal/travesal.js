// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//     card.style.display = 'none';
// });

// Dom Traversal 
// menggunakan parentElement -> element
// - parentNode -> node
// - nextSibling -> node
// - nextElementSibling -> element
// - previousSibling -> node
// - previousElementSibling -> element


// preventDefault = mencegah aksi default / atau mejaga kalo ada link
// stopPropagation = menghentikan event bubling


// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener("click", function () {
// 		close[i].parentElement.style.display = "none";
// 	});
// }

const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener("click", function (e) {
//         e.target.parentElement.style.display = 'none';
		// close[i].parentElement.style.display = "none";
// 	});
// }


close.forEach(el => {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});