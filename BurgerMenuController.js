var menuContentElement = document.getElementById('burgerMenuContent');
var isDisplayed = 0
var isDisplayedByUser = 0;
var timeoutId = -1;
addEventListener("resize", CloseBurgerMenuOnLayoutChanged);
function ChangeMenuState() {
    isDisplayedByUser = !isDisplayedByUser;
    if (timeoutId != -1)
        ClearTimeOutAnimationTasks();
    if (isDisplayed) {
        CloseBurgerMenu();
    }
    else {
        ShowBurgerMenu();
    }
}
function ShowBurgerMenu() {
    menuContentElement.style.display = 'block';
    timeoutId = setTimeout(function () {
        menuContentElement.style.marginTop = 0;
        isDisplayed = isDisplayed === 0 ? 1 : 0;
        timeoutId = -1
    }, 5);
}
function CloseBurgerMenu() {
    menuContentElement.style.marginTop = '-100%';
    timeoutId = setTimeout(function () {
        menuContentElement.style.display = 'none';
        isDisplayed = isDisplayed === 0 ? 1 : 0;
        timeoutId = -1
    }, 600);
}
function CloseBurgerMenuOnLayoutChanged() {
    if (timeoutId != -1)
        ClearTimeOutAnimationTasks();
    if (isDisplayed && 950 < window.innerWidth) {
        CloseBurgerMenu();
    }
    else if (isDisplayedByUser && !isDisplayed && window.innerWidth < 950) {
        ShowBurgerMenu();
    }
}
function ClearTimeOutAnimationTasks() {
    clearTimeout(timeoutId);
    isDisplayed = isDisplayed === 0 ? 1 : 0;
    if (isDisplayed) {
        menuContentElement.style.marginTop = 0;
    }
    else {
        menuContentElement.style.display = 'none';
    }
    timeoutId = -1;
}