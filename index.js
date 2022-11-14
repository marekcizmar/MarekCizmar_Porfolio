let button = document.getElementById("hamburger"),
    navigation = document.getElementById("mobileNav"),
    cross = document.getElementById("xmark"),
    mainNav = document.getElementById("mainNav");

    
let isOpened = false;

function openDropDown(){
    isOpened = !isOpened;
    if(isOpened){
        navigation.classList.remove("dropdown-close");
        navigation.classList.add("dropdown-open");
    }else{
        navigation.classList.remove("dropdown-open");
        navigation.classList.add("dropdown-close");
    }
}

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
