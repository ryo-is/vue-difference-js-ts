<template lang="pug">
  .vue-extend Vue Extend Pattern
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { DataType, PropObjType } from "@/types"

export default Vue.extend({
  props: {
    val: String,
    obj: Object as PropType<PropObjType>
  },

  watch: {
    value(newValue: string, oldValue: string): void {
      console.log(newValue, oldValue)
    }
  },

  data(): DataType {
    return {
      value: this.val,
      enable: true,
      count: 0
    }
  },

  created(): void {
    console.log("VueExtend: Created!")
  },

  computed: {
    isEnabled(): boolean {
      return this.enable
    },
    getCount(): number {
      return this.count
    }
  },

  methods: {
    countUp(): void {
      this.count += 1
    },
    getValue(): string {
      return this.value
    }
  }
})
</script>

<style lang="scss">

</style>
