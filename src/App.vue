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
          v-btn(v-if="!loggedIn" @click="login") line login
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getLiff, ILiff } from '@/plugins/liff'

@Component
export default class App extends Vue {
  liff: ILiff = {} as any
  profile: any = {}
  loggedIn = false

  created () {
    this.initial()
  }
  async login() {
    this.liff.login()
  }

  async initial () {
    this.liff = await getLiff('1653390945-ADMNBQMb')
    this.loggedIn = this.liff.isLoggedIn()
    if (this.loggedIn) {
      this.profile = await this.liff.getProfile()
    }
  }
}
</script>
