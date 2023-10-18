<template>
  <div class="wrapper">
    <div v-if="selectedTab === 'sua-san'" class="sua-san">
      <h1>Chỉnh Sửa Sân</h1>
      <div class="sua-header">
        <input type="text" placeholder="Tên Sân">
        <input type="text" placeholder="Địa Chỉ Sân">
      </div>
      <div class="sua-anh">
        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Sửa Ảnh</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sua-footer">
        <n-space vertical>
          <n-input v-model="value" type="textarea" placeholder="Basic Textarea" />
        </n-space><n-space vertical>
          <n-input v-model="value" type="textarea" placeholder="Basic Textarea" />
        </n-space><n-space vertical>
          <n-input v-model="value" type="textarea" placeholder="Basic Textarea" />
        </n-space>
      </div>
  
  
      <button class="btn-quanlysan" @click="selectedTab = 'quan-ly-san'"><font-awesome-icon
          :icon="['fas', 'floppy-disk']" /> Save</button>
    </div>
    <div v-else>
      <h1>Quản Lý Sân</h1>
      <table>
        <thead>
          <tr class="header">
            <th>STT</th>
            <th>Tên Sân</th>
            <th>Địa Chỉ</th>
            <th>Giá Sân</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(san) in visibleData" :key="san.stt">
            <td>{{ san.stt }}</td>
            <td>{{ san.name }}</td>
            <td>{{ san.address }}</td>
            <td>{{ san.price }}</td>
            <td>
              <button class="btn-sua" @click="showEditTab"><font-awesome-icon :icon="['fas', 'file-pen']" /></button>
              <button class="btn-xoa" @click="deleteSan(san.stt)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1"><font-awesome-icon class="icon-pagination"
            :icon="['fas', 'arrow-left']" /></button>
        <span>Trang {{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage * 10 >= data.length"><font-awesome-icon class="icon-pagination"
            :icon="['fas', 'arrow-right']" /></button>
      </div>
  
      <button class="btn-add" @click="addSan"> Thêm Sân </button>
      <div v-if="showAddForm" class="add-san">
        <h2>Thêm Sân Mới</h2>
        <form @submit.prevent="saveSan" class="form-container">
          <div class="input-container">
            <input v-model="newSan.name" placeholder="Tên Sân" @input="validateName" />
            <p class="error">{{ formErrors.name }}</p>
          </div>
  
          <div class="input-container">
            <input v-model="newSan.address" placeholder="Địa Chỉ" @input="validateAddress" />
            <p class="error">{{ formErrors.address }}</p>
          </div>
  
          <div class="input-container">
            <input v-model="newSan.price" placeholder="Giá Sân" @input="validatePrice" />
            <p class="error">{{ formErrors.price }}</p>
          </div>
  
          <div class="button-container">
            <button class="btn-luu" type="submit"><font-awesome-icon :icon="['fas', 'floppy-disk']" /></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed } from 'vue';
const selectedTab = ref("quan-ly-san");
const showEditTab = () => {
  selectedTab.value = "sua-san";
};
const value = ref(null);
const data = ref([
  {
    stt: 1,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  },
  {
    stt: 2,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 3,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 4,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 5,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 6,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 7,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 8,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 9,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 10,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 11,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 12,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 13,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  }, {
    stt: 14,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    address: 'Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội',
    price: '300.000',
  },
]);

const newSan = ref({
  name: '',
  address: '',
  price: '',
});
const formErrors = ref({
  name: '',
  address: '',
  price: '',
});
const showAddForm = ref(false);
const currentPage = ref(1);

const visibleData = computed(() => {
  const startIndex = (currentPage.value - 1) * 10;
  const endIndex = startIndex + 10;
  return data.value.slice(startIndex, endIndex);
});

const addSan = () => {
  showAddForm.value = true;
  resetFormErrors();
};

const saveSan = () => {
  validateName();
  validateAddress();
  validatePrice();

  if (isFormValid()) {
    data.value.push({ ...newSan.value, stt: data.value.length + 1 });
    newSan.value = {
      name: '',
      address: '',
      price: '',
    };
    showAddForm.value = false;
    resetFormErrors();
  }
};
const resetFormErrors = () => {
  formErrors.value.name = '';
  formErrors.value.address = '';
  formErrors.value.price = '';
};
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

const deleteSan = (stt) => {
  const index = data.value.findIndex((san) => san.stt === stt);
  if (index !== -1) {
    data.value.splice(index, 1);
  }
};

const isFormValid = () => {
  let valid = true;
  for (const key in formErrors.value) {
    if (formErrors.value[key] !== '') {
      valid = false;
      break;
    }
  }
  return valid;
};
const validateName = () => {
  formErrors.value.name = newSan.value.name ? '' : 'Vui lòng điền tên sân.';
};

const validateAddress = () => {
  formErrors.value.address = newSan.value.address ? '' : 'Vui lòng điền địa chỉ sân.';
};

const validatePrice = () => {
  formErrors.value.price = newSan.value.price ? '' : 'Vui lòng điền giá sân.';
};

const campusName = ref("Sân Trường Đại Học Phenikaa");
const campusLocation = ref("Nguyễn Văn Trác, Hà Đông, Hà Nội");

const carouselImages = ref([
  "https://phenikaa-uni.edu.vn:3600/fs/vi/san-bong-nha-da-nang-va-khu-the-chat/sb1.jpg",
  "https://sanconhantao.vn/wp-content/uploads/2020/10/San-dai-hoc-Phenikaa-4.jpg",
  "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
  "https://th.bing.com/th/id/OIP.O6gVWOI4AqvFSdbu9pZEMAHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
]);

const facilities = ref([
  "Địa điểm thú vị để thi đấu bóng 7 người",
  "Có hệ thống đèn chiếu sáng hiện đại, đáp ứng nhu cầu thi đấu ban đêm",
  "Lưới chắn bóng xung quanh sân cao 8m.",
  "Khung thành chắc chắn, kích thước 3.6m x 2.1m x 1.2m đúng chuẩn sân 7 hiện nay",
  "Có chỗ để xe máy, ô tô",
  "Có căng tin, quán nước giải khát"
]);

const prices = ref([
  "Mỗi trận đấu kéo dài tới 90 phút chia làm các khung giờ",
  "17:30 - 7:00 và 19:00 - 20:30 là 2 khung giờ vàng với giá thuê sân là 800.000/trận",
  "Thứ 7, Chủ nhật và các giờ thường có giá 400.000/trận",
  "Sân hoạt động tới 5:30 sáng hôm nay 1:00 sáng hôm sau"
]);

const transportation = [
  { text: "Sân bóng nằm trong khuôn viên Trường Đại Học Phenikaa" },
  { text: "Địa chỉ tại đường Nguyễn Văn Trác, phường Yên Nghĩa, quận Hà Đông, thành phố Hà Nội." },
  { text: "Có thể đi bằng phương tiện cá nhân như xe máy, ô tô" },
  { text: "Ngoài ra có thể đi bằng tàu điện hoặc xe bus" },
  {
    text: "Vị trí chính xác xem dưới đây :",
    iframe: {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.7500875440132!2d105.748617!3d20.962549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2sus!4v1695110174331!5m2!1svi!2sus",
      width: "600",
      height: "200",
      style: "margin:10px",
      allowfullscreen: "",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade"
    }
  },
];
</script>
  
<style scoped>
.error {
  color: red;
  font-size: 14px;
}

.wrapper {
  height: auto;
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  text-align: center;
}

.wrapper h1 {
  padding: 20px 10px;
  font-size: 30px;
  font-weight: 500;
}

.table-container {
  display: grid;
  grid-template-columns: 50px 200px 300px 100px auto;
  text-align: center;
}

.header th {
  padding: 10px;
  background-color: #f2f2f2;
  font-weight: 500;
  border: 1px solid #ddd;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  text-align: left;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  cursor: pointer;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.pagination button {
  margin: 0 10px;
}

.icon-pagination {
  padding: 0 10px;
}

.icon-pagination:hover {
  font-size: 17px;
  color: rgb(250, 69, 22);
}

.btn-sua {
  padding: 1px 3px;
  margin: 0px 3px;

}

.btn-xoa {
  padding: 1px 3px;
  margin: 0px 3px;
}

.btn-sua:hover {
  color: rgb(250, 69, 22);
}

.btn-xoa:hover {
  color: rgb(250, 69, 22);
}

.btn-add {
  padding: 5px 10px;
  margin: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}

.btn-add:hover {
  background-color: rgb(250, 69, 22);
  color: #fff;
}

.add-san {
  height: 150px;
}

.add-san h2 {
  font-size: 18px;
  padding: 10px;
  font-weight: 550;
}

.add-san form {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 0.2rem;

}

.add-san form input {
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
}

.btn-luu {
  padding: 5px 0px 0px 20px;
  font-size: 25px;
}

.btn-quanlysan {
  padding: 5px 0px 0px 20px;
  font-size: 25px;
}

.btn-quanlysan:hover {
  color: rgb(250, 69, 22);
}

.btn-luu:hover {
  color: rgb(250, 69, 22);

}

.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-container input {
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
}

.sua-san {
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  max-height: 800px;
  overflow-y: auto;
}
</style>