// pour gerer le telecharchement de l'image 

const profile = document.getElementById('profile');
const upload = document.getElementById('upload');
const uploadLabel = document.getElementById('upload-label');
upload.addEventListener('change',function(){
    profile.src = URL.createObjectURL(upload.files[0])
})

// formulaire submit

const myForm = document.getElementById('myForm')


myForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(upload.value)

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const username = document.getElementById('username')
    const titles = document.querySelector('.titles')
    const formulaires = document.querySelector('.formulaires')

    formulaires.style.display = 'none'
    titles.style.display = 'none'

    const nom = name.value
    const mail = email.value
    const user = username.value
    const photo = profile.src

    messageReception(photo,nom,mail,user)

})

// fonction pour la msg de reception

const content_ticket = document.querySelector('.content_ticket')

content_ticket.innerHTML = ''
function messageReception(photo,name,email,username){
     content_ticket.innerHTML = `
       <div class="mb-2 text-white text-center part-ticket">
         <h1 class="display-4">Congrats, <span class="ticket_name  fw-bold">${name}!</span>  Your ticket is ready.</h1>
         <p>we've emailed your ticket to <span class="ticket_email">${email}</span> and will send update in the run up to the event.</p>
       </div>

       <div class="confirm_ticket">
       <div class="mb-3">
       <h2><img src="assets/images/logo-full.svg" >
       <p class="date_event">jan 31, 2025 / Austin, TX</p>
       </div>

       <div class="mb-2 d-flex align-items-center gx-2">
       <div class=" mt-2">
       <img src="${photo}" class="me-4 img-fluid img_ticket">
       </div>
         <div class="infos_ticket mb-2 ">
            <h4 class="name_ticket">${name}</h4>
             <img src="assets/images/icon-github.svg">
             <span>${username}</span>
         </div>
       </div>
       </div>
    `
}