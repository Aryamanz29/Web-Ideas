<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" large dark app flat>
    
    <v-icon v-text="'mdi-lightning-bolt'" color="yellow lighten-2" class="mr-6" @click="$emit('showSidebar')" />

    <v-app-bar-title class="font-weight-medium">Social</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-row width="200" class="d-flex justify-center ma-0 mr-4" v-if="$vuetify.breakpoint.mdAndUp">
      <v-col cols="6" class="pa-0 ma-0">
        <v-text-field
          filled
          rounded
          dense
          class="mt-6"
          v-model="search"
        >
          <template v-slot:prepend-inner>
            <v-icon v-text="'mdi-magnify'" class="mr-2" />
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-menu offset-y class="mx-1 mr-2" :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-text="'mdi-message'" v-bind="attrs" v-on="on" class="pa-1" />
      </template>
      <v-list three-line width="320" class="mt-4 mr-5">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item
            v-else
            :key="item.title"
          >
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>

    <div class="ml-5 mr-2 mt-5">
      <v-switch v-model="nightMode" inset>
        <template v-slot:label>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-text="iconToShow" v-bind="attrs" v-on="on" />
            </template>
            <span>{{ nightMode ? 'Dark mode' : 'Light mode' }}</span>
          </v-tooltip>
        </template>
      </v-switch>
    </div>

    <v-menu offset-y class="mx-4">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item-avatar style="cursor:pointer" v-bind="attrs" v-on="on">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
      </template>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="'mdi-logout'" />
          </v-list-item-icon>
          <v-list-item-content>
            Logout
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      nightMode: false,
      search: "",
      showSearchInput: false,
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }
  },
  watch: {
    nightMode() {
      this.$vuetify.theme.dark = this.nightMode;
    }
  },
  computed: {
    iconToShow() {
      return this.nightMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
    }
  }
};
</script>
