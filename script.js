let swithMode = document.getElementById("swithMode");
swithMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") == "style.css") {
        theme.href = "dark-mode.css"
    } else {
        theme.href = "style.css"
    }
}



function trans () {
    let translate = document.getElementById("translate");
    let nameIs = document.getElementById("nameIs");
    let name = document.getElementById("name")
    let profession = document.getElementById("profession")
    let contact = document.getElementById("contact")
    let home = document.getElementById("home")
    let aboutM = document.getElementById("aboutM") 
    let contacts = document.getElementById("contacts")
    if (1===1) {
        translate.innerHTML = "Я занимаюсь версткой сайтов! Занимаюсь этим больше года! Могу создавать одностраничные сайты с некоторым функционалом."
        nameIs.innerHTML = "Меня зовут"
        name.innerHTML = "Егор Паньков и я "
        profession.innerHTML = "веб - разработчик"
        contact.innerHTML = "Связь со мной"
        home.innerHTML = "Главная"
        aboutM.innerHTML = "Обо мне"
        contacts.innerHTML = "Контакты"
    } else {
        console.log('krah')
    }
}



function transs () {
    let about = document.getElementById("about")
    let contact = document.getElementById("contact")
    let home = document.getElementById("home")
    let aboutM = document.getElementById("aboutM") 
    let names = document.getElementById("names")
    let fam = document.getElementById("fam")

    if (1===1) {
        home.innerHTML = "Главная"
        aboutM.innerHTML = "Обо мне"
        contacts.innerHTML = "Контакты"
        about.innerHTML = "Мне 16 лет и я до сих пор хожу в школу, на одном из моих занятий по информатике мы обсуждали тему создания сайтов, мне было очень интересно, а на следующий день я нашел в интернете много литературы и видеокурсов, так я стал верстальщиком сайтов! В свободное время играю с друзьями в футбол и баскетбол, посещаю секцию самбо."
        names.innerHTML = "Егор"
        fam.innerHTML = "Паньков"
    } else {
        console.log('krah')
    }
}
function transss () {
    let home = document.getElementById("home")
    let aboutM = document.getElementById("aboutM") 
    let contacts = document.getElementById("contacts")
    let mess = document.getElementById("mess")
    let send = document.getElementById("send")
    let messa = document.getElementById("messa")
    let wrt = document.getElementById("wrt")


    if (1===1) {
        home.innerHTML = "Главная"
        aboutM.innerHTML = "Обо мне"
        contacts.innerHTML = "Контакты"
        mess.innerHTML = "Свяжитесь со мной, если я Вас заинтересовал!"
        send.innerHTML = "Отправить сообщение"
        messa.innerHTML = "сообщение"
        wrt.innerHTML = "Напишите мне "
    } else {
        console.log('krah')
    }
}