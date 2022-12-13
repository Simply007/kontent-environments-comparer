<template>
  <div class="comparer">
    <v-container>
      <v-banner v-if="message">
        <v-icon slot="icon" color="warning" size="36">
          mdi-alert-circle-outline
        </v-icon>
        {{ message }}

        <template v-slot:actions>
          <v-btn color="primary" text v-on:click="closeBanner"> Close </v-btn>
        </template>
      </v-banner>
      <v-row align="center" justify="center" align-items="center">
        <v-col cols="12" md="5">
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
        <v-col cols="12" md="2" style="text-align: center">
          <v-btn @click="compare">Compare</v-btn>
        </v-col>
        <v-col cols="12" md="5">
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
      <v-progress-linear indeterminate v-if="loading" />
    </v-container>
    <v-tabs centered v-if="displayTabs">
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-if="displayTypesTab"> Content types </v-tab>
      <v-tab-item v-if="displayTypesTab">
        <Diff
          :sourceObjects="sourceTypes"
          :targetObjects="targetTypes"
          objectIdentificationCodename="codename"
        />
      </v-tab-item>
      <v-tab v-if="displaySnippetsTab"> Content type snippets </v-tab>
      <v-tab-item v-if="displaySnippetsTab">
        <Diff
          :sourceObjects="sourceSnippets"
          :targetObjects="targetSnippets"
          objectIdentificationCodename="codename"
        />
      </v-tab-item>
      <v-tab v-if="displayTaxonomiesTab"> Content taxonomies </v-tab>
      <v-tab-item v-if="displayTaxonomiesTab">
        <Diff
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
      targetTaxonomies: [],
      loading: false,
      message: ""
    };
  },
  computed: {
    displayTabs: function() {
      return (
        (this.displayTypesTab ||
          this.displaySnippetsTab ||
          this.displayTaxonomiesTab) &&
        this.loading === false
      );
    },
    displayTypesTab: function() {
      return this.sourceTypes.length > 0 || this.targetTypes.length > 0;
    },
    displaySnippetsTab: function() {
      return this.sourceSnippets.length > 0 || this.targetSnippets.length > 0;
    },
    displayTaxonomiesTab: function() {
      return (
        this.sourceTaxonomies.length > 0 || this.targetTaxonomies.length > 0
      );
    }
  },
  methods: {
    closeBanner() {
      this.message = "";
    },
    showMessage(message) {
      this.message = message;
    },
    async compare() {
      this.loading = true;

      let sourceProjectId = "";
      let targetProjectId = "";

      try {
        const sourcePayload = jwtDecode(this.sourceEnvironmentManagementId);
        sourceProjectId = getDashedGuid(sourcePayload.project_id);
      } catch (error) {
        this.message =
          "Error parsing source Management API key. Check console for detailed error.";
        this.loading = false;
        console.error(error.message);
        throw error;
      }

      try {
        const targetPaload = jwtDecode(this.targetEnvironmentManagementId);
        targetProjectId = getDashedGuid(targetPaload.project_id);
      } catch (error) {
        this.message =
          "Error parsing target Management API key. Check console for detailed error.";
        this.loading = false;
        console.error(error.message);
        throw error;
      }

      try {
        const sourceClient = new ManagementClient({
          projectId: sourceProjectId, // id of your Kentico Kontent project
          apiKey: this.sourceEnvironmentManagementId // Content management API token
        });

        const targetClient = new ManagementClient({
          projectId: targetProjectId, // id of your Kentico Kontent project
          apiKey: this.targetEnvironmentManagementId // Content management API token
        });

        this.sourceTypes = await sourceClient
          .listContentTypes()
          .toAllPromise()
          .then(result => {
            return [
              ...result.responses.flatMap(response => response.rawData.types)
            ];
          });

        this.targetTypes = await targetClient
          .listContentTypes()
          .toAllPromise()
          .then(result => {
            return [
              ...result.responses.flatMap(response => response.rawData.types)
            ];
          });

        this.sourceSnippets = await sourceClient
          .listContentTypeSnippets()
          .toAllPromise()
          .then(result => [
            ...result.responses.flatMap(response => response.rawData.snippets)
          ]);

        this.targetSnippets = await targetClient
          .listContentTypeSnippets()
          .toAllPromise()
          .then(result => [
            ...result.responses.flatMap(response => response.rawData.snippets)
          ]);

        // Taxonomies are not paginated
        this.sourceTaxonomies = await sourceClient
          .listTaxonomies()
          .toPromise()
          .then(result => result.rawData.taxonomies);

        this.targetTaxonomies = await targetClient
          .listTaxonomies()
          .toPromise()
          .then(result => result.rawData.taxonomies);

        this.loading = false;
      } catch (error) {
        this.message =
          "Error in loading data. Check console for detailed error.";
        this.loading = false;
        console.error(error.message);
        throw error;
      }
    }
  }
};
</script>

<style scoped></style>
