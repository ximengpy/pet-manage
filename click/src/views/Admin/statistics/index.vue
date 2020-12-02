<template>
  <div>
    <el-table
        :data="sortArr"
        style="width: 100%">
      <el-table-column
          label="医生"
          prop="name"
      >
      </el-table-column>
      <el-table-column
          label="值班"
          prop="come"
      >
      </el-table-column>
      <el-table-column
          label="时间"
          prop="statisits"
      >
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuArr: [
          {
            name: 'ab',
            come: '到岗',
            statisits: '2021年4月1日',
          },
          {
            name: '1',
            come: '到岗',
            statisits: '2021年4月2日',
          },
          {
            name: '2',
            come: '到岗',
            statisits: '2021年4月2日',
          },
          {
            name: '2',
            come: '到岗',
            statisits: '2021年4月3日',
          },
          {
            name: '4',
            come: '到岗',
            statisits: '2021年4月4日',
          },
          {
            name: '5',
            come: '到岗',
            statisits: '2021年4月5日',
          },
          {
            name: '6',
            come: '到岗',
            statisits: '2021年4月6日',
          },
          {
            name: '3',
            come: '到岗',
            statisits: '2021年4月7日',
          },
          {
            name: '3',
            come: '到岗',
            statisits: '2021年4月8日',
          },
          {
            name: '3',
            come: '到岗',
            statisits: '2021年4月9日',
          },
          {
            name: '3',
            come: '到岗',
            statisits: '2021年4月10日',
          },

        ]
      }
    },
    computed: {
      sortArr() {
        return this.menuArr.sort((a,b) => {
          return b.statisits - a.statisits
        })
      }
    }
  }
</script>

<style scoped>

</style>
