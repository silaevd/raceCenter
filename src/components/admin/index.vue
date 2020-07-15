<template>
    <section class="admin">

        <h1>admin</h1>
        <router-link to="/admin/test1">test1</router-link>
        <router-link to="/admin/test2">test2</router-link>
        <router-view/>
    </section>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {

    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
