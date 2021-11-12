'strict coding'

/*modal variables*/
let modal = document.getElementById("myModal");
let book1 = document.getElementById("book1");
let book2 = document.getElementById("book2");
let book3 = document.getElementById("book3");

// //open modal when user clicks btn/a-tag
book1.addEventListener('click', function () {
    modal.style.display = "block";
});
book2.addEventListener('click', function () {
    modal.style.display = "block";
});
book3.addEventListener('click', function () {
    modal.style.display = "block";
});
//close modal when user clicks (x)
document.querySelector(".close").addEventListener('click', () => {
    modal.style.display = "none";;
})
// user clicks outside modal, close modal
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
