<template>
  <div>
    <div class="container">
      <b-card-group deck>
        <b-card
          v-for="replay in replays"
          :key="replay.id"
          header="Replay"
          class="text-center"
        >
          <nuxt-link :to="`/replays/${replay.id}`">
            <b-card-text>
              {{ replay.title }}
            </b-card-text>
          </nuxt-link>
        </b-card>
      </b-card-group>
    </div>
    <div class="container">
      <nuxt-link to="/"> Back </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'alternate',

  async asyncData({ $axios }) {
    const replays = await $axios.$post(
      'https://azappptfapip1-staging.azurewebsites.net/api/v1/Sessions/Replay',
      { EventId: 968, Take: 4, Skip: 0 }
    )
    return { replays }
  },
}
</script>
