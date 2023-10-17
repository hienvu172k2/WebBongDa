<template>
    <div class="wrapper">
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
                        <button class="btn-sua" @click="editSan(san.stt)"><font-awesome-icon
                                :icon="['fas', 'file-pen']" /></button>
                        <button class="btn-xoa" @click="deleteSan(san.stt)"><font-awesome-icon
                                :icon="['fas', 'trash']" /></button>
                    </td>
                </tr>
            </tbody>
        </table>
    
        <!-- Phân trang -->
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
            <form @submit.prevent="saveSan">
                <input v-model="newSan.name" placeholder="Tên Sân" />
                <input v-model="newSan.address" placeholder="Địa Chỉ" />
                <input v-model="newSan.price" placeholder="Giá Sân" />
                <div> <button class="btn-luu" type="submit"><font-awesome-icon :icon="['fas', 'floppy-disk']" /></button>
                </div>
            </form>
        </div>
    </div>
</template>
  
  <script setup>
import { ref, computed } from 'vue';

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

const showAddForm = ref(false);
const currentPage = ref(1);

const visibleData = computed(() => {
  const startIndex = (currentPage.value - 1) * 10;
  const endIndex = startIndex + 10;
  return data.value.slice(startIndex, endIndex);
});

const addSan = () => {
  showAddForm.value = true;
};

const saveSan = () => {
  data.value.push({ ...newSan.value, stt: data.value.length + 1 });
  newSan.value = {
    name: '',
    address: '',
    price: '',
  };
  showAddForm.value = false;
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
</script>
  
<style scoped>
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
    height: 160px;
}

.add-san h2 {
    font-size: 18px;
    padding: 10px;
    font-weight: 550;
}

.add-san form {
    padding: 10px;
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
</style>