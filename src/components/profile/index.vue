<template>
    <section class="profile">
        <h1 class="section-title">Профиль</h1>

        <div class="user">

            <div class="user-info">
                <img src="https://citysakh.ru/files/news/middle/76766.jpg" alt="" class="user-avatar">
                <p class="user-login">
                    <span>Имя:</span>
                    <span>{{ user.username }}</span>
                </p>
                <p class="user-birthdate">
                    <span>Email:</span>
                    <span>{{ user.email }}</span>
                </p>
                <div class="user-links">
                    <a href="" class="steam">
                        <i class="fab fa-steam"></i>
                    </a>
                    <a href="" class="youtube">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="" class="twitch">
                        <i class="fab fa-twitch"></i>
                    </a>
                    <a href="" class="discord">
                        <i class="fab fa-discord"></i>
                    </a>
                    <a href="" class="vk" disabled="disabled">
                        <i class="fab fa-vk"></i>
                    </a>
                </div>
                <div class="edit">
                    <button>Редактировать</button>
                </div>
                <div class="logout">
                    <button>выйти</button>
                </div>
            </div>

            <div class="statistics">
                <div class="user-stat">
                    <div class="races col">
                        <p class="title">Гонки</p>
                        <p class="number">5</p>
                    </div>
                    <div class="poles col">
                        <p class="title">Поулы</p>
                        <p class="number">1</p>
                    </div>
                    <div class="top3 col">
                        <p class="title">Топ-3</p>
                        <p class="number">2</p>
                    </div>
                    <div class="wins col">
                        <p class="title">Победы</p>
                        <p class="number">1</p>
                    </div>
                    <div class="avStart col">
                        <p class="title">Ср. Старт</p>
                        <p class="number">1</p>
                    </div>
                    <div class="avFinish col">
                        <p class="title">Ср. Финиш</p>
                        <p class="number">1</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'profile',
  props: {
  },
  computed: mapGetters('auth', ['user']),
};
</script>

<style scoped lang="scss">
    a[disabled] { pointer-events: none; }
    .user {
        display: flex;
        flex-direction: row;


        &-info {
            width: 100%;
            max-width: 350px;
            background: var(--card-background);
            border: 3px solid var(--border-color);
            border-radius: 4px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 50px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

            p {
                width: 100%;
                max-width: 250px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
                span {
                    &:first-child {
                        font-weight: 500;
                    }
                }

            }
        }

        &-avatar {
            width: 220px;
            height: 220px;
            border: 4px solid var(--accent-second-color);
            border-radius: 50%;
            margin-bottom: 30px;
        }

        &-links {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 250px;
            margin: 30px 0;
            a {
                color: var(--text-color);
                font-size: 32px;
                transition: 220ms;
            }
        }

        .edit {
            margin-bottom: 15px;
            button {
                border-radius: 4px;
            }
        }

        .youtube {
            &:hover {
                color: rgb(230, 33, 23);
            }
        }
        .discord {
            &:hover {
                color: rgb(114, 137, 218);
            }
        }
        .steam {
            &:hover {
                color: rgb(42, 71, 94);
            }
        }
        .vk {
            &:hover {
                color: rgb(74, 118, 168);
            }
        }
        .twitch {
            &:hover {
                color: rgb(100, 65, 165);
            }
        }

        .statistics {
            width: 100%;
        }

        &-stat {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background: var(--card-background);
            border: 3px solid var(--border-color);
            border-radius: 4px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            width: 100%;

            .col {
                margin-right: 1px;
                text-align: center;
                flex-grow: 1;
                &:last-child {
                    margin-right: 0;
                }
            }

            .title {
                color: var(--text-light-color);
                font-weight: 500;
                background: var(--accent-second-color);
                padding: 7px 10px;
                &:last-child {
                }
            }
            .number {
                padding: 7px 10px;
                font-weight: 500;
                /*background: var(--chips-background);*/
                &:last-child {
                }
            }
        }
    }
</style>
