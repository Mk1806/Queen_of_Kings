// Inserting the Images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })

}
insertImage()



//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(240, 201, 150)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100, 75, 43)'
        }

    })
}
coloring()



// To red the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    if (pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    }
                }
            })
        }
    })
}










tog = 1

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    // greenText = item.innerText

                    // pinkColor = ((Array.from(pinkText)).shift()).toString()
                    // greenColor = ((Array.from(greenText)).shift()).toString()


                    // if (pinkColor !== greenColor) {

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    // pinkText=''
                    coloring()
                    insertImage()
                    tog = tog + 1
                    // }
                    // else {
                    //     coloring()
                    //     alert('You cant defeat your own player')
                    // }
                }
            })
        }

