<template>
  <v-container>
    <div style="padding-top: 77px">
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-card-title><p v-html="aboutmetitle"></p></v-card-title>
            <v-card-text><p v-html="aboutmetxt"></p></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-list dense>
              <v-subheader>{{ $t("social.title") }}</v-subheader>
              <v-list-item-group
                  color="primary"
              >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'
import i18n from "@/i18n";

let facebookI18n = i18n.t('social.facebook');
export default {
  name: "Home",
  components: {
    Timeline
  },
  data: () => ({
    aboutmetxt: i18n.t('content.aboutme.text'),
    aboutmetitle: i18n.t("content.aboutme.title"),
    items: [
      {text: facebookI18n, icon: 'mdi-facebook', link: "https://www.facebook.com/heroldie/"},
    ],
  }),
  methods: {
  },
};
</script>
