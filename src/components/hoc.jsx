export default function WithConsole(WrappedComponent) {
    return {
        created() {
            // we use the parent's $createElement instead of our own
            // this is necessary so that the wrapped component can properly resolve the slots.
            this.$createElement = this.$parent.$createElement
        },
        mounted() {
            console.log('I have already mounted')
        },
        props: WrappedComponent.props,
        render() {
            // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
            // const slots = Object.keys(this.$slots)
            //     .reduce((arr, key) => arr.concat(this.$slots[key]), [])
            console.log(this.$slots);
            return (
                <WrappedComponent on={this.$listeners} attrs={this.$attrs}
                                  props={this.$props}
                                  scopedSlots={this.$scopedSlots}>
                    {this.$slots}
                </WrappedComponent>
            )
        }
    }
}