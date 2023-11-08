<template>
  <div class="wrapper">
    <div v-if="showXem" class="dialog-overlay">
      <div class="dialog-box">
        <div class="hoadon">
          <h1 class="thongtin-cangiua">Thông Tin Hóa Đơn</h1>
          <n-table :bordered="true" :single-line="false">
            <tbody>
              <tr v-for="(value, label) in invoiceData" :key="label">
                <td class="thongtin-cangiua">{{ label }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </n-table>
        </div>
        <div class="dialog-actions">
          <button @click="printInvoice" class="bt-close">In Hoá Đơn</button>
          <button @click="closeDialog" class="bt-close">Close</button>
        </div>
      </div>
    </div>
    <div v-if="showHistory" class="history">
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
              <td>
                <button class="xem" @click="showXem = true; viewData = san">
                  <font-awesome-icon :icon="['fas', 'eye']" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">
          <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-left']" />
        </button>
        <span>Trang {{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage * 10 >= data.length">
          <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>
    <div v-if="showXem" class="xem">
      <button @click="showXem = false; showHistory = true">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const showXem = ref(false);
const showHistory = ref(true);

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
const invoiceData = ref({
  "Họ Tên": 'Gold D. Ace',
  "Tên Sân": 'Sân Trường Đại Học Phenikaa',
  "Địa Chỉ Sân": 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
  "Loại Sân": 'Sân 11 người',
  "Thời Gian Đặt Sân": '2023-11-10, 15:00 - 17:00',
  "Sân": 2,
  "Số Giờ Thuê Sân": '2 giờ',
  "Tiền Sân": '500.000',
  "Tổng": '500.000',
  "Đã Thu": '500.000',
  "Thời Gian Giao Dịch": "2023-11-10,07:00 AM",
  "Mã Giao Dịch": '987654',
});
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
const closeDialog = () => {
  showXem.value = false;
  showHistory.value = true;
};
const printInvoice = () => {
  window.print();
};
</script>
<style scoped>
.wrapper {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* height: 800px; */
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

.dialog-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  display: flex;
}

.dialog-box {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
}


.bt-close {
  border: 1px solid #ccc;
  padding: 5px 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;

}

.bt-close:hover {
  background-color: #FA4516;
  color: #fff;

}

.dialog-actions {
  text-align: center;
}
</style>
