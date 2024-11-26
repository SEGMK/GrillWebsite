import { IsRatioForMobile, IsMobileRatio } from './globalData.js';
addEventListener("resize", changePageLayout);
addEventListener("load", changePageLayout);
var isMobile = 0;
var footerContent = document.getElementById('footer-content');
function changePageLayout() {
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
function ChangeToMobile(){
    if(isMobile == 1)
        return;
    footerContent.style.flexDirection = 'column';
    footerContent.style.height = 'auto';
    isMobile = 1;
}
function ChangeToDesktop(){
    if(isMobile == 0)
        return;
    footerContent.style.flexDirection = 'row';
    footerContent.style.height = '300px';
    isMobile = 0;
}