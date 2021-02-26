<template>
  <div>
    <div v-html="diffResult" />
  </div>
</template>

<script>
import { createTwoFilesPatch } from "diff";
import { html, parse } from "diff2html";
import "diff2html/bundles/css/diff2html.min.css";

export default {
  name: "Diff",
  props: {
    sourceObjects: Array,
    targetObjects: Array,
    objectIdentificationCodename: String
  },
  computed: {
    diffResult: function() {
      if (this.sourceObjects.length === 0 && this.targetObjects.length === 0) {
        return "N/A";
      }
      const json = [];
      this.sourceObjects.forEach(sourceType => {
        const targetTypeCandidate =
          this.targetObjects.find(
            target =>
              target[this.objectIdentificationCodename] ===
              sourceType[this.objectIdentificationCodename]
          ) || {};
        const diffInput = createTwoFilesPatch(
          sourceType[this.objectIdentificationCodename],
          sourceType[this.objectIdentificationCodename], // maybe change as a filename
          JSON.stringify(sourceType, undefined, 2),
          JSON.stringify(targetTypeCandidate, undefined, 2)
        );
        json.push(...parse(diffInput));
      });

      const sourceTypesCodenames = this.sourceObjects.map(
        sourceType => sourceType[this.objectIdentificationCodename]
      );
      const extraTargetTypes = this.targetObjects.filter(
        targetType =>
          !sourceTypesCodenames.includes(
            targetType[this.objectIdentificationCodename]
          )
      );
      extraTargetTypes.forEach(extraTargetType => {
        const diffInput = createTwoFilesPatch(
          extraTargetType[this.objectIdentificationCodename],
          extraTargetType[this.objectIdentificationCodename], // maybe change as a filename
          JSON.stringify({}, undefined, 2),
          JSON.stringify(extraTargetType, undefined, 2)
        );
        json.push(...parse(diffInput));
      });

      const htmlDiffOutput = html(json, {
        drawFileList: true,
        matching: "lines",
        outputFormat: "side-by-side"
      });
      return htmlDiffOutput;
    }
  }
};
</script>

<style scoped></style>
