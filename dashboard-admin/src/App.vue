<template>
  <v-app>
    <v-main>
      <Navbar @showSidebar="showSidebar = !showSidebar" />
      <Sidebar :show="showSidebar" @showSidebar="showSidebar = !showSidebar" />
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
