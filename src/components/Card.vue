<template>
    <a class="relative w-full block cursor-pointer rounded  group" @click="$emit('open-modal')">
        <div class="p-4">
            <div class="overflow-hidden ">
                <img :src="cardImg" alt="Card Image" class="w-full group-hover:scale-105 transition duration-300" />
                <div
                    class="p-3 opacity-0 lg:group-hover:opacity-100 duration-400 absolute top-0 left-0 right-0 h-full w-full bg-opacity-70 bg-[#4c4f4e] inset-x-0  text-center">
                    <div
                        class="transform-group text-white title w-full  text-md flex justify-center items-center  h-full group-hover:translate-y-0   translate-y-4 pb-5 transform transition duration-300 ">
                        <!-- <h1 class="">{{ cardTitle }}</h1> -->
                        <div class=" opacity-90 flex">
                            <h6 class="text-sm items-center mb-2 mr-1">View more
                            </h6>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto title text-center mt-2">
                <h1 class=" text-[#819B9A] text-sm font-semibold leading-6">{{ cardTitle }}
                </h1>
                <p class=" text-gray-400 text-xs"># {{ cardTag }}
                    <span class="text-[#C789C0] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-4 h-4 inline-block">
                            <path fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd" />
                        </svg></span>
                </p>

            </div>
        </div>
    </a>
</template>

<script setup lang="ts">

defineProps<{
    cardImg?: string
    cardTitle?: string
    modalImg?: String
    cardTag?: String
    showModal?: Function
    swiperImg?: string[]
}>()

</script>

<style scoped>
.cj-top-menu ul li {
    @apply inline px-1 mx-1 whitespace-nowrap
}

@screen md {
    .cj-top-menu ul li {
        @apply px-2 mx-2
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>