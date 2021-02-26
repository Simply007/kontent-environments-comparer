<template>
  <div class="home">
    <v-container>
      <Comparer />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Comparer from "@/components/Comparer.vue"; // @ is an alias to /src

@Component({
  components: {
    Comparer
  }
})
export default class Home extends Vue {}
</script>
