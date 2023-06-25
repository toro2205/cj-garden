<script setup lang="ts">
defineProps<{
    time?: number
}>();

const promise = (time: number): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

await promise(2000);

</script>

