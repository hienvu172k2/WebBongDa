<template>
  <header class="header-content fixed top-0 left-0 w-full bg-white z-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1 items-center">
        <a href="#" class="flex items-center -m-1.5 p-1.5">
          <img class="h-20 w-auto" src="../assets/images/Logo.jpg" alt="" />
          <span
            class="ml-2"
            style="
              color: rgb(235, 25, 25);
              font-size: 40px;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
                sans-serif;
              font-weight: 800;
            "
            >Ace</span
          >
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <n-dropdown :options="options">
      <n-avatar 
        round
        size="medium"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-dropdown>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, h } from 'vue';
import { NIcon } from 'naive-ui';
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5';

const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) });

const options = ref([
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: 'Edit Profile',
    key: 'editProfile',
    icon: renderIcon(EditIcon),
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
]);

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
  PhoneIcon,
  PlayCircleIcon,
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
</style>