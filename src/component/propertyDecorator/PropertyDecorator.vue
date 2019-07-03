<template lang="pug">
  .property-decorator
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"

@Component({})
export default class PropertyDecorator extends Vue {
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

  get isEnabled(): boolean {
    return this.enable
  }

  public countUp(): void {
    this.count += 1
  }

  public getValue(): string {
    return this.value
  }
}
</script>

<style lang="scss">

</style>
