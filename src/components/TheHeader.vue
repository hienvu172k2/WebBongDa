<template>
    <header class="header-content fixed top-0 left-0 w-full bg-white z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1 items-center">
                <a href="#" class="flex items-center -m-1.5 p-1.5">
                    <img class="h-20 w-auto" src="../assets/images/Logo.jpg" alt="" />
                    <span class="ml-2"
                        style="color: rgb(235, 25, 25);font-size:40px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight:800;">Ace</span>
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <router-link to="/home" class="header-btn  text-sm font-semibold leading-6 text-gray-900">Trang
                    Chủ</router-link>
    
                <Popover class="relative">
                    <PopoverButton class=" flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Dịch Vụ
                        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>
    
                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel
                            class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in products" :key="item.name"
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <!-- <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                                                                                  aria-hidden="true" /> -->
                                    </div>
                                    <div class="flex-auto">
                                        <a :href="item.href" class="block font-semibold text-gray-900">
                                            {{ item.name }}
                                            <!-- <span class="absolute inset-0" /> -->
                                        </a>
                                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                    {{ item.name }}
                                </a>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>
                <router-link to="/bookingball" class="header-btn text-sm font-semibold leading -6 text-gray-900 ">Đặt
                    Sân</router-link>
                <router-link to="/aboutus" class="header-btn text-sm font-semibold leading-6 text-gray-900">Liên
                    Hệ</router-link>
                <a href="#" class="header-btn text-sm font-semibold leading-6 text-gray-900">Hỗ Trợ</a>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
    
    
                <div class="dropdown">
                    <!-- Avatar -->
                    <div class="avatar" @click="toggleDropdown">
                        <img src="https://th.bing.com/th/id/R.168824d10e82ec611011d572adb57d33?rik=ckwL%2fl%2f3xh1cFw&pid=ImgRaw&r=0"
                            alt="Avatar" />
                    </div>
    
                    <!-- Dropdown Content -->
                    <div class="dropdown-content" v-if="isDropdownOpen">
                        <ul>
                            <router-link to="/user">
                                <li>
                                    <a href="#" class="menu-item">
                                        <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                                    </a>
                                    Profile
                                </li>
                            </router-link>
                            <router-link to="/manage">
                                <li>
                                <a href="#" class="menu-item">
                                    <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" class="icon" />
    
                                </a>
                                Logout
                            </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
    
    
        </nav>
    
    
    </header>
</template>

<script setup>
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
} from "@heroicons/vue/20/solid";

const products = [
  { name: "Đặt Sân Bóng", href: "#" },
  { name: "Thuê Dụng Cụ", href: "#" },
  { name: "Nước Uống", href: "#" },
];


</script>
<style scoped>
.header-content {
    box-shadow: 0 1px 8px 3px #ccc;
}

.header-btn:hover {
    color: rgb(235, 25, 25);
    border-bottom: 1px solid #000;
}

.header-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 1px 8px 3px #ccc;
    background-color: #fff;
    z-index: 50;
}

.header-btn:hover {
    color: rgb(235, 25, 25);
    border-bottom: 1px solid #000;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.avatar {
    cursor: pointer;
    height: 40px;
    width: 40px;

}

.avatar img {
    border-radius: 50%;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
}

.dropdown-content ul {
    list-style: none;
    padding: 0;
    margin: 0;

}

.dropdown-content li {
    padding: 5px 15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
}

.dropdown-content a {
    text-decoration: none;
    color: #333;
    display: block;

}

.dropdown-content li:hover {
    background-color: #ccc;
}


.dropdown:hover .dropdown-content {
    display: block;
}

.menu-item {
    padding: 0px 5px;
}
</style>
