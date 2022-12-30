
const boxes = document.querySelectorAll('.box')

// checkbox ja kano kichu hote pore like photo image section etc //

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
    // console.log(window.innerHeight / 5 * 4)
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        } 
    })
}
  

