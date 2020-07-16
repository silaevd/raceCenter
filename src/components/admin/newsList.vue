<template>
    <div class="newsList">

        <template>
            <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <el-table-column
                        label="Date"
                        prop="date">
                </el-table-column>
                <el-table-column
                        label="Name"
                        prop="name">
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
                        <router-link :to="{name: 'newsEdit', params: {id: scope.row.id}}">
                            <i class="fas fa-edit"></i>
                        </router-link>
                    </template>

                </el-table-column>
            </el-table>
        </template>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            id: 1,
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          },
          {
            id: 2,
            date: '2016-05-02',
            name: 'John',
            address: 'No. 189, Grove St, Los Angeles'
          },
          {
            id: 3,
            date: '2016-05-04',
            name: 'Morgan',
            address: 'No. 189, Grove St, Los Angeles'
          },
          {
            id: 4,
            date: '2016-05-01',
            name: 'Jessy',
            address: 'No. 189, Grove St, Los Angeles'
          }
        ],
        search: '',
      };
    },
    methods: {
      // handleEdit(index, row) {
      //   console.log(index, row);
      // },
      // handleDelete(index, row) {
      //   console.log(index, row);
      // }
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
            th {
                background: var(--accent-second-color);
                border-bottom-color: var(--border-color);
            }
            td {
                background: var(--chips-background);
                border-bottom-color: var(--border-color);
            }
        }

    }
</style>
