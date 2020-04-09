<template>
  <div class="features" id="features">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center heading pb-4">
                  <h2>Our Benefits Includes</h2>
              </div><br><br>
              <!--Tab section -->
              <div class="tab__header">
                <div><h4 @click="toggle()" ref="simplicity">Simple</h4></div>
                <div><h4 @click="toggle()" ref="security">Secured</h4></div>
                <div><h4 @click="toggle()" ref="safety">Safe</h4></div>
                <div><h4 @click="toggle()" ref="support">Care</h4></div>
                <div><h4 @click="toggle()" ref="speed">Speed</h4></div>
              </div>
          </div>
          <!--Row for the content of simplicity -->
          <div v-if="simplicity" class="row pt-5">
              <div class="col-md-4">
                  <img src="../assets/images/simple.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 pt-5 content">
                  <h4>There is so much you can do with one account</h4>
                  <hr>
                  <br>
                  <p>1.&nbsp;&nbsp;  We help provide access to high returns and safe investments in agriculture, cryptocurrencies, real estate and others.</p>
              </div>
          </div>
            <!--Row for the content of security -->
          <div v-if="security" class="row pt-5">
              <div class="col-md-4">
                  <img src="../assets/images/secure.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 pt-5 content">
                  <h4>Your security & privacy is our priority</h4>
                  <hr>
                  <br>
                  <p>We use bank level security with the latest security measures,<br> encrypted data and transactions</p>
                  <p>We value and respect your privacy.</p>
              </div>
          </div>
            <!--Row for the content of safety -->
          <div v-if="safety" class="row pt-5">
              <div class="col-md-4">
                  <img src="../assets/images/money.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 pt-5 content">
                  <h4>Safety comes first</h4>
                  <hr>
                  <br>
                  <p>Your funds are kept safe with our partner institutions and always safe.</p>
              </div>
          </div>
             <!--Row for the content of support -->
          <div v-if="support" class="row pt-5">
              <div class="col-md-4">
                  <img src="../assets/images/support.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 pt-5 content">
                  <h4>Real time support</h4>
                  <hr>
                  <br>
                  <p>Contact Funbile's friendly customer service consultants via our real time one on one chat. We also provide a comprehensive help section.</p>
              </div>
          </div>
           <!--Row for the content of Speed -->
          <div v-if="speed" class="row pt-5">
              <div class="col-md-4">
                  <img src="../assets/images/simple.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 pt-5 content">
                  <h4>Register in minutes and start investing today!</h4>
                  <hr>
                  <br>
                  <p>1.&nbsp;&nbsp; Open an account right on your phone or your laptop</p>
                  <p>1.&nbsp;&nbsp; Select an investment package</p>
                  <p>2.&nbsp;&nbsp; Make payment either through bitcoin to our wallet or through direct bank transfer</p>
                  <p>2.&nbsp;&nbsp; Wait for confirmation through app notification or email</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            simplicity:true,
            security:false,
            safety:false,
            support:false,
            speed:false
        }
    },
methods:{
    toggle(){
        //Toggle the content based on what ref the event trigerred
         if (event.target === this.$refs.simplicity) {
            this.simplicity = true
            this.security = false
            this.safety = false
            this.support = false
            this.speed = false
        return
      }else if(event.target == this.$refs.security){
          this.security = true
          this.simplicity = false
          this.safety = false
          this.support = false
          this.speed = false
          return
      }else if(event.target == this.$refs.safety){
          this.safety = true
          this.security = false
          this.simplicity = false
          this.support = false
          this.speed = false
          return
      }else if(event.target == this.$refs.support){
          this.support = true
          this.safety = false
          this.security = false
          this.simplicity = false
          this.speed = false
          return
      }else if(event.target == this.$refs.speed){
          this.speed = true
          this.support = false
          this.safety = false
          this.security = false
          this.simplicity = false
          return
      }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.features{
    background: $primary-color;
    padding: 7rem 0;
    color:#fff;
    .heading{
        h2{
            font-weight: 400;
        }
    }
    //TAB
    .tab__header{
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
       grid-gap: 1rem;
       width: 100%;
       background: #2D41A1;
       padding-top: 1rem;
       padding-right: 1rem;
       padding-left: 1rem;
       text-align: center;
       padding-bottom: .5rem;
       h4{
           cursor: pointer;
           display: inline-block;
           font-size: 1.1rem;
           opacity: .7;
       }

    }
    .content{
        h4{
            line-height: 1.4;
            font-weight: 400;
        }
        p{
            line-height: 1.7;
            opacity: .7;
            font-size: .9rem;
        }
        hr{
            background:#ccc;
            opacity: .3;
        }
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    .tab__header{
        grid-gap: 2rem !important;
    }
}
</style>