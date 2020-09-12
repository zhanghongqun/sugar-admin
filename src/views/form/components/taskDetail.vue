<template>
  <div class="createPost-container">
    <el-form
      class="form-container"
      size="medium"
      label-position="top"
      :model="postTask"
      :rules="rules"
      ref="postTask"
    >
      <sticky :className="'sub-navbar '+postTask.status">
        <template v-if="fetchSuccess">
          <!-- <router-link style="margin-right:15px;" v-show="isEdit" :to="{ path:'create-form'}">
            <el-button type="info">创建任务</el-button>
          </router-link>-->
          <el-button
            v-loading="loading"
            style="margin-left: 10px;"
            type="success"
            @click="submitForm()"
          >发布</el-button>
        </template>
        <template v-else>
          <el-tag>发送异常错误,刷新页面,或者联系程序员</el-tag>
        </template>
      </sticky>
      <el-col :span="12">
        <div class="createPost-main-container">
          <el-form-item label="标题:">
            <el-input
              type="textarea"
              class="article-textarea"
              :rows="3"
              autosize
              placeholder="请输入标题"
              v-model="postTask.name"
            ></el-input>
            <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
          </el-form-item>

          <!-- <el-form-item label="分类:">
            <el-select v-model="postTask.category" placeholder="请选择任务分类">
              <el-option label="高客单" value="shanghai"></el-option>
              <el-option label="低客单" value="beijing"></el-option>
            </el-select>
          </el-form-item>-->

          <el-form-item label="发布时间:">
            <el-date-picker
              v-model="postTask.start"
              type="datetime"
              format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>

          <!-- <el-tooltip class="item" effect="dark" content="商场搜索词" placement="top"> -->
          <el-form-item label="关键字:">
            <el-input placeholder="商场搜索词" v-model="postTask.searchKeyword"></el-input>
          </el-form-item>
          <!-- </el-tooltip> -->

          <el-form-item label="描述:">
            <el-input
              type="textarea"
              class="article-textarea"
              :rows="3"
              autosize
              placeholder="请输入内容"
              v-model="postTask.description"
            ></el-input>
            <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
          </el-form-item>

          <el-form-item label="奖励:">
            <el-input
              type="textarea"
              class="article-textarea"
              rows="3"
              autosize
              placeholder="请输入内容"
              v-model="postTask.reward"
            ></el-input>
            <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
          </el-form-item>
          <div style="margin-bottom: 20px;">
            <label class="el-form-item__label">列表图片:</label>
            <el-upload
              :headers="headers"
              action="/sugar/api/file"
              :limit="1"
              list-type="picture-card"
              :on-preview="handleIntroducePictureCardPreview"
              :on-success="handleIntroducePictureSuccess"
              :file-list="orderPics"
            ></el-upload>
          </div>

          <div style="margin-bottom: 20px;">
            <label class="el-form-item__label">商品图片:</label>
            <el-upload
              :headers="headers"
              action="/sugar/api/file"
              :limit="1"
              list-type="picture-card"
              :on-preview="handleProductPictureCardPreview"
              :on-success="handleProductPictureSuccess"
              :file-list="productPics"
            ></el-upload>
          </div>
          <div style="margin-bottom: 20px;">
            <label class="el-form-item__label">订单图片:</label>
            <el-upload
              :headers="headers"
              action="/sugar/api/file"
              :limit="1"
              list-type="picture-card"
              :on-preview="handleOrderPictureCardPreview"
              :on-success="handleOrderPictureSuccess"
              :file-list="orderPics"
            ></el-upload>
          </div>
        </div>
      </el-col>
    </el-form>
  </div>
</template>

<script>
import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky";
import { fetchTask, createTask } from "@/api/task";
import { getToken } from "@/utils/auth";
// import { userSearch } from '@/api/remoteSearch'

const defaultTask = {
  status: "",
  name: "", // 任务名
  description: "", // 任务描述
  reward: "", // 任务奖励
  searchKeyword: "", //搜索关键字
  productPic: "",
  orderPic: "",
  introducePic: "",
  displayTime: undefined, // 前台展示时间
  id: undefined,
  platforms: ["a-platform"],
  comment_disabled: false
};

export default {
  name: "taskDetail",
  components: { Sticky, MDinput },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === "") {
        this.$message({
          message: rule.field + "为必传项",
          type: "error"
        });
        callback(null);
      } else {
        callback();
      }
    };
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validateURL(value)) {
          callback();
        } else {
          this.$message({
            message: "外链url填写不正确",
            type: "error"
          });
          callback(null);
        }
      } else {
        callback();
      }
    };
    return {
      productPics: [],
      orderPics: [],
      introducePics: [],
      headers: { Authorization: "Bearer " + getToken() },
      postTask: Object.assign({}, defaultTask),
      fetchSuccess: true,
      loading: false,
      limit: 1,

      rules: {
        pictureUrl: [{ validator: validateRequire }],
        name: [{ validator: validateRequire }],
        description: [{ validator: validateRequire }],
        pictureUrl: [{ validator: validateSourceUri, trigger: "blur" }]
      }
    };
  },
  computed: {
    contentShortLength() {
      return this.postTask.description.length;
    }
  },
  created() {
    if (this.isEdit) {
      this.fetchData();
    } else {
      this.postTask = Object.assign({}, defaultTask);
    }
  },
  methods: {
    handleIntroducePictureCardPreview(file) {
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
    handleIntroducePictureSuccess(response, file, fileList) {
      this.postTask.introducePic = response;
    },

    handleProductPictureCardPreview(file) {
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
    handleProductPictureSuccess(response, file, fileList) {
      this.postTask.productPic = response;
    },
    handleOrderPictureCardPreview(file) {
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
    handleOrderPictureSuccess(response, file, fileList) {
      this.postTask.orderPic = response;
    },
    fetchData() {
      let id = this.$route.params.taskId;
      fetchTask(id)
        .then(response => {
          this.productPics.push({url: response.productPic});
          this.orderPics.push({url: response.orderPic});
          this.introducePics.push({url: response.introducePics});
          this.postTask = response;
        })
        .catch(err => {
          this.fetchSuccess = false;
        });
    },
    submitForm() {
      this.postTask.start = parseInt(this.postTask.start.getTime());
      createTask(this.postTask).then(res => {
        this.$router.push({ name: "tasklist" });
      });
      // this.$refs.postTask.validate(valid => {
      //   if (valid) {
      //     this.loading = true;
      //     this.$notify({
      //       title: "成功",
      //       message: "发布文章成功",
      //       type: "success",
      //       duration: 2000
      //     });
      //     this.postTask.status = "published";
      //     this.loading = false;
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    }
    // draftForm() {
    //   if (
    //     this.postTask.description.length === 0 ||
    //     this.postTask.name.length === 0
    //   ) {
    //     this.$message({
    //       message: "请填写必要的标题和内容",
    //       type: "warning"
    //     });
    //     return;
    //   }
    //   this.$message({
    //     message: "保存成功",
    //     type: "success",
    //     showClose: true,
    //     duration: 1000
    //   });
    //   this.postTask.status = "draft";
    // }
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

