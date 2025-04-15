<template>
  <div class="container mx-auto my-[50px] px-[20px] md:mt-[150px]" ref="projectsSection">
    <div class="grid md:flex justify-around gap-[48px]">

      <div class="md:w-1/3 relative group">
        <div class="overflow-hidden">
          <div class="absolute inset-0 w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <h1 class="font-bold text-2xl md:text-xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">{{$t('sectionprojects.onecard').toUpperCase()}}</h1>
          </div>          
          <img :src="one" alt="Жилые проекты" loading="lazy" class="w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
        </div>
        <h1 class="font-bold text-2xl md:text-xl text-center mt-5" :class="{ 'slide-up-animation': isIntersecting }">{{$t('sectionprojects.onecard').toUpperCase()}}</h1>
      </div>
      
      <div class="md:w-1/3 relative group">
        <div class="overflow-hidden">
          <div class="absolute inset-0 w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <h1 class="font-bold text-2xl md:text-xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">{{$t('sectionprojects.twocard').toUpperCase()}}</h1>
          </div>
          <img :src="two" alt="Коммерческие проекты" loading="lazy" class="w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
        </div>
        <h1 class="font-bold text-2xl md:text-xl text-center mt-5" :class="{ 'slide-up-animation': isIntersecting, 'delay-200': isIntersecting }">{{$t('sectionprojects.twocard').toUpperCase()}}</h1>
      </div>
      
      <div class="md:w-1/3 relative group">
        <div class="overflow-hidden">
          <div class="absolute inset-0 w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <h1 class="font-bold text-2xl md:text-xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">{{$t('sectionprojects.threecard').toUpperCase()}}</h1>
          </div>
          <img :src="three" alt="Офисы" loading="lazy" class="w-full h-[500px] md:h-[300px] lg:h-[500px] 2xl:h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
        </div>
        <h1 class="font-bold text-2xl md:text-xl text-center mt-5" :class="{ 'slide-up-animation': isIntersecting, 'delay-400': isIntersecting }">{{$t('sectionprojects.threecard').toUpperCase()}}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import one from "../assets/images/sectiontwo/one.jpeg";
import two from "../assets/images/sectiontwo/two.jpg";
import three from "../assets/images/sectiontwo/three.jpg";

const projectsSection = ref(null);
const isIntersecting = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      isIntersecting.value = true;
      observer.disconnect();
    }
  }, {
    threshold: 0.1
  });
  
  if (projectsSection.value) {
    observer.observe(projectsSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
.slide-up-animation {
  animation: slideUp 1s ease-out forwards;
  opacity: 0;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
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
</style>