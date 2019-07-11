<template lang="pug">
  .demo
    Child(@childEmitEvent="emitEvent()")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import Child from "./child.vue"

@Component({
  components: {
    Child
  }
})
export default class Demo extends Vue {
  public emitEvent(): void {
    console.log("Emit Event")
  }
}
</script>

<style lang="scss">

</style>
