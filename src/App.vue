<script setup lang="ts">
// import { markRaw } from 'vue'
// import the composable
// import useModal from "@/@Stores/useModal";
// import ModalConfirm from '@/components/BaseModal.vue'
// import ModalOverview from '@/components/ModalOverview.vue'



//const modal = useModal()

// set the modal component to the ModalConfirm component and open it
// const openConfirmModal = () => {
//   modal.component.value = markRaw(ModalConfirm)
//   modal.showModal()
// }

// const openOverviewModal = () => {
//   modal.component.value = markRaw(ModalOverview)
//   modal.showModal()
// }

</script>

<template>
  <div class=" relative w-full h-full">
    <!-- <div class="flex justify-center mt-3 lg:mt-6">
      <img class="w-14" src="src/assets/img/sara.svg" alt="">
    </div> -->
    <!-- <div class="flex justify-center items-center">
      <div class="flex gap-3">
        <button class="border p-2 rounded-md hover:bg-blue-400 hover:text-white" @click="openConfirmModal">
          Open Confirm Modal
        </button>
        <button class="border p-2 rounded-md hover:bg-blue-400 hover:text-white" @click="openOverviewModal">
          Open Overview Modal
        </button>
      </div>
      <teleport to="#modal">
        <Transition>
          <component :is="modal.component.value" v-if="modal.show.value" @close="modal.closeModal" />
        </Transition>
      </teleport>
    </div> -->

    <nav class="px-3 py-3 md:py-5 mb-5 sticky top-0 z-40 cj-top-menu">

      <ul class="flex justify-center flex-wrap">
        <li>
          <RouterLink to="/" class="text-base md:text-xl hover:text-cyan-500 btn group">
            <span>
              About</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/ui-design" class=" text-base md:text-xl hover:text-cyan-500">
            <span>
              ALL WORKS</span>
          </RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/ux-design" class=" text-base md:text-xl hover:text-cyan-500">
            <span>
              UX Design</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/auth" class=" text-base md:text-xl hover:text-cyan-500">
            <span>
              Inspiration</span>
          </RouterLink>
        </li> -->
      </ul>
    </nav>

    <RouterView />
  </div>
  <!-- <router-view v-slot="{ Component }">
    <suspense timeout="0">
      <template #default>
        <component :is="Component" :key="$route.path"></component>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </router-view> -->
</template>

<style lang="scss">
.cj-top-menu {
  @apply bg-[#D8E5E1];

  ul li {
    @apply inline px-1 mx-1 whitespace-nowrap relative
  }
}

@screen md {
  .cj-top-menu ul li {
    @apply px-2 mx-2
  }
}


.router-link-active {
  span {
    @apply origin-bottom-right scale-x-0 relative text-[#c789c0];

    &::after {
      @apply absolute transition-transform bottom-0 left-0 block h-[2px] content-[''];
      animation: line 0.5s forwards ease-in-out;
      background-color: #c789c0;
    }
  }
}


@keyframes line {
  30% {
    @apply w-0 left-10
  }

  100% {
    @apply w-full right-0
  }
}
</style>