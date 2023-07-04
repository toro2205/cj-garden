<template>
  <!-- <div class="h-full w-full container mx-auto p-4" :class="auth.is_authorized ? 'bg-green-100' : 'bg-red-100'">
      <div v-if="auth.is_authorized">
        About Page <span>{{ auth.username }}</span>
      </div>
      <div v-else> About Page </div>
    </div> -->
  <!-- component -->
  <div>
    <!-- <div class="fixed w-20 h-20 left-60 top-50 bg-fixed  delay-500 duration-1000 ease-in-out opacity-75">
      <svg1></svg1>
    </div> -->
    <div class="container">
      <div class=" bg-white bg-opacity-80 lg:px-20 lg:py-16 p-4 lg:mx-12 rounded-lg">
        <div class="flex flex-col lg:flex-row min-h-screen text-gray-800">
          <aside class="w-full lg:w-5/12">
            <!-- 個人介紹 (Start) -->
            <div class="mb-4">
              <div class="mb-2">
                <div data-aos="zoom-in" data-aos-duration="1000" class=" w-60 mx-auto">
                  <img src="/avatar.png" class="h-auto w-full rounded-lg" alt="" />
                </div>
              </div>
              <div class="mb-2 text-sm text-gray-900 leading-6" data-aos="fade-right">
                <p>我喜歡觀察網站上的新變化，以使用者角度思考並以邏輯性解決問題。以下是我的專業技能和經驗，期待為貴公司帶來價值：</p>
              </div>
            </div>
            <!-- 個人介紹 (End) -->

            <!-- Skills (Start) -->
            <div class="mb-6" data-aos="fade-up-right">
              <div class=" bg-[#819B9A] rounded-t-lg">
                <h1 class="text-xl text-center text-white">
                  <span class="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </span>
                  Skills
                </h1>
              </div>


              <div
                class="lg:px-6 lg:py-5 px-4 py-3 grid grid-cols-4 lg:gap-5 gap-4 w-full border-[#819B9A] border-2 rounded-b-lg">
                <CircleProgressBar v-for="(work) in workSkill" :key="work.src" :value="work.value" :max="100"
                  strokeWidth="9" :color-filled="work.color" color-unfilled="#819B9A" :rounded="true"
                  class="lg:max-h-20 max-h-16">
                  <img class="w-5 h-5" :src="work.src" alt="skill logo">
                </CircleProgressBar>
              </div>


            </div>
            <!-- Skills (End) -->

            <!-- Interests (Start) -->
            <div class="mb-2" data-aos="fade-up">
              <div class=" bg-[#819B9A] rounded-t-lg">
                <h1 class="text-xl text-center text-white">
                  <span class="inline-block align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                  </span>
                  Interests
                </h1>
              </div>

              <div class="px-4 py-3 w-full border-[#819B9A] text-[#819B9A] border-2 rounded-b-lg">
                <ul class="text-xs flex flex-wrap">
                  <li class="mr-4 mb-3">
                    <span class="rounded-full">#看電影</span>
                  </li>
                  <li class="mr-4 mb-3">
                    <span class="rounded-full">#打羽球</span>
                  </li>
                  <li class="mr-4 mb-3">
                    <span class="rounded-full">#畫圖</span>
                  </li>
                  <li class="mr-4 mb-3">
                    <span class="rounded-full">#烹飪</span>
                  </li>
                  <li class="mr-4 mb-3">
                    <span class="rounded-full">#打羽球</span>
                  </li>

                </ul>
              </div>
            </div>
            <!-- Interests (End) -->
          </aside>
          <main class="main w-full lg:w-7/12">
            <!-- Abilities (Start) -->
            <div class="mb-6 lg:mb-8">
              <div class="px-8 mb-3 w-full flex justify-center items-center">
                <h1 class="text-xl text-[#819B9A] flex items-center">

                  Abilities
                </h1>
                <div class="w-full ml-2 mt-1 border-style"></div>
              </div>
              <div class="lg:px-8">
                <ul class="mb-2 grid grid-cols-4 gap-3 lg:mx-6 ">
                  <li class="text-center mx-auto transition duration-500 hover:scale-125" v-for="(abilitie) in Abilities"
                    data-aos="flip-right" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                    <div>
                      <img class="w-16" :src="abilitie.img" alt="">
                    </div>
                    <h6 class="text-xs">{{ abilitie.text }}</h6>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Abilities (End) -->

            <!-- Learning (Start) -->
            <div class="mb-6 lg:mb-8">
              <div class="px-8 mb-3 w-full flex justify-center items-center">
                <h1 class="text-xl text-[#819B9A] flex items-center">
                  Learning
                </h1>
                <div class="w-full ml-2 mt-1 border-style"></div>
              </div>

              <div class="lg:pl-8 lg:pr-4">


                <ul class="flex flex-col">
                  <li class="lg:mx-6  border-l-2 pb-3 border-[#819B9A]" data-aos="fade-left">
                    <div class="md:flex flex-start">
                      <div
                        class="bg-[#D8E5E1] text-[#819B9A]  w-5 h-5 flex items-center justify-center rounded-full -ml-[0.65rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-3.5 h-3.5">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>

                      </div>
                      <div
                        class="max-w-md ml-6 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 lg:w-full">
                        <div class="flex-row items-center justify-between mb-1">
                          <h6 class="text-xs text-[#464C4C] font-normal">2018/7~2018/12

                          </h6>
                        </div>
                        <div class="flex flex-row items-center mb-2">
                          <div class="text-xl font-semibold text-[#464C4C]">
                            <div class="font-medium text-sm">資策會
                              <span class="text-xs">/ 前端工程師就業養成班
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="max-w-screen-xl mx-auto w-full min-h-sceen">

                          <details class="group bg-transparent">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                              <span class="text-xs  text-zinc-500">對網頁開始有興趣,因而報名了資策會的前端工程...</span>

                              <div class="text-sm flex whitespace-nowrap text-[#C789C0]">see more
                                <span class="transition group-open:rotate-180">
                                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                    width="20">
                                    <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                                </span>
                              </div>
                            </summary>
                            <p class="text-xs text-gray-500 group-open:animate-fadeIn leading-6">
                              在資策會的專題中，我們與團隊合作，使用React架設了知音文創的網站。我的貢獻是負責Product list和Product
                              Detail的串接，這是我第一次參與前後端網頁開發。雖然過程辛苦，但也讓我感到非常有成就感，同時學到了團隊合作的重要性。
                            </p>
                          </details>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="lg:mx-6  border-l-2 border-[#819B9A]">
                    <div class="md:flex flex-start">
                      <div
                        class="bg-[#D8E5E1] text-[#819B9A]  w-5 h-5 flex items-center justify-center rounded-full -ml-[0.65rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" class="w-3.5 h-3.5">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                      <div
                        class="max-w-md ml-6 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 lg:w-full"
                        data-aos="fade-left">
                        <div class="flex-row items-center justify-between mb-1">
                          <h6 class="text-xs text-[#464C4C] font-normal">2006/9~2012/6
                          </h6>
                        </div>
                        <div class="flex flex-row items-center mb-2">
                          <div class="text-xl font-semibold text-[#464C4C]">
                            <div class="font-medium text-sm">台南應用科技大學
                              <span class="text-xs">/ 視覺傳達設計系 大學畢業
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="max-w-screen-xl mx-auto w-full min-h-sceen">

                          <details class="group bg-transparent">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                              <span class="text-xs  text-zinc-500">從小就喜愛繪圖，因為這項專長而選擇了設計系...</span>

                              <div class="text-sm flex whitespace-nowrap text-[#C789C0]">see more
                                <span class="transition group-open:rotate-180">
                                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                    width="20">
                                    <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                                </span>
                              </div>
                            </summary>
                            <p class="text-xs text-gray-500 group-open:animate-fadeIn leading-6">
                              在大學畢業專題中，我們用Flash製作了一個專為復健患者設計的互動網頁。患者可以使用平板電腦點選復健動畫，並以紅點標示關鍵位置。這次經驗讓我第一次接觸網頁排版，並培養了對網頁設計的興趣。
                            </p>
                          </details>

                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Learning (End) -->
            <!-- Experience (Start) -->
            <div class="mb-6 lg:mb-8">
              <div class="px-8 mb-3 w-full flex justify-center items-center">
                <h1 class="text-xl text-[#819B9A] flex items-center">

                  Experience
                </h1>
                <div class="w-full ml-2 mt-1 border-style"></div>
              </div>

              <div class="lg:px-8">

                <ul class="flex flex-col">
                  <li class="lg:mx-6 pb-3 border-l-2 border-[#819B9A]" v-for="(work) in workList">
                    <div class="md:flex flex-start">
                      <div class="bg-[#819B9A] w-2 h-2  flex items-center justify-center rounded-full -ml-[0.3rem]">
                      </div>
                      <div class="max-w-md ml-6 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        data-aos="fade-left">
                        <div class="flex-row items-center justify-between mb-1">
                          <h6 class="text-xs text-[#464C4C] font-normal">{{ work.dateRange }}
                            <span class="ml-2 text-gray-400">{{ work.dateTotal }}
                            </span>
                          </h6>
                        </div>
                        <div class="flex flex-row items-center">
                          <img class="w-10 h-10 mr-3" :src="work.logo" alt="">
                          <div class="text-xl font-semibold text-[#464C4C]">
                            <div class="font-medium text-sm">{{ work.office }}
                              <span class="text-gray-500 text-xs">/ {{ work.company
                              }}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Experience (End) -->
            <!-- Contact Me (Start) -->
            <div class="mb-6 lg:mb-8" data-aos="fade-down">
              <div class="px-8 mb-3 w-full flex justify-center items-center">
                <h1 class="text-xl text-[#819B9A] flex items-center whitespace-nowrap">
                  Contact Me
                </h1>
                <div class="w-full ml-2 mt-1 border-style"></div>
              </div>

              <div class="lg:px-8">
                <ul class="mb-2 lg:mx-6 flex flex-wrap">
                  <li class="text-center mx-auto transition duration-500 hover:scale-110 w-full md:w-6/12">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md text-[#819B9A] p-2 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-2 grow text-left">
                        <p class="mb-2  text-[#464C4C]">
                          0933-595-335
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="text-center mx-auto transition duration-500 hover:scale-110 w-full md:w-6/12">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md  text-[#819B9A] p-2 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-line w-5 h-5"
                            viewBox="0 0 16 16">
                            <path
                              d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-2 grow text-left">
                        <p class="mb-2  text-[#464C4C]">
                          ID:toro2205
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="text-center mx-auto transition duration-500 hover:scale-110 w-full md:w-12/12">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md  text-[#819B9A] p-2 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-2 grow text-left">
                        <p class="mb-2  text-[#464C4C]">
                          toro3307@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
            <!-- Contact Me (End) -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
// import svg1 from '@/components/svg.vue'
import { CircleProgressBar } from 'vue3-m-circle-progress-bar';
//import authStore from "@/@Stores/authStore";
//const auth = authStore.useAuthStore();

const workList = [
  {
    logo: "/img/about/logo_hw.png",
    office: "好會飛網路股份有限公司",
    company: "網頁設計師",
    dateRange: "2019/3~2023/3",
    dateTotal: "4年1個月"
  },
  {
    logo: "/img/about/logo_ptt.jpg",
    office: "博彩堂印刷設計",
    company: "美編",
    dateRange: "2017/4~2018/3",
    dateTotal: "1年"
  },
  {
    logo: "/img/about/logo_gm.png",
    office: "景美企業社",
    company: "行政秘書",
    dateRange: "2013/9~2017/7",
    dateTotal: "3年7個月"
  }
];

const workSkill = [
  {
    src: "/img/about/ai.png",
    color: "#FF9A00",
    value: 90
  },
  {
    src: "/img/about/ps.png",
    color: "#001E36",
    value: 80
  },
  {
    src: "/img/about/xd.png",
    color: "#470137",
    value: 92
  },
  {
    src: "/img/about/pr.png",
    color: "#00005B",
    value: 70
  }
  ,
  {
    src: "/img/about/ax.png",
    color: "#2C87C9",
    value: 80
  },
  {
    src: "/img/about/fg.png",
    color: "#353535",
    value: 85
  },
  {
    src: "/img/about/scss.png",
    color: "#CB6699",
    value: 85
  },
  {
    src: "/img/about/bs.png",
    color: "#9013FE",
    value: 90
  },
  {
    src: "/img/about/git.png",
    color: "#FC573B",
    value: 85
  },
  {
    src: "/img/about/jq.png",
    color: "#0C6AAD",
    value: 85
  },
  {
    src: "/img/about/js.png",
    color: "#FDDE00",
    value: 70
  },
  {
    src: "/img/about/vue.png",
    color: "#42B883",
    value: 70
  }
];

const Abilities = [
  {
    img: "/img/about/i_01.svg",
    text: "視覺美感",
  },
  {
    img: "/img/about/i_02.svg",
    text: "介面設計",
  },
  {
    img: "/img/about/i_03.svg",
    text: "流程邏輯",
  },
  {
    img: "/img/about/i_04.svg",
    text: "團隊合作",
  }
  ,
  {
    img: "/img/about/i_05.svg",
    text: "使用者研究",
  },
  {
    img: "/img/about/i_06.svg",
    text: "客製化插圖",
  },
  {
    img: "/img/about/i_07.svg",
    text: "互動設計",
  },
  {
    img: "/img/about/i_08.svg",
    text: "前端語言",
  }
];


// defineProps<{
//   time?: number
// }>();

// const promise = (time: number): Promise<void> => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };

// await promise(300);

</script>
  
<style scoped></style>