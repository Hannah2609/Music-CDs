"use strict";

const cdForm = document.getElementById("cd-form");

document.querySelector("#cd-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const author = e.target.author.value.trim();
    const title = e.target.title.value.trim();
    const year = parseInt(e.target.year.value.trim(), 10);

    if (author && title && !isNaN(year) && year > 0) {
        addCdToTable(author, title, year);
        cdForm.reset();
    } else {
        alert("Please enter valid data in all fields.");
    }
    });

    function addCdToTable(author, title, year) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td class="cd-title">${title}</td>
            <td class="cd-artist">${author}</td>
            <td class="cd-year">${year}</td>
            <td>
                <button class="delete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-5-3A1.5 1.5 0 0 1 5 1h6a1.5 1.5 0 0 1 1.5 1.5V3H14a1 1 0 0 1 0 2h-1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5H2a1 1 0 0 1 0-2h1V2.5A1.5 1.5 0 0 1 4.5 1zm8 2V2.5A.5.5 0 0 0 10.5 2H5a.5.5 0 0 0-.5.5V3h8z"/>
                </svg>
                </button>
            </td>
        `;
    document.querySelector("#cd-table-body").appendChild(newRow);
    addDeleteListener(newRow.querySelector(".delete-btn"));
    }

    function addDeleteListener(button) {
    button.addEventListener("click", function () {
        this.closest("tr").remove();
    });
}
