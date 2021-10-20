<template>
  <layout>
    <el-card class="box-card">
      <div
        slot="header"
        class="title"
      >
        <span
          style="font-size: 18px;"
          v-text="title"
        >
        </span>
      </div>
      <div
        class="article"
        v-html="html"
      >
      </div>
    </el-card>

    <el-card style="margin-top: 1rem;">
      <div
        slot="header"
        class="title"
      >
        <i
          class="far fa-comment-dots"
          style="font-size: 2rem;"
        ></i>
        <span>文章评论</span>
      </div>
      <div>
        <el-table
          :show-header="false"
          :data="comments"
        >
          <el-table-column
            label="回复"
            type="expand"
            width="20"
          >
            <template slot-scope="props">
              <el-table
                :show-header="false"
                :data="props.row.replies"
              >
                <el-table-column width="50">
                </el-table-column>
                <el-table-column
                  label="昵称"
                  width="180"
                >
                  <template slot-scope="props">
                    <i class="fas fa-reply"></i>
                    <span style="margin-left: 5px">{{ props.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="content"
                  label="内容"
                ></el-table-column>
                <el-table-column
                  prop="creationDate"
                  width="200"
                  label="日期"
                ></el-table-column>
              </el-table>
            </template>
          </el-table-column>

          <el-table-column
            label="昵称"
            width="180"
          >
            <template slot-scope="props">
              <i class="far fa-comments"></i>
              <span style="margin-left: 5px">{{ props.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
          ></el-table-column>
          <el-table-column
            prop="creationDate"
            width="200"
            label="日期"
          ></el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-card style="margin-top: 1rem;">
      <div
        slot="header"
        class="title"
      >
        <i
          class="far fa-comment-alt"
          style="font-size: 2rem;"
        ></i>
        <span>发表评论</span>
      </div>
      <div>
        <el-form
          :model="comment"
          :rules="rules"
          ref="comment"
        >
          <el-row>
            <el-form-item prop="content">
              <el-input
                type="textarea"
                :rows="3"
                v-model="comment.content"
                placeholder="评论内容"
              >
              </el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item prop="name">
                <el-input
                  v-model="comment.name"
                  placeholder="昵称"
                  clearable
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item prop="mail">
                <el-input
                  v-model="comment.mail"
                  placeholder="邮箱"
                  clearable
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button
                :loading="commenting"
                style="width: 100%;"
                @click="submitForm('comment')"
              >
                <i class="far fa-paper-plane"></i>
              </el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
import { getArticleById, commentArticle } from '@/api/article';

export default {
  components: { Layout },
  name: 'Article',
  props: ['id'],
  data() {
    return {
      title: '',
      html: '',
      comments: [],
      commenting: false,
      comment: {
        name: '',
        mail: '',
        content: '',
        articleId: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        content: [
          { required: true, message: '请输入评论内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    fetchData(id) {
      id = id || this.id;

      getArticleById(id).then(response => {
        this.title = response.data.title;
        this.html = response.data.content;
        this.comments = response.data.comments;
      });
    },
    submitForm(formName) {
      let thiz = this;
      let form = thiz.$refs[formName];
      thiz.comment.articleId = thiz.id;

      form.validate((valid) => {
        if (valid) {
          commentArticle(thiz.comment).then(response => {
            this.$message({
              message: '评论成功',
              type: 'success',
              duration: 1000,
              center: true
            });
            form.resetFields();
            thiz.commenting = false;
            thiz.comments.push(response.data);
          });
        } else {
          thiz.commenting = false;
          return false;
        }
      });
    }
  },
  created() {
    this.fetchData(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(1, 20, to.params.id);
    next();
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: left;
}
.article {
  width: 100%;
  text-align: left;
}
</style>