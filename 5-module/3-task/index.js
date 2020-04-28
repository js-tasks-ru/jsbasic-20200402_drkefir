function initCarousel() {
  //opredeljaem parametri
     let carousel = document.querySelector(".carousel__inner");
     let arrowRight = document.querySelector(".carousel__arrow_right");
     let arrowLeft = document.querySelector(".carousel__arrow_left");
     let caruselSlides = carousel.querySelectorAll("div.carousel__slide");
     let slideWidth = caruselSlides[0].offsetWidth;
     let count = 1;
     let rotation = 0;
     arrowLeft.style.display = "none";
  //na prawo peredwigaem
     arrowRight.addEventListener("click", toTheRight);
       function toTheRight(event){
         rotation +=  -slideWidth;
         carousel.style.transform = `translateX(${rotation}px)`;
         count++;
            if (count === caruselSlides.length) {
                arrowRight.style.display = "none";
            }
         arrowLeft.style.display = "";
       }
   //na lewo peredwigaem
     arrowLeft.addEventListener("click", toTheLeft);
       function toTheLeft(event){
         rotation += slideWidth;
         carousel.style.transform = `translateX(${rotation}px)`;
         count--;
             if (count === 1) {
                 arrowLeft.style.display = "none";
             }
         arrowRight.style.display = "";
       }
}
