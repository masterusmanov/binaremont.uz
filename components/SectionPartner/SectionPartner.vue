<template>
    <div class="bg-[#184748] h-[100px] md:h-[150px] my-[100px]">
        <div class="container mx-auto h-full pt-[20px] md:pt-[40px] px-[20px] 2xl:px-0 lg:pt-[35px] xl:pt-[25px]">
            <h1 class="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-[15px] slide-up-animation">{{$t('only_one').toUpperCase()}}</h1>
        </div>
       <div class="bg-[#EAEAEA] py-[50px] md:py-[100px]">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="el of sectionbrandcard" :key="el.id" class="bg-white p-6 flex items-center justify-center">
                    <img :src="el.pic" alt="Brends" class="w-auto h-12 sm:h-16 object-contain"/>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script setup>
    import sectionbrandcard from "../../contents/sectiontwo.js"
</script>

<style lang="scss" scoped>
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
</style>