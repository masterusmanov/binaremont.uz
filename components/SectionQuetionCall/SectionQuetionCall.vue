<template>
    <div class="container mx-auto mt-[150px] xl:mt-[200px]">
        <div class="grid gap-[12px]">
            <h1 class="text-center text-4xl xl:text-5xl leading-[50px] font-[700]">{{$t('sectionquetioncall.title').toUpperCase()}}</h1>
            <h1 class="text-center text-4xl xl:text-5xl leading-[50px] font-[700] text-[#1C6364]">{{$t('sectionquetioncall.desc').toUpperCase()}}</h1>
        </div>
        <div class="px-[20px] md:px-0 md:w-[45%] mx-auto my-[50px]">
            <form class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{$t('sectionquetioncall.labelname')}}</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" :placeholder="$t('sectionquetioncall.labelname')">
            </div>
            
            <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">{{$t('sectionquetioncall.labelphone')}}</label>
                <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="+998 __ ___ __ __">
            </div>
            
            <button type="submit" class="w-full bg-[#1C6364]  text-white font-medium py-2 px-4 transition duration-300">{{$t('sectionquetioncall.send')}}</button>
            </form>
        </div>
        <div>
            <div class="mt-6 pt-4 border-t border-gray-200 text-center">
                <p class="text-[#1C6364]font-[700] text-xl md:text-2xl xl:text-4xl">{{$t('sectionquetioncall.visid').toUpperCase()}}</p>
                <p class="text-[#1C6364] font-bold text-2xl xl:text-4xl">+998 90 097 50 00</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>