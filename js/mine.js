// Spinner
let spinner = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>
{
    spinner.style.opacity = '0';
    setTimeout(() =>
    {
        spinner.style.display = 'none';
    }, 200);
})


/* bun up page */
// navbar 
let span_btn_up = document.querySelector(".up");
const navbar = document.querySelector('nav');

window.onscroll = function ()
{
    if (this.scrollY >= 100) span_btn_up.classList.add("visible");
    else span_btn_up.classList.remove("visible");

    if (this.scrollY >= 50)
        navbar.classList.add("border_hed"); else
        navbar.classList.remove("border_hed");

};

/* bun up page */
span_btn_up.onclick = function ()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function removeAOSLinkOnMobile()
{
    if (window.innerWidth <= 768)
    {
        let aosLink = document.querySelector('link[href="https://unpkg.com/aos@2.3.1/dist/aos.css"]');
        if (aosLink)
        {
            aosLink.parentNode.removeChild(aosLink);
        }
    }
}

window.addEventListener('load', removeAOSLinkOnMobile);
window.addEventListener('resize', removeAOSLinkOnMobile);

