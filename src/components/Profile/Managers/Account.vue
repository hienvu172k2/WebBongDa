<template>
    <div class="wrapper">
        <div v-if="!isEditing" class="content">
            <h1>Thông Tin Tài Khoản</h1>
            <n-grid cols="1">
                <n-gi>
                    <n-descriptions label-placement="left" bordered :column="1" label-align="center"
                        style="margin:50px;border-radius: 0.375rem;">
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Tên Đăng Nhập
                            </template>
                            {{ userInfo.username }}
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Họ Tên
                            </template>
                            {{ userInfo.fullName }}
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Giới Tính
                            </template>
                            {{ userInfo.gender }}
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Phone
                            </template>
                            {{ userInfo.phone }}
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Email
                            </template>
                            {{ userInfo.email }}
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Địa Chỉ
                            </template>
                            {{ userInfo.address }}
                        </n-descriptions-item>
    
                    </n-descriptions>
                </n-gi>
            </n-grid>
            <div class="btn-edit">
                <button @click="startEditing" type="button" class="button-edit"><font-awesome-icon
                        :icon="['fas', 'file-pen']" class="edit-save-icon" /> Edit</button>
            </div>
        </div>
    
        <div v-if="isEditing" class="edit-content">
            <h1>Chỉnh Sửa Thông Tin Tài Khoản</h1>
            <n-grid cols="1">
                <n-gi>
                    <n-descriptions label-placement="left" bordered :column="1" label-align="center"
                        style="margin:50px;border-radius: 0.375rem;">
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Tên Đăng Nhập
                            </template>
                            <input v-model="editedUserInfo.username" placeholder="Tên Đăng Nhập" class="edit-form" />
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Họ Tên
                            </template>
                            <input v-model="editedUserInfo.fullName" placeholder="Họ Tên" class="edit-form" />
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Giới Tính
                            </template>
                            <input v-model="editedUserInfo.gender" placeholder="Giới Tính" class="edit-form" />
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Phone
                            </template>
                            <input v-model="editedUserInfo.phone" placeholder="Số Điện Thoại" class="edit-form" />
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Email
                            </template>
                            <input v-model="editedUserInfo.email" placeholder="Email" class="edit-form" />
                        </n-descriptions-item>
                        <n-descriptions-item :labelStyle="Dstyle">
                            <template #label>
                                Địa Chỉ
                            </template>
                            <input v-model="editedUserInfo.address" placeholder="Địa Chỉ" class="edit-form" />
                        </n-descriptions-item>
    
                    </n-descriptions>
                </n-gi>
            </n-grid>
            <div class="btn-save">
                <button @click="saveEditing" type="button" class="button-save"><font-awesome-icon icon="floppy-disk"
                        class="edit-save-icon" /> Save</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive, onMounted } from "vue";
import { getCurrentInstance } from 'vue';
const { ctx } = getCurrentInstance();
const isEditing = ref(false);
const userInfo = reactive({
  username: 'danceculture',
  fullName: 'Vũ Văn Hiến',
  gender: 'Nam',
  phone: '0967454846',
  email: 'hienvv@gmail.com',
  address: 'La Tinh 2, Hà Đông, Hà Nội'
});

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
  Object.assign(userInfo, editedUserInfo);
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  isEditing.value = false;
}

onMounted(() => {
  const savedUserInfo = localStorage.getItem('userInfo');
  if (savedUserInfo) {
    Object.assign(userInfo, JSON.parse(savedUserInfo));
    Object.assign(editedUserInfo, JSON.parse(savedUserInfo));
  }
});
const props = {
  widthLable: '250px',
  padding: '0px',
  widthContent: '620px',
  marginBottom: '0px',
  widthWindow: '768',
  column: '1'
};
const Dstyle = {
  width: '250px',
  padding: '0px'
} 
</script>

<style scoped>
.wrapper {
    /* height: 1200px; */
}

.wrapper h1 {
    font-size: 30px;
    font-weight: 500;
    padding: 20px 30px 0px 30px;
    text-align: center;
}

.content {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    height: 550px;
}

.edit-content {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    height: 550px;
}

.content ul {
    padding-top: 50px;
}

.content ul li {
    padding: 12px 30px;
    font-size: 15px;
}

.button-edit {
    border: 1px solid #ccc;
    padding: 5px 40px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
}

.button-edit:hover {
    background-color: #FA4516;
    color: #fff;

}

.btn-edit {
    display: flex;
    justify-content: center;
}


.edit-form {
  border: 1px solid #ccc;
  padding: 0px 10px;
  border-radius: 2px;
  width: 220px;
}

.button-save {
    border: 1px solid #ccc;
    padding: 5px 40px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
}

.button-save:hover {
    background-color: #FA4516;
    color: #fff;

}

.btn-save {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.edit-ul li {
    margin: 1.8px;
}

.edit-save-icon {
    color: #000;
}
</style>