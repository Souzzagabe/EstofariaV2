const menuLinks = document.querySelectorAll('.navigation a[href^="#"]')


function getDistanceFromThetop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop

}

function nativeScroll(distanceFromTheTop) {
    window.scroll ({
        top: distanceFromTheTop, 
        behavior: "smooth",

    })
}

function scrollToSection(event) {
    event.preventDefault()
    const distanceFromTheTop = getDistanceFromThetop(event.target) - -10
    nativeScroll(distanceFromTheTop)

}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})