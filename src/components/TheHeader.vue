<template>
    <div class="wrapper">
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
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                    <router-link to="/home" class="header-btn  text-sm font-semibold leading-6 text-gray-900">Trang
                        Chủ</router-link>
    
                    <router-link to="/bookingball" class="header-btn text-sm font-semibold leading -6 text-gray-900 ">Đặt
                        Sân</router-link>
                    <router-link to="/aboutus" class="header-btn text-sm font-semibold leading-6 text-gray-900">Liên
                        Hệ</router-link>
                    <router-link to="/contact" class="header-btn text-sm font-semibold leading-6 text-gray-900">Hỗ
                        Trợ</router-link>
    
                </PopoverGroup>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
    
    
                    <div class="dropdown">
                        <div class="avatar" @click="toggleDropdown">
                            <img src="https://th.bing.com/th/id/R.168824d10e82ec611011d572adb57d33?rik=ckwL%2fl%2f3xh1cFw&pid=ImgRaw&r=0"
                                alt="Avatar" />
                        </div>
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
    </div>
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



</script>
<style scoped>
.wrapper {
    height: 100px;
}

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
    right: 0;
    width: 100%;
    box-shadow: 0 1px 8px 3px #ccc;
    background-color: #fff;
    z-index: 1000;
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
