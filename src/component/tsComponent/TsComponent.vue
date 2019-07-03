<template lang="pug">
  .ts-component
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"

@Component({})
export default class TsComponent extends Vue {
  @Prop({ default: "" })
  public val!: string

  @Watch("value")
  public onChangeValue(newValue: string, oldValue: string) {
    console.log(newValue, oldValue)
  }

  public value: string = this.val
  public enable: boolean = true
  public count: number = 0

  private created() {
    console.log("TsComponent: Created!")
  }

  private mounted() {
    console.log("TsComponent: Mounted!")
  }

  get isEnabled(): boolean {
    return this.enable
  }

  public countUp() {
    this.count += 1
  }
}
</script>

<style lang="scss">

</style>
