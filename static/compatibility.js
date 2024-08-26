document.querySelectorAll("body > main * > img").forEach(img => {
    if (img.parentElement?.nextElementSibling?.nodeName == "BLOCKQUOTE") {
        img.parentElement.setAttribute("before-blockquote-has-img", "")
    }
})

document.querySelectorAll("body > main table tr > td > :is(em, i)").forEach(em => {
    em.parentElement.parentElement.setAttribute("has-em", "")
    em.parentElement.parentElement.previousElementSibling?.setAttribute("before-has-em", "")
})

document.querySelectorAll("body > main table tr > th:empty").forEach(th => {
    th.parentElement.setAttribute("has-empty-th", "")
})

function hash() {
    document.querySelector("body .gallery > .full > a:target")
    ? document.body.setAttribute("has-open-gallery", "")
    : document.body.removeAttribute("has-open-gallery")
    
    document.querySelectorAll("[has-target]").forEach(e => e.removeAttribute("has-target"))
    document.querySelectorAll("body > main .gallery > .full > a:target").forEach(target => {
        target.parentElement.setAttribute("has-target", "")
    })

    document.querySelector(":target")?.scrollIntoView({
        behavior: "instant",
    })
}
setTimeout(hash, 0);
window.onhashchange = hash;