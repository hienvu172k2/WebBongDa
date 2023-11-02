<template>
  <div class="wrapper">
    <div class="search-content shadow-xl bg-white rounded-lg p-4 sm:p-6 lg:p-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="filter">
          <h1 class="content-btn">Khu Vực</h1>
          <n-checkbox class="checkbox-btn" value="hadong" label="Hà Đông " />
          <n-checkbox class="checkbox-btn" value="caugiay" label=" Cầu Giấy " />
          <n-checkbox class="checkbox-btn" value="thanhxuan" label="Thanh Xuân" />
          <n-checkbox class="checkbox-btn" value="dongda" label="Đống Đa" />
        </div>
        <div class="filter">
          <h1 class="content-btn">Giá</h1>
          <n-checkbox class="checkbox-btn" value="thap" label="< 300.000" />
          <n-checkbox class="checkbox-btn" value="trungbinh" label="300.000 - 500.000" />
          <n-checkbox class="checkbox-btn" value="trungbinhkha" label="500.000 - 700.000" />
          <n-checkbox class="checkbox-btn" value="cao" label="700.000 - 1.000.000" />
        </div>
        <div class="filter">
          <h1 class="content-btn">Loại Sân</h1>
          <n-checkbox class="checkbox-btn" value="namnguoi" label="5 người" />
          <n-checkbox class="checkbox-btn" value="baynguoi" label="7 người" />
          <n-checkbox class="checkbox-btn" value="chinnguoi" label="9 người" />
          <n-checkbox class="checkbox-btn" value="muoimotnguoi" label="11 người" />
        </div>
      </div>
    </div>
  
    <div class="bg-white">
      <div class="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Sân Bóng Đá
        </h2>
        <div class="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <div v-for="product in currentPageProducts" :key="product.id" class="group relative">
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
            <p class="text-sm text-black-900">Khu Vực : {{ product.area }}</p>
            <p class="text-sm text-black-900">Sân : {{ product.people }}</p>
            <p class="text-sm text-black-900">Giá : {{ product.price }}/Trận</p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="pagination flex justify-center items-center p-4 lg:p-8">
      <button @click="prevPage" :disabled="page === 1">
        <font-awesome-icon class="icon-pagination" :icon="['fas', 'arrow-left']" />
      </button>
      <span>Trang {{ page }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">
        <font-awesome-icon class="icon-pagination" :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const page = ref(1);
const pageSize = 12;
const filteredProducts = ref([]);

const products = [
  {
    id: 1,
    name: "Sân bóng Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 500.000",
  },
  {
    id: 2,
    name: "Sân bóng Minh Kiệt",
    href: "#",
    area: "Thanh Xuân",
    people: "5",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2022/01/15/original/mk-2_1642245566.jpg",
    price: "500.000 - 700.000",
  },
  {
    id: 3,
    name: "Sân bóng Yên Hòa",
    href: "#",
    area: "Cầu Giấy",
    people: "9",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/29/original/san-bong-yen-hoa-img1_1611854871.jpg",
    price: "700.000 - 1.000.000",
  },
  {
    id: 4,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 5,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 6,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 7,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 8,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 9,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 10,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 11,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 12,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 13,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 14,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
  {
    id: 15,
    name: "Sân Trường Đại Học Phenikaa",
    href: "#",
    area: "Hà Đông",
    people: "7",
    imageSrc:
      "https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg",
    price: "300.000 - 400.000",
  },
];

const totalPages = computed(() => Math.ceil(products.length / pageSize));

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
  }
};

const nextPage = () => {
  if (page.value < totalPages.value) {
    page.value++;
  }
};

const currentPageProducts = computed(() => {
  const startIdx = (page.value - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  return products.slice(startIdx, endIdx);
});

onMounted(() => {
  filteredProducts.value = products;
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
  text-align: center;
}

.icon-pagination {
  padding: 0 10px;
}

.icon-pagination:hover {
  font-size: 17px;
  color: rgb(250, 69, 22);
}

.checkbox-btn {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: center;
  padding: 3px;
}

.checkbox-btn n-checkbox {
  align-self: flex-start;
}
</style>
