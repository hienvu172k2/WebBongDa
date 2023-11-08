<template>
    <div class="wrapper bg-gray-100 p-6">
        <div class="header text-center">
            <n-row>
                <n-col span="24">
                    <font-awesome-icon class="icon-credit text-5xl" :icon="['fas', 'credit-card']" />
                </n-col>
            </n-row>
            <n-row>
                <n-col span="24">
                    <h1 id="the-h1" class="text-2xl font-semibold">Thanh Toán</h1>
                    <span>Vui lòng kiểm tra kĩ thông tin sân trước khi đặt sân.</span>
                </n-col>
            </n-row>
        </div>
        <div class="content mt-6">
            <n-grid cols="1 sm:2">
                <n-gi class="content-anh" span="1">
                    <img class="carousel-img" :src="infoImage.anh" />
                </n-gi>
                <n-gi class="content-thongtin" span="1">
                    <n-table :bordered="true" :single-line="false">
                        <thead>
                            <th class="thongtin-cangiua">Thông Tin</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr v-for="(value, label) in sanInfo" :key="label">
                                <td class="thongtin-cangiua">{{ label }}</td>
                                <td>{{ value }}</td>
                            </tr>
                        </tbody>
                    </n-table>
                    <div class="payment-methods mt-4 mx-auto my-auto">
                        <h1 class="text-lg font-semibold">Hình Thức Thanh Toán</h1>
                        <div v-if="bankingSelected" class="flex justify-center">
                            <img src="../../assets/images/qrthanhtoan.png" alt="Banking" class="w-1/2 h-auto anh-qr" />
                        </div>
                        <router-link to="/bookedball">
                            <button @click="handlePayment" class="btn-xemchitiet">
                                Xem Thông Tin Sân Đã Đặt
                            </button>
                        </router-link>
                    </div>
                </n-gi>
            </n-grid>
        </div>
    </div>
    <div>
    
    </div>
</template>
  
  <script setup>
import { ref } from 'vue';
const bankingSelected = ref(true);
const sanInfo = ref({
  "Tên": 'Sân Trường Đại Học Phenikaa',
  "Loại Sân": '6-7 người',
  "Địa Chỉ": 'Nguyễn Văn Trác, Yên Nghĩa, Hà Đông, Hà Nội',
  "Ngày": '05/10/2023',
  "Giờ": '5:30 - 7:00 ',
  "Giá Sân": '500.000/trận',
})
const infoImage = ref({
  anh: 'https://sanconhantao.vn/wp-content/uploads/2020/10/San-dai-hoc-Phenikaa-4.jpg',
})
  </script>
  
  <style scoped>
.wrapper {
    margin: auto;
    max-width: 1000px;
    width: 100%;
    padding-bottom: 300px;
    background-color: #fff;
    box-shadow: 0 1px 8px 3px #ccc;
}

.content {}

.header {
    max-width: 500px;
    width: 100%;
    text-align: center;
    margin: auto;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.icon-credit {
    font-size: 80px;
    padding: 6px;
}

#the-h1 {
    font-size: 30px;
    font-weight: 500;
}

.content-anh {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.content-anh img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content-thongtin {
    padding: 0 0 0 2px;
}

.thongtin-cangiua {
    text-align: center;
}

.checkboxes {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.banking-image {
    display: none;
}

.banking-image img {
    max-width: 100%;
    max-height: 200px;
}

.payment-methods {
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.payment-methods h1 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
}

.payment-methods button {
    border: 1px solid #000;
    border-radius: 0.375rem;
    padding: 5px;
    margin-top: 10px;
    width: 180px;
}

.payment-methods button:hover {
    border: 1px solid #FA4516;
    color: #FA4516;
    cursor: pointer;
}
</style>
  