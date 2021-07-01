<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">esc365-nuxt</h1>
        <div>This is a secret page!</div>
      </div>
    </div>
    <div class="container">
      <nuxt-link to="/"> Back </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.isLogged,
      counter: (state) => state.counter,
    }),
  },
  methods: {
    onLogClick() {
      this.$store.commit('auth/setIsLogged', !this.isLogged)
    },
    onIncrementClick() {
      this.$store.dispatch('increment')
    },
  },
}
</script>
