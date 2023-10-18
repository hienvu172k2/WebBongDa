<template>
  <div class="wrapper">
    <div v-if="selectedTab === 'sua-san'" class="sua-san">
      <h1>Chỉnh Sửa Sân</h1>
      <div class="sua-header">
        <span>Tên</span>
        <input v-model="editedSan.name" type="text" placeholder="Tên Sân">
        <span>Địa Chỉ</span>
        <input v-model="editedSan.address" type="text" placeholder="Địa Chỉ Sân">
      </div>
      <div class="sua-anh">
        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Sửa Ảnh</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sua-footer">
        <form>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Cơ Sở Vật Chất Và Tiện Ích Tại
              Sân</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Giá Thuê</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Cách Thức Di Chuyển</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </form>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button @click="selectedTab = 'quan-ly-san'" type="button"
          class="btn-cancel text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button @click="saveEditedSan" type="button"
          class="btn-quanlysan rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </div>
    <div v-else-if="showViewContent">
      <n-message-provider>
        <ViewSanBong />
        <button class="btn-close" @click="showViewContent = false">Đóng</button>
      </n-message-provider>
    </div>
    <div v-else>
      <h1>Quản Lý Sân</h1>
      <table>
        <thead>
          <tr class="header">
            <th>STT</th>
            <th>Tên Sân</th>
            <th>Địa Chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(san) in visibleData" :key="san.stt">
            <td>{{ san.stt }}</td>
            <td>{{ san.name }}</td>
            <td>{{ san.address }}</td>
            <td>
              <button class="btn-xem" @click="showViewContent = true; viewData = san">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>
              <dialog v-if="showDialog" @close="showDialog = false">
                <input class="date-time" type="date" v-model="selectedDate" />
              </dialog>
              <button class="btn-sua" @click="editSan(san.stt)">
                <font-awesome-icon :icon="['fas', 'file-pen']" />
              </button>
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
      <button class="btn-add" @click="addSan">Thêm Sân</button>
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
import ViewSanBong from "./ViewSanBong.vue";
const selectedTab = ref("quan-ly-san");
const showDialog = ref(false);
const showViewContent = ref(false);
const viewData = ref(null);
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
});
const formErrors = ref({
  name: '',
  address: '',
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

  if (isFormValid()) {
    data.value.push({ ...newSan.value, stt: data.value.length + 1 });
    newSan.value = {
      name: '',
      address: '',
    };
    showAddForm.value = false;
    resetFormErrors();
  }
};
const resetFormErrors = () => {
  formErrors.value.name = '';
  formErrors.value.address = '';
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
const editedSan = ref({ name: '', address: '' });
const editSan = (stt) => {
  const index = data.value.findIndex((san) => san.stt === stt);
  if (index !== -1) {
    editedSan.value = { ...data.value[index] };
    selectedTab.value = 'sua-san';
  }
}
const saveEditedSan = () => {
  const index = data.value.findIndex((san) => san.stt === editedSan.value.stt);
  if (index !== -1) {
    data.value[index] = { ...editedSan.value };
  }
  selectedTab.value = 'quan-ly-san';
  editedSan.value = { name: '', address: '' };
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

.btn-xem {
  padding: 1px 3px;
  margin: 0px 3px;
}

.btn-xem:hover {
  color: rgb(250, 69, 22);
}

.btn-add {
  padding: 5px 10px;
  margin: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}

.btn-close {
  padding: 5px 10px;
  margin: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}

.btn-close:hover {
  background-color: rgb(250, 69, 22);
  color: #fff;
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
  background-color: rgb(250, 69, 22);
  color: #000;
}

.btn-quanlysan:hover {
  background-color: rgb(255, 119, 84);
  color: #fff;
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
  padding: 5px 20px 10px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  max-height: 800px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

}

.sua-san h1 {
  background-color: rgb(245, 116, 11);
  color: #fff;
}

.sua-header {
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 0px;
}

.sua-header span {
  font-size: 20px;
  padding: 10px;
  text-align: left;
}

.sua-header input {
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  margin: 10px;
  padding: 8px 5px;
  width: 100%;
}

.block {
  font-size: 20px;
  padding: 10px;
  text-align: left;
}

.btn-cancel:hover {
  color: rgb(250, 69, 22);

}

.sua-anh {
  padding: 20px 10px;
}

.sua-footer {
  padding: 20px 10px;
}

.col-span-full {
  padding: 10px 0px;
}

.date-time {
  padding: 5px;
  border-radius: 0.375rem;
  font-size: 50px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

dialog input {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>