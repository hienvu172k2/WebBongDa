<template>
  <div class="warraper">
    <SearchBall />
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Sân Bóng Đá</h2>
        <div class="mt-6 grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          <div v-for="product in products" :key="product.id" class="group relative">
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
            <p class="text-sm  text-black-900">{{ product.area }}</p>
            <p class="text-sm  text-black-900">{{ product.people }}</p>
            <p class="text-sm  text-black-900">{{ product.price }}</p>
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

import PaginationBall from './PaginationBall.vue';
import SearchBall from './SearchBall.vue';
const products = [
  {
    id: 1,
    name: 'Sân bóng Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 500.000 / Trận',

  },
  {
    id: 2,
    name: 'Sân bóng Minh Kiệt',
    href: '#',
    area: "Khu Vực : Thanh Xuân",
    people: "Sân : 5 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2022/01/15/original/mk-2_1642245566.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 500.000 - 700.000 / Trận',
  },
  {
    id: 3,
    name: 'Sân bóng Yên Hòa',
    href: '#',
    area: "Khu Vực : Cầu Giấy",
    people: "Sân : 9 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/29/original/san-bong-yen-hoa-img1_1611854871.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 700.000 - 1.000.000 / Trận',

  },
  {
    id: 4,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 5,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 6,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 7,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 8,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 9,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 10,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 11,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },
  {
    id: 12,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Sân : 7 người",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',

  },


]


</script>
<style scoped>
.warraper {
  height: auto;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

.text-sm {
  padding: 0 0 10px 30px;
}

.bg-white {}

.group {
  border-radius: 0.5rem;
  box-shadow: 0 1px 8px 3px #ccc;
}

.pagination {
  padding-bottom: 100px;
}
</style>