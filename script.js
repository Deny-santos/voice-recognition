// logica do whatsapp
const wts = document.querySelector(".img")







// logica dos butoes de lingas
const campo = document.querySelector(".input")

let lingua = "pt-BR"

const h1 = document.querySelector("h1")
const opt1 = document.querySelector(".opt1")
const opt2 = document.querySelector(".opt2")
const opt3 = document.querySelector(".opt3")


opt1.addEventListener("click", () => {
    opt2.classList.remove("active")
    opt3.classList.remove("active")
    opt1.classList.add("active")
    h1.innerHTML = "FALE EM PORTUGUS"
    lingua = "pt-BR"
})

opt2.addEventListener("click", () => {
    opt1.classList.remove("active")
    opt3.classList.remove("active")
    opt2.classList.add("active")
    h1.innerHTML = "SPEAK IN ENGLISH"
    lingua = "en"
    
})

opt3.addEventListener("click", () => {
    opt2.classList.remove("active")
    opt1.classList.remove("active")
    opt3.classList.add("active")
    h1.innerHTML = "HABLA EN ESPAÑOL"
    lingua = "es"
    
})



// logica da funçao de falar ao clicar
let text = ""

window.addEventListener("DOMContentLoaded", function (e) {
    
    
    const btn = document.querySelector(".btn")
    
    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        let SpeechRecognitionn = window.SpeechRecognition || window.webkitSpeechRecognition

        let recognition = new SpeechRecognitionn()

        btn.addEventListener("click", function (e) {
            recognition.lang = lingua
            recognition.start()
        }, false)

        recognition.addEventListener("result", function(e) {
            let result = e.results[0][0].transcript
            text = result
            campo.innerHTML = text
        })
        
    } else {
        alert("navegador não suporta")
    }
}, false)



