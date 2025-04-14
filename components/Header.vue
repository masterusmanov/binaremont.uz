<template>
    <div class="bg-[#1C6364] h-[60px] md:h-[96px]">
        <div class="container mx-auto px-[20px] lg:px-0 xl:px-[10px] 2xl:px-0 h-full flex items-center justify-between text-[#DBE7E7]">
            <div class="flex items-center gap-[24px] xl:gap-[48px]">
                <img src="../assets/images/mainLogo.svg" alt="Main logo" loading="lazy" class="w-[100px] h-[60px] md:w-[150px] md:h-[60px] lg:w-[120px] 2xl:w-[200px]" />
                <div class="hidden text-[12px] xl:text-[14px] lg:flex items-center gap-[10px] xl:gap-[24px]">
                    <router-link to="#">{{$t('header.navbar.one').toUpperCase()}}</router-link>
                    <router-link to="#">{{$t('header.navbar.two').toUpperCase()}}</router-link>
                    <router-link to="#">{{$t('header.navbar.three').toUpperCase()}}</router-link>
                    <router-link to="#">{{$t('header.navbar.four').toUpperCase()}}</router-link>
                    <router-link to="#">{{$t('header.navbar.five').toUpperCase()}}</router-link>
                    <router-link to="#">{{$t('header.navbar.six').toUpperCase()}}</router-link>
                </div>
            </div>
            <div class="flex items-center gap-[12px] 2xl:gap-[24px]">
                <button class="hidden lg:block bg-[#D9FFFD] text-[#1C6364] text-[10px] 2xl:text-[12px] font-[700] px-[10px] py-[10px] lg:px-[5px] xl:px-[20px] xl:py-[15px] ">{{$t('header.navbar.btn').toUpperCase()}}</button>
                <Menubar/>
                <select  class="appearance-none px-[10px] py-[5px] md:px-[20px] md:py-[10px] lg:text-[10px] xl:text-[14px] xl:px-[20px] lg:py-[9px] xl:py-[12px] 2xl:py-[13px] font-[700] bg-[#D9FFFD]  shadow-sm text-[14px] text-[#1C6364] focus:outline-none focus:ring-2 focus:ring-[#D9FFFD] cursor-pointer" @change="onLanguageChange($event)">
                    <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code">
                    {{ loc.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { computed } from 'vue'
    const { locale, locales } = useI18n()
    const router = useRouter()
    const switchLocalePath = useSwitchLocalePath()

    const availableLocales = computed(() => {
        return locales.value.map(i => ({ code: i.code, name: i.name }))
    })

    function onLanguageChange(event) {
        const newLocale = event.target.value
        const path = switchLocalePath(newLocale)
        router.push(path)
    }
</script>

<style lang="scss" scoped>

</style>