<template>
  <div class="search-content shadow-xl bg-white rounded-lg">
    <n-grid cols="6">
      <n-grid-item span="3">
        <div class="filter flex justify-center items-center">
          <!-- Cột khu vực -->
          <div>
            <n-space item-style="display: flex;" vertical>
              <h1 class="content-btn">Khu Vực</h1>
              <n-checkbox v-model:checked="checkedRegion" label="Hà Đông"
                @update:checked="handleCheckedChange(checkedRegion)" />
              <n-checkbox-group v-model:value="citiesRegion" @update:value="handleUpdateValue(citiesRegion)">
                <n-space item-style="display: flex;">
                  <n-checkbox value="caugiay" label="Cầu Giấy" />
                  <n-checkbox value="thanhxuan" label="Thanh Xuân" />
                  <n-checkbox value="dongda" label="Đống Đa" />
                </n-space>
              </n-checkbox-group>
            </n-space>
          </div>
          <!-- Cột giá -->
          <div>
            <n-space item-style="display: flex;" vertical>
              <h1 class="content-btn">Giá</h1>
              <n-checkbox v-model:checked="checkedPrice" label="< 300.000"
                @update:checked="handleCheckedChange(checkedPrice)" />
              <n-checkbox-group v-model:value="citiesPrice" @update:value="handleUpdateValue(citiesPrice)">
                <n-space item-style="display: flex;">
                  <n-checkbox value="trungbinh" label="300.000 - 500.000" />
                  <n-checkbox value="trungbinhkha" label="500.000 - 700.000" />
                  <n-checkbox value="cao" label="700.000 - 1.000.000" />
                </n-space>
              </n-checkbox-group>
            </n-space>
          </div>
          <!-- Cột loại sân -->
          <div>
            <n-space item-style="display: flex;" vertical>
              <h1 class="content-btn">Loại Sân</h1>
              <n-checkbox v-model:checked="checkedCourtType" label="5 người"
                @update:checked="handleCheckedChange(checkedCourtType)" />
              <n-checkbox-group v-model:value="citiesCourtType" @update:value="handleUpdateValue(citiesCourtType)">
                <n-space item-style="display: flex;">
                  <n-checkbox value="baynguoi" label="7 người" />
                  <n-checkbox value="chinnguoi" label="9 người" />
                  <n-checkbox value="muoimotnguoi" label="11 người" />
                </n-space>
              </n-checkbox-group>
            </n-space>
          </div>
        </div>
      </n-grid-item>
      <!--  Thanh tìm kiếm -->
      <n-grid-item span="3" class="flex justify-center items-center flex-col h-full">
        <n-input-group>
          <n-input :style="{ width: '50%' }" />
          <n-button type="primary" ghost> Search </n-button>
        </n-input-group>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkedRegion = ref(false);
const citiesRegion = ref(null);

const checkedPrice = ref(false);
const citiesPrice = ref(null);

const checkedCourtType = ref(false);
const citiesCourtType = ref(null);

const handleCheckedChange = (checked, column) => {
  if (column === "Region") {
    checkedRegion.value = checked;
  } else if (column === "Price") {
    checkedPrice.value = checked;
  } else if (column === "CourtType") {
    checkedCourtType.value = checked;
  }
};

const handleUpdateValue = (value, column) => {
  if (column === "Region") {
    citiesRegion.value = value;
  } else if (column === "Price") {
    citiesPrice.value = value;
  } else if (column === "CourtType") {
    citiesCourtType.value = value;
  }
};
</script>

<style scoped>
.search-content {
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: 15px auto;
  padding: 50px;
}

* {
  justify-content: center;
}

.n-button {
  padding: 15px;
}

.filter {
  padding: 10px;
}

.content-btn {
  border-bottom: 1px solid #000;
  font-size: 18px;
  font-weight: 650;
}
</style>
