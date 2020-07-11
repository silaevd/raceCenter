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
                    <span>Дата:</span>
                    <span>{{ user.birthDate }}</span>
                </p>
                <p class="user-location">
                    <span>Страна:</span>
                    <span>{{ user.location1 }}</span>
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
                    <a href="" class="vk">
                        <i class="fab fa-vk"></i>
                    </a>
                </div>
                <div class="edit">
                    <button>Редактировать</button>
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
    computed: mapGetters('auth', ['user'])
  };
</script>

<style scoped lang="scss">
    .user {


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
        }

        &-avatar {
            width: 220px;
            height: 220px;
            border: 4px solid var(--border-color);
            border-radius: 50%;
            margin-bottom: 30px;
        }

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
    }
</style>
