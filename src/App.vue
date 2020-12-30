<template>
  
    <header-component/>
    <div class="container">
      <div class="controls d-flex justify-content-end pb-4">
          <input type="text" placeholder="Search a hero...">
      </div> 
      <div class="row">
          <hero-component v-for="hero in heros" :key="hero.id" :hero="hero" class="col-md-4 col-md-offset-2" />
      </div>
    </div>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import api from './api';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroComponent
  },
  data() {
    return {
      heros: []
    }
  },
  created() { 
    this.getHeros();
  },
  methods:{
    async getHeros(){
      this.heros = await api.getHeros(100);
      console.log(await api.getHeros());
    }
  }
}
</script>

<style lang="scss">
    .controls {
      input {
        background: none;
        border: 1px solid #fff;
        border-radius: 25px;
        padding: .5rem 1.2rem;
        font-size: .8rem;
        color: #fff
      }
      input:focus{
        outline:none
      }
      input::placeholder {
        color: #fff
      }
    }
</style>
