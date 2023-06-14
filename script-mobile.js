function mobileImageLayout() {

  var startX;
  var imgLayout = document.getElementById('img-layout-mobile');
  var currentImage = document.createElement('img');
  currentImage.setAttribute('id', 'currentImage');
  var nextImage = document.createElement('img');
  nextImage.setAttribute('id', 'nextImage')
  var lastImage = document.createElement('img');
  lastImage.setAttribute('id', 'lastImage');
  var imageWidth = window.innerWidth;

  var currentImageURL = "files/img/josh-berquist-_4sWbzH5fp8-unsplash.jpg";
  var nextImageURL = "files/img/kirk-thornton-8scCtYs4Dp8-unsplash.jpg";
  var lastImageURL = "files/img/olav-tvedt-yq-efMJMuPg-unsplash.jpg";

  currentImage.setAttribute('src', currentImageURL)
  nextImage.setAttribute('src', nextImageURL)
  lastImage.setAttribute('src', lastImageURL)

  var listImage = [lastImage, currentImage, nextImage]

  // primeiro appendChild dos elementos img
  for (let i=0; i<listImage.length; i++) {
    imgLayout.appendChild(listImage[i])
  }
  // função para reordenar os elementos dentro de imageContainer
  function applyListImage(arg) {
    if (arg == 1) {
      reorderListImageRight()
    } else {
      reorderListImageLeft()
    }
    for (let i=0; i<listImage.length; i++) {
      imgLayout.appendChild(listImage[i])
    }
  }
  // função reordena os elementos do primeiro para o último
  function reorderListImageRight() {
    var firstImage = listImage[0]
    for (let i=0; i<listImage.length - 1; i++) {
      listImage[i] = listImage[i+1]
    }
    listImage[listImage.length - 1] = firstImage
  }

  function reorderListImageLeft() {
    var firstImage = listImage[2]
    for (let i=listImage.length - 1; i>0; i--) {
      listImage[i] = listImage[i-1]
    }
    listImage[0] = firstImage
  }

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    var currentX = event.touches[0].clientX;
    var deltaX = startX - currentX;

    if (deltaX > 20) {
      // passar para a esquerda, mostra próxima imagem
      listImage[2].style.transform = "translateX(" + (-deltaX - imageWidth) + "px)";
      listImage[1].style.transform = "translateX(" + (-deltaX - imageWidth) + "px)";
    }
    if (deltaX < -20) {
      // passar para a direita, mostrar imagem anterior
      listImage[0].style.transform = "translateX(" + (-deltaX - imageWidth) + "px)";
      listImage[1].style.transform = "translateX(" + (-deltaX - imageWidth) + "px)";
    }

  }

  function handleTouchEnd(event) {
    var currentX = event.changedTouches[0].clientX;
    var deltaX = startX - currentX;

    if (deltaX > 100) {
      //passar para esquerda, atualiza a imagem
      listImage[0].style.transform = ""; //translateX(" + (0) + "px)
      listImage[1].style.transform = "";
      listImage[2].style.transform = "";
      applyListImage(1)
    }
    if (deltaX < -100) {
      listImage[0].style.transform = "";
      listImage[1].style.transform = "";
      listImage[2].style.transform = "";
      applyListImage(0)
    }
    else {
      listImage[0].style.transform = "";
      listImage[1].style.transform = "";
      listImage[2].style.transform = "";
    }
  }

  imgLayout.addEventListener('touchstart', handleTouchStart);
  imgLayout.addEventListener('touchmove', handleTouchMove);
  imgLayout.addEventListener('touchend', handleTouchEnd);

}

if(window.matchMedia("(max-width: 420px)").matches) {
  mobileImageLayout();
}