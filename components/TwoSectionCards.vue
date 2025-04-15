<template>
  <div class="container mx-auto my-[50px] px-[15px] md:mt-[150px]">
    <div class="grid md:flex justify-around gap-[48px]">

        <div class="md:w-1/3 relative group">
            <div class="overflow-hidden ">
                <div class="absolute inset-0 w-full h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h1 class="font-bold text-2xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">ЖИЛЫЕ ПРОЕКТЫ</h1>
                </div>          
                <img :src="one" alt="Жилые проекты" class="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
            </div>
        <h1 class="font-bold text-2xl text-center mt-5">ЖИЛЫЕ ПРОЕКТЫ</h1>
      </div>
      
      <div class="md:w-1/3 relative group">
            <div class="overflow-hidden">
                <div class="absolute inset-0 w-full h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h1 class="font-bold text-2xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">КОММЕРЧЕСКИЕ ПРОЕКТЫ</h1>
                </div>
                <img :src="two" alt="Коммерческие проекты" class="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
            </div>
        <h1 class="font-bold text-2xl text-center mt-5">КОММЕРЧЕСКИЕ ПРОЕКТЫ</h1>
      </div>
      
      <div class="md:w-1/3 relative group">
            <div class="overflow-hidden">
                <div class="absolute inset-0 w-full h-[600px] bg-[#184748] bg-opacity-85 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h1 class="font-bold text-2xl text-center text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2">ОФИСЫ</h1>
                </div>
                <img :src="three" alt="Офисы" class="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"/>
            </div>
        <h1 class="font-bold text-2xl text-center mt-5">ОФИСЫ</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import one from "../assets/images/sectiontwo/one.jpeg";
import two from "../assets/images/sectiontwo/two.jpg";
import three from "../assets/images/sectiontwo/three.jpg";
</script>

<style lang="scss" scoped>
</style>