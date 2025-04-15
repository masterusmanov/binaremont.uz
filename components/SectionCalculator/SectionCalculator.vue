<template>
  <div class="container mx-auto shadow-[0px_0px_10px] border my-[100px]">
    <div class="w-full h-[5px] bg-gray-400"></div> 
    <div class="w-full p-[40px]">

      <!-- Page 1 -->
      <div v-if="currentPage === 1">
        <h2 class="text-2xl md:text-4xl font-[500]">{{$t('sectioncalculator.pageone.title').toUpperCase()}}</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 items-center justify-around gap-[12px] my-[20px]">
          <div class="cursor-pointer" :class="{ 'ring-2 ring-[#1C6264]': selectedObject === 'newbuilding' }" @click="selectObject('newbuilding')">
            <img :src="two" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pageone.cards.one')}}</p>
          </div>
          <div class="cursor-pointer" :class="{ 'ring-2 ring-[#1C6264]': selectedObject === 'secondary' }" @click="selectObject('secondary')">
            <img :src="three" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pageone.cards.two')}}</p>
          </div>
          <div class="cursor-pointer" :class="{ 'ring-2 ring-[#1C6264]': selectedObject === 'office' }" @click="selectObject('office')">
            <img :src="four" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pageone.cards.three')}}</p>
          </div>
          <div class="cursor-pointer" :class="{ 'ring-2 ring-[#1C6264]': selectedObject === 'social' }" @click="selectObject('social')">
            <img :src="five" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pageone.cards.four')}}</p>
          </div>
        </div>
      </div>

      <!-- Page 2 -->
        <div v-else-if="currentPage === 2">
            <h2 class="text-2xl md:text-4xl font-[500]">{{$t('sectioncalculator.pagetwo').toUpperCase()}}</h2>
            <div class="my-[20px]">
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
    <div v-else-if="currentPage === 3">
        <h2 class="text-2xl md:text-4xl font-[500]">{{$t('sectioncalculator.pagethree').toUpperCase()}}</h2>
        <div class="my-[20px]">
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
      <div v-else-if="currentPage === 4">
        <h2 class="text-2xl md:text-4xl font-[500]">{{$t('sectioncalculator.pagefour.cards.one').toUpperCase()}}</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 items-center justify-start gap-[12px] my-[20px]">
          <div class="cursor-pointer relative"  @click="selectedObjectone('firstcard')">
            <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectObjectone === 'firstcard'"></i>
            <img :src="eight" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pagefour.cards.one')}}</p>
          </div>
           <div class="cursor-pointer relative"  @click="selectedObjectone('secondcard')">
            <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectObjectone === 'secondcard'"></i>
            <img :src="seven" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pagefour.cards.two')}}</p>
          </div>
           <div class="cursor-pointer relative"  @click="selectedObjectone('thirtcard')">
            <i class="bx bx-check absolute text-3xl bg-[#1C6264] rounded-full px-1 text-white z-10" v-if="selectObjectone === 'thirtcard'"></i>
            <img :src="six" alt="" loading="lazy" class="w-full h-[150px] md:h-[250px] object-cover"/>
            <p class="text-[12px] md:text-[16px] py-[10px]">{{$t('sectioncalculator.pagefour.cards.three')}}</p>
          </div>
          
        </div>
      </div>

      <!-- Page 5 -->
      <div v-else-if="currentPage === 5">
        <h2 class="text-2xl md:text-4xl font-[500]">Укажите бюджет ремонта</h2>
        <div class="my-[20px]">
            <div class="w-full mx-auto">
            <div class="text-center mb-2">
                <span class="text-xl">{{ roomSizetwo }}$</span>
            </div>                
            <div class="relative pt-1">
                <div class="relative w-full h-2 bg-gray-200 rounded-lg">
                    <div class="absolute top-0 left-0 h-2 bg-[#1C6264] rounded-lg" :style="{ width: ((roomSizetwo - 10000) / 90000 * 100) + '$' }"></div>          
                    <div class="absolute top-0 h-6 w-6 bg-[#1C6264] rounded-full -mt-2 transform -translate-x-1/2" :style="{ left: ((roomSizetwo - 10000) / 90000 * 100) + '$' }"></div>
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
         <div v-else-if="currentPage === 6">
            <div class="mb-4 border-b-2">
                <label class="text-2xl md:text-4xl font-[500]" for="name">Имя</label>
                <input class="appearance-none outline-none w-full py-6 px-3 text-gray-700 leading-tight " 
                id="name" 
                type="text" 
                placeholder="Введите ваше имя">
            </div>
            <div class="mb-4 border-b-2">
                <label class="text-2xl md:text-4xl font-[500]" for="phone">Nomer telefona</label>
                <div class="flex items-center gap-[8px]">
                    <h1 class="font-[500]">+998</h1>
                    <input class="appearance-none outline-none w-full py-6 px-3 text-gray-700 leading-tight " id="phone" type="tel"  placeholder="Введите ваше telefon">
                </div>
            </div>
            <button class=" float-right my-[20px] py-[8px] px-[12px] md:py-[15px] md:px-[25px] text-[12px] md:text-[16px] bg-[#1C6264] text-white rounded-full">
          Poluchit zapros</button>
         </div>
      <!-- Navigation buttons -->
      <div class="flex items-center justify-between mt-8">
        <button @click="prevPage" class="py-[8px] px-[12px] md:py-[15px] md:px-[25px] text-[12px] md:text-[16px] rounded-full" :class="currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-400 text-white'"><i class='bx bx-left-arrow-alt'></i> NAZAD</button>
        <button v-if="currentPage < 6" @click="nextPage" class="py-[8px] px-[12px] md:py-[15px] md:px-[25px] text-[12px] md:text-[16px] bg-[#1C6264] text-white rounded-full" :disabled="!canProceed" :class="{'opacity-50 cursor-not-allowed': !canProceed}">
          DALEE <i class='bx bx-right-arrow-alt'></i>
        </button>
        <div v-else class="py-[8px] px-[12px] md:py-[15px] md:px-[25px] opacity-0"></div>
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

// Page 1
const selectedObject = ref(null);
const selectObject = (object) => {
  selectedObject.value = object;
};

// Page 2
const roomSize = ref('');
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
const selectedObjectone = ref(null);
const selectObjectone = (object) => {
  selectedObjectone.value = object;
};

// Page 5
const roomSizetwo = ref('');
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

<style lang="scss" scoped>
</style>