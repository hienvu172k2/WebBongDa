<template>
  <div class="wrapper">
    <div v-if="selectedTab === 'sua-san'">
      <h1>Chỉnh Sửa Sân</h1>
      <!-- Hiển thị nội dung chỉnh sửa sân ở đây -->
      <button @click="selectedTab = 'quan-ly-san'">Lưu</button>
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
              <button class="btn-sua" @click="selectedTab = 'sua-san'"><font-awesome-icon
                  :icon="['fas', 'file-pen']" /></button>
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
const selectedTab = ref("sua-san");
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
</style>