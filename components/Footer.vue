<template>
    <div class="bg-[#1C6364]">
        <div class="container mx-auto text-white py-[30px] xl:py-[50px] px-[40px] grid gap-[24px] md:flex md:gap-[24px] lg:justify-between xl:justify-around">
            <div class="grid gap-[8px] md:w-[40%]">
                <img :src="mainLogo" alt="Main logo" loading="lazy" class="w-[150px]">
                <p class="text-[14px]">{{$t('footer.desc')}}</p>
            </div>
            <div class="">
                <p class="text-[14px]">{{$t('footer.social').toUpperCase()}}</p>
                <nuxt-link to="#"><i class='bx bxl-instagram text-[36px] mt-[10px]'></i></nuxt-link>
                <nuxt-link to="#"><i class='bx bxl-telegram text-[36px] mt-[10px]' ></i></nuxt-link>
            </div>
            <div class="grid gap-[8px]">
               <p class="text-[12px] font-[700]">{{$t('footer.contact').toUpperCase().toUpperCase()}}</p>
               <p class="text-[12px] font-[700]">+998 90 097 50 00</p>
               <p class="text-[12px] font-[700]">{{$t('footer.address').toUpperCase().toUpperCase()}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import mainLogo from '../../assets/images/mainLogo.svg'
</script>

<style lang="scss" scoped>

</style>\