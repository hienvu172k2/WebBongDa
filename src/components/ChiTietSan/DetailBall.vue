<template>
  <div class="all">
    <div class="header md:p-10 lg:p-20">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold">Sân Trường Đại Học Phenikaa</h1>
      <h2 class="mt-4 md:mt-6 lg:mt-10">
        <font-awesome-icon icon="location-dot" /> Nguyễn Văn Trác, Hà Đông, Hà Nội
      </h2>
      <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);" style="height: 600px" :show-dots="false">
        <n-carousel-item :style="{ width: '80%' }">
          <img class="carousel-img"
            src="https://phenikaa-uni.edu.vn:3600/fs/vi/san-bong-nha-da-nang-va-khu-the-chat/sb1.jpg" />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '80%' }">
          <img class="carousel-img" src="https://sanconhantao.vn/wp-content/uploads/2020/10/San-dai-hoc-Phenikaa-4.jpg" />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '80%' }">
          <img class="carousel-img"
            src="https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg" />
        </n-carousel-item>
        <n-carousel-item :style="{ width: '80%' }">
          <img class="carousel-img"
            src="https://th.bing.com/th/id/OIP.O6gVWOI4AqvFSdbu9pZEMAHaHa?pid=ImgDet&w=1024&h=1024&rs=1" />
        </n-carousel-item>
      </n-carousel>
    </div>
    <div class="waraper md:p-10 lg:p-20">
      <div class="content-detaill p-4 sm:p-8 md:p-10 lg:p-20 sm:w-1/2">
        <div class="detail-1">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">Mô Tả Sân</h1>
        </div>
        <div class="">
          <div class="detail-2">
            <ul>
              <span class="detail-header">Cơ Sở Vật Chất Và Tiện Ích Tại Sân</span>
              <li class="detail-content" v-for="(item, index) in facilities" :key="index">
                {{ item.text }}
              </li>
            </ul>
            <ul>
              <span class="detail-header">Giá Thuê</span>
              <li class="detail-content" v-for="(item, index) in prices" :key="index">
                {{ item.text }}
              </li>
            </ul>
            <ul>
              <span class="detail-header">Cách Thức Di Chuyển</span>
              <li class="detail-content" v-for="(item, index) in transportation" :key="index">
                <span v-if="item.text">{{ item.text }}</span>
  
                <span v-if="item.iframe" class="relative flex justify-center">
                  <iframe :src="item.iframe.src" :width="item.iframe.width" :height="item.iframe.height"
                    :style="item.iframe.style" :allowfullscreen="item.iframe.allowfullscreen"
                    :loading="item.iframe.loading" :referrerpolicy="item.iframe.referrerpolicy"></iframe>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Phần Lịch Sân -->
      <div class="content-detail">
        <div class="detail-11">
          <h1>Lịch Sân</h1>
        </div>
        <div class="content-time">
          <n-table :bordered="true" :single-line="false">
            <thead>
              <tr>
                <th class="status-header">Thời gian</th>
                <th class="status-header">Tình trạng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(schedule, index) in schedules" :key="index">
                <td class="status-header" :class="{
                                                            'red-cell': schedule.status === 'Đã Đặt',
                                                            'green-cell': schedule.status === 'Còn Trống',
                                                          }">
                  {{ schedule.time }}
                </td>
                <td class="status-header" :class="{
                                                            'red-cell': schedule.status === 'Đã Đặt',
                                                            'green-cell': schedule.status === 'Còn Trống',
                                                          }">
                  {{ schedule.status }}
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </div>
  
      <!-- Phần Đặt Sân -->
      <div class="content-detailll">
        <div class="css-content-datetime flex items-center justify-center">
          <div class="header-datsan-container flex items-center">
            <span class="header-datsan text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Đặt Sân Tại Đây</span>
          </div>
          <div class="content-datetime flex items-center justify-center">
            <input class="date-time" type="date" v-model="selectedDate" />
            <input class="date-time" type="time" v-model="selectedTime" />
            <router-link to="/thanhtoanball">
              <button class="bt-datsan" @click="submitDateTime">Đặt Sân</button>
            </router-link>
          </div>
          <p v-if="!isFormValid" style="color: red; padding-left: 140px">
            Vui lòng chọn ngày và giờ trước khi đặt sân.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const selectedDate = ref("");
const selectedTime = ref("");
const isFormValid = ref(true);

const submitDateTime = () => {
  if (selectedDate.value && selectedTime.value) {
    console.log("Ngày đã chọn:", selectedDate.value);
    console.log("Giờ đã chọn:", selectedTime.value);
    isFormValid.value = true;
  } else {
    console.log("Vui lòng chọn ngày và giờ trước khi đặt sân.");
    isFormValid.value = false;
  }
};

