<template>
  <div class="warraper">
    <div class="search-content shadow-xl bg-white rounded-lg">
      <n-grid cols="6">
        <n-grid-item span="3">
          <div class="filter flex justify-center items-center">
  
            <div>
              <n-space item-style="display: flex;" vertical>
                <h1 class="content-btn">Khu Vực</h1>
                <n-checkbox :checked="isChecked('hadong')" @update:checked="updateChecked('hadong')" value="hadong"
                  label="Hà Đông" />
                <n-checkbox-group v-model:value="citiesRegion" @update:value="filterProducts">
                  <n-space item-style="display: flex;">
                    <n-checkbox value="caugiay" label="Cầu Giấy" />
                    <n-checkbox value="thanhxuan" label="Thanh Xuân" />
                    <n-checkbox value="dongda" label="Đống Đa" />
                  </n-space>
                </n-checkbox-group>
              </n-space>
            </div>
  
            <div>
              <n-space item-style="display: flex;" vertical>
                <h1 class="content-btn">Giá</h1>
                <n-checkbox v-model:checked="checkedPrice" value="thap" label="< 300.000"
                  @update:checked="handleCheckedChange(checkedPrice, 'Price')" />
                <n-checkbox-group v-model:value="citiesPrice" @update:value="handleUpdateValue(citiesPrice)">
                  <n-space item-style="display: flex;">
                    <n-checkbox value="trungbinh" label="300.000 - 500.000" />
                    <n-checkbox value="trungbinhkha" label="500.000 - 700.000" />
                    <n-checkbox value="cao" label="700.000 - 1.000.000" />
                  </n-space>
                </n-checkbox-group>
              </n-space>
            </div>
  
            <div>
              <n-space item-style="display: flex;" vertical>
                <h1 class="content-btn">Loại Sân</h1>
                <n-checkbox v-model:checked="checkedCourtType" value="namnguoi" label="5 người"
                  @update:checked="handleCheckedChange(checkedCourtType, 'CourtType')" />
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
  
        <n-grid-item span="3" class="flex justify-center items-center flex-col h-full">
          <n-input-group>
            <n-input :style="{ width: '50%' }" />
            <n-button type="primary" ghost> Search </n-button>
          </n-input-group>
        </n-grid-item>
      </n-grid>
    </div>
  
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Sân Bóng Đá</h2>
        <div class="mt-6 grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          <div v-for="product in filteredProducts" :key="product.id" class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h1 class="text-sm font-medium text-gray-1000">
                  <a :href="product.href">
                    <router-link :to="'/detailball/' + product.id" class="absolute inset-0"></router-link>
                    {{ product.name }}
                  </a>
                </h1>
              </div>
            </div>
            <p class="text-sm  text-black-900">Khu Vực : {{ product.area }}</p>
            <p class="text-sm  text-black-900">Sân : {{ product.people }}</p>
            <p class="text-sm  text-black-900">Giá : {{ product.price }}/Trận</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination flex justify-center items-center">
      <PaginationBall />
    </div>
  
  
  </div>
</template>
  
<script setup>
// import { ref, onMounted } from "vue";
import { ref, computed, onMounted, watch } from 'vue';
import PaginationBall from './PaginationBall.vue';
// const checkedRegion = ref(false);
// const citiesRegion = ref(null);

const checkedRegion = ref([]);
const citiesRegion = ref([]);
const checkedPrice = ref([]);
const citiesPrice = ref([]);
const checkedCourtType = ref([]);
const citiesCourtType = ref([]);
const filteredProducts = ref([]);

// const isChecked = (value) => {
//   return checkedRegion.value.includes(value) || citiesRegion.value.includes(value);
// };
// const handleCheckedChange = (checked, column) => {
//   if (column === "Region") {
//     checkedRegion.value = checked;
//   } else if (column === "Price") {
//     checkedPrice.value = checked;
//   } else if (column === "CourtType") {
//     checkedCourtType.value = checked;
//   }
// };

// const handleUpdateValue = (value, column) => {
//   if (column === "Region") {
//     citiesRegion.value = value;
//   } else if (column === "Price") {
//     citiesPrice.value = value;
//   } else if (column === "CourtType") {
//     citiesCourtType.value = value;
//   }
// };


const products = [
  {
    id: 1,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 500.000',

  },
  {
    id: 2,
    name: 'Sân bóng Minh Kiệt',
    href: '#',
    area: "Thanh Xuân",
    people: "5",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2022/01/15/original/mk-2_1642245566.jpg',
    price: '500.000 - 700.000',
  },
  {
    id: 3,
    name: 'Sân bóng Yên Hòa',
    href: '#',
    area: "Cầu Giấy",
    people: "9",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/29/original/san-bong-yen-hoa-img1_1611854871.jpg',
    price: '700.000 - 1.000.000',

  },
  {
    id: 4,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 5,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 6,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 7,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 8,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 9,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 10,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 11,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },
  {
    id: 12,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Hà Đông",
    people: "7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    price: '300.000 - 400.000',

  },


]

// const test = products.filter(item => item.area === "Hà Đông");
// console.log(test);
const isChecked = (value, column) => {
  if (column === 'Region') {
    return checkedRegion.value.includes(value) || citiesRegion.value.includes(value);
  } else if (column === 'Price') {
    return checkedPrice.value.includes(value) || citiesPrice.value.includes(value);
  } else if (column === 'CourtType') {
    return checkedCourtType.value.includes(value) || citiesCourtType.value.includes(value);
  }
};

// Hàm xử lý khi checkbox thay đổi
const handleCheckedChange = (checked, column) => {
  if (column === 'Region') {
    checkedRegion.value = checked;
  } else if (column === 'Price') {
    checkedPrice.value = checked;
  } else if (column === 'CourtType') {
    checkedCourtType.value = checked;
  }
};

// Hàm xử lý khi có thay đổi trong danh sách chọn (ví dụ: khi người dùng chọn các khu vực)
const handleUpdateValue = (value, column) => {
  if (column === 'Region') {
    citiesRegion.value = value;
  } else if (column === 'Price') {
    citiesPrice.value = value;
  } else if (column === 'CourtType') {
    citiesCourtType.value = value;
  }
};

// Hàm lọc sản phẩm dựa trên lựa chọn của người dùng
const filterProducts = () => {
  filteredProducts.value = products.filter(product => {
    return (
      (citiesRegion.value.length === 0 || citiesRegion.value.includes(product.area)) &&
      (citiesPrice.value.length === 0 || citiesPrice.value.includes(product.price)) &&
      (citiesCourtType.value.length === 0 || citiesCourtType.value.includes(product.people))
    );
  });
};

// Sử dụng watch để theo dõi các thay đổi trong danh sách chọn và kích hoạt hàm lọc
watch([citiesRegion, citiesPrice, citiesCourtType], filterProducts);



// Nạp dữ liệu vào filteredProducts khi component được mounted
onMounted(() => {
  filterProducts();
});

</script>



<style scoped>
.warraper {
  height: auto;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

.text-sm {
  padding: 0 0 15px 15px;
}

.bg-white {}

.group {
  border-radius: 0.5rem;
  box-shadow: 0 1px 8px 3px #ccc;
}

.pagination {
  padding-bottom: 100px;
}

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