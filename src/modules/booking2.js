"strict coding";

let btn = document.querySelector("button");
const modal = document.getElementById("myModal");
btn.addEventListener("click", function () {
    firstModal();



    // const modal = document.getElementById("myModal");
    // modal.style.display = "block";

    // //create tags in modal
    // const newSpan = document.createElement("span");
    // newSpan.setAttribute("id", "close");
    // document.getElementById("myModal").append(newSpan);
    // newSpan.innerHTML = "&times";
    // const titelModal = document.createElement("h1");
    // titelModal.setAttribute("id", "bookThis");
    // document.getElementById("myModal").append(titelModal);
    // const text1Modal = document.createElement("p");
    // text1Modal.setAttribute("id", "whatDate");
    // document.getElementById("myModal").append(text1Modal);
    // const text2Modal = document.createElement("p");
    // text2Modal.setAttribute("id", "dateText");
    // document.getElementById("myModal").append(text2Modal);
    // const inputField1 = document.createElement("input");
    // inputField1.setAttribute("id", "date");
    // inputField1.setAttribute("type", "text");
    // document.getElementById("myModal").append(inputField1);
    // const searchBtn = document.createElement("button");
    // searchBtn.setAttribute("id", "searchTimes-btn");
    // document.getElementById("myModal").append(searchBtn);




    // document.getElementById("close").innerHTML = "&times";

    //fill tags with text

    // document.getElementById("whatDate").innerHTML = "What date would you like to come";
    // document.getElementById("dateText").innerHTML = "Date";
    // document.getElementById("date").placeholder = "yyyy-mm-dd";
    // document.getElementById("searchTimes-btn").innerHTML = "Search available times";

    //close modal when user clicks(x)
    // document.querySelector(".close").addEventListener("click", () => {
    //     modal.style.display = "none";
    // });
    // user clicks outside modal, close modal
    // window.addEventListener("click", function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
});

function firstModal() {
    const newSpan = document.createElement("span");
    newSpan.setAttribute("id", "close");
    document.getElementById("myModal").append(newSpan);
    newSpan.innerHTML = "&times";
    const titelModal = document.createElement("h1");
    titelModal.setAttribute("id", "bookThis");
    document.getElementById("myModal").append(titelModal);
    const text1Modal = document.createElement("p");
    text1Modal.setAttribute("id", "whatDate");
    document.getElementById("myModal").append(text1Modal);
    const text2Modal = document.createElement("p");
    text2Modal.setAttribute("id", "dateText");
    document.getElementById("myModal").append(text2Modal);
    const inputField1 = document.createElement("input");
    inputField1.setAttribute("id", "date");
    inputField1.setAttribute("type", "text");
    document.getElementById("myModal").append(inputField1);
    const searchBtn = document.createElement("button");
    searchBtn.setAttribute("id", "searchTimes-btn");
    document.getElementById("myModal").append(searchBtn);
    //give modal.-tags value
    document.getElementById("whatDate").innerHTML = "What date would you like to come";
    document.getElementById("dateText").innerHTML = "Date";
    document.getElementById("date").placeholder = "yyyy-mm-dd";
    document.getElementById("searchTimes-btn").innerHTML = "Search available times";
    //click på searchbtn
    searchBtn.addEventListener("click", function () {
        // window.alert("helloo");
        modal.innerHTML = " " + secondModal;

        //create form

        function secondModal() {
            const newForm = document.createElement("form");
            newForm.setAttribute("id", "contactForm");
            document.getElementById("myModal").append(myForm);

            const newSpan = document.createElement("span");
            newSpan.setAttribute("id", "close");
            document.getElementById("myModal").append(newSpan);
            newSpan.innerHTML = "&times";
        }

    });
}

// let searchTimesBtn = document.getElementById("searchTimes-btn");


// searchBtn.addEventListener("click", function () {
//     window.alert("helloo");

//     //create form

// });

    //     const formName = document.getElementById("whatDate").innerHTML = "Name";

    // }


    // const createForm = document.createForm('form');
    // createForm.setAttribute("action", "");
    // createForm.setAttribute("method", "post");
    // x.appendChild(createForm);


    //     const field2 = document.createElement("INPUT");
    //     field2.setAttribute("type", "text");
    //     myModal.append(field2);

    // });

