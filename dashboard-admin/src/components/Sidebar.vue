<template>
  <v-navigation-drawer v-model="showSidebar" :clipped="$vuetify.breakpoint.lgAndUp" app elevation="0">
    <v-list shaped>
      <div v-if="$vuetify.breakpoint.md">
        <v-subheader>SEARCH</v-subheader>
        <v-text-field
            filled
            rounded
            dense
            class="mx-2"
          >
            <template v-slot:prepend-inner>
              <v-icon v-text="'mdi-magnify'" class="mr-2" />
            </template>
          </v-text-field>

        <v-divider class="mb-6 mx-4" />
      </div>

      <v-list-item v-for="item in items" :key="item.title" :to="item.to" active-class="yellow lighten-2 brown--text text--darken-3">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    show: { type: Boolean, required: true }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", to: "/" },
        { title: "My Account", icon: "mdi-account" },
        { title: "My Groups", icon: "mdi-account-group-outline" },
      ]
    };
  },
  computed: {
    showSidebar: {
      get() {
        return this.show;
      },
      set(new_value) {
        if (new_value !== this.show) {
          this.$emit('showSidebar');
        }
      }
    }
  }
};
</script>
