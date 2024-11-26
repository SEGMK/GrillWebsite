export function IsRatioForMobile() {
    return window.innerWidth - (window.innerWidth * 0.7) < 400;
}
export function IsMobileRatio()
{
    return window.matchMedia("(orientation: portrait)").matches
}