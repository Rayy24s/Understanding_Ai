let currentPage = 1;

function showPage(pageNumber) {
    const pages = document.querySelectorAll(".content-page");

    pages.forEach(page => page.classList.remove("active"));

    document.getElementById("page" + pageNumber).classList.add("active");
}

function nextPage() {
    currentPage = currentPage === 2 ? 1 : 2;
    showPage(currentPage);
}

function prevPage() {
    currentPage = currentPage === 1 ? 2 : 1;
    showPage(currentPage);
}
