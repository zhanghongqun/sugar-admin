<template>
  <task-detail :is-edit='true'></task-detail>
</template>

<script>
import taskDetail from '../components/taskDetail'

export default {
  name: 'editTask',
  components: { taskDetail }
}
</script>

