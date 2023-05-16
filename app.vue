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
  },
};
</script>