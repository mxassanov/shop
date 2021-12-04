<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValid ref="authForm">
        <form @submit.prevent="onLogin">
          <div class="login-form-error" v-if="loginFormError">
            {{ loginFormError }}
          </div>
          <FieldValid
            name="email"
            rules="email|required"
            mode="lazy"
            slim
          >
            <div class="form-group" slot-scope="{ errors }">
              <label>Email</label>
              <input
                v-model="loginForm.email"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.length}"
                placeholder="Email"
                name="email"
                id="validationEmail"
              />
              <div
                v-show="errors"
                class="invalid-feedback"
                id="validationEmailFeedback"
              >
                {{ errors[0] }}
              </div>
            </div>
          </FieldValid>
          <FieldValid
            name="password"
            rules="required"
            mode="lazy"
            slim
          >
            <div class="form-group" slot-scope="{ errors }">
              <label>Password</label>
              <input
                v-model="loginForm.password"
                type="password"
                :class="{ 'is-invalid': errors.length }"
                class="form-control"
                placeholder="Password"
                name="password"
                id="validationPassword"
              />
              <div
                v-show="errors"
                class="invalid-feedback"
                id="validationPasswordFeedback"
              >
                {{ errors[0] }}
              </div>
            </div>
          </FieldValid>
          <button type="submit" class="btn btn-secondary">Login</button>
        </form>
      </FormValid>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'LoginPage',
  layout: 'unauthorized',
  components: {
    FormValid: ValidationObserver,
    FieldValid: ValidationProvider,
  },
  data: () => ({
    loginForm: {
      email: '',
      password: '',
    },
    loginFormError: null,
  }),
  methods: {
    async onLogin() {
      const isCorrect = await this.$refs.authForm.validate()
      if (isCorrect) {
        try {
          const response = await this.$auth.loginWith('local',
            { data: this.loginForm }
          )
          this.$router.push('/products')
        }
        catch (err) {
          console.log(err)
          this.loginFormError = err.response.data.message
        }
      }
    },
  },
}
</script>

<style scoped>
.login-form-error {
  border-radius: 6px;
  padding: 10px;
  color: black;
  background: lightcoral;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
