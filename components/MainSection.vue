<template>
    <div class="hidden lg:block bg-[#184748] py-[120px]">
        <div class="container mx-auto flex ">
            <div class="w-[50%]">
                <MainBGone/>
            </div>
            <img :src="image_2" alt="" class="w-[50%] h-full bg-no-repeat object-cover" style="back">
        </div>
        
        <!-- <div class=" cardone w-[50%] h-[600px] bg-no-repeat bg-cover "></div> -->
    </div>
    <MainBG class="lg:hidden"/>
    
</template>

<script setup>
    import image_2 from '../../assets/images/main_section/image_2.png'
    import backImg from '../../assets/images/main_section/backImg.svg'
</script>

<style lang="scss" scoped>
    .cardone{
        background-image: url('../assets/images/main_section/backImg.svg');
        background-position: center;
    }
</style>