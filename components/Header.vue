<template>
    <div>
        <select  class="ml-auto text-black px-2 py-1 rounded" @change="onLanguageChange($event)">
            <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code">
            {{ loc.name }}
            </option>
        </select>
        <h1>{{$t("title")}}</h1>
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