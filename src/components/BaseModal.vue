<template>
  <div class="fixed z-50 inset-0 overflow-hidden bg-black bg-opacity-50" tabindex="-1">
    <div class="flex items-center justify-center lg:mt-14 m-3">
      <div
        class=" w-full max-w-6xl md:inset-0 lg:h-[calc(100vh-8rem)] h-[calc(100vh-5rem)] max-h-full relative  bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="w-full relative p-3 ">
          <!-- <h6 class="text-center">{{ cardTitle }}</h6>
          <p class="text-gray-700 mb-3 lg:text-base text-sm　text-center">{{ designConcept }}</p> -->
          <button @click="$emit('close')" class="absolute end-1 top-1  text-black p-1 z-20">
            <span class="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div
          class="bg-white w-full rounded-md text-center shadow-lg  relative overflow-x-hidden overflow-y-auto h-full modal-content flex lg:flex-row flex-col  justify-center"
          role="dialog" aria-modal="true">

          <div class="lg:w-8/12 w-12/12 md:p-5">
            <Swiper :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2 w-11/12"
              :slidesPerView="1" :navigation="{
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev'
              }">
              <swiper-slide v-for="(img, index) in swiperImg" :key="index">
                <img class="w-full" :src="img" alt="">
              </swiper-slide>
              <button class="swiper-btn-next">next</button>
              <button class="swiper-btn-prev">prev</button>
            </Swiper>
          </div>
          <div class="text-left lg:w-4/12 w-12/12 md:p-5 px-5">
            <div class=" overflow-hidden">

              <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSliderProgress="true" :modules="modules" class="mySwiper w-80">
                <swiper-slide v-for="(img, index) in swiperImg" :key="index">
                  <a href="#!">
                    <img class="w-full" :src="img" alt="">
                  </a>
                </swiper-slide>
              </Swiper>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
// 引入swiper组件
// import { ref, reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
// 引入swiper样式（按需导入）
import 'swiper/css'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头
import 'swiper/css/thumbs'  // 轮播图的滚动条
// 引入swiper核心和所需模块
import { Pagination, Navigation, Thumbs } from 'swiper'
// 在modules加入要使用的模块
const modules = [Pagination, Navigation, Thumbs]
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
}
// Import Swiper styles
import 'swiper/css';
defineProps<{
  cardTitle?: string
  designConcept?: string
  bigImg?: string
  swiperImg?: string[]
}>();
</script>

<style scoped></style>
