addEventListener("scroll", AnimateElementsOnScroll)
function AnimateElementsOnScroll()
{
    
}
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('shown');
        }
        else
        {
            let bottom = entry.boundingClientRect.bottom;
            if (10 < bottom) 
                entry.target.classList.remove('shown');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));