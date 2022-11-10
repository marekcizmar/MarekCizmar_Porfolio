let button = document.getElementById("hamburger"),
    navigation = document.getElementById("mobileNav"),
    cross = document.getElementById("xmark"),
    mainNav = document.getElementById("mainNav");

button.addEventListener("click", () => {
    mainNav.classList.add("hidden");
    navigation.classList.remove("hidden");
});

cross.addEventListener("click", () => {
    mainNav.classList.remove("hidden");
    navigation.classList.add("hidden");
});

let tabs = document.querySelectorAll('.tabs_toggle');
let contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((content) => {
            content.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    })
})
