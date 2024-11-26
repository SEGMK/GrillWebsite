import { IsRatioForMobile, IsMobileRatio } from './globalData.js';
addEventListener("resize", changeLayoutToMobile);
addEventListener("load", changeLayoutToMobile);
var productGrid = document.getElementById('grid-products');
var isMobile = 0;
function changeLayoutToMobile()
{
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
    changeGridLayout('repeat(2, 50%)');
    isMobile = 1;
}
function ChangeToDesktop(){
    if(isMobile == 0)
        return 0;
    changeGridLayout('repeat(4, 25%)');
    isMobile = 0;
}
function changeGridLayout(gridTemplateColumnsValue) {
    productGrid.style.gridTemplateColumns = gridTemplateColumnsValue;
}