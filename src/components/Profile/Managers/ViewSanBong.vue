<template>
    <div class="wrapper">
        <button @click="showCalendar = !showCalendar">Lịch</button>
        <div class="content">
            <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
                @update:value="handleUpdateValue" v-if="showCalendar">
                Ngày {{ date }} Tháng {{ month }}
            </n-calendar>
        </div>
    
    
        <div v-if="selectedDate">
            <table class="custom-table">
                <tr>
                    <th>STT</th>
                    <th>Giờ</th>
                    <th>Số Sân</th>
                    <th>Giá Tiền</th>
                </tr>
                <tr v-for="(item, index) in selectedInfo" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.hour }}</td>
                    <td>{{ item.court }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
  
  <script setup>
import { ref, watch } from 'vue';
import { useMessage } from 'naive-ui';
import { isYesterday, addDays } from 'date-fns/esm';

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
    { hour: '8:00 AM', court: 1, price: 10 },
    { hour: '10:00 AM', court: 2, price: 15 },
  ],
  '2023-10-2': [
    { hour: '8:00 AM', court: 3, price: 100 },
    { hour: '10:00 AM', court: 4, price: 150 },
  ],
  '2023-10-3': [
    { hour: '8:00 AM', court: 5, price: 1000 },
    { hour: '10:00 AM', court: 6, price: 1500 },
  ],
  '2023-10-4': [
    { hour: '8:00 AM', court: 7, price: 10000 },
    { hour: '10:00 AM', court: 8, price: 15000 },
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
.content {
    margin: 10px;
}
.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}

.custom-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>