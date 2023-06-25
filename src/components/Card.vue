<template>
    <a class="relative w-full block" @click="$emit('open-modal')">
        <div class="overflow-hidden cursor-pointer rounded relative group">
            <img :src="cardImg" alt="Card Image" class="w-full group-hover:scale-105 transition duration-300" />
            <div
                class="p-3 opacity-0 group-hover:opacity-100 duration-300 absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-center">
                <div
                    class="transform-group text-white w-full space-y-3 text-md group-hover:opacity-90 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out">
                    <div class="font-bold">{{ cardTitle }}</div>
                    <div class="flex justify-center">
                        <span class="text-sm">View more</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-5 transition-all group-hover:ms-2 group-hover:stroke-yellow-400 rtl:rotate-180"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">

defineProps<{
    cardImg?: string
    cardTitle?: string
    modalImg?: String
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