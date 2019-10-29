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
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export default class App extends Vue {}
</script>
