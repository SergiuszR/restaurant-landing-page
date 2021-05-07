import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.css'
import '@glidejs/glide/dist/css/glide.theme.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

window.addEventListener("load", () => {

    let menuOne = document.querySelector("#chicken-menu");
    let menuTwo = document.querySelector("#roasted-menu");
    let menuThree = document.querySelector("#pizza-menu");
    let menuPicked = document.querySelector("#menu-picked h2")
    let menuMore = document.querySelectorAll("#btn-more")
    let closeMore = document.querySelector("#close-btn")
    let moreCard = document.querySelector("#more-card")
    let moreCardTitle = document.querySelector("#more-card-title h2")
    let glider = document.querySelector("#glider");
    let dishesNames = document.querySelectorAll("#dish-name h4");


    gsap.to(".navigation", {duration: 1, height: 90, delay: 2})
    gsap.to(".hero", {duration: 1, height: "500px", delay: 1.4})

    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo(".map", {
        opacity: 0,
        x: 0
      }, {
        scrollTrigger: {
          trigger: ".menu",
          start: "bottom 90%",
          end: "+=30%",
          scrub: 1
        },
        opacity: 1
      });

    gsap.fromTo(".about", {
        opacity: 1,
        x: 0
      }, {
        scrollTrigger: {
          trigger: ".about",
          start: "bottom 50%",
          end: "+=30%",
          scrub: 1
        },
        opacity: 0
      });
    gsap.fromTo(".menu", {
        opacity: 0,
        x: 0
      }, {
        scrollTrigger: {
          trigger: ".about",
          start: "bottom 80%",
          end: "+=30%",
          scrub: 1
        },
        opacity: 1
      });
    



menuMore[0].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[0].innerText 
})
menuMore[1].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[1].innerText 
})
menuMore[2].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[2].innerText 
})
menuMore[3].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[3].innerText 
})
menuMore[4].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[4].innerText 
})
menuMore[5].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[5].innerText 
})
menuMore[6].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[6].innerText 
})
menuMore[7].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[7].innerText 
})
menuMore[8].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[8].innerText 
})
menuMore[9].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[9].innerText 
})
menuMore[10].addEventListener("click", () => {
    moreCardTitle.innerText = dishesNames[10].innerText 
})
    
    menuMore.forEach(n => n.addEventListener("click", () => {
        moreCard.classList.add("show");
        document.body.style.overflow = "hidden"
    }))

    closeMore.addEventListener("click", () => {
        moreCard.classList.remove("show")
        document.body.style.overflow = "visible"
    })
    
    menuPicked.innerText = "Chicken"

    menuOne.addEventListener("click", () => {
        menuPicked.innerText = "Chicken"
    })

    window.addEventListener("resize" , () => {
        if (innerWidth <= 1100) {
          glider.style.width = "95%";
        } else {
          glider.style.width = "90%";
        }
        glide.update();
      })


    let glide = new Glide(".glide", {
        type: 'slider',
        focusAt: 0,
        perView: 3,
        gap: 40,
        startAt: 0,
        // peek: 20,
        autoheight: true,
        hoverpause: true,
        keyboard: true,
        bound: true,
        breakpoints: {
            1024: {
              perView: 2
            },
            600: {
              perView: 1
            }
        }
    }).mount();
    glide.update();

    

})