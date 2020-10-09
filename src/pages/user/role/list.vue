<template>
  <page>
    <div class="mb8">
      <a-button type="primary" @click="addRole">
        创建角色
      </a-button>
    </div>
    <a-table rowKey="id" :columns="columns" :data-source="data">
      <template #action="{record}">
        <a-space>
          <!-- {{ record.name }} -->
          <span class="href" @click="editRole(record)">修改</span>
          <a-popconfirm
            title="确定是否删除该角色"
            @confirm="deleteRole(record)"
          >
            <span class="href">删除</span>
          </a-popconfirm>
        </a-space>
      </template>
    </a-table>
    <RoleModel
      :record="record"
      v-model:visible="roleModelVisible"
      @ok="roleModelOk"
    />
  </page>
</template>

<script>
import * as api from "../api";
import RoleModel from "./components/RoleModel.vue";
export default {
  components: {
    RoleModel,
  },
  data() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "角色名称",
        key: "name",
        dataIndex: "name",
      },
      {
        title: "操作",
        key: "action",
        customRender: ({ text, record }) => {
          console.log(text, record, "this");
          return (
            <a-space>
              <span class="href" onClick={this.editRole.bind(this, record)}>
                修改
              </span>
              <a-popconfirm
                title="确定是否删除该角色"
                onConfirm={this.deleteRole.bind(this, record)}
              >
                <span class="href">删除</span>
              </a-popconfirm>
            </a-space>
          );
        },
      },
    ];
    return {
      roleModelVisible: false,
      columns,
      data: [],
      record: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    addRole() {
      this.record = {};
      this.roleModelVisible = true;
    },
    editRole(record) {
      console.log(record, "data");
      this.record = record;
      // this.roleModelVisible = true;
      api.fetchRoleInfo(record.id).then((res) => {
        this.record = {
          ...record,
          permissions: res.map((item) => item.id),
        };
        this.roleModelVisible = true;
      });
    },
    deleteRole(record) {
      api.deleteRole(record.id).then(() => {
        this.fetchData();
      });
    },
    fetchData() {
      api.fetchRoleList().then((res) => {
        this.data = [...res];
      });
    },
    roleModelOk() {
      this.fetchData();
    },
  },
};
</script>

<style></style>
