<template>
    <div class="item">
        <div class="content-img">
            <img  :src="getImage(hero.thumbnail.path, hero.thumbnail.extension)" >
        </div>
        <div class="content-bottom">
            <p class="title">{{hero.name}}</p>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        min-height: 4rem;
        text-align: center;
        font-family: 'Bangers';
        margin-bottom: 2rem;
        .title {
            color: #fff;
            margin: 0;
            font-size: 1.4rem;
        }
        
        .content-img {
            img {
               width: 100%;
               height: 246px;
               object-fit: cover;
               border-radius: 5px;
            }
        }
        .content-bottom{
            padding-top: 1.5rem;
            padding-bottom: 2rem;
        }
    }
</style>