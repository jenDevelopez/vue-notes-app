<script setup>

defineProps({
    action: Function
})

</script>
<template>
    <button @click="action" class="create-btn">+</button>
</template>
<style>

.create-btn{
    width:4rem;
    height: 4rem;
    border-radius: 50%;
    font-size:3rem;
    font-weight:500;
    color:white;
    background-color: #303F9F;
    border:none;
    position:fixed;
    right:1rem;
    bottom:1rem;
}

</style>