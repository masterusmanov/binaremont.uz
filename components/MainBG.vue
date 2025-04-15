<template>
  <div class="relative w-full bg-teal-800 bg-opacity-90 overflow-hidden">
      <div class="absolute inset-0 w-full h-full z-0" :style="{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}"></div>
      
      <div class="absolute inset-0 bg-[#184748] bg-opacity-85 z-10"></div>
      
    <div class="relative mt-[50px] md:mt-[100px] z-20 container mx-auto h-full flex flex-col justify-between py-10 px-4">
      <div class="mt-8">
        <h1 class="text-white text-4xl md:text-5xl font-bold leading-tight slide-up-animation">{{$t('mainsection.title.one').toUpperCase()}} <br>{{$t('mainsection.title.two').toUpperCase()}} <br>{{$t('mainsection.title.three').toUpperCase()}}</h1>
        <p class="text-gray-300 mt-6 text-lg slide-down-animation">{{$t('mainsection.desc.one').toUpperCase()}} <br>{{$t('mainsection.desc.two').toUpperCase()}}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="flex items-center overflow-hidden">
          <div class="slide-right-animation">
            <img :src="iconn" alt="icon" class="w-[70%]">
          </div>
          <div class="text-white font-[700] slide-left-animation">О{{$t('mainsection.sections.onesec.one').toUpperCase()}} <br> {{$t('mainsection.sections.onesec.two').toUpperCase()}}</div>
        </div>
        
        <div class="flex items-center overflow-hidden">
          <div class="slide-right-animation">
            <img :src="iconn" alt="icon" class="w-[70%]">
          </div>
          <div class="text-white font-[700] slide-left-animation">{{$t('mainsection.sections.twosec.one').toUpperCase()}} <br> {{$t('mainsection.sections.twosec.two').toUpperCase()}}</div>
        </div>
        
        <div class="flex items-center overflow-hidden">
          <div class="slide-right-animation">
            <img :src="iconn" alt="icon" class="w-[70%]">
          </div>
          <div class="text-white font-[700] slide-left-animation">{{$t('mainsection.sections.threesec.one').toUpperCase()}} <br> {{$t('mainsection.sections.threesec.two').toUpperCase()}}</div>
        </div>
      </div>
      
      <div class="mt-8 space-y-4 md:w-[300px]">
        <button class="w-full py-3 bg-gray-100 text-teal-800 font-[700] text-lg hover:bg-white transition-colors">{{$t('header.navbar.btn').toUpperCase()}}</button>
        <button class="w-full py-3 bg-gray-200 font-[700] text-2xl hover:bg-white transition-colors">+99890 097 50 00</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from '../assets/images/main_section/image_2.jpg'
import iconn from '../assets/images/main_section/icon.png'
</script>

<style scoped>
    .slide-up-animation {
    animation: slideUp 1s ease-out forwards;
    opacity: 0;
    }

    @keyframes slideUp {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    }

    .slide-down-animation {
    animation: slideDown 1s ease-out forwards;
    animation-delay: 0.5s; 
    opacity: 0;
    }

    @keyframes slideDown {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    }

    .slide-right-animation {
    animation: slideRight 1s ease-out forwards;
    animation-delay: 0.8s;
    opacity: 0;
    }

    @keyframes slideRight {
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    }

    .slide-left-animation {
    animation: slideLeft 1s ease-out forwards;
    animation-delay: 0.8s;
    opacity: 0;
    }

    @keyframes slideLeft {
    0% {
        transform: translateX(50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    }
</style>