<template>
  <div class="hero-modal d-flex justify-content-center align-items-center">  
    
    <div class="hero-modal-content">
        <span class="close-hero-modal" @click="hide">
            &times;
        </span>
        <div class="row">
            <div class="col-md-5">
                <div class="hero-modal-img">
                    <img :src="getImage(heroDetail.thumbnail.path, heroDetail.thumbnail.extension)" alt="hero">
                </div>
            </div>
            <div class="col-md-7 ">
                <div class="py-2 ">
                    <h2 class="name mb-0">{{ heroDetail.name }}</h2>
                    <hr>
                    <div class="content">
                        <p> <span class="subtitle">Description: </span> 
                            <span class="items">
                                {{ heroDetail.description}}
                            </span>
                        </p>

                        <p> <span class="subtitle">Series: </span> 
                            <span class="items" v-for="serie in heroDetail.series.items" :key="serie.name">
                                {{ serie.name }} - 
                            </span>
                        </p>
                        <p> <span class="subtitle">Comics: </span>
                            <span class="items" v-for="serie in heroDetail.stories.items" :key="serie.name">
                                {{ serie.name }}, 
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'hero-detail-component',
    props: ['heroDetail'],
    methods: {
        getImage(path, extension){
            return `${path}.${extension}`
        },
        hide(){
            this.$emit('hide-modal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .hero-modal{
        top: 0;
        left: 0;
        z-index: 9999;
        position: fixed;
        min-height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.302);
    }
    .hero-modal-content {
        background: #fff;
        padding: 2rem;
        padding-bottom: 3.5rem;
        border-radius: 10px;
        max-width: 70%;
        
        overflow: hidden;
        @media(max-width: 600px){
            overflow: scroll;
            max-height: 95vh;
        }
        .close-hero-modal{
            position: relative;
            left: 100%;
            cursor: pointer
        }
        .hero-modal-img {
            img {
                width: 100%;
                cursor: pointer;
            };
        }
        .content{
            overflow-y: scroll;
            max-height: 40vh;
        }
        .name {
            font-family: 'Bangers';
            font-size: 3rem;
            color: #333333
        }
        p{
            font-family: 'Poppins';
        }
        .subtitle{
            color: #cb2d3e;
            font-weight: 500;
            font-family: 'Comic Book';
            font-size: 1rem;
        }
        .items {
            color :#272727;
            font-size: .9rem;
        }
    }
</style>