<template>
     <div class="container mx-auto pt-[50px] md:pt-[80px] 2xl:pt-[100px]">
            <h1 class="text-[#1C6264] text-center text-lg md:text-xl lg:text-3xl">{{$t('sectionrepairetime.titleone').toUpperCase()}}</h1>
            <h1 class="text-[#474747] text-center text-xl md:text-3xl lg:text-4xl">{{$t('sectionrepairetime.titletwo').toUpperCase()}}</h1>
            <div class="my-[50px] w-full md:flex  justify-around">
                <div v-for="el of repairetime.slice(0, 2)" :key="el.id">
                    <div class="xl:flex items-start gap-[36px] px-[20px] xl:w-[600px] ">
                        <img :src="el.pic" alt="Project" loading="lazy" class="w-full h-[200px] xl:w-[300px] xl:h-[450px] object-cover">
                        <div class="px-[10px] py-[20px] xl:px-0 xl:py-0">
                            <h1 class="text-[#A0D3D0] text-5xl md:text-3xl font-[600]">0{{el.id}}</h1>
                            <h1 class="font-[700] text-4xl md:text-2xl py-[10px] leading-[60px] slide-left-animation">{{$t(`${el.title}`)}}</h1>
                            <div class="md:h-[250px]">
                                <div v-for="ind of el.category" :key="ind" class="">
                                <div class="flex items-center gap-[12px] py-[5px]">
                                    <img :src="Vector" alt="line" class="w-[30px]">
                                    <p class="slide-right-animation">{{$t(`${ind}`)}}</p>
                                </div>
                            </div>
                            </div>
                            <div class="flex items-center gap-[12px] my-[30px] border-t py-[20px]">
                                <img :src="timeleft" alt="time left" class="w-[50px] h-[50px] bg-gray-200 p-[10px] rounded-full"/>
                                <div class="slide-right-animation">
                                    <p class="text-lg">{{$t(`${el.duration}`)}}:</p>
                                    <p class="text-xl font-[600] text-[#1C6364]">{{el.days}} {{$t(`${el.week}`).toUpperCase()}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-[50px] w-full md:flex  justify-around">
                <div v-for="el of repairetime.slice(2, 4)" :key="el.id">
                    <div class="xl:flex items-start gap-[36px] px-[20px] xl:w-[600px] ">
                        <img :src="el.pic" alt="Project" loading="lazy" class="w-full h-[200px] xl:w-[300px] xl:h-[450px] object-cover">
                        <div class="px-[10px] py-[20px] xl:px-0 xl:py-0">
                            <h1 class="text-[#A0D3D0] text-5xl md:text-3xl font-[600]">0{{el.id}}</h1>
                            <h1 class="font-[700] text-4xl md:text-2xl py-[10px] leading-[60px] slide-left-animation">{{$t(`${el.title}`)}}</h1>
                            <div class="md:h-[200px] xl:h-[250px]">
                                <div v-for="ind of el.category" :key="ind" class="">
                                <div class="flex items-center gap-[12px] py-[5px]">
                                    <img :src="Vector" alt="line" class="w-[30px]">
                                    <p class="slide-right-animation">{{$t(`${ind}`)}}</p>
                                </div>
                            </div>
                            </div>
                            <div class="flex items-center gap-[12px] my-[30px] border-t py-[20px]">
                                <img :src="timeleft" alt="time left" class="w-[50px] h-[50px] bg-gray-200 p-[10px] rounded-full"/>
                                <div class="slide-right-animation">
                                    <p class="text-lg">{{$t(`${el.duration}`)}}:</p>
                                    <p class="text-xl font-[600] text-[#1C6364]">{{el.days}} {{$t(`${el.week}`).toUpperCase()}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
    import repairetime from '../../contents/repairetime'
    import timeleft from "../../assets/images/sectionrepairetime/timeleft.png"
    import Vector from "../../assets/images/sectionrepairetime/Vector.png"
</script>

<style lang="scss" scoped>
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
</style>