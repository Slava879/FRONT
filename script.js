const ProfileName = document.querySelector("#profileName") // имя пользователя

const PostNameButton = document.querySelector('#PostName') // кнопка сохранения имени
const EditNameButton = document.querySelector('#EditName') // кнопка редактирования имени

const EditSection = document.querySelector('#EditSection') // Секция редактирования имени
const NameSection = document.querySelector('#NameSection') // Секция редактирования имени

const ProfileBlock = document.querySelector(".profile") // Весь блок профиля
const Line = document.querySelector(".line") // линия разделения между подблоками блока Профиля

const EditToolsButton = document.querySelector("#EditToolsButton") // кнопка для редактирования инструментов
const HiddenToolsInput = document.querySelector("#HiddenToolsInput") // кнопка для закрытия возможности редактирования профиля
HiddenToolsInput.classList.add("hidden")
const InputGroup =  document.querySelector("#Group") // Кнопка + поле для ввода названия инструмента

const ToolName = document.querySelector('#InputInstrument') // Введенное название инструмента
const AddInstrument = document.querySelector('#AddInstrument') // кнопка для добавления инструмента
const toolsList = document.querySelector('#tools-list')

let HeightProfile = 280
let HeightLine = 204
let CountSymbols = 0
let CountLines = 0

PostNameButton.addEventListener('click', () => {
    const ProfileNameInput = document.querySelector('#InputName').value.trim() // Введенное имя пользователя

    if (ProfileNameInput.length > 0) {
        EditSection.classList.add("hidden")
        NameSection.classList.remove("hidden")
        ProfileName.innerHTML = ProfileNameInput
    } else {alert('Введите имя')}
})


EditNameButton.addEventListener('click', () => {
    EditSection.classList.remove("hidden")
    NameSection.classList.add("hidden")
})

EditToolsButton.addEventListener('click', () => {
    InputGroup.classList.remove("hidden")
    HiddenToolsInput.classList.remove("hidden")
    EditToolsButton.classList.add("hidden")
})

HiddenToolsInput.addEventListener('click', () => {
    InputGroup.classList.add("hidden")
    HiddenToolsInput.classList.add("hidden")
    EditToolsButton.classList.remove("hidden")
})


AddInstrument.addEventListener('click', () => {
    const ToolNameValue = ToolName.value.trim()

    if (ToolNameValue) {
        if (ToolNameValue.length <= 30) {
            CountSymbols += ToolNameValue.length + 7
            if (CountSymbols >= 35 * CountLines) {
                CountLines += 1
                HeightProfile += 35
                HeightLine += 35
                ProfileBlock.setAttribute('style', 'height:' + HeightProfile + 'px')
                Line.setAttribute('style', 'height:' + HeightLine + 'px')
            }
            console.log(`
                Количество линий: ${CountLines},
                Длина введенного слова: ${ToolNameValue.length},
                Количество символов: ${CountSymbols},
                Высота блока Profile: ${HeightProfile},
                Высота разделительной линии: ${HeightLine}`)
            const li = document.createElement('li')
            li.innerHTML = ToolNameValue
            toolsList.appendChild(li)
            ToolName.value = ' '
        } else {alert('Название не должно превышать 30 букв, длина вашего слова: ' + ToolNameValue.length + ' букв')}
    } else {alert('Введите название инструмента')}
})
