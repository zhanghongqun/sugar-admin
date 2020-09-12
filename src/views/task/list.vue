<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="width: 200px;"
        v-model="listQuery.name"
        class="filter-item"
        placeholder="任务名"
      ></el-input>
      <el-button
        type="primary"
        class="filter-item"
        icon="el-icon-search"
        @click="handleFilter"
      >搜索</el-button>
      <router-link style="margin-left:15px;" :to="{ path:'/task/create-task'}">
        <el-button type="primary" class="filter-item" icon="el-icon-edit">新增</el-button>
      </router-link>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="名称" width="230">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="描述" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="关键字" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.searchKeyword }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="奖励" width="210" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.reward }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="动作" width="210" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="jumpToDetail(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="pagination-container">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>-->
  </div>
</template>

<script>
import { fetchList } from "@/api/task";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    handleFilter() {
      fetchList(this.listQuery).then(res => {
        this.list = res;
        this.listLoading = false;
      });
    },
    fetchData() {
      this.listLoading = true;
      fetchList().then(response => {
        this.list = response;
        this.listLoading = false;
      });
    },
    jumpToDetail(taskId) {
      this.$router.push({
        name: "edit-task",
        params: { taskId: taskId }
      });
    }
  }
};
</script>
