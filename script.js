window.addEventListener("scroll", function() {
  const header = this.document.querySelector(".secao-topo");
  header.classList.toggle("sticky", this.window.scrollY > 0)
})

if (window.matchMedia("(min-width: 880px)").matches) {
  const buttonRight = document.querySelector(".botao-right");
  const imgCar = document.querySelectorAll(".img-conteudo");

  buttonRight.addEventListener("click", function(event) {
    event.stopPropagation();
    for (let i=0; i<imgCar.length; i++) {
      if (imgCar[imgCar.length - 1].classList == "img-conteudo displayed") {
        imgCar[imgCar.length - 1].classList.toggle("displayed")
        imgCar[0].classList.toggle("displayed")
        break
      }
      if (imgCar[i].classList == "img-conteudo displayed") {
        imgCar[i].classList.toggle("displayed")
        imgCar[i+1].classList.toggle("displayed")
        break
      }

    }
  })

  const buttonLeft = document.querySelector(".botao-left");

  buttonLeft.addEventListener("click", function(event) {
    event.stopPropagation();
    for (let i=0; i<imgCar.length; i++) {
      if (imgCar[0].classList == "img-conteudo displayed") {
        imgCar[0].classList.toggle("displayed")
        imgCar[imgCar.length - 1].classList.toggle("displayed")
        break
      }
      if (imgCar[i].classList == "img-conteudo displayed") {
        imgCar[i].classList.toggle("displayed")
        imgCar[i-1].classList.toggle("displayed")
        break
      }
    }
  })

  const imgLayout = document.querySelector(".img-layout");

  imgLayout.addEventListener("mouseenter", function() {
    buttonRight.classList.toggle("showed")
    buttonLeft.classList.toggle("showed")
  })
  imgLayout.addEventListener("mouseleave", function() {
    buttonRight.classList.toggle("showed")
    buttonLeft.classList.toggle("showed")
  })

  const imgExpanded = document.querySelector(".img-expanded")
  const secaoTopo = document.querySelector(".secao-topo")
  const bgExpanded = document.querySelector(".bg-expanded")
  const botaoClose = document.querySelector(".botao-close")

  imgLayout.addEventListener("click", function() {
    var imgDisplayed = document.querySelector(".img-conteudo.displayed")
    var imgClone = imgDisplayed.cloneNode()
    imgClone.setAttribute("id", "img-clone")
    imgClone.classList.remove("displayed")
    imgClone.classList.add("expanded")
    imgExpanded.insertBefore(imgClone, botaoClose)
    bgExpanded.style.display = "block"
    secaoTopo.style.display = "none"
  })
  
  botaoClose.addEventListener("click", function() {
    var imgDisplayed = document.querySelector(".img-conteudo.expanded")
    bgExpanded.style.display = "none"
    secaoTopo.style.display = "block"
    imgDisplayed.remove()
  })
  
}

const contatoDiv = document.getElementById("contato");
const contatoButton = document.querySelector(".contato");

contatoButton.addEventListener("click", function() {
  var headerHeight = 68
  const contatoTop = contatoDiv.offsetTop - headerHeight
  window.scrollTo({ top: contatoTop, left: 0, behavior: "smooth" })
  console.log(contatoDiv.offsetTop)
})

