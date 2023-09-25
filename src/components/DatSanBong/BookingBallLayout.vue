<template>
  <div class="warraper">
  
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
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product.name }}
                  </a>
                </h1>
              </div>
            </div>
            <p class="text-sm  text-black-900">{{ product.area }}</p>
            <p class="text-sm  text-black-900">{{ product.people }}</p>
            <p class="text-sm  text-black-900">{{ product.price }}</p>
            <p class="mt-1 text-sm text-gray-500">{{ product.detail }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination flex justify-center items-center"><PaginationBall /></div>
    
  </div>
</template>
  
<script setup>
import PaginationBall from './PaginationBall.vue'
const products = [
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
  },
  {
    id: 1,
    name: 'Sân Trường Đại Học Phenikaa',
    href: '#',
    area: "Khu Vực : Hà Đông",
    people: "Số Người : 7",
    imageSrc: 'https://thegioithethao.vn/images/products_soccer/2021/01/28/large/san-bong-dai-hoc-phenika_1611847506.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Giá : 300.000 - 400.000 / Trận',
    detail: 'Xem chi tiết',
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
.pagination{
  padding-bottom:100px;
}
</style>