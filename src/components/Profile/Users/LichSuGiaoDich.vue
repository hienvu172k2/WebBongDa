<template>
    <div class="wrapper">
        <h1>Lịch Sử Giao Dịch</h1>
        <div class="content">
            <table class="transaction-table">
                <thead>
                    <tr class="header">
                        <th>STT</th>
                        <th>Tên Sân</th>
                        <th>Địa Chỉ</th>
                        <th>Thời Gian Giao Dịch</th>
                        <th>Số tiền</th>
                        <th>Trạng thái giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(san) in visibleData" :key="san.stt" class="content-tt">
                        <td>{{ san.stt }}</td>
                        <td>{{ san.name }}</td>
                        <td>{{ san.address }}</td>
                        <td>{{ san.timestamp }}</td>
                        <td>{{ san.amount }}</td>
                        <td>{{ san.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">
                <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-left']" /></button>
            <span>Trang {{ currentPage }}</span>
            <button @click="nextPage" :disabled="currentPage * 10 >= data.length">
                <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-right']" /></button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';


const data = ref([
  { stt: 1, name: 'Sân Trường Đại Học Phenikaa', address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội', timestamp: ' 10:00,  20-10-2023', amount: "500.000", status: 'Đã thanh toán' },
  { stt: 2, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 3, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 4, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 5, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 6, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 7, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 8, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 9, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 10, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
  { stt: 11, name: 'Sân Trường Đại Học Phenikaa', address: 'Địa chỉ B', timestamp: '  10:00,  20-10-2023', amount: "300.000", status: 'Đang Chờ Xác Nhận' },
]);

const currentPage = ref(1);
const visibleData = computed(() => {
  const startIndex = (currentPage.value - 1) * 10;
  const endIndex = startIndex + 10;
  return data.value.slice(startIndex, endIndex);
});
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value * 10 < data.value.length) {
    currentPage.value++;
  }
};
</script>
<style scoped>
.wrapper {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
     height: 800px;
}

.wrapper h1 {
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    padding: 10px;
}

.content {
    padding: 10px;
}

.transaction-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e0e0e0;
    margin: 20px 0px;
}

.transaction-table th,
.transaction-table td {
    border: 1px solid #e0e0e0;
    padding: 10px;
    text-align: left;
}

.transaction-table .header {
    background-color: #f5f5f5;
}

.header th {
    text-align: center;
}

.content-tt td {
    text-align: center;
}

.pagination {
    text-align: center;
    padding: 20px;
}

.pagination-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #007BFF;
}

.pagination-button:disabled {
    color: #ccc;
}

.pagination button {
    margin: 0 10px;
}

.pagination-icon {
    padding: 0 10px;
}

.pagination-icon:hover {
    font-size: 17px;
    color: rgb(250, 69, 22);
}
</style>
