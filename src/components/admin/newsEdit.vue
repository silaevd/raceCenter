<template>
    <div class="newsEdit">

        <div class="row">
            <p>Название</p>
            <input type="text" id="title" placeholder="Название" v-model="title">
        </div>

        <div class="row">
            <p>Тело новости</p>
            <v-md-editor id="content" v-model="content" height="400px"></v-md-editor>
        </div>


        <button>сохранить</button>

    </div>
</template>

<script>
  export default {
    name: 'newsEdit',
    data() {
      return {
        newsId: this.$route.params.id,
        title: this.$route.params.title,
        content: this.$route.params.content
      };
    },
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

    .row {
        margin-bottom: 30px;
        p {
            margin-bottom: 7px;
        }
        input {
            color: var(--text-color);
            height: 30px;
            padding: 3px 10px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            outline: none;
            background: var(--chips-background);
        }
    }
    .v-md-editor, .v-md-editor__toolbar ul li {
        color: var(--text-color);
        background: var(--card-background);
        textarea {
            color: var(--text-color);
            background: var(--card-background);
        }
    }

</style>
