<template>
  <v-container>
    <div style="padding-top: 77px">
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-card-title>{{ $t("content.homepage.title") }}</v-card-title>
            <v-card-text>{{ $t("content.homepage.text1") }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>{{ $t("social.twitter") }}</v-card-title>
            <v-card-text>
              <Timeline id="twitterdev" sourceType="profile" :options="{ tweetLimit: '6' }"/>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'

export default {
  name: "Home",
  components: {
    Timeline
  }
};
</script>
