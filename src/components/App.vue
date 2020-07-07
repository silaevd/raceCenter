<template>
  <div id="app">
    <div class="wrpapper">

      <div class="nav-wrapper">
        <div class="container">
          <nav class="nav">
            <div class="nav-logo">
              <router-link :to="{ name: 'News'}" class="">
                <!--                            <span>LOGO</span>-->
                <img src="https://www.chiptuningede.nl/wp-content/uploads/2019/11/Edit.png" alt="">
              </router-link>
            </div>
            <div class="nav-links">
              <router-link :to="{ name: 'News'}" class="link nav-link">Новости</router-link>
              <router-link :to="{ name: 'Eventlist'}" class="link nav-link">Эвенты</router-link>
              <router-link :to="{ name: 'Login'}" class="profile-link">
                <img
                  src="https://f0.pngfuel.com/png/719/561/motorcycle-helmets-racing-helmet-motorcycle-helmets-png-clip-art.png"
                  alt="" class="profile-link-img">
              </router-link>

              <div class="settings">
                <div class="settings-item">
                  <i class="fa fa-sun-o"></i>
                  <el-switch
                    style="display: block"
                    v-model="darkMode"
                    active-color="#495057"
                    inactive-color="#ffa500"
                  ></el-switch>
                  <i class="fa fa-moon-o"></i>
                </div>
                <div class="settings-item">
                  <el-switch
                    style="display: block"
                    active-color="#333333"
                    inactive-color="#333333"
                    active-text="EN"
                    inactive-text="RU"
                    disabled
                  ></el-switch>
<!--                  <span class="material-icons">highlight</span>-->
                </div>
              </div>


            </div>
          </nav>
        </div>
      </div>

      <main>
        <div class="container">
          <router-view/>
        </div>
      </main>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        darkMode: false,
      };
    },
    props: {},
    mounted() {
      let bodyElement = document.body;
      bodyElement.classList.add('app-background');
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        htmlElement.setAttribute('theme', 'dark');
        this.darkMode = true;
      } else {
        htmlElement.setAttribute('theme', 'light');
        this.darkMode = false;
      }
    },
    watch: {
      darkMode: function () {
        let htmlElement = document.documentElement;
        if (this.darkMode) {
          localStorage.setItem('theme', 'dark');
          htmlElement.setAttribute('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
          htmlElement.setAttribute('theme', 'light');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

  .nav-wrapper {
    background: var(--card-background);
    border-bottom: 3px solid var(--border-color);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 50px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    &-logo {
      font-size: 20px;

      img {
        max-width: 100px;
        height: auto;
      }
    }

    &-links {
      display: flex;
      align-items: center;
    }

    &-link {
      color: var(--text-color);
      font-weight: 500;
      font-size: 18px;
      margin-left: 15px;
    }
  }

  .profile-link {
    &-img {
      width: 50px;
      height: 50px;
      border: 2px solid var(--border-color);
      border-radius: 50%;
      background: white;
      margin-left: 30px;
      padding: 3px;
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 45px;
    margin-left: 30px;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>
