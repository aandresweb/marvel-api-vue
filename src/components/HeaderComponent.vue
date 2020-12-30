<template>
    <div class="container header">
        <h1>Marvel's API</h1>
        <small>This is just a marvel's api, made with 🤍</small> 
    </div> 
</template>

<script>
export default {
    name: 'header-component'
}
</script>

<style lang="scss" scoped>
    .header {
        color: white;
        text-align: center;
        padding: 4.5rem 0 2.5rem 0;
        h1 {
            font-size: 5rem;
            font-family: "Bangers";
        }
        small {
            font-size: .95rem;
            font-family:'Comic Book';
        }
    }
</style>