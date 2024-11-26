import { IsRatioForMobile, IsMobileRatio } from './globalData.js';
addEventListener("resize", changePageLayout);
addEventListener("load", changePageLayout);
var snapshotTextElement = document.getElementById('website-snapshot-text');
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
function ChangeToMobile() {
    ChangeTextAligment('center', '0px', '0px');
}
function ChangeToDesktop() {
    ChangeTextAligment('left', '0px', '45%');
}
function ChangeTextAligment(/*string*/ aligmentValue, /*string*/ leftValue, /*string*/ rightValue)
{
    snapshotTextElement.style.textAlign = aligmentValue;
    snapshotTextElement.style.left = leftValue;
    snapshotTextElement.style.right = rightValue;
}