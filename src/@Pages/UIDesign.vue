<script setup lang="ts">
import Card from '@/components/Card.vue';
import ModalConfirm from '@/components/BaseModal.vue'
import useModal from "@/@Stores/useModal";
import cardData from '@/data/cardData.ts';
const modal = useModal()

//set the modal component to the ModalConfirm component and open it
const openConfirmModal = (item: any) => {
  modal.component.value = markRaw(ModalConfirm)
  modal.cardTitle.value = item.cardTitle;
  modal.modalImg.value = item.modalImg
  modal.designConcept.value = item.designConcept
  modal.swiperImg = item.swiperImg
  modal.showModal()
}
defineProps<{
  products?: string
  cardTitle?: string
  modalImg?: string
  designConcept?: string
}>();

</script>
<template>
  <div class="container pb-8">
    <teleport to="#app">
      <Transition>
        <component :is="modal.component.value" v-if="modal.show.value" @close="modal.closeModal" v-bind="modal" />
      </Transition>
    </teleport>
    <ul class=" grid hover:grid-flow-row grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-y-6 gap-x-6">
      <li v-for="( item, index ) in  cardData" :key="index"
        :class="[item.class, 'bg-white', 'rounded', 'duration-500', 'hover:shadow-black/30']">
        <Card v-bind="item" @open-modal="() => openConfirmModal(item)" />
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
