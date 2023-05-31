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
          <v-box>
            <v-text-field
              filled
              clearable
              label="Source environment ID"
              v-model="sourceEnvironmentId"
              :append-icon="sourceEnvironmentIdKey ? 'mdi-eye' : 'mdi-eye-off'"
              :type="sourceEnvironmentIdKey ? 'text' : 'password'"
              @click:append="sourceEnvironmentIdKey = !sourceEnvironmentIdKey"
            >
            </v-text-field>
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
          </v-box>
        </v-col>
        <v-col cols="12" md="2" style="text-align: center">
          <v-box>
            <v-list-item>
              <v-checkbox style="margin: auto;" v-model="qa" :label="`QA`" />
            </v-list-item>
            <v-list-item>
              <v-btn style="margin: auto;" @click="compare">Compare</v-btn>
            </v-list-item>
          </v-box>
        </v-col>
        <v-col cols="12" md="5">
          <v-box>
            <v-text-field
              filled
              clearable
              label="Target environment ID"
              v-model="targetEnvironmentId"
              :append-icon="targetEnvironmentIdKey ? 'mdi-eye' : 'mdi-eye-off'"
              :type="targetEnvironmentIdKey ? 'text' : 'password'"
              @click:append="targetEnvironmentIdKey = !targetEnvironmentIdKey"
            >
            </v-text-field>
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
          </v-box>
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
      sourceEnvironmentIdKey: false,
      targetEnvironmentIdKey: false,
      sourceEnvironmentManagementId: "",
      targetEnvironmentManagementId: "",
      sourceEnvironmentId: "",
      targetEnvironmentId: "",
      sourceTypes: [],
      targetTypes: [],
      sourceSnippets: [],
      targetSnippets: [],
      sourceTaxonomies: [],
      targetTaxonomies: [],
      loading: false,
      message: "",
      qa: false
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

      try {
        const sourceClient = new ManagementClient({
          projectId: this.sourceEnvironmentId, // id of your Kentico Kontent project
          apiKey: this.sourceEnvironmentManagementId, // Content management API token
          baseUrl: this.qa
            ? "https://manage.devkontentmasters.com/v2/projects"
            : undefined
        });

        const targetClient = new ManagementClient({
          projectId: this.targetEnvironmentId, // id of your Kentico Kontent project
          apiKey: this.targetEnvironmentManagementId, // Content management API token
          baseUrl: this.qa
            ? "https://manage.devkontentmasters.com/v2/projects"
            : undefined
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
