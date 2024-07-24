document.addEventListener('DOMContentLoaded', function(){
    //navbar
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar && close && nav) {
        bar.addEventListener('click', function () {
            nav.classList.add('active');
        });

        close.addEventListener('click', function () {
            nav.classList.remove('active');
        });

        document.addEventListener('click', function (event) {
            const target = event.target;
            if (!nav.contains(target) && target !== bar) {
            nav.classList.remove('active');
            }
        });

        // Handle clicks on nav links to close navbar on small screens
        nav.querySelectorAll('a').forEach(function (navLink) {
            navLink.addEventListener('click', function () {
            if (window.innerWidth <= 858) {
                nav.classList.remove('active');
            }
            });
        });
    }


    // service number count
    let valueDisplay =document.querySelectorAll(".num");
    let interval = 500;
    valueDisplay.forEach((valueDisplay)=>{
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration)
    })

    //accordion
    const accordionItems = document.querySelectorAll(".accordion-item");
  
  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    title.addEventListener("click", () => {
      item.classList.toggle("active");

      const icon = title.querySelector("i");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");

      accordionItems.forEach((otherItems) => {
        if (otherItems !== item) {
          otherItems.classList.remove("active");
          const otherIcon = otherItems.querySelector(".accordion-title i");
          otherIcon.classList.remove("fa-chevron-up");
          otherIcon.classList.add("fa-chevron-down");
        }
      });
    });
  });

      //footer
    const currentYearSpan = document.getElementById("currentYear");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

})