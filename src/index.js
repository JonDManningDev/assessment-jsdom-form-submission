/*
 Your solution here
 */
const searchSubmitHandler = (event) => {
    event.preventDefault();

    const search = event.target;
    const searchData = new FormData(search);
    const searchTerm = searchData.get("searchTerm");
    const preppedSearch = searchTerm.toLowerCase().trim();
    // console.log(`The final search term was: ${preppedSearch}`);

    if (preppedSearch.length === 0) {
        genErrorElement();
    }

    const titles = document.querySelectorAll("article > h2");
    titles.forEach((title) => {
        if (!title.innerText.toLowerCase().includes(preppedSearch)) {
            title.parentNode.classList.add("hidden");
        } else {
            title.parentNode.classList.remove("hidden");
        };
    });

    const hiddenArticles = document.querySelectorAll(".hidden").length;
    const visibleArticles = document.querySelectorAll("article:not(.hidden)").length;
    // console.log(`Hidden Articles: ${hiddenArticles}`);
    // console.log(`Visible Articles: ${visibleArticles}`);
};

// Helper Functions

function genErrorElement() {

    const searchForm = document.querySelector("#searchForm");
    const errorForm = document.createElement("div");
    const errorContent = "Please enter a search term";

    errorForm.innerHTML = errorContent;
    errorForm.classList.add("error");
    errorForm.setAttribute("id", "searchError");
    searchForm.appendChild(errorForm);
};

// Main Functions

const main = () => {
    const search = document.querySelector("#searchForm");
    search.addEventListener("submit", searchSubmitHandler);
}

window.addEventListener("DOMContentLoaded", main);