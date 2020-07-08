<template>
    <section class="news">

        <template>
            <el-carousel :interval="5000"  height="333px" type="card" arrow="always">
                <el-carousel-item v-for="item in carouselItems" :key="item">
                  <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </template>

<!--        <h1 class="section-title">Новости</h1>-->
        <div class="news-items">
            <div class="news-item card">
                <div class="news-item-header">
                    <div class="news-item-logo">
<!--                        <span>news</span>-->
                        <img src="https://avatars.mds.yandex.net/get-zen-logos/201842/pub_5ac9d5fffd96b16a83adaee7_5cdc3fd573f29b00b2d9908e/xh" alt="">
                    </div>
                    <div class="news-item-info">
                        <h2 class="news-item-title">Новая новость</h2>
                        <span class="news-item-date">23.04.2020</span>
                    </div>
                </div>
                <div class="news-item-body">
                    <p class="news-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit
                        optio rem? Ab ad alias aliquam aperiam dolorem explicabo facilis incidunt ipsum iusto laboriosam
                        laudantium minima nisi nostrum numquam officia optio perspiciatis quae quibusdam ut, vel, vero
                        voluptatibus voluptatum! Assumenda autem consequuntur dolor, dolore dolorem doloribus eligendi
                        esse est et excepturi explicabo fuga in ipsum laudantium magnam molestias necessitatibus
                        obcaecati placeat quasi quis quo rem repellendus reprehenderit sequi similique sit veritatis. At
                        enim explicabo, harum iure nihil optio quasi voluptatum. A aliquid consequatur consequuntur
                        debitis doloremque, est excepturi harum hic ipsa libero maiores natus perferendis repudiandae
                        sed tempore. Ab aspernatur at beatae cum labore magnam, modi neque officiis soluta vitae! At
                        atque dicta earum illo necessitatibus nihil similique temporibus, veritatis. Architecto
                        aspernatur culpa cupiditate, deleniti dolore eaque ex, facere iusto libero magni, maxime
                        similique vitae. Asperiores autem consequatur, corporis ea incidunt, obcaecati pariatur porro
                        rerum suscipit vel vero voluptate! Accusamus.</p>
                </div>
                <div class="news-item-footer"></div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        carouselItems: [
          "https://www.operationsports.com/wp-content/uploads/2018/11/ACC_03-1024x576.jpg",
          "https://i.ytimg.com/vi/Pxa6ibylQ_M/maxresdefault.jpg",
          "https://avatars.mds.yandex.net/get-zen_doc/1101877/pub_5d404ebcbf50d51c1735ab82_5d404f570ce57b1c3ed25346/scale_1200",
          "https://i.ytimg.com/vi/sxhoDcIMpG8/maxresdefault.jpg"
        ]
      };
    },
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .el-carousel {
      margin-bottom: 50px;
    }
    .el-carousel__item {
      img {
        width: 100%;
        height: auto;
        border: 3px solid var(--accent-second-color);
        border-radius: 4px;
      }
    }
    .news {
        padding: 0 15px;
    }

    .news-item {
        color: var(--text-color);
        border: 4px solid var(--border-color);
        border-radius: 4px;
        background: var(--card-background);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

        &-header {
            display: flex;
            border-bottom: 2px solid var(--border-color);
            padding: 10px;
        }

        &-logo {
            max-width: 100px;
            margin-right: 15px;

            img {
                width: 45px;
                height: auto;
            }
        }

        &-info {
        }

        &-title {
            /*margin-bottom: 10px;*/
        }

        &-date {
            color: var(--text-sub-color);
            font-size: 14px;
            font-weight: 500;
        }

        &-body {

            padding: 10px;
        }

        &-text {
            text-align: justify;
        }

        &-footer {
            min-height: 50px;
            /*background-color: rgba(0,0,0,0.12);*/
            background-color: var(--chips-background);
        }
    }
</style>
