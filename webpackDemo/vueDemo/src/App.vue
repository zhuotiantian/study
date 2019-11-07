<template lang="">
  <div class="box">
    {{a}}+{{b}}={{a+b}}
    <Cmp1/>
  </div>
</template>
<script>
import Cmp1 from "@/components/comp1.vue"
export default {
  components: {
    Cmp1
  },
  data () {
    return {
      a: 15,
      b: 5
    }
  },
}
</script>
<style lang="css" scoped>
.box {
  color: red;
}
</style>
