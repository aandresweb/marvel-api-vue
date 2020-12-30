<template>
    <div class="item">
        <div class="content-img">
            <img @click="show(hero)"  :src="getImage(hero.thumbnail.path, hero.thumbnail.extension)" >
        </div>
        <div class="content-bottom">
            <p class="title">{{hero.name}}</p> 
            <small @click="show(hero)" class="button">See more 🔍</small>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'hero-component',
    props: {
        hero: {}
    },
    methods: {
        getImage(path, extension){
            return `${path}.${extension}`
        },
        show(hero){
            this.$emit('show-modal', hero);
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        min-height: 4rem;
        text-align: center;
        font-family: 'Bangers';
        margin-bottom: 3rem;
        .title {
            color: #fff;
            margin: 0;
            font-size: 1.2rem;
        }
        .button {
            color: #e1e0e0;
            cursor: pointer;
        }
        .button:hover{
            text-decoration: underline;
        }
        .content-img {
            img {
               width: 100%;
               height: 246px;
               object-fit: cover;
               border-radius: 5px;
               cursor: pointer;
            }
        }
        .content-bottom{
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ffffff26;
        }
    }
</style>