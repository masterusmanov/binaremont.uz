<template>
    <div class="bg-[#EAEAEA]">
        <div class="container mx-auto pt-[50px] md:pt-[80px] 2xl:pt-[100px]">
            <h1 class="text-[#1C6264] text-center text-2xl md:text-4xl lg:text-5xl">{{$t('sectionrepaire.titleone').toUpperCase()}}</h1>
            <h1 class="text-[#474747] text-center text-2xl md:text-4xl lg:text-5xl">{{$t('sectionrepaire.titletwo').toUpperCase()}}</h1>
            <div class="py-[50px] xl:py-[80px] px-[20px] md:px-0 md:w-[80%] md:mx-auto">
                <div v-for="el of textaccordion" :key="el.id" class="text-[#1C6264]">
                    <p class="py-[5px] xl:text-[22px]">▶  {{$t(`${el.title}`)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import textaccordion from '../../contents/textrepaire'
</script>

<style lang="scss" scoped>

</style>