let button = document.getElementById("hamburger"),
    navigation = document.getElementById("mobileNav"),
    cross = document.getElementById("xmark");

button.addEventListener("click", () => {
    navigation.classList.remove("hidden");
    button.classList.add("hidden");
    cross.classList.remove("hidden");
});

cross.addEventListener("click", () => {
    navigation.classList.add("hidden");
    button.classList.remove("hidden");
    cross.classList.add("hidden");
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
