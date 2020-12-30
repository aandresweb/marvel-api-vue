<template>
  <footer class="pt-3 pb-4 mt-5">
      <div class="text-center">
        <p>Made with 🤍 by <a href="https://aandresweb.com/" target="_blank">aandresweb.com</a></p>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-component'
}
</script>

<style lang="scss" scoped>
    footer{
        border-top: 1px solid rgba(255, 255, 255, 0.118);
        p {
            color: #ffffff;
            font-family: 'Comic Book';
            margin: 0;
            font-size: .8rem;
            a {
                color :#fff
            }
        }
    }
</style>