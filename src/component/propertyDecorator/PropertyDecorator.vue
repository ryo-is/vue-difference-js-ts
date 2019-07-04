<template lang="pug">
  .property-decorator
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Provide } from "vue-property-decorator"
import { PropObjType } from "@/types"

@Component({})
export default class PropertyDecorator extends Vue {
  @Prop({ default: "" })
  public val!: string

  @Prop({ default: { id: "", index: null} })
  public obj!: PropObjType

  @Watch("value")
  public onChangeValue(newValue: string, oldValue: string): void {
    console.log(newValue, oldValue)
  }

  public value: string = this.val
  public enable: boolean = true
  public count: number = 0

  private created(): void {
    console.log("PropertyDecorator: Created!")
    console.log(this.val, this.obj)
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
