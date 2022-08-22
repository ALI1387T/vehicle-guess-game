let image = document.querySelectorAll(".image")
let title = document.querySelector("#title")
let yes = document.querySelector("#yes")
let next = document.querySelector("#next")
let no = document.querySelector("#no")
let brTag = document.querySelector("#br")
let trueTryCount = 0
let FalseTryCount = 0
let tryCount = 0
let imageTrue = []
let imageFalse = []

function hidden(element1, element2) {
    element1.setAttribute("hidden", "")
    element2 ? element2.setAttribute("hidden", "") : ""
}
function imageHidden(i, show) {
    if (show == true) {
        image[i].removeAttribute("hidden", "")
    } else {
        image[i].setAttribute("hidden", "")
    }
}

function next1() {
    if (title.innerHTML == "پیداش کردم") {
        window.location.reload();
    } else {
        yes.removeAttribute("hidden", "")
        no.removeAttribute("hidden", "")
        hidden(next)
        title.innerHTML = "آیا عکس شما بین این دو عکس است ؟"
        imageHidden(2)
        imageHidden(3)
        imageHidden(4)
        imageHidden(5)
    }
}

function True() {
    trueTryCount++
    if (trueTryCount == 1 && FalseTryCount == 0) {
        imageTrue.push(1, 2)
        imageHidden(1)
        imageHidden(2, true)
    } else if (trueTryCount == 2 && FalseTryCount == 0) {
        imageHidden(2)
        title.innerHTML = "پیداش کردم"
        next.value = "دوباره"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
    } else if (trueTryCount == 1 && FalseTryCount == 2) {
        imageHidden(3)
        title.innerHTML = "پیداش کردم"
        next.value = "دوباره"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
    } else if (trueTryCount == 1 && FalseTryCount == 1) {
        imageHidden(2)
        imageHidden(4, true)
        tryCount++
    } else if (trueTryCount == 2 && FalseTryCount == 1 && tryCount == 1) {
        imageHidden(4)
        title.innerHTML = "پیداش کردم"
        next.value = "دوباره"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
    }
}
function False() {
    FalseTryCount++
    if (FalseTryCount == 1 && trueTryCount == 0) {
        imageFalse.push(image[0], image[1])
        imageHidden(0)
        imageHidden(1)
        imageHidden(2, true)
        imageHidden(3, true)
        brTag.setAttribute("hidden", "")
    } else if (FalseTryCount == 2 && trueTryCount == 0) {
        imageFalse.push(image[2], image[3])
        imageHidden(2)
        imageHidden(3)
        imageHidden(4, true)
        imageHidden(3, true)
        brTag.setAttribute("hidden", "")
    } else if (FalseTryCount == 3 && trueTryCount == 0) {
        imageHidden(3)
        imageHidden(4)
        imageHidden(5, true)
        title.innerHTML = "پیداش کردم"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
        next.value = "دوباره"
    } else if (FalseTryCount == 1 && trueTryCount == 1) {
        imageHidden(2)
        imageHidden(0)
        imageHidden(1, true)
        title.innerHTML = "پیداش کردم"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
        next.value = "دوباره"
    } else if (FalseTryCount == 2 && trueTryCount == 1){
        imageHidden(3)
        imageHidden(2,true)
        title.innerHTML = "پیداش کردم"
        hidden(no, yes)
        next.removeAttribute("hidden", "")
        next.value = "دوباره"
    }
}
hidden(no, yes)

next.addEventListener("click", next1)
yes.addEventListener("click", True)
no.addEventListener("click", False)