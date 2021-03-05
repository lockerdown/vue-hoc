<template>
  <div>
    <span @click="handleClick">props: {{ test }}</span>
    <slot name="slot1"/> <!-- 具名插槽 -->
    <p>===========</p>
    <slot/> <!-- 默认插槽 -->
    <slot name="withScope" :message="test"/>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  props: {
    test: Number
  },
  methods: {
    handleClick() {
      this.$emit('customize-click')
    }
  }
}
</script>