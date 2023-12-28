// toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon1')
let navbar1 = document.querySelector('.navbar1')
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar1.classList.toggle('active1')
}

// scroll Selection//
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')
        }
    })
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // console.log(sticky)
    menuIcon.classList.remove('bx-x')
    navbar1.classList.remove('active1')
}

// jsonlink///
fetch("main.json")
.then(response => response.json()) 
.then(data => {
    console.log(data)
    data.project.forEach(box=>{

        let projectSection = document.getElementById('project')
        let container1 = document.querySelector('.container1') 
        let container = document.createElement('div')
        container.classList.add('container')
        container1.appendChild(container)
        let imageDiv = document.createElement('div')
        imageDiv.classList.add('image')
        container.appendChild(imageDiv)
        let img = document.createElement('img')
        img.src = box.src
        imageDiv.appendChild(img)
        let para = document.createElement('p')
        para.textContent = box.description
        container.appendChild(para)
         let cont = document.createElement('div')
         cont.classList.add('cont')
        container.appendChild(cont)
        let ancher = document.createElement('a')
        ancher.setAttribute('href', box.gitLink)
        ancher.target = "blank"
        ancher.gitLink = box.gitLink
       cont.appendChild(ancher)
       let button = document.createElement('button')
       button.classList.add('btn2')
       button.textContent = "GitHub"       
       ancher.appendChild(button)
       let ancher1 = document.createElement('a')
       ancher1.setAttribute('href', box.netLink)
       ancher1.target = "blank"
       ancher1.netLink = box.netLink
       ancher1.netLink = box.netLink
       cont.appendChild(ancher1)
       let button1 = document.createElement('button')
       button1.classList.add('btn2')
       button1.textContent = "Live Demo"       
       ancher1.appendChild(button1)

       


    })
})