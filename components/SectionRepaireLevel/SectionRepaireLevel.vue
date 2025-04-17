<template>
    <div class="container mx-auto">
        <div class="w-full lg:flex justify-between 2xl:justify-around">
            <div class="backbgone px-[20px] py-[50px] xl:w-[30%] 2xl:w-[35%] xl:mx-[20px] 2xl:mx-0">
                <p class="w-[60%] lg:w-full text-xl md:text-2xl lg:text-3xl text-[#1C6364] pt-[30px] lg:pt-[200px] slide-left-animation ">{{$t('sectionrepairelevel.titleone').toUpperCase()}}</p>
                <h1 class="text-5xl lg:text-5xl text-[#1C6364] font-[500] my-[20px] md:w-[70%] lg:w-full lg:pt-[100px] slide-right-animation">{{$t('sectionrepairelevel.titletwo').toUpperCase()}}</h1>
            </div>
            <div class="relative md:px-[20px] md:mt-[50px] lg:mt-0">
                <div class="hidden md:block w-[390px] lg:w-[375px] xl:w-[460px] my-[10px] h-[25px] ml-[20px] 2xl:ml-[20px]  border-t-2 border-l-2 border-r-2 border-dashed border-[#1C6364]"></div>
                <div class="hidden md:block absolute z-30 top-0 left-0 2xl:mt-[55px] md:mt-[47px] lg:mt-[60px] xl:ml-[440px] md:ml-[390px] lg:ml-[370px] 2xl:ml-[450px] w-[20px] my-[10px] 2xl:h-[190px] md:h-[250px] lg:h-[250px] border-t-2 border-l-2 border-dashed border-[#1C6364]"></div>
                <div class="hidden md:block absolute z-30 top-0 left-0 2xl:mt-[245px] md:mt-[300px] lg:mt-[310px] xl:w-[395px] md:w-[345px] lg:w-[325px] 2xl:w-[410px] my-[10px] h-[25px] md:ml-[45px] 2xl:ml-[40px] border-t-2 border-l-2 border-dashed border-[#1C6364]"></div>
                <div class="hidden md:block absolute z-30 top-0 left-0 md:mt-[340px] lg:mt-[350px] 2xl:mt-[280px] md:w-[345px] xl:w-[410px] my-[10px] h-[25px] ml-[70px] 2xl:ml-[70px] border-t-2 border-dashed border-[#1C6364]"></div>
                
                <div class="hidden md:block absolute z-30 top-0 left-0 mt-[375px] lg:mt-[385px] xl:mt-[382px] 2xl:mt-[315px] ml-[380px] lg:ml-[370px] xl:ml-[440px] 2xl:ml-[450px]  w-[20px] my-[10px] h-[250px] lg:h-[250px] 2xl:h-[185px] border-t-2 border-l-2 border-dashed border-[#1C6364]"></div>
                <div class="hidden md:block absolute z-30 top-0 left-0 mt-[625px] lg:mt-[635px] 2xl:mt-[500px] w-[335px] lg:w-[325px] xl:w-[395px] 2xl:w-[410px] my-[10px] h-[25px] ml-[45px] 2xl:ml-[40px] border-t-2 border-l-2 border-dashed border-[#1C6364]"></div>
                <div class="hidden md:block absolute z-30 top-0 left-0 mt-[660px] lg:mt-[675px] 2xl:mt-[530px] w-[335px] xl:w-[410px] my-[10px] h-[25px] ml-[70px] 2xl:ml-[70px] border-t-2 border-dashed border-[#1C6364]"></div>
                
                <div class="md:flex gap-[50px] my-[30px] md:my-[10px]">
                    <div class="grid gap-[12px] md:gap-[72px] px-[10px]">
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-sm text-white rounded-full">1</div>
                        <img :src="headphones" alt="Headphone" loading="lazy" class="svg-icon w-[80px] md:w-[70px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px] ">
                            <p class="font-[500] text-[15px] md:text-[16px] slide-left-animation">{{$t('sectionrepairelevel.cards.onecard.title.one').toUpperCase()}} <br>{{$t('sectionrepairelevel.cards.onecard.title.two').toUpperCase()}}</p>
                            <p class="text-[#1C6364] md:text-xl font-[700] my-[3px] slide-right-animation">+998 (90) 097-50-00</p>
                            <p class="text-[14px] text-gray-400 slide-left-animation">{{$t('sectionrepairelevel.cards.onecard.desc')}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.btnordersend').toUpperCase()}}</button>
                        </div>
                    </div>
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-xl text-white rounded-full">3</div>
                        <img :src="calculator" alt="Calculator" loading="lazy" class="svg-icon w-[80px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px]">
                            <p class="text-[#1C6364] text-2xl font-[700] my-[3px] slide-right-animation">{{$t('sectionrepairelevel.cards.threecard.title.one').toUpperCase()}} <br>{{$t('sectionrepairelevel.cards.threecard.title.two').toUpperCase()}}</p>
                            <p class="text-[18px] slide-left-animation">{{$t('sectionrepairelevel.cards.threecard.desc.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.threecard.desc.two').toUpperCase()}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.btnordersend').toUpperCase()}}</button>
                        </div>
                    </div>
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-2xl text-white rounded-full">5</div>
                        <img :src="building" alt="Calculator" loading="lazy" class="svg-icon w-[80px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px]">
                            <p class="text-[#1C6364] text-2xl font-[700] my-[3px] slide-right-animation">{{$t('sectionrepairelevel.cards.fourcard.title.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.fourcard.title.two').toUpperCase()}}</p>
                            <p class="text-[18px] slide-left-animation">{{$t('sectionrepairelevel.cards.fivecard.desc.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.fivecard.desc.two').toUpperCase()}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.btnordersend').toUpperCase()}}</button>
                        </div>
                    </div>
                </div>
                <div class="grid gap-[12px] md:gap-[72px] px-[10px] my-[12px] md:my-0">
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-md text-white rounded-full">2</div>
                        <img :src="measurement" alt="Headphone" loading="lazy" class="svg-icon w-[70px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px]">
                            <p class="text-[#1C6364] text-2xl font-[700] my-[3px] slide-right-animation">{{$t('sectionrepairelevel.cards.twocard.title.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.twocard.title.two').toUpperCase()}}</p>
                            <p class="text-[18px] slide-left-animation">{{$t('sectionrepairelevel.cards.twocard.desc').toUpperCase()}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.cards.twocard.btncall').toUpperCase()}}</button>
                        </div>
                    </div>
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-2xl text-white rounded-full">4</div>
                        <img :src="builder" alt="Calculator" loading="lazy" class="svg-icon w-[80px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px]">
                            <p class="text-[#1C6364] text-2xl font-[700] my-[3px] slide-right-animation">{{$t('sectionrepairelevel.cards.fourcard.title.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.fourcard.title.two').toUpperCase()}}</p>
                            <p class="text-[18px] slide-left-animation">{{$t('sectionrepairelevel.cards.fourcard.desc.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.fourcard.desc.two').toUpperCase()}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.btnordersend').toUpperCase()}}</button>
                        </div>
                    </div>
                    <div class="bg-[#F7F7F7] h-[200px] md:h-[250px] 2xl:h-[180px] flex items-center gap-[12px] py-[10px] px-[20px] relative">
                        <div class="bg-[#1C6364] px-[10px] py-[2px] flex items-center font-[700] absolute top-0 left-0 z-20 text-3xl text-white rounded-full">6</div>
                        <img :src="contract" alt="Calculator" loading="lazy" class="svg-icon w-[80px] mx-auto">
                        <div class="border-l-2 border-gray-300 px-[15px] w-[250px]">
                            <p class="text-[#1C6364] text-2xl font-[700] my-[3px] slide-right-animation">{{$t('sectionrepairelevel.cards.sixcard.title.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.sixcard.title.two').toUpperCase()}}</p>
                            <p class="text-[18px] slide-left-animation">{{$t('sectionrepairelevel.cards.sixcard.desc.one').toUpperCase()}} <br> {{$t('sectionrepairelevel.cards.sixcard.desc.two').toUpperCase()}}</p>
                            <button class="bg-[#1C6364] text-white font-[500] py-[5px] px-[20px] my-[15px] slide-up-animation">{{$t('sectionrepairelevel.btnordersend').toUpperCase()}}</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import headphones from '../../assets/images/sectionrepairelevel/headphones.svg'
    import calculator from '../../assets/images/sectionrepairelevel/calculator.svg'
    import building from '../../assets/images/sectionrepairelevel/building.svg'
    import measurement from '../../assets/images/sectionrepairelevel/measurement.svg'
    import builder from '../../assets/images/sectionrepairelevel/builder.svg'
    import contract from '../../assets/images/sectionrepairelevel/contract.svg'
</script>

<style lang="scss" scoped>
    .backbgone{
        background-image: url('../../assets/images/sectionrepairelevel/backbgone.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .svg-icon{
        filter: brightness(0) saturate(100%) invert(33%) sepia(29%) saturate(1138%) hue-rotate(146deg) brightness(92%) contrast(90%);
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