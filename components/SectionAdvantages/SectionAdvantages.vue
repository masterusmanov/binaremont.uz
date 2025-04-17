<template>
    <div class="bgone  mt-[535px] md:mt-[440px]">
        <div class="container mx-auto py-[100px]">
            <h1 class="text-4xl px-[20px] lg:px-0 xl:px-[10px] 2xl:px-0 md:text-6xl font-[400] text-white slide-up-animation">{{$t('sectionadvantages.title').toUpperCase()}}</h1>
            <div class="grid md:flex px-[20px] lg:px-0 xl:px-[10px] 2xl:px-0 mt-[50px] lg:py-[50px] gap-[24px]">
                <div class="border md:w-[400px]">
                    <img :src="iconone" alt="icon" loading="lazy" class="w-[120px] h-[170px]  py-[20px] md:py-[30px] ml-[30px] md:ml-[5px]"/>
                    <p class="text-white font-[700] text-lg md:text-[15px] lg:text-[18px] md:mt-[10px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.iconone.title.one').toUpperCase()}} <br>{{$t('sectionadvantages.iconone.title.two').toUpperCase()}}</p>
                    <p class="text-white text-lg md:text-[15px] lg:text-[18px] my-[30px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.iconone.desc.one').toUpperCase()}} <br>{{$t('sectionadvantages.iconone.desc.two').toUpperCase()}}</p>
                </div>
                <div class="border md:w-[400px]">
                    <img :src="icontwo" alt="icon" loading="lazy" class="w-[100px] h-[140px] md:h-[160px] py-[20px] md:py-[30px] ml-[30px] md:ml-[5px]"/>
                    <p class="text-white font-[700] text-lg md:text-[15px] lg:text-[18px] md:mt-[10px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.icontwo.title.one').toUpperCase()}} <br> {{$t('sectionadvantages.icontwo.title.two').toUpperCase()}}</p>
                    <p class="text-white text-lg md:text-[15px] lg:text-[18px] my-[30px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.icontwo.desc.one').toUpperCase()}}<br>{{$t('sectionadvantages.icontwo.desc.two').toUpperCase()}}<br>{{$t('sectionadvantages.icontwo.desc.three').toUpperCase()}}</p>
                </div>
                <div class="border md:w-[400px]">
                    <img :src="iconthree" alt="icon" loading="lazy" class="w-[100px] h-[140px] md:h-[160px] py-[20px]  md:py-[30px] ml-[30px] md:ml-[5px]"/>
                    <p class="text-white font-[700] text-lg md:text-[15px] lg:text-[18px] md:mt-[10px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.iconthree.title.one').toUpperCase()}}<br>{{$t('sectionadvantages.iconthree.title.two').toUpperCase()}}<br>{{$t('sectionadvantages.iconthree.title.three').toUpperCase()}}</p>
                    <p class="text-white text-lg md:text-[15px] lg:text-[18px] my-[30px] ml-[45px] md:ml-[20px] lg:ml-[45px] slide-up-animation">{{$t('sectionadvantages.iconthree.desc.one').toUpperCase()}}<br>{{$t('sectionadvantages.iconthree.desc.two').toUpperCase()}} </p>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
    import iconone from "../../assets/images/sectionadvantages/iconone.png"
    import icontwo from "../../assets/images/sectionadvantages/icontwo.png"
    import iconthree from "../../assets/images/sectionadvantages/iconthree.png"
</script>

<style lang="scss" scoped>
    .bgone{
        background-image: url('../../assets/images/sectionadvantages/bgone.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
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
</style>