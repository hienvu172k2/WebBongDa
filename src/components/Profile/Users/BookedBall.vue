<template>
  <div class="wrapper">
    <h1>Thông Tin Sân Bạn Đã Đặt</h1>
    <n-data-table :bordered="true" :single-line="true" :key="(row) => row.key" :columns="columns" :data="data"
      :pagination="paginationRef" :on-update:page="handlePageChange" />
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'

const products = [
  {
    stt: 1,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 2,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 3,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 4,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 5,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 6,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 7,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 8,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 9,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 10,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },
  {
    stt: 11,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    time: '7:00 - 8:30 (10/12/2023)',
    price: '300.000'
  },

]

const data = ref(products);

const page = ref(1);

const handlePageChange = (curPage) => {
  page.value = curPage;
};

const paginationRef = computed(() => ({
  pageSize: 10,
  page: page.value
}));


const columns = [
  {
    title: 'STT',
    key: 'stt',
    width: 70,
    align: 'center',
    render(_, index) {
      return index + 1;
    }
  },
  {
    title: 'Tên Sân',
    key: 'name',
    minWidth: "250",
    align: 'center',
  },
  {
    title: 'Địa Chỉ',
    key: 'address',
    align: 'center',
    minWidth: "250",
  },
  {
    title: 'Thời Gian',
    key: 'time',
    align: 'center',
    minWidth: "100",
  },
  {
    title: 'Giá Sân',
    key: 'price',
    align: 'center',
    minWidth: "100",
  }
];
</script>

<style scoped>
.wrapper {
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding-bottom: 70px;
}

.wrapper h1 {
  padding: 20px 10px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}
</style>