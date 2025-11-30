const name_text = document.querySelector("#profileName")

const PostNameButton = document.querySelector('#PostName')
const EditNameButton = document.querySelector('#EditName')

const ProfileBlock = document.querySelector(".profile")
const Line = document.querySelector(".line")

const AddInstrument = document.querySelector('#AddInstrument')
const toolsList = document.querySelector('#tools-list')

let heightProfile = 280
let heightLine = 204
let count = 0
let k = 2

PostNameButton.addEventListener('click', () => {
    const name = document.querySelector('#InputName').value.trim()

    if (name.length > 0) {

        document.querySelector('#EditSection').classList.add("hidden")
        document.querySelector('#NameSection').classList.remove("hidden")

        name_text.innerHTML = name
    }
})

EditNameButton.addEventListener('click', () => {
    document.querySelector('#EditSection').classList.remove("hidden")
    document.querySelector('#NameSection').classList.add("hidden")
})

AddInstrument.addEventListener('click', () => {
    const ToolName = document.querySelector('#InputInstrument').value.trim()
    console.log(k, ToolName.length)
    if (ToolName && ToolName.length <= 20) {
        count += ToolName.length + 5
        if (count >= 25 * k) {
            k += 1
            heightProfile += 35
            heightLine += 35
            ProfileBlock.setAttribute('style', 'height:' + heightProfile + 'px')
            Line.setAttribute('style', 'height:' + heightLine + 'px')
        }
        console.log(k, ToolName.length, count, heightProfile, heightLine)
        const li = document.createElement('li')
        li.innerHTML = ToolName
        toolsList.appendChild(li)
        ToolName.value = ' '
    }
    else {
        alert('Длина слова не должна превышать 20 символов')
    }
})