const facilities = [
  { text: "Địa điểm thú vị để thi đấu bóng 7 người" },
  {
    text: "Có hệ thống đèn chiếu sáng hiện đại, đáp ứng nhu cầu thi đấu ban đêm",
  },
  { text: "Lưới chắn bóng xung quanh sân cao 8m." },
  {
    text: "Khung thành chắc chắn, kích thước 3.6m x 2.1m x 1.2m đúng chuẩn sân 7 hiện nay",
  },
  { text: "Có chỗ để xe máy, ô tô" },
  { text: "Có căng tin, quán nước giải khát" },
];

const prices = [
  { text: "Mỗi trận đấu kéo dài tới 90 phút chia làm các khung giờ" },
  {
    text: "17:30 - 7:00 và 19:00 - 20:30 là 2 khung giờ vàng với giá thuê sân là 800.000/trận",
  },
  { text: "Thứ 7, Chủ nhật và các giờ thường có giá 400.000/trận" },
  { text: "Sân hoạt động tới 5:30 sáng hôm nay 1:00 sáng hôm sau" },
];

const transportation = [
  { text: "Sân bóng nằm trong khuôn viên Trường Đại Học Phenikaa" },
  {
    text: "Địa chỉ tại đường Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội.",
  },
  { text: "Có thể đi bằng phương tiện cá nhân như xe máy, ô tô" },
  { text: "Ngoài ra có thể đi bằng tàu điện hoặc xe bus" },
  {
    text: "Vị trí chính xác xem dưới đây :",
    iframe: {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.7500875440132!2d105.748617!3d20.962549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2sus!4v1695110174331!5m2!1svi!2sus",
      width: "100%",
      height: "200",
      style: "margin:10px",
      allowfullscreen: "",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade",
    },
  },
];
const schedules = [
  { time: "5:30 - 7:00", status: "Đã Đặt" },
  { time: "7:00 - 8:30", status: "Đã Đặt" },
  { time: "8:30 - 10:00", status: "Đã Đặt" },
  { time: "13:00 - 14:30", status: "Còn Trống" },
  { time: "14:30 - 16:00", status: "Đã Đặt" },
  { time: "16:00 - 17:30", status: "Đã Đặt" },
  { time: "17:30 - 19:00", status: "Còn Trống" },
  { time: "19:00 - 20:30", status: "Đã Đặt" },
  { time: "20:30 - 22:00", status: "Đã Đặt" },
  { time: "22:00 - 23:30", status: "Đã Đặt" },
  { time: "23:30 - 1:00 sáng", status: "Còn Trống" },
];
</script>
<style scoped>
.all {
  max-width: 1900px;
}

.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 40px 0;
}

.waraper {
  height: auto;
  max-width: 1500px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.header-datsan-container {}

.content-detailll {

  width: 100%;
  margin: 15px 0;
  box-shadow: 0 1px 8px 3px #ccc;
  padding: 10px;
}

.content-detaill {

  width: 100%;
  margin: 15px 0;
  box-shadow: 0 1px 8px 3px #ccc;
  padding: 10px;
}

.content-detail {


  width: 100%;
  margin: 15px 0;
  box-shadow: 0 1px 8px 3px #ccc;
  padding: 10px;
}

.header {
  padding-top: 50px;
  margin: 20px;
  max-width: 1900px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.header h1 {
  font-size: 35px;
  font-weight: 600;
}

.content-time {
  border: 1px solid #ccc;
  margin: 5px;
}

.status-header {
  width: 50%;
  text-align: center;
}

/* .detail {
  display: flex;
  justify-content: center;
  background-color: #fff;

} */

.detail-1 h1 {
  font-size: 30px;
  font-weight: 600;
  padding: 10px 15px;
}

.detail-1 {
  background-color: #ececec;
}

.detail-11 {
  background-color: #ececec;
}

.detail-11 h1 {
  font-size: 30px;
  font-weight: 600;
  padding: 10px 20px;
}

.detail-header {
  font-size: 18px;
  font-weight: 600;
  margin-left: -50px;
}

.detail-content {
  padding: 3px;
  list-style-type: circle;
}

.detail-2 ul {
  margin: 5px;
  padding: 14px 0px;
  padding-left: 50px;
  width: cover;
}

.red-cell {
  color: red;
}

.green-cell {
  color: green;
}

.content-datetime {
  align-items: center;
  padding: 10px;
  max-width: 450px;
  width: 100%;
}

.date-time {
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  float: left;
  border-radius: 0.3rem;
}

.bt-datsan {
  width: 100px;
  padding: 7px;
  border: none;
  background-color: #fa4516;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 0.3rem;
}

.bt-datsan:hover {
  background-color: #b63717;
}

.css-content-datetime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 8px 3px #ccc;
  height: 210px;
  margin: 6px;
  margin-top: 15px;
}

.css-content-datetime p {
  padding-top: 5px;
}

.header-datsan {

  font-size: 20px;
  padding-top: 30px;
  font-weight: 600;
}
</style>
