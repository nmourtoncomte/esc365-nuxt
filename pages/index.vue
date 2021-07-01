<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">esc365-nuxt</h1>
      <div>isLogged: {{ isLogged }}, counter: {{ counter }}</div>
      <div class="links">
        <button type="button" class="button--green" @click="onLogClick">
          {{ isLogged ? 'Logout' : 'Login' }}
        </button>
        <button type="button" class="button--green" @click="onIncrementClick">
          Increment
        </button>
        <NuxtLink to="/secret" class="button--green">Secret</NuxtLink>
        <NuxtLink to="/replays" class="button--green">Replays</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style>
.container {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
