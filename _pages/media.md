---
layout: archive
title:
    en: "Media"
    pt: "Mídia"
permalink: /media/
author_profile: true
---
{% include toc %}


<style>

.list {
  height: 200px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.list li {
  list-style-type: none;
  
  width: 200px;
  height: 200px;
  opacity: .25;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  border-radius: 2px;
  background: #9C89B8;
  background-image: url('/images/profilepic.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 1s, opacity 1s;
}

.list .act {
  opacity: 1;
}

.list .prev,
.list .next {
  cursor: pointer;
}

.list .prev {
  transform: translateX(-220px) scale(.85);
}

.list .next {
  transform: translateX(220px) scale(.85);
}

.list .hide {
  transform: translateX(-420px) scale(.85);
}

.list .new-next {
  transform: translateX(420px) scale(.85);
}

.list .hide,
.list .new-next {
  opacity: 0;
  transition: opacity .5s, transform .5s;
}

.swipe {
  width: 270px;
  height: 200px;
  position: absolute;
  background-color: green;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  opacity: 0;
}
</style>

<div class="lang-en" markdown="1">

## About
This page contains the photo of the events i went to. Each of them are a separate page, telling a little about the event, like it's a blog!

# 2025
## MCTIA
## SAB
# 2024
## IAU GA
## IX FEBIC
# 2023
## 40 MOSTRATEC
## 23 FEBRACE

</div> 

<div class="lang-pt" markdown="1">

## Sobre
Essa página é dedicada as fotos dos eventos que participei. Cada item é uma página contando uma pequena história sobre o evento, como em um blgo!

# 2025
## MCTIA
## SAB
# 2024
## IAU GA
## IX FEBIC
# 2023
## 40 MOSTRATEC
## 23 FEBRACE

</div>

<div>
<ul class="list">
  <li class="hide"></li>
  <li class="prev"></li>
  <li class="act"></li>
  <li class="next"></li>
  <li class="next new-next"></li>
</ul>

<div class="swipe"></div>

</div>

</div>

<script src="https://hammerjs.github.io/dist/hammer.js"></script>

<script>
const $ = selector => {
  return document.querySelector(selector);
};

function next() {
  if ($(".hide")) {
    $(".hide").remove(); 
  }

  /* Step */

  if ($(".prev")) {
    $(".prev").classList.add("hide");
    $(".prev").classList.remove("prev");
  }

  $(".act").classList.add("prev");
  $(".act").classList.remove("act");

  $(".next").classList.add("act");
  $(".next").classList.remove("next");

  /* New Next */

  $(".new-next").classList.remove("new-next");

  const addedEl = document.createElement('li');
  $(".list").appendChild(addedEl);
  addedEl.style.backgroundImage = "url('/images/profilepic.jpeg')";
  $(".list").appendChild(addedEl);
  addedEl.classList.add("next","new-next");
}

function prev() {
  $(".new-next").remove();
    
  /* Step */

  $(".next").classList.add("new-next");

  $(".act").classList.add("next");
  $(".act").classList.remove("act");

  $(".prev").classList.add("act");
  $(".prev").classList.remove("prev");

  /* New Prev */

  $(".hide").classList.add("prev");
  $(".hide").classList.remove("hide");

  const addedEl = document.createElement('li');
  $(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.style.backgroundImage = "url('/images/profilepic.jpeg')";
  $(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.classList.add("hide");
}

slide = element => {
  /* Next slide */
  
  if (element.classList.contains('next')) {
    next();
    
  /* Previous slide */
    
  } else if (element.classList.contains('prev')) {
    prev();
  }
}

const slider = $(".list"),
      swipe = new Hammer($(".swipe"));

slider.onclick = event => {
  slide(event.target);
}

swipe.on("swipeleft", (ev) => {
  next();
});

swipe.on("swiperight", (ev) => {
  prev();
});

</script>