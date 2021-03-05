<template>
  <div>
    <base-component :test="1" @customize-click="click">
      <h2 slot="slot1">BaseComponent slot</h2>
      <p>default slot</p>
      <template slot="withScope" slot-scope="{message}">
        <p>This is a scoped slot, it received the message: {{ message }}</p>
      </template>
    </base-component>
    <enhanced-com :test="2" @customize-click="click" data-title="123">
      <h2 slot="slot1">EnhancedComponent slot</h2>
      <p>default slot</p>
      <template slot="withScope" slot-scope="{message}">
        <p>This is a scoped slot, it received the message: {{ message }}</p>
      </template>
    </enhanced-com>
  </div>
</template>

<script>
import BaseComponent from './base-component.vue'
import hoc from './hoc.jsx'

const EnhancedCom = hoc(BaseComponent)

export default {
  components: {
    BaseComponent,
    EnhancedCom
  },
  methods:{
    click(){
      alert('native')
    }
  }
}
</script>