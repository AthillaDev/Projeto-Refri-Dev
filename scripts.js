let list = document.querySelectorAll(".item") // mapeando os itens
let next = document.getElementById("next") // mapeando botão next
let prev = document.getElementById("prev") // mapeando botão prev

let count = list.length // 3 itens
let active = 0   // item ativo

const dots = document.querySelectorAll(".dot")

function updateDots() {

    dots.forEach(dot => {
        dot.classList.remove("active-dot")
    })

    dots[active].classList.add("active-dot")
}

next.addEventListener("click", () => {

    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add("active")
    updateDots()
    

})

prev.addEventListener("click", () => {

    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add("active")
    updateDots()

})
