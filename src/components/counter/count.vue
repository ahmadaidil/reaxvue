<template>
  <span>{{count}}</span>
</template>

<script>
import store from '../../stores'
export default {
  computed: {
    count () {
      return store.state.count
    }
  }
}
</script>
