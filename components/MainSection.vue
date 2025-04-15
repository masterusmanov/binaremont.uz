<template>
    <div class="hidden lg:block bg-[#184748] mt-[96px]">
        <div class="container mx-auto flex relative">
            <div class="cardone absolute w-[800px] 2xl:w-[1400px] top-[-50px] xl:top-0 left-[-50px] 2xl:left-[-300px] h-[550px] xl:h-[650px] 2xl:h-[800px] bg-no-repeat bg-cover z-20"></div>
            <div class="relative">
                <div class="absolute z-30 container mx-auto h-full pt-10 xl:pt-[60px] px-4 2xl:mt-[80px]">
                    <div class="">
                        <h1 class="text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight slide-up-animation ">{{$t('mainsection.title.one').toUpperCase()}} <br>{{$t('mainsection.title.two').toUpperCase()}} <br>{{$t('mainsection.title.three').toUpperCase()}}</h1>
                        <p class="text-gray-300 mt-3 xl:my-6 2xl:my-10 text-lg 2xl:text-3xl slide-down-animation">{{$t('mainsection.desc.one').toUpperCase()}} <br>{{$t('mainsection.desc.two').toUpperCase()}}</p>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-6 my-[48px] px-2">
                        <div class="flex items-center gap-[24px] overflow-hidden">
                            <div class="slide-right-animation">
                                <p class="text-[48px] font-bold text-[#B2E0DE] leading-10">\</p>
                            </div>
                            <div class="text-white font-[700] slide-left-animation">{{$t('mainsection.sections.onesec.one').toUpperCase()}} <br> {{$t('mainsection.sections.onesec.two').toUpperCase()}}</div>
                        </div>
                        
                        <div class="flex items-center gap-[24px] overflow-hidden">
                            <div class="slide-right-animation">
                                <p class="text-[48px] font-bold text-[#B2E0DE] leading-10">\</p>
                            </div>
                            <div class="text-white font-[700] slide-left-animation">{{$t('mainsection.sections.twosec.one').toUpperCase()}} <br> {{$t('mainsection.sections.twosec.two').toUpperCase()}}</div>
                        </div>
                        
                        <div class="flex items-center gap-[24px] overflow-hidden">
                            <div class="slide-right-animation">
                                <p class="text-[48px] font-bold text-[#B2E0DE] leading-10">\</p>
                            </div>
                            <div class="text-white font-[700] slide-left-animation">{{$t('mainsection.sections.threesec.one').toUpperCase()}} <br> {{$t('mainsection.sections.threesec.two').toUpperCase()}}</div>
                        </div>
                    </div>
                    
                    <div class=" py-[40px] flex items-center gap-[24px]">
                        <button class="py-[15px] px-[30px] xl:py-3 bg-gray-100 text-teal-800 font-[700] hover:bg-white transition-colors">{{$t('header.navbar.btn').toUpperCase()}}</button>
                        <button class="py-[15px] px-[30px] xl:py-3 bg-gray-200 font-[700] hover:bg-white transition-colors">+99890 097 50 00</button>
                    </div>
            </div>
                <img :src="image_2" alt="" class="bg-no-repeat" style="back">
                <!-- <MainBGone/> -->
                <div class="absolute inset-0 w-[100%] h-[555px] xl:h-[693px] 2xl:h-[832px] bg-[#184748] bg-opacity-85 z-10 overflow-hidden"></div>
            </div>
            <div class="">
                <img :src="image_2" alt="" class="bg-no-repeat" style="back">
                <!-- <MainBGone/> -->
            </div>
        </div>
        
    </div>
    <MainBG class="lg:hidden"/>
    
</template>

<script setup>
    import image_2 from '../../assets/images/main_section/image_2.png'
    
</script>

<style lang="scss" scoped>
    .cardone{
        background-image: url('../assets/images/main_section/backImg.svg');
        background-position: center;
    }
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