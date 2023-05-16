<template>
  <div
    id="luckysheet"
    style="
      margin: 0px;
      padding: 0px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
    "
  ></div>
</template>

<script>
export default {
  mounted() {
    //Configuration item
    var options = {
      container: "luckysheet", //luckysheet is the container id
    };
    luckysheet.create(options);

    setTimeout(() => {
      luckysheet.setCellValue(0, 0, "Values");
      luckysheet.setCellValue(0, 1, "loaded");
      luckysheet.setCellValue(0, 2, "using");
      luckysheet.setCellValue(0, 3, "setTimeout");
    }, 2000);
  },
};
</script>