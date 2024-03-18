var book_list = [
    {
        title: "Title1",
        author: "Author1",
        year: 2024,
        price: 100.00
    }
];

alert("Welcome to my Bookshop!")

var chosen_menu = prompt("What do you want to do ? (add/view/delete/edit/quit) : ")

while (chosen_menu !== "quit" || chosen_menu === "") {
    switch (chosen_menu) {
        case "add":
            addBook()
            break;
        case "view":
            viewBooks()
            break;
        case "delete":
            deleteBook();
            break;
        case "edit":
            editBook()
            break;
        default:
            alert("Invalid command!")
            break;
    }

    chosen_menu = prompt("What do you want to do ? (add/view/delete/edit/quit) : ")
}

alert("Bye bye!")

function validateTitle(str) {
    let title = prompt("Enter book's title " + str + " : ")

    let isvalid = false
    while (!isvalid) {
        if (typeof title != "string" || title == "") {
            alert("Invalid title! please try again")
            title = prompt("Enter book's title : ")
        } else {
            isvalid = true
        }
    }

    return title
}

function validateAuthor() {
    let author = prompt("Enter book's author : ")
    let isvalid = false
    while (!isvalid) {
        if (typeof author != "string" || author == "") {
            alert("Invalid author! please try again")
            author = prompt("Enter book's author : ")
        } else {
            isvalid = true
        }
    }

    return author
}

function validateYear() {
    let publishedYear = prompt("Enter book's published year : ")
    let isvalid = false
    while (!isvalid) {
        if (typeof publishedYear != "string" || publishedYear == "") {
            alert("Invalid published year! please try again")
            publishedYear = prompt("Enter book's published year : ")
        } else {
            publishedYear = Number(publishedYear)
            let currentYear = new Date().getFullYear()
            if (!isNaN(publishedYear) && publishedYear > 0 && publishedYear <= currentYear) {
                isvalid = true
            } else {
                alert("Invalid published year! please try again")
                publishedYear = prompt("Enter book's published year : ")
            }
        }
    }

    return publishedYear
}

function validatePrice() {
    let price = prompt("Enter book's price : ")
    isvalid = false
    while (!isvalid) {
        if (typeof price != "string" || price == "") {
            alert("Invalid price! please try again")
            price = prompt("Enter book's price : ")
        } else {
            price = Number(price)
            if (!isNaN(price) && price > 0) {
                isvalid = true
            } else {
                alert("Invalid price! please try again")
                price = prompt("Enter book's price : ")
            }
        }
    }

    return price
}

function validate() {
    let title = validateTitle("")
    let author = validateAuthor()
    let publishedYear = validateYear()
    let price = validatePrice()

    console.log(title)
    console.log(author)
    console.log(publishedYear)
    console.log(price)

    return { title: title, author: author, year: publishedYear, price: price }
}

function addBook() {
    let book = validate()

    book_list.push({
        title: book.title,
        author: book.author,
        year: book.year,
        price: book.price
    })
    alert("Added")
    viewBooks()
}

function viewBooks() {
    let result = ""
    book_list.forEach(function (book) {
        result += book.title + " " + book.author + " " + book.year + " " + book.price + "\n"
    })
    alert(result)
}

function deleteBook() {
    let bookTitle = prompt("Enter book's title you want to delete : ")
    let found = false

    book_list.forEach(function (book, index) {
        if (book.title === bookTitle) {
            found = true
            book_list.splice(index, 1)
            alert("Deleted")
            viewBooks()
        }
    })

    if (!found) {
        alert("Book not found!")
    }
}

function editBook() {
    let title = validateTitle("(current title)")

    console.log(title)

    found = book_list.find(function(book) {
        return book.title == title;
    })

    console.log(found)

    if (found != null) {
        let title = validateTitle("(new title)")
        let author = validateAuthor()
        let year = validateYear()
        let price = validatePrice()

        book_list[book_list.indexOf(found)] = {
            title: title,
            author: author,
            year: year,
            price: price
        }

        alert("Editted")
        viewBooks()
    } else {
        alert("Book not found!")
    }

}