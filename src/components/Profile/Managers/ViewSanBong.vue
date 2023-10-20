<template>
    <div class="lich-san">
        <n-grid cols="5">
            <n-gi span="3" class="content">
                <div class="content">
                    <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
                        @update:value="handleUpdateValue" v-show="showCalendar">
                        Ngày {{ date }} Tháng {{ month }}
                    </n-calendar>
                </div>
            </n-gi>
            <n-gi span="2" class="table-san">
              <h1>Lịch Sân</h1>
                <div>
                    <table class="custom-table" v-show="selectedDate">
                        <tr>
                            <th>Giờ</th>
                            <th>Số Sân</th>
                            <th>Giá Tiền</th>
                            <th>Trạng Thái</th>
                        </tr>
                        <tr v-for="(item, index) in selectedInfo" :key="index"
                            :class="{'row-red': item.status === 'Đã Đặt', 'row-green': item.status === 'Còn Trống'}">
                            <td>{{ item.hour }}</td>
                            <td>{{ item.court }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.status }}</td>
                        </tr>
                    </table>
                </div>
            </n-gi>
        </n-grid>
    </div>
</template>
  
  <script setup>
import { ref, watch } from 'vue';
import { useMessage } from 'naive-ui';
import { addDays } from 'date-fns/esm';

const message = useMessage();
const value = ref(addDays(Date.now(), 1).valueOf());
const selectedDate = ref(null);
const showCalendar = ref(true);

const handleUpdateValue = (_, { year, month, date }) => {
  message.success(`Ngày ${date} Tháng ${month}`);
  selectedDate.value = `${year}-${month}-${date}`;
};


const infoByDate = ref({
  '2023-10-1': [
    { hour: '5:30 - 7:00', court: 1, price: "100.000", status: "Đã Đặt" },
    { hour: "7:00 - 8:30", court: 2, price: "300.000", status: "Còn Trống" },
    { hour: "8:30 - 10:00", court: 3, price: "400.000", status: "Còn Trống" },
    { hour: "13:00 - 14:30", court: 4, price: "900.000", status: "Đã Đặt" },
    { hour: "14:30 - 16:00", court: 1, price: "800.000", status: "Còn Trống" },
    { hour: "16:00 - 17:30", court: 2, price: "200.000", status: "Đã Đặt" },
    { hour: "17:30 - 19:00", court: 3, price: "500.000", status: "Còn Trống" },
    { hour: "19:00 - 20:30", court: 4, price: '100.000', status: "Còn Trống" },
    { hour: "20:30 - 22:00", court: 1, price: "700.000", status: "Đã Đặt" },
    { hour: "22:00 - 23:30", court: 2, price: "500.000", status: "Còn Trống" },
    { hour: "23:30 - 1:00 sáng", court: 3, price: "400.000", status: "Còn Trống" },

  ],
  '2023-10-2': [
    { hour: '8:00 AM', court: 3, price: 100, status: "Đã Đặt" },
    { hour: '10:00 AM', court: 4, price: 150, status: "Còn Trống" },
  ],
  '2023-10-3': [
    { hour: '8:00 AM', court: 5, price: 1000, status: "Đã Đặt" },
    { hour: '10:00 AM', court: 6, price: 1500, status: "Còn Trống" },
  ],
  '2023-10-4': [
    { hour: '8:00 AM', court: 7, price: 10000, status: "Đã Đặt" },
    { hour: '10:00 AM', court: 8, price: 15000, status: "Còn Trống" },
  ],
  '2023-10-5': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-6': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-7': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-8': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-9': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-10': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-11': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-12': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-13': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-14': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-15': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-16': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-17': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-18': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-19': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-20': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-21': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-22': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-23': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-24': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-25': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-26': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-27': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-28': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-29': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-30': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-31': [
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
});

const selectedInfo = ref([]);
watch(selectedDate, (newSelectedDate) => {
  selectedInfo.value = infoByDate.value[newSelectedDate] || [];
});
</script>
<style scoped>
.wrapper {
    height: 1000px;
}

.content {
    width: 99%;
    height: 99%;
    display: flex;
    justify-content: center;
}

.custom-table {
    border-collapse: collapse;
    width: 100%;

}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

.custom-table th {
    background-color: #f2f2f2;
}

.row-red {
    color: red;

}

.row-green {
    color: green;

}

.table-san{
    margin:0px 10px 0px 10px;
}
.table-san h1{
  font-size:30px;
  font-weight: 500;
  padding: 10px;
}
</style>