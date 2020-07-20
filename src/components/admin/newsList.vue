<template>
    <div class="newsList">

        <template>
            <el-table
                    :data="tableData.filter(data => !search ||
                    data.title.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    style="width: 100%">
                <el-table-column
                        label="Date"
                        prop="created_at">
                </el-table-column>
                <el-table-column
                        label="Title"
                        prop="title">
                </el-table-column>
                <el-table-column
                        align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="Type to search"/>
                    </template>
                    <template slot-scope="scope">
                        <router-link :to="{
                            name: 'newsEdit',
                            params: {
                                id: scope.row.id,
                                title: scope.row.title,
                                content: scope.row.content,
                        }}">
                            <i class="far fa-edit"></i>
                        </router-link>
                    </template>

                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="tableData.length"
                    @current-change="current_change">
            </el-pagination>
        </template>
        {{total}}
    </div>

</template>

<script>
  export default {
    methods: {
      current_change: function(currentPage){
        this.currentPage = currentPage;
      },
      totalPages: function () {
        this.total= this.tableData.length;
      }
    },
    computed:{

    },
    mounted: function () {
      this.totalPages();
    },
    data() {
      return {
        total: 0,
        pagesize: 2,
        currentPage: 1,
        tableData: [
          {
            id: 1,
            title: "test news 1",
            content: "<h1>ti pidr</h1><p>sam ti pidr</p>",
            author: {
              id: 1,
              email: "admin@admin.admin",
              username: "admin",
              roles: [
                "ROLE_ADMIN"
              ]
            },
            created_at: "2020-07-17 09:13:56",
            updated_at: "2020-07-17 09:13:56"
          },
          {
            id: 2,
            title: "test news 2",
            content: "admin",
            author: {
              id: 1,
              email: "admin@admin.admin",
              username: "admin",
              roles: [
                "ROLE_ADMIN"
              ]
            },
            created_at: "2020-07-17 09:13:56",
            updated_at: "2020-07-17 09:13:56"
          },
          {
            id: 3,
            title: "test news 3",
            content: "admin",
            author: {
              id: 1,
              email: "admin@admin.admin",
              username: "admin",
              roles: [
                "ROLE_ADMIN"
              ]
            },
            created_at: "2020-07-17 09:13:56",
            updated_at: "2020-07-17 09:13:56"
          },
          {
            id: 4,
            title: "test news 4",
            content: "admin",
            author: {
              id: 1,
              email: "admin@admin.admin",
              username: "admin",
              roles: [
                "ROLE_ADMIN"
              ]
            },
            created_at: "2020-07-17 09:13:56",
            updated_at: "2020-07-17 09:13:56"
          }
        ],
        search: '',
      };
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .newsList {
        .el-table {
            color: var(--text-color);
            &:after, &:before {
                background: var(--border-color);
            }
            .el-table__row  {
                &:hover {
                    td {
                        color: var(--text-light-color);
                        background: var(--accent-third-color);
                    }
                    .far {
                        color: var(--text-light-color);
                    }

                }
            }
            th {
                color: var(--text-light-color);
                background: var(--accent-second-color);
                border-bottom-color: var(--border-color);
            }
            td {
                background: var(--chips-background);
                border-bottom-color: var(--border-color);
            }
            .far {
                color: var(--text-color);
                font-size: 20px;
            }
        }

    }
</style>
