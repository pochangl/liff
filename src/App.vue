<template lang="pug">
  div(id="app")
    v-app
      v-toolbar.flex-grow-0
        v-toolbar-title liff test
        v-spacer
        v-toolbar-items
          v-btn(
            router
            href="https://github.com/pochangl/liff"
            target="_blank"
            text
          )
            i.fab.fa-github.fa-2x
      v-card
        v-container
          p liff: {{ liff }}
          p profile: {{ profile }}
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getLiff } from '@/plugins/liff'

@Component
export default class App extends Vue {
  liff: any = {}
  profile: any = {}

  created () {
    this.initial()
  }

  async initial () {
    const liff = this.liff = await getLiff('1653390945')
    this.profile = await liff.getProfile()
  }
}
</script>
