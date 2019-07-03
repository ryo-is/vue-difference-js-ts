<template lang="pug">
  .vue-extend
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

type DataType = {
  value: string
  enable: boolean
  count: number
}

type PropObjType = {
  id: string
  index: number
}

export default Vue.extend({
  props: {
    val: String,
    obj: Object as PropType<PropObjType>
  },

  watch: {
    value(newValue: string, oldValue: string) {
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

  created() {
    console.log("JsComponent: Created!")
  },

  computed: {
    isEnabled(): boolean {
      return this.enable
    }
  },

  methods: {
    countUp() {
      this.count += 1
    }
  }
})
</script>

<style lang="scss">

</style>
