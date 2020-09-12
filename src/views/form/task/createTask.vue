<template>
  <task-detail :is-edit="false"></task-detail>
</template>

<script>
import taskDetail from '../components/taskDetail'

export default {
  name: 'createTask',
  components: { taskDetail }
}
</script>

