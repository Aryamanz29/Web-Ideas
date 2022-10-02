<template>
  <!-- THIS IS THE MAIN PAGE -->
  <v-app>
    <v-container>
      <!-- THIS IS THE GRAPHIC ROW -->
      <v-row class="pa-6 d-flex flex-wrap justify-space-between">
        <v-col cols="12" sm="12" lg="8">
          <v-row>
            <!-- CARD: GRAPHIC ACTIVITY LAST WEEK -->
            <v-col>
              <v-card class="pb-3 px-6" outlined>
                <v-card-title class="text-button"
                  >Activity last week</v-card-title
                >
                <v-sparkline
                  class="my-auto"
                  :value="value"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                ></v-sparkline>
              </v-card>
            </v-col>
            <!-- CARD: GRAPHIC ACTIVITY THIS WEEK -->
            <v-col>
              <v-card class="pb-3 px-6" outlined>
                <v-card-title class="text-button"
                  >Activity this week</v-card-title
                >
                <v-sparkline
                  class="my-auto"
                  :value="value2"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                ></v-sparkline>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <!-- CARD: TEMPERATURE -->
              <v-card class="mx-auto mt-2" outlined>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5">
                      San Francisco
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-card-text>
                  <v-row align="center">
                    <v-col class="text-h2" cols="6"> 23&deg;C </v-col>
                    <v-col cols="6">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                        alt="Sunny image"
                        width="92"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-send</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-cloud-download</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle>48%</v-list-item-subtitle>
                </v-list-item>

                <v-slider
                  v-model="time"
                  :max="6"
                  :tick-labels="labels"
                  class="mx-4"
                  ticks
                ></v-slider>

                <v-list class="transparent">
                  <v-list-item v-for="item in forecast" :key="item.day">
                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-subtitle class="text-right">
                      {{ item.temp }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col class="d-flex flex-column justify-space-between mt-2">
              <!-- CARD: TREND MUSIC -->
              <v-card color="#385F73" dark flat>
                <v-card-title class="text-h5">
                  Unlimited music now
                </v-card-title>

                <v-card-subtitle
                  >Listen to your favorite artists and albums whenever and
                  wherever, online and offline.</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn text> Listen Now </v-btn>
                </v-card-actions>
              </v-card>
              <v-card v-for="(item, i) in itemsMusic" :key="i" :color="item.color" dark flat>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        v-if="item.artist === 'Ellie Goulding'"
                        class="ml-2 mt-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                      >
                        <v-icon>mdi-play</v-icon>
                      </v-btn>

                      <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                        START RADIO
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <!-- CARD: TREND MESSAGES -->
          <v-card class="pb-3 px-6" outlined>
            <v-card-title class="text-button">Trend messages</v-card-title>
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                active-class="brown--text yellow lighten-5"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                          v-text="item.action"
                        ></v-list-item-action-text>

                        <v-icon v-if="!active" color="brown lighten-1">
                          mdi-star-outline
                        </v-icon>

                        <v-icon v-else color="yellow darken-3">
                          mdi-star
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
          <v-row class="mt-1">
            <v-col>
              <!-- CARD: TWITTER -->
              <v-card class="mx-auto elevation-0" color="#26c6da" dark>
                <v-card-title>
                  <v-icon large left> mdi-twitter </v-icon>
                  <span class="text-h6 font-weight-light">Twitter</span>
                </v-card-title>

                <v-card-text class="text-h5 font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS
                  because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Evan You</v-list-item-title>
                    </v-list-item-content>

                    <v-row align="center" justify="end">
                      <v-icon class="mr-1"> mdi-heart </v-icon>
                      <span class="subheading mr-2">256</span>
                      <span class="mr-1">·</span>
                      <v-icon class="mr-1"> mdi-share-variant </v-icon>
                      <span class="subheading">45</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [
        10, 12, 7, 9, 0, 20, 23, 23, 29, 56, 34, 28, 25, 22, 18, 13, 8, 3, 0,
      ],
      value2: [0, 5, 12, 3, 5, 20, 23, 15, 3, 11, 14, 9, 2, 5, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
      selected: [2],
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors",
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "me, Scrott, Jennifer",
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen",
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt",
        },
      ],
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0",
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0",
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
      ],
      itemsMusic: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    };
  },
};
</script>
