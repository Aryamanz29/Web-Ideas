<template>
  <v-app>
    <v-main>
      <!-- @showSidebar receive the emit of same name of Navbar -->
      <Navbar @showSidebar="showSidebar = !showSidebar" />
      <!-- @showSidebar receive the emit of same name of Sidebar -->
      <Sidebar :show="showSidebar" @showSidebar="showSidebar = !showSidebar" />
      <!-- PAGE CONTENT -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",

  components: {
    Navbar, Sidebar
  },

  data: () => ({
    sidebar: true
  }),
  computed: {
    /* Computed prop to autodetect changes and do not show warn in Vue */
    showSidebar: {
      get() {
        return this.sidebar;
      },
      set(new_value) {
        this.sidebar = new_value;
      }
    }
  }
};
</script>
