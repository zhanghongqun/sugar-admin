<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="process">
      <sticky :className="'sub-navbar '">
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm()"
        >通过</el-button>
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm()"
        >未通过</el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col>
            <label class="el-form-item__label">旺旺号:</label>
          </el-col>
          <div style="margin-bottom: 20px;">
            <el-input v-model="process.wangWangNo"></el-input>
          </div>
          <el-row>
            <el-col>
              <label class="el-form-item__label">身份:</label>
            </el-col>
            <div style="margin-bottom: 20px;">
              <el-image :src="firstIdentifier" width="100px"></el-image>
            </div>
            <div style="margin-bottom: 20px;">
              <el-image :src="secondIdentifier" width="100px"></el-image>
            </div>
          </el-row>
        </el-row>
        <el-row v-if="showOrderInfo">
          <el-col>
            <label class="el-form-item__label">订单号:</label>
          </el-col>
          <div style="margin-bottom: 20px;">
            <el-input v-model="process.orderNo"></el-input>
          </div>
          <el-col>
            <label class="el-form-item__label">订单图片:</label>
          </el-col>
          <div style="margin-bottom: 20px;">
            <el-image :src="process.orderPic" width="100px"></el-image>
          </div>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky";
import { getProcess, audit } from "@/api/approve";
import { getToken } from "@/utils/auth";
// import { userSearch } from '@/api/remoteSearch'

export default {
  components: { Sticky, MDinput },

  data() {
    return {
      process: {}
    };
  },
  computed: {
    firstIdentifier() {
      if (!this.process.identifiers || this.process.identifiers.length < 2) {
        return "";
      }
      return this.process.identifiers[0];
    },
    secondIdentifier() {
      if (!this.process.identifiers || this.process.identifiers.length < 2) {
        return "";
      }
      return this.process.identifiers[1];
    },
    showOrderInfo() {
      return this.process.status == 40;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let id = this.$route.params.processId;
      getProcess(id).then(response => {
        this.process = response;
      });
    },
    submitForm() {
      let status = 30;
      if (this.process.status === 40) {
        status = 50;
      }
      audit({ processId: this.process.id, status: status }).then(res => {
        this.$router.push({ name: "approveList", params: {} });
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.title-prompt {
  position: absolute;
  right: 0px;
  font-size: 12px;
  top: 10px;
  color: #ff4949;
}
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 500px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>

