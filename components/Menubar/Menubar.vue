<template>
  <div class="lg:hidden">
    <i @click="toggleMenu" class="bx bx-menu text-[36px] md:text-[48px] text-[#DBE7E7]"></i>

    <transition name="fade"><div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-black bg-opacity-50" @click="closeMenuOnOverlayClick"></div></transition>

    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed top-0 left-0 bottom-0 w-64 bg-teal-800 text-white z-50 h-full transform" @click.stop>
        <div class="flex justify-end items-center p-4">
          <button @click="toggleMenu" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <nav class="mt-4">
          <ul>
            <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#">{{ $t('header.navbar.one').toUpperCase() }}</NuxtLink>
            </li>
             <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#" class="block">{{$t('header.navbar.two').toUpperCase()}}</NuxtLink>
            </li>
            <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#" class="block">{{$t('header.navbar.three').toUpperCase()}}</NuxtLink>
            </li>
            <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#" class="block">{{$t('header.navbar.four').toUpperCase()}}</NuxtLink>
            </li>
            <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#" class="block">{{$t('header.navbar.five').toUpperCase()}}</NuxtLink>
            </li>
            <li class="py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
              <NuxtLink to="#" class="block">{{$t('header.navbar.six').toUpperCase()}}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenuOnOverlayClick(event) {
  if (event.target === event.currentTarget) {
    isMenuOpen.value = false;
  }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
    opacity: 0;
    }
    .fade-enter-to, .fade-leave-from {
    opacity: 1;
    }

    .slide-enter-active {
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .slide-leave-active {
    transition: transform 0.4s ease-in;
    }
    .slide-enter-from {
    transform: translateX(-100%);
    }
    .slide-enter-to {
    transform: translateX(0);
    }
    .slide-leave-from {
    transform: translateX(0);
    }
    .slide-leave-to {
    transform: translateX(-100%);
    }
</style>
