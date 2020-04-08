<template lang="html">
  <div class="">
    <h1>Items page</h1>

    <div class="box-continer">
      <div class="item-box" v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'Itempage', params: { id: item.id }}" >


          <div class="title">
          {{ item.name }}
          <div class="image">
            <img :src="item.image" alt="">
          </div>

        </div>
      </router-link>

      <button type="button" name="button" class="'liked'">LIKE</button>
      </div>
    </div>





  </div>

</template>

<script>

export default {
  name: 'Items',
  computed: {
    items(){
      return this.$store.state.items
    }
  }

}
</script>

<style lang="scss" scoped>

.box-continer {
  width: 600px;
  position: absolute;
  left: 30%;
  // border: solid red 1px;

  .item-box {
    // border: solid red 1px;
    position: relative;
    width: 48%;
    height: 200px;
    display: inline-block;
    margin: 5px;
    .image {
      margin-top: 20px;

      width: 200px;
      height: 200px;
      img {
        // max-width:100%;
        max-height:80%;
        object-fit: cover;

      }
    }
    .title {
      position: relative;
      margin-top: 10%;
      // border: solid red 1px;
      height: 20px;
    }
  }
}


</style>
