<template>
  <div class="container">
    <SocialHead
      title="This is a title"
      description="This is a description"
      image="https://www.larcorporel.com/wp-content/uploads/2019/10/placeholder.png"
    />

    <b-card :title="replayInfo.title" :sub-title="replayInfo.subTitle">
      <b-card-text>
        {{ JSON.stringify(replayInfo) }}
      </b-card-text>

      <b-link to="/replays" class="card-link">Back</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: 'alternate',

  async asyncData({ $axios, params }) {
    const { id: replayId } = params

    const replayInfo = await $axios.$get(
      `https://azappptfapip1-staging.azurewebsites.net/api/v1/Sessions/${replayId}`
    )
    return { replayInfo }
  },

  head() {
    return {
      title: this.replayInfo.title,
    }
  },
}
</script>
