<template>
  <div class="container mx-auto my-24 md:my-36">
    <div class="ml-4 mr-4 shadow border ">
        <div class="w-full h-1 bg-gray-300 relative overflow-hidden">
            <div class="h-full bg-[#1C6264] transition-all duration-500" :style="{ width: progressWidth + '%' }"></div>
        </div>
    <div class="w-full p-10">
      <!-- O'tish animatsiyalari uchun wrapper -->
      <transition name="fade" mode="out-in">
        <!-- Page 1 -->
        <div v-if="currentPage === 1" key="page1" class="page-content">
          <h2 class="text-2xl md:text-4xl font-medium">{{$t('sectioncalculator.pageone.title').toUpperCase()}}</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 items-center justify-around gap-3 my-5">
            <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105" @click="selectObject('newbuilding')">
              <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'newbuilding'"></i>
              <img :src="two" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
              <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pageone.cards.one')}}</p>
            </div>
            <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105" @click="selectObject('secondary')">
              <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'secondary'"></i>
              <img :src="three" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
              <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pageone.cards.two')}}</p>
            </div>
            <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105" @click="selectObject('office')">
              <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'office'"></i>
              <img :src="four" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
              <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pageone.cards.three')}}</p>
            </div>
            <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105" @click="selectObject('social')">
              <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'social'"></i>
              <img :src="five" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
              <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pageone.cards.four')}}</p>
            </div>
          </div>
        </div>

        <!-- Page 2 -->
        <div v-else-if="currentPage === 2" key="page2" class="page-content">
            <h2 class="text-2xl md:text-4xl font-medium">{{$t('sectioncalculator.pagetwo').toUpperCase()}}</h2>
            <div class="my-5">
                <div class="w-full mx-auto">
                <div class="text-center mb-2">
                    <span class="text-xl">{{ roomSize }}</span>
                </div>                
                <div class="relative pt-1">
                    <div class="relative w-full h-2 bg-gray-200 rounded-lg">
                        <div class="absolute top-0 left-0 h-2 bg-[#1C6264] rounded-lg" :style="{ width: (roomSize / 500 * 100) + '%' }"></div>          
                        <div class="absolute top-0 h-6 w-6 bg-[#1C6264] rounded-full -mt-2 transform -translate-x-1/2" :style="{ left: (roomSize / 500 * 100) + '%' }"></div>
                        <input v-model="roomSize" type="range" min="1" max="500" class="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer">
                    </div>        
                    <div class="flex justify-between text-sm text-gray-600 mt-6">
                        <span>1 кв м</span>
                        <span>500 кв м</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

       <!-- Page 3 -->
        <div v-else-if="currentPage === 3" key="page3" class="page-content">
            <h2 class="text-2xl md:text-4xl font-medium">{{$t('sectioncalculator.pagethree').toUpperCase()}}</h2>
            <div class="my-5">
                <div class="w-full mx-auto">
                    <div class="text-center mb-2">
                        <span class="text-xl bg-gray-100 px-4 py-2 rounded">{{ roomCount }}</span>
                    </div>
                    <div class="relative pt-1">
                        <div class="relative w-full h-2 bg-gray-200 rounded-lg">
                            <div class="absolute top-0 left-0 h-2 bg-[#1C6264] rounded-lg" :style="{ width: ((roomCount - 1) / 9 * 100) + '%' }"></div>
                            <div class="absolute top-0 h-6 w-6 bg-[#1C6264] rounded-full -mt-2 transform -translate-x-1/2" :style="{ left: ((roomCount - 1) / 9 * 100) + '%' }"></div>
                            <input v-model="roomCount" type="range" min="1" max="10" step="1" class="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer">
                        </div>                    
                        <div class="flex justify-between text-sm text-gray-600 mt-6">
                            <span>1</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page 4 -->
        <div v-else-if="currentPage === 4" key="page4" class="page-content">
            <h2 class="text-2xl md:text-4xl font-medium">{{$t('sectioncalculator.pagefour.cards.one').toUpperCase()}}</h2>
            <div class="grid grid-cols-2 lg:grid-cols-4 items-center justify-start gap-3 my-5">
              <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105"  @click="selectObject('newbuilding')">
                <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'newbuilding'"></i>
                <img :src="eight" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
                <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pagefour.cards.one')}}</p>
              </div>
               <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105"  @click="selectObject('secondary')">
                <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'secondary'"></i>
                <img :src="seven" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
                <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pagefour.cards.two')}}</p>
              </div>
               <div class="cursor-pointer relative transform transition-transform duration-300 hover:scale-105"  @click="selectObject('office')">
                <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectedObject === 'office'"></i>
                <img :src="six" alt="" loading="lazy" class="w-full h-36 md:h-64 object-cover"/>
                <p class="text-xs md:text-base py-2.5">{{$t('sectioncalculator.pagefour.cards.three')}}</p>
              </div>
            </div>
        </div>

        <!-- Page 5 -->
        <div v-else-if="currentPage === 5" key="page5" class="page-content">
            <h2 class="text-2xl md:text-4xl font-medium">{{$t('sectioncalculator.pagefive').toUpperCase()}}</h2>
            <div class="my-5">
                <div class="w-full mx-auto">
                <div class="text-center mb-2">
                    <span class="text-xl">{{ roomSizetwo }}$</span>
                </div>                
                <div class="relative pt-1">
                    <div class="relative w-full h-2 bg-gray-200 rounded-lg">
                        <div class="absolute top-0 left-0 h-2 bg-[#1C6264] rounded-lg" :style="{ width: ((roomSizetwo - 10000) / 90000 * 100) + '%' }"></div>          
                        <div class="absolute top-0 h-6 w-6 bg-[#1C6264] rounded-full -mt-2 transform -translate-x-1/2" :style="{ left: ((roomSizetwo - 10000) / 90000 * 100) + '%' }"></div>
                        <input v-model="roomSizetwo" type="range" min="10000" max="100000" step="1000" class="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer">
                    </div>        
                    <div class="flex justify-between text-sm text-gray-600 mt-6">
                    <span>10000$</span> <span>100000$</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Page 6 -->
        <div v-else-if="currentPage === 6" key="page6" class="page-content">
            <div class="mb-4 border-b-2">
                <label class="text-2xl md:text-4xl font-medium" for="name">{{$t('sectioncalculator.pagesix.name').toUpperCase()}}</label>
                <input class="appearance-none outline-none w-full py-6 px-3 text-gray-700 leading-tight " 
                id="name" 
                type="text" 
                :placeholder="$t('sectioncalculator.pagesix.namedesc')">
            </div>
            <div class="mb-4 border-b-2">
                <label class="text-2xl md:text-4xl font-medium" for="phone">{{$t('sectioncalculator.pagesix.phonetitle').toUpperCase()}}</label>
                <div class="flex items-center gap-2">
                    <h1 class="font-medium">+998</h1>
                    <input class="appearance-none outline-none w-full py-6 px-3 text-gray-700 leading-tight " id="phone" type="tel"  :placeholder="$t('sectioncalculator.pagesix.phone')">
                </div>
            </div>
            <button class="float-right my-4 md:my-[80px] lg:my-[90px] py-2 px-3 md:py-4 md:px-6 text-xs md:text-base bg-[#1C6264] text-white rounded-full transform transition-transform duration-300 hover:scale-105">
          {{$t('sectioncalculator.btnsend')}}</button>
        </div>
      </transition>

      <!-- Navigation buttons -->
      <div class="flex items-center justify-between mt-8">
        <button @click="prevPage" class="py-2 px-3 md:py-4 md:px-6 text-xs md:text-base rounded-full transform transition-transform duration-300 hover:scale-105" 
                :class="currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-400 text-white'">
          <i class='bx bx-left-arrow-alt'></i> {{$t('sectioncalculator.btnprev')}}
        </button>
        <button v-if="currentPage < 6" @click="nextPage" 
                class="py-2 px-3 md:py-4 md:px-6 text-xs md:text-base bg-[#1C6264] text-white rounded-full transform transition-transform duration-300 hover:scale-105" 
                :disabled="!canProceed" 
                :class="{'opacity-50 cursor-not-allowed': !canProceed}">
          {{$t('sectioncalculator.btnnext')}} <i class='bx bx-right-arrow-alt'></i>
        </button>
        <div v-else class="py-2 px-3 md:py-4 md:px-6 opacity-0"></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import two from '../../assets/images/sectioncalculator/two.jpg'
    import three from '../../assets/images/sectioncalculator/three.jpg'
    import four from '../../assets/images/sectioncalculator/four.jpg'
    import five from '../../assets/images/sectioncalculator/five.jpg'
    import eight from '../../assets/images/sectioncalculator/eight.jpg'
    import seven from '../../assets/images/sectioncalculator/seven.jpg'
    import six from '../../assets/images/sectioncalculator/six.png'

    // Pages state
    const currentPage = ref(1);

    const totalPages = 6;

    const progressWidth = computed(() => {
        return (currentPage.value - 1) / (totalPages - 1) * 100;
    });

    // Page 1
    const selectedObject = ref(null);
    const selectObject = (object) => {
        selectedObject.value = object;
    };

    // Page 2
    const roomSize = ref(250); // Boshlang'ich qiymat o'rnatildi
    const selectedRoomCount = ref(null);
    const selectRoomCount = (count) => {
        selectedRoomCount.value = count;
    };

    // Page 3
    const roomCount = ref(6); 
    const repairType = ref(null);
    const selectRepairType = (type) => {
        repairType.value = type;
    };

    // Page 4
    const selectedTimeOption = ref(null);
    const selectTimeOption = (option) => {
        selectedTimeOption.value = option;
    };

    // Page 5
    const roomSizetwo = ref(50000); // Boshlang'ich qiymat o'rnatildi
    const selectedRoomCounttwo = ref(null);
    const selectRoomCounttwo = (count) => {
        selectedRoomCounttwo.value = count;
    };

    const canProceed = computed(() => {
        return true;
    });

    const nextPage = () => {
        if (currentPage.value < 6 && canProceed.value) {
            currentPage.value++;
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    const submitForm = () => {
        console.log('Form submitted with data:', {
            object: selectedObject.value,
            roomSize: roomSize.value,
            roomCount: selectedRoomCount.value,
            repairType: repairType.value,
            timeOption: selectedTimeOption.value,
            contactInfo: contactInfo.value
        });
    };
</script>

<style scoped>
/* Sahifa animatsiyalari uchun stillar */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Sahifa mazmuni uchun stillar */
.page-content {
  min-height: 300px;
}

/* Karta animatsiyasi uchun stillar */
.card-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Tugma animatsiyasi uchun stillar */
button {
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Progress bar animatsiyasi */
.progress-bar {
  transition: width 0.5s ease-in-out;
}
</style>