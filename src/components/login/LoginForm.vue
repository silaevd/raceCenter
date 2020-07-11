<template>
    <el-form ref="form" :rules="rules" :model="form" class="elform">
        <!-- email -->
        <el-form-item prop="email">
            <el-input placeholder="e-mail" v-model="form.email" clearable>
                <template slot="prepend">
          <span class="icon is-small">
            <i class="fa fa-user"></i>
          </span>
                </template>
            </el-input>
        </el-form-item>
        <!-- Password -->
        <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="form.password" clearable>
                <template slot="prepend">
          <span class="icon is-small">
            <i class="fa fa-key"></i>
          </span>
                </template>
            </el-input>
        </el-form-item>

        <el-form-item class="form-buttons">
            <el-button class="button" @click="submit">Войти</el-button>
            <a href="">Регистрация</a>
        </el-form-item>
    </el-form>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'login-form',
    data: () => ({
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: 'email is required', trigger: 'blur' },
          { min: 0, max: 160, message: 'email must be between 6 and 12 characters', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'password is required', trigger: 'blur' },
        ],
      },
    }),
    computed: {
      ...mapState('auth', {
        authRequest: 'request',
        authFailure: 'failure',
      }),
    },
    methods: {
      ...mapActions('auth', ['login']),
      submit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            const { form } = this;
            const isSuccess = await this.login(form);
            if (isSuccess) {
              this.$router.push('/');
            }
          }
        });
      },
      clear() {
        const { form } = this;
        form.email = '';
        form.password = '';
      },
    },
  };
</script>

<style lang="scss">
    .elform {
        .el-form {
            &-item {
                &__content {
                    height: 35px;
                }
            }
        }
        .form-buttons {
            ::before, ::after {
                display: none;
            }

            .el-form-item__content {
                display: flex;
                justify-content: space-between;
            }
        }

        .el-input {

            &-group {
                width: 91%;
                height: 35px;
                position: relative;
                background: var(--chips-background);
                margin-bottom: 10px;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;

                &:after {
                    content: "";
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 35px 35px 0 0;
                    border-color: var(--chips-background) transparent transparent transparent;
                    position: absolute;
                    top: 0;
                    right: -35px;
                }
            }

            &-group__prepend {
                display: none;
            }

            &__inner {
                color: var(--text-color);
                font-size: 16px;
                border: none;
                outline: none;
                background: transparent;
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                padding: 5px 10px;
            }
        }
    }

</style>
