<template>
    <div class="wrapper">
        <div v-if="!isEditing" class="content">
            <h1>Thông Tin Tài Khoản</h1>
            <n-grid cols="4">
                <n-gi span="1">
                    <ul>
                        <li>Tên Đăng Nhập :</li>
                        <li>Họ Tên :</li>
                        <li>Giới Tính :</li>
                        <li>Số Điện Thoại :</li>
                        <li>Email :</li>
                        <li>Địa Chỉ :</li>
                    </ul>
                </n-gi>
                <n-gi span="3">
                    <ul>
                        <li>{{ userInfo.username }}</li>
                        <li>{{ userInfo.fullName }}</li>
                        <li>{{ userInfo.gender }}</li>
                        <li>{{ userInfo.phone }}</li>
                        <li>{{ userInfo.email }}</li>
                        <li>{{ userInfo.address }}</li>
                    </ul>
                </n-gi>
            </n-grid>
            <div class="btn-edit">
                <button @click="startEditing" type="button" class="button-edit">Edit</button>
            </div>
        </div>
    
    
    
    
        <div v-if="isEditing" class="edit-content">
            <!-- <h1>Chỉnh Sửa Thông Tin Tài Khoản</h1>
                        <form>
                          <input v-model="editedUserInfo.username" placeholder="Tên Đăng Nhập" />
                          <input v-model="editedUserInfo.fullName" placeholder="Họ Tên" />
                          <input v-model="editedUserInfo.gender" placeholder="Giới Tính" />
                          <input v-model="editedUserInfo.phone" placeholder="Số Điện Thoại" />
                          <input v-model="editedUserInfo.email" placeholder="Email" />
                          <input v-model="editedUserInfo.address" placeholder="Địa Chỉ" />
                        </form>  -->
    
    
    
            <h1>Chỉnh Sửa Thông Tin Tài Khoản</h1>
            <n-grid cols="4">
                <n-gi span="1">
                    <ul>
                        <li>Tên Đăng Nhập :</li>
                        <li>Họ Tên :</li>
                        <li>Giới Tính :</li>
                        <li>Số Điện Thoại :</li>
                        <li>Email :</li>
                        <li>Địa Chỉ :</li>
                    </ul>
                </n-gi>
                <n-gi span="3">
                    <ul>
                        <li><input v-model="editedUserInfo.username" placeholder="Tên Đăng Nhập" class="edit-form" /></li>
                        <li><input v-model="editedUserInfo.fullName" placeholder="Họ Tên" class="edit-form" /></li>
                        <li><input v-model="editedUserInfo.gender" placeholder="Giới Tính" class="edit-form" /></li>
                        <li><input v-model="editedUserInfo.phone" placeholder="Số Điện Thoại" class="edit-form" /></li>
                        <li><input v-model="editedUserInfo.email" placeholder="Email" class="edit-form" /></li>
                        <li><input v-model="editedUserInfo.address" placeholder="Địa Chỉ" class="edit-form" /></li>
                    </ul>
                </n-gi>
            </n-grid>
    
    
    
            <!-- <div v-if="userImage"> -->
            <div v-if="userImage">
                <div class="col-span-full">
                    <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                    <div class="mt-2 flex items-center gap-x-3">
                        <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                        <button type="button"
                            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                    </div>
                </div>
            </div>
    
    
            <div class="btn-save">
                <button @click="saveEditing" type="button" class="button-save">Save</button>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
import { ref, reactive } from "vue";
import { getCurrentInstance } from 'vue';
const { ctx } = getCurrentInstance();
const isEditing = ref(false);
const userInfo = {
  username: 'danceculture',
  fullName: 'Vũ Văn Hiến',
  gender: 'Nam',
  phone: '0967454846',
  email: 'hienvv@gmail.com',
  address: 'La Tinh 2, Hà Đông, Hà Nội'
};

const editedUserInfo = reactive({
  username: userInfo.username,
  fullName: userInfo.fullName,
  gender: userInfo.gender,
  phone: userInfo.phone,
  email: userInfo.email,
  address: userInfo.address
});

function startEditing() {
  isEditing.value = true;
}

function saveEditing() {
  userInfo.username = editedUserInfo.username;
  userInfo.fullName = editedUserInfo.fullName;
  userInfo.gender = editedUserInfo.gender;
  userInfo.phone = editedUserInfo.phone;
  userInfo.email = editedUserInfo.email;
  userInfo.address = editedUserInfo.address;

  isEditing.value = false;
}

// Thêm phần xử lý khi sửa ảnh
function editImage() {
  // Thay đổi thành URL ảnh mới
  const newImage = { url: 'new_image_url.jpg' };
  // Gửi sự kiện updateUserImage lên component cha
  updateUserImage(newImage);
}
// Khai báo sự kiện để gửi ảnh mới lên component cha
const { emit } = getCurrentInstance();
function updateUserImage(newImage) {
  emit('updateUserImage', newImage);
}
  </script>

<style scoped>
.wrapper {
    height: 800px;
}

.wrapper h1 {
    font-size: 30px;
    font-weight: 500;
    padding: 20px 30px 0px 30px;
}

.content {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    height: 550px;
}

.content ul {
    padding: 30px;
}

.content ul li {
    padding: 15px 30px;
    font-size: 15px;
}

.button-edit {
    border: 1px solid #ccc;
    padding: 5px 40px;
    border-radius: 5px;
    background-color: rgb(21, 184, 16);
    color: #fff;
}

.button-edit:hover {
    background-color: #FA4516;

}

.btn-edit {
    display: flex;
    justify-content: center;
}

.edit-form {
    border: 1px solid #ccc;
    padding: 0px 10px;
    border-radius: 2px;
    width: 300px;
}

.button-save {
    border: 1px solid #ccc;
    padding: 5px 40px;
    border-radius: 5px;
    background-color: rgb(21, 184, 16);
    color: #fff;
}

.button-save:hover {
    background-color: #FA4516;

}

.btn-save {
    display: flex;
    justify-content: center;
    padding: 20px;
}
</style>