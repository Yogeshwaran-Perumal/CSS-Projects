var popupoverley = document.querySelector(".popup-overley")
var popupbox = document.querySelector(".popup-box")
var button = document.getElementById("add-popup-button")

button.addEventListener("click", function () {
    popupoverley.style.display = "block"
    popupbox.style.display = "block"
})
// cancle 
var cancel = document.getElementById("cancle-book")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverley.style.display = "none"
    popupbox.style.display = "none"

})
//  add books key 
//  select container , addbook, book-title-Input , book-title-author , book-title-description-input 
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var booktitle = document.getElementById("bookinput")
    var bookauthor = document.getElementById("authorinput")
    var bookdescription = document.getElementById("descriptioninput")
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitle.value}<h2>
                        <h5> ${bookauthor.value}</h5>
                        <p> ${bookdescription.value}</p> 
                        <button onclick="deleteitem(event)">Delete</button>`
    container.appendChild(div)
    popupoverley.style.display = "none"
    popupbox.style.display = "none"
});
function deleteitem(event) {
    event.target.parentElement.remove()
}
