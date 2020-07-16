<template>
    <div class="newsEdit">

        <h1>newsEdit</h1>
        <h1>{{ newsId }}</h1>

    </div>
</template>

<script>
  export default {
    name: 'newsEdit',
    data() {
      return {
        newsId: this.$route.params.id,
      };
    },
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
