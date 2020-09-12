<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input style="width: 200px;" class="filter-item" placeholder="任务名"></el-input>
      <el-select v-model="listQuery.status" class="filter-item" placeholder="状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-button type="primary" class="filter-item" icon="el-icon-search" @click="handleFilter">搜索</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="任务">
        <template slot-scope="scope">{{ scope.row.task.name }}</template>
      </el-table-column>
      <el-table-column label="微信昵称">
        <template slot-scope="scope">{{ scope.row.customer }}</template>
      </el-table-column>
      <el-table-column label="订单号">
        <template slot-scope="scope">{{ scope.row.orderNo }}</template>
      </el-table-column>

      <el-table-column class-name="status-col" label="动作" width="210" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="jumpToDetail(scope.row.id)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="pagination-container">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>-->
  </div>
</template>

<script>
import { fetchList, audit } from "@/api/approve";
import { MessageBox, Message } from 'element-ui'
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
        status: undefined,
        page: 1,
        limit: 20,
        taskName: undefined
      },
      options: [
        {
          value: 20,
          label: "身份审核"
        },
        {
          value: 40,
          label: "任务审核"
        }
      ]
    };
  },
  created() {
    this.fetchData(20);
  },
  methods: {
    handleFilter() {
      if (!this.listQuery.status) {
        Message({
          message: "请选择审核状态",
          type: "error",
          duration: 5 * 1000
        });
        return;
      }
      this.fetchData(this.listQuery.status);
    },
    fetchData(status) {
      this.listLoading = true;
      fetchList({ status: status }).then(response => {
        this.list = response;
        this.listLoading = false;
      });
    },
    jumpToDetail(id) {
      this.$router.push({
        name: "approve-process",
        params: { processId: id }
      });
    }
  }
};
</script>
