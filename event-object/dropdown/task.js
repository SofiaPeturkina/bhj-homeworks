const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelector(".dropdown__item");

const activeOrNot = () => {
    if (dropdownList.className === "dropdown__list") {
        dropdownList.className = "dropdown__list dropdown__list_active";
    } else {
        dropdownList.className = "dropdown__list";
    }
}

dropdownValue.addEventListener("click", activeOrNot);
for (let i = 0; i < dropdownItem.clientHeight; i++) {
    const changeTextContent = (event) => {
        dropdownValue.textContetnt = dropdownItem[i].textContent;
        dropdownList.className = "dropdown__list";
        event.preventDefault();
    }
    dropdownItem[i].addEventListener("clicl", changeTextContent)
}

