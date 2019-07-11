<template lang="pug">
  .child Child Component 
    button(@click="$emit('childEmitEvent')") Click Here!!!
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import Store from "@/store"

@Component({})
export default class Child extends Vue {
  public created(): void {
    Store.commit("setValue", "hoge")
    console.log(Store.getters.getValue)
  }
}
</script>

<style lang="scss">

</style>
