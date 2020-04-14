<template lang="html">

  <div class="">

    <!-- <div class="left">
      <div  style="background-color: red; padding: 30px; margin: 30px; width: 10%; left: 45%; position:relative;" >
        <a name="button" href="https://bbc.co.uk/news" target="_blank" rel="noopener" >BBC NEWS - new tab</a>
      </div>
      <div  idstyle="background-color: lightblue; padding: 30px; margin: 30px; width: 10%; left: 45%; position:relative; top: 10%;" >
        <a name="button" href="https://bbc.co.uk/news"  rel="noopener" >BBC NEWS</a>
      </div>
      <br>
    </div>

    <div class="right">
      <div class="" style="border: solid yellow 1px;">
        <img style="width: 200px" src="https://techcrunch.com/wp-content/uploads/2011/09/facebook_like_button_big.jpeg?w=490" alt="">
      </div>
    </div>
 -->

    <div class="" v-if="item">

      <!-- <img src="https://image.shutterstock.com/image-vector/cartoon-apple-260nw-651312034.jpg" alt="" style="width: 10%;" class="apple"> -->


<!--
      <div class="left">


        <button class="'linked'">Class: "linked"</button>


        <button class="'liked'">Class: "liked"</button>

        <br />

        <button href="#" name="button1" onclick="dataLayer.push({'event': 'dislike-click'});" >Dislike-click</button>
        <br>

        <button href="#" name="button1" onclick="dataLayer.push({'event': 'another-click'});" >another-click</button>

        <br />
      </div>

      <div class="right">

              <button onclick="AddFish()">AddFish()</button>
              <br />

              <button @click="dontLikeFish()">dontLikeFish()</button>

              <br>


              <button v-on:click="clickedCredits()">clickedCredits()></button>

              <br>
      </div> -->




      <!-- <button v-on="click: showAlert">Click</button> -->

      <h1>{{item.name}}</h1>
      <p>category: {{item.category}}</p>
      <p>description: {{item.description}}</p>
      <img :src="item.image" alt="" style="width: 30%;">

      <div class="" style=" margin-top: 20px;" id="likeFishID">
        <img style="width: 100px" src="https://techcrunch.com/wp-content/uploads/2011/09/facebook_like_button_big.jpeg?w=490" alt="">
      </div>



    </div>
  </div>


</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ItemPage',
  computed: {
  ...mapState([
    'items'
  ]),
    item() {
        const id = parseFloat(this.$route.params.id)


        return this.items.filter(function(item) {
            return item.id === id;
        })[0];
    },
    // dataPush() {
    //   if (this.item) {
    //     // this.dataLayer.push({'category_visited': this.item.category});
    //   }
    // }
  },
  methods: {
    AddFish() {
      this.dataLayer.push({'event': 'dislike-click'})

      // console.log(this.item.category)
      // this.dataLayer.push({'category_visited': this.item.category})
      console.log('i pushed something', this)
    },
    dontLikeFish() {
      this.dataLayer.push({'event': 'dislike-click'})
    },

    clickedCredits: function(){
      var dataObject = {
        'event': 'pressed_credits',
        'category': 'click',
        'label': 'label_pressed_credits'
      };
      if(typeof this.dataLayer != 'undefined'){
        this.dataLayer.push(dataObject);
      }
    },
    showAlert:function(){
      console.log("Hola", this);
      // console.log("Hola", dataLayer);
    }
  },
  created() {
    console.log('hello, i was created');
  }


}
</script>

<style lang="css" scoped>

button {
  display: block;
  margin: 10px;
  position: relative;
  left: 47.5%;
  width: 25%;
  /* background-color: red; */
}

.left, .right {
  width: 30%;
  position: relative;
  display: inline-block;
}

</style>
