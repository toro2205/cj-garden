// @/store/modal.ts
import { ref,reactive } from 'vue'
// tracking of component to render
const component = ref()
const cardTitle = ref()
const modalImg = ref()
const designConcept =ref()
const swiperImg = reactive([])

// tracking of whether to show modal
const show = ref(false)


export default function useModal() {
  return {
    component,
    show,
    cardTitle,
    modalImg,
    designConcept,
    swiperImg,
    // open/close methods for modal
    showModal: () => (show.value = true),
    closeModal: () => (show.value = false),
  }
}