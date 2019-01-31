<template>
    <!-- <div class="container main"> -->
    <div class="columns">
        <app-main></app-main>
        <sidebar></sidebar>
    </div>
    <!-- </div> -->
</template>

<script>
import Sidebar from '@/components/sidebar'
import AppMain from "@/components/app-main";
export default {
    components: {
        AppMain,
        Sidebar
    }
};
</script>