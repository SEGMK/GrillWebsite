import { IsRatioForMobile, IsMobileRatio } from './globalData.js';
addEventListener("resize", changePageLayout);
addEventListener("load", changePageLayout);
var burgerMenuIcon = document.getElementById('menuToggle');
var horizontalMenu = document.getElementById('headersHorizontalMenu');
var isMobile = 0;
function changePageLayout() {
    console.log('hit');
    if (IsRatioForMobile()) {
        ChangeToMobile();
    }
    else if (IsMobileRatio()) {
        ChangeToMobile();
    }
    else {
        ChangeToDesktop();
    }
}
function ChangeToMobile()
{
    if(isMobile == 1)
        return;
    burgerMenuIcon.style.display = 'inline-block';
    horizontalMenu.style.display = 'none';
    isMobile = 1
}
function ChangeToDesktop()
{
    if(isMobile == 0)
        return;
    burgerMenuIcon.style.display = 'none';
    horizontalMenu.style.display = 'flex';
    isMobile = 0
}