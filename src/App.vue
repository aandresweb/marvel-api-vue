<template>
  
    <header-component/>
    <div class="container">
      <div class="controls d-flex justify-content-between pb-4">
          <div class="col-md-3">
            <input type="text" placeholder="Search a hero..." v-model="searchHero" v-on:keyup="filterByName">
          </div>
          <div class="col-md-3">
            <select name="quantity" id="quantity" @change="filterByLimit" v-model="limitFilter">
              <option value="0" selected>See the first...</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
      </div> 

      <template v-if="loading">
        <div class="text-center py-5" >
          <div class="spinner-border text-light" role="status" >
            <span class="visually-hidden"></span>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="row">
            <hero-component v-on:show-modal="showModal" v-for="hero in heros" :key="hero.id" :hero="hero" class="col-md-3" />
        </div>
      </template>

      <footer-component />

    </div>

    <hero-detail-component v-on:hide-modal="hideModal" :hero-detail="heroDetail" v-if="showModalStatus"></hero-detail-component>

    

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import HeroDetailComponent from './components/HeroDetailComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

import api from './api';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroComponent,
    HeroDetailComponent,
    FooterComponent
  },
  data() {
    return {
      heros: [],
      loading: true,
      searchHero: '',
      limitFilter: 0,
      showModalStatus: false,
      heroDetail: null,
    }
  },
  created() { 
    this.getHeros();
  },
  methods:{

    async getHeros(){
      this.heros = await api.getHeros(this.limitFilter);
      this.loading = !this.loading;
    },
    async filterByName(){
      this.loading = !this.loading;
      if(this.searchHero === ''){
        this.heros = await api.getHeros(this.limitFilter);
      }
      else{
        this.heros = await api.getHerosByName(this.searchHero);
      }
      this.loading = !this.loading;
    },
    async filterByLimit(){
      this.loading = !this.loading;
      this.getHeros();
    },
    showModal(hero){
      this.showModalStatus = !this.showModalStatus;
      this.heroDetail = hero;
    },
    hideModal(){
      this.showModalStatus = !this.showModalStatus;
    }

  }
}
</script>

<style lang="scss">
    .controls {
      input,select {
        background: none;
        border: 1px solid #fff;
        border-radius: 25px;
        padding: .5rem 1.2rem;
        font-size: .8rem;
        color: #fff;
        font-family: 'Poppins';
        width: 100%;
      }
      input:focus, select:focus{
        outline:none
      }
      input::placeholder {
        color: #fff
      }
      select {
          padding-left: 1.5rem;
          padding-right: 3rem;
          background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position-x: 95%;
          background-position-y: 5px;
          appearance:none;
          option {
            background: #000;
            color: #fff
          }
      }

    }
</style>
