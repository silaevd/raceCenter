<template>
  <section class="login">
    <h1 class="section-title">Вход</h1>
    <div class="login-form">
      <login-form/>
    </div>
  </section>
</template>

<script>
import LoginForm from './LoginForm';

export default {
  name: 'login',
  components: {
    LoginForm,
  },
};
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    &-form {
      width: 100%;
      max-width: 400px;
      /*border: 3px solid var(--border-color);*/
      padding: 0 40px 40px;
    }
  }
</style>
