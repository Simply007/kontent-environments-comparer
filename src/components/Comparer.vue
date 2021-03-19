<template>
  <div class="comparer">
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-row align-content="center" align="center">
          <v-col cols="12" sm="12">
            <v-text-field
              filled
              clearable
              label="Source management API Key"
              v-model="sourceEnvironmentManagementId"
              :append-icon="showSourceManagementKey ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showSourceManagementKey ? 'text' : 'password'"
              @click:append="showSourceManagementKey = !showSourceManagementKey"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <v-btn @click="compare">Compare</v-btn>
      </v-col>
      <v-col cols="5">
        <v-row align-content="center" align="center">
          <v-col cols="12" sm="12">
            <v-text-field
              filled
              clearable
              label="Target management API Key"
              v-model="targetEnvironmentManagementId"
              :append-icon="showTargetManagementKey ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showTargetManagementKey ? 'text' : 'password'"
              @click:append="showTargetManagementKey = !showTargetManagementKey"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-tabs centered>
      <v-tabs-slider></v-tabs-slider>
      <v-tab> Content types </v-tab>
      <v-tab-item>
        <Diff
          :sourceObjects="sourceTypes"
          :targetObjects="targetTypes"
          objectIdentificationCodename="codename"
        />
      </v-tab-item>
      <v-tab> Content type snippets </v-tab>
      <v-tab-item>
        <Diff
          :sourceObjects="sourceSnippets"
          :targetObjects="targetSnippets"
          objectIdentificationCodename="codename"
        />
      </v-tab-item>
      <v-tab> Content taxonomies </v-tab>
      <v-tab-item
        ><Diff
          :sourceObjects="sourceTaxonomies"
          :targetObjects="targetTaxonomies"
          objectIdentificationCodename="codename"
        />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { ManagementClient } from "@kentico/kontent-management";
import Diff from "./Diff.vue";
import { getDashedGuid } from "../utils/guid";
import jwtDecode from "jwt-decode";

export default {
  name: "Comparer",
  components: {
    Diff
  },
  data() {
    return {
      showSourceManagementKey: false,
      showTargetManagementKey: false,
      sourceEnvironmentManagementId: "",
      targetEnvironmentManagementId: "",
      sourceTypes: [],
      targetTypes: [],
      sourceSnippets: [],
      targetSnippets: [],
      sourceTaxonomies: [],
      targetTaxonomies: []
    };
  },
  methods: {
    async compare() {
      const sourcePayload = jwtDecode(this.sourceEnvironmentManagementId);
      const targetPaload = jwtDecode(this.targetEnvironmentManagementId);

      const sourceClient = new ManagementClient({
        projectId: getDashedGuid(sourcePayload.project_id), // id of your Kentico Kontent project
        apiKey: this.sourceEnvironmentManagementId // Content management API token
      });

      const targetClient = new ManagementClient({
        projectId: getDashedGuid(targetPaload.project_id), // id of your Kentico Kontent project
        apiKey: this.targetEnvironmentManagementId // Content management API token
      });

      this.sourceTypes = await sourceClient
        .listContentTypes()
        .toPromise()
        .then(result => result.rawData.types);

      this.targetTypes = await targetClient
        .listContentTypes()
        .toPromise()
        .then(result => result.rawData.types);

      this.sourceSnippets = await sourceClient
        .listContentTypeSnippets()
        .toPromise()
        .then(result => result.rawData.snippets);

      this.targetSnippets = await targetClient
        .listContentTypeSnippets()
        .toPromise()
        .then(result => result.rawData.snippets);

      this.sourceTaxonomies = await sourceClient
        .listTaxonomies()
        .toPromise()
        .then(result => result.rawData.taxonomies);

      this.targetTaxonomies = await targetClient
        .listTaxonomies()
        .toPromise()
        .then(result => result.rawData.taxonomies);
    }
  }
};
</script>

<style scoped></style>
