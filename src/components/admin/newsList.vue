<template>
  <div>
    <table>
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
        <td>{{item.title}}</td>
        <td>{{item.created_at}}</td>
        <td>{{item.author.username}}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
import { getList } from '../../api/news';

export default {
  methods: {
    nextPage() {
      if ((this.currentPage * this.pageSize) < this.total) {
        getList(10, this.currentPage + 2);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        getList(10, this.currentPage - 2);
      }
    },
    getList(limit = 10, offset = 0) {
      const data = getList(limit, offset);
      data.then((result) => {
        this.items = result.data.data;
        this.total = result.data.meta.total;
        this.offset = result.data.meta.offset;
        this.pageSize = result.data.meta.limit;
      }, (error) => {
        console.error(error);
      });
    },
  },
  created() {
    this.getList();
  },
  data: () => ({
    items: [],
    offset: 0,
    limit: 10,
    pageSize: 10,
    currentPage: 0,
  }),
  computed: {
    sortedCats() {
      // eslint-disable-next-line array-callback-return,consistent-return
      return this.items.filter((row, index) => {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        if (index >= start && index < end) {
          return true;
        }
      });
    },
  },
};
</script>

<style scoped>
  .pagination {
    display: flex;
    margin: .25rem .25rem 0;
  }

  .pagination button {
    flex-grow: 1;
  }

  .pagination button:hover {
    cursor: pointer;
  }
</style>
