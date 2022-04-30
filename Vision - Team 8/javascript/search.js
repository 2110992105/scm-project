// search bar functionality code 
// using this code user will be able to search for books, this search process works on the name of books
// to see all the books again user need to clear the search bar and then press the enter key
// ___________________________________________________________________________________________________________________________________ //

// making a array which have name of all the books of the webpage
// bookDiv is array which conatins all div having class name "book"
var bookDiv = document.getElementsByClassName('book');
// bookName array is for storing name of all the books
var bookName = [];
// adding book name to the bookName array
for (let i = 0; i < bookDiv.length; i++) {
    bookName.push(bookDiv[i].innerText);
}
// printing name of all the books in console
// console.log(bookName)

// ______________________________________________________________________________________________________________________________________ //

// ______________________________________________________________________________________________________________________________________ //

// search bar functionality code
// getting the searchbar as searchArea variable
var searchArea = document.getElementById('searchBar');

searchArea.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // getting the value from search bar

        // var searchItem = document.getElementById('searchBar').Value;
        // console.log(searchItem)

        console.log("Search Query = " + document.getElementById('searchBar').value)
            // searchItem = searchItem.toLowerCase();

        for (let i = 0; i < bookName.length; i++) {
            if (!bookName[i].toLowerCase().includes(document.getElementById('searchBar').value)) {
                bookDiv[i].style.display = 'none';
            } else {
                bookDiv[i].style.display = 'initial';
            }
        }
    }

})


// this is previous code with some bugs or mistakes due to which it doesnt works fine
// function search(searchItem) {
//     console.log(searchItem);

//     searchItem = searchItem.toLowerCase();
//     var query = document.querySelectorAll("div.book a p").innerText;

//     for (let i = 0; i < query.length; i++) {
//         if (!query[i].innerText.toLowerCase().includes(searchItem)) {
//             document.getElementsByClassName('book').style.display = "none";
//         } else {
//             document.getElementsByClassName('book').style.display = "block";
//         }
//     }
//     console.log(searchItem);
// }