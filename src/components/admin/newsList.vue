<template>
    <div class="newsList">

        <template>
            <el-table
                    :data="tableData.filter(data => !search ||
                    // eslint-disable-next-line max-len
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
                    :total="total"
                    @current-change="current_change">
            </el-pagination>
        </template>
        {{total}}
    </div>

</template>

<script>
import { getList } from '../../api/news';

export default {
  methods: {
    current_change(currentPage) {
      getList(10, currentPage);
    },
    getList(limit = 10, offset = 0) {
      const data = getList(limit, offset);
      data.then((result) => {
        this.tableData = result.data.data;
        this.total = result.data.meta.total;
        this.pagesize = result.data.meta.total;
      }, error => {
        console.error(error);
      });
    },
  },
  // eslint-disable-next-line func-names
  created: function () {
    this.getList();
  },
  data() {
    return {
      total: 0,
      pagesize: 10,
      currentPage: 1,
      tableData: [],
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
