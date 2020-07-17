<template>
    <section class="admin">

        <h1>admin</h1>

        <div class="admin-wrapper">

            <aside class="admin-menu">
                <router-link :to="{ name: 'newsList'}" class="admin-menu-item">
                    <i class="fas fa-newspaper"></i>
                    <span>Новости</span>
                </router-link>

                <router-link :to="{ name: 'eventsList'}" class="admin-menu-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Эвенты</span>
                </router-link>
            </aside>

            <div class="admin-content">
                <router-view/>
            </div>
        </div>



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
    .admin {

        &-wrapper {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin: 50px 0;
        }

        &-menu {
            /*background: var(--card-background);*/
            margin-right: 50px;
            &-item {
                color: var(--text-color);
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 160px;
                background: var(--chips-background);
                padding: 5px 15px;
                margin-bottom: 2px;
                transition: 220ms;
                &:hover {
                    color: var(--text-light-color);
                    text-decoration: none;
                    background: var(--accent-third-color);
                }

                i {
                    font-size: 25px;
                }

                span {
                    font-weight: 500;
                }
            }
        }

        &-content {
            flex-grow: 1;
        }
    }
</style>
