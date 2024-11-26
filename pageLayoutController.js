import { IsRatioForMobile, IsMobileRatio } from './globalData.js';
addEventListener("resize", changePageLayout);
addEventListener("load", changePageLayout);
var gridTextCells = document.getElementsByClassName('col-h');
var grid = document.getElementById('grid-1');
var isMobile = 0;
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
    if (isMobile == 1)
        return;
    document.getElementById('main-container').style.width = '80%';
    changeGridLayout('span 1', 'repeat(1, 1fr)');
    OrderGridElementsForMobileLayout();
    ChangeTextAlignmentToMobile();
    isMobile = 1;
}
function ChangeTextAlignmentToMobile() {
    for (let i = 0; i < gridTextCells.length; i++) {
        for (let j = 0; j < gridTextCells[i].children.length; j++) {
            if (gridTextCells[i].children[j].nodeName == 'H1' || gridTextCells[i].children[j].nodeName == 'P') {
                gridTextCells[i].children[j].style.textAlign = 'center';
            }
        }
    }
}
function OrderGridElementsForMobileLayout() {
    let interationsWithoutChange = 0;
    for (let i = 0; i < grid.children.length; i++) {
        if (interationsWithoutChange % 2 == 0 && interationsWithoutChange != 0) {
            interationsWithoutChange = 0;
            grid.children[i].style.order = i + 1;
            grid.children[i + 1].style.order = i
            i++;
            continue;
        }
        grid.children[i].style.order = i;
        interationsWithoutChange++;
    }
}
function ChangeToDesktop() {
    if (isMobile == 0)
        return;
    document.getElementById('main-container').style.width = '70%';
    changeGridLayout('', 'repeat(2, 1fr)');
    OrderGridElementsForDesktopLayout();
    ChangeTextAlignmentToDesktop();
    isMobile = 0;
}
function ChangeTextAlignmentToDesktop() {
    for (let i = 0; i < gridTextCells.length; i++) {
        for (let j = 0; j < gridTextCells[i].children.length; j++) {
            if (gridTextCells[i].children[j].nodeName == 'H1' || gridTextCells[i].children[j].nodeName == 'P') {
                if (i % 2 == 0)
                    gridTextCells[i].children[j].style.textAlign = 'right';
                else
                    gridTextCells[i].children[j].style.textAlign = 'left';
            }
        }
    }
}
function OrderGridElementsForDesktopLayout() {
    for (let i = 0; i < grid.children.length; i++) {
        grid.children[i].style.order = 0;
    }
}
function changeGridLayout(gridColumnValue, gridTemplateColumnsValue) {
    if (gridColumnValue != '') {
        for (let i = 0; i < gridTextCells.length; i++) {
            gridTextCells[i].style.gridColumn = gridColumnValue;
        }
    }
    grid.style.gridTemplateColumns = gridTemplateColumnsValue;
}