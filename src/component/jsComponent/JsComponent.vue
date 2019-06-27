<template lang="pug">
  .js-component
</template>

<script>
export default {
  props: ["val"],

  watch: {
    value(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },

  data() {
    return {
      value: this.val,
      enable: true,
      count: 0
    }
  },

  created() {
    console.log("JsComponent: Created!")
  },

  mounted() {
    console.log("JsComponent: Mounted!")
  },

  computed: {
    isEnabled() {
      return this.enable
    }
  },

  methods: {
    countUp() {
      this.count += 1
    }
  }
}
</script>

<style lang="scss">

</style>


