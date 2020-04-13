<template>
  <div class="signup">
      <div class="container">
          <div class="logo">
                <router-link to="/" class="logo"><h2><i class="fa fa-cubes"></i> Home</h2></router-link>
          </div>
          <div class="row content">
              <div class="col-md-6">
                  <h1>Begin your journey here</h1>
                  <h2>It is fast and easy to complete</h2>
              </div>
              <div class="form__wrapper">
                  <form @submit.prevent="register()">
                      <div v-if="err" class="message err animated slideInRight">
                          {{ err }}
                      </div>
                     <div class="row">
                         <div class="col-md-6">
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" v-model="first__name" >
                      </div>
                         </div>
                         <div class="col-md-6">
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name" v-model="last__name">
                      </div>
                         </div>
                     </div>
                     <div class="form-group">
                         <input type="email" class="form-control" placeholder="Email address" v-model="email">
                     </div>
                      <div class="form-group">
                         <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
                     </div>
                     <div class="form-group">
                         <input type="tel" class="form-control" placeholder="Office or home address" v-model="address">
                     </div>
                     <div class="form-group">
                         <select class="form-control" id="inlineFormCustomSelect" v-model="plan">
                            <option selected>Select Investment Plan</option>
                            <option value="10,000">&#8358;10,000 to &#8358;15,000</option>
                            <option value="20,000">&#8358;20,000 to &#8358;30,000</option>
                            <option value="30,000">&#8358;30,000 to &#8358;45,000</option>
                            <option value="40,000">&#8358;40,000 to &#8358;60,000</option>
                            <option value="50,000">&#8358;50,000 to &#8358;75,000</option>
                            <option value="60,000">&#8358;60,000 to &#8358;90,000</option>
                            <option value="70,000">&#8358;70,000 to &#8358;105,000</option>
                            <option value="80,000">&#8358;80,000 to &#8358;120,000</option>
                            <option value="90,000">&#8358;90,000 to &#8358;135,000</option>
                            <option value="100,000">&#8358;100,000 to &#8358;150,000</option>
                             <option value="50,000">&#8358;50,000 to &#8358;150,000 (Promo plan)</option>
                             <option value="100,000">&#8358;100,000 to &#8358;300,000 (Promo plan)</option>
                            <option value="200,000">&#8358;200,000 to &#8358;600,000 (Promo plan)</option>
                            <option value="300,000">&#8358;300,000 to &#8358;900,000 (Promo plan)</option>
                            <option value="4000,000">&#8358;400,000 to &#8358;1,200,000 (Promo plan)</option>
                            <option value="5000,000">&#8358;500,000 to &#8358;1,500,000 (Promo plan)</option>
                         </select>
                     </div>
                      <div class="form-group">
                         <input type="password" class="form-control" placeholder="Password" v-model="password">
                     </div>
                     <div class="button__holder pt-3 d-flex justify-content-between">
                         <p>Got an account? <router-link to="/signin">Sign In</router-link></p>
                         <button type="submit" class="signup__btn">Create Account</button>
                     </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
data(){
    return{
        first__name:null,
        last__name:null,
        email:null,
        phone:null,
        password: null,
        plan: null,
        address:null,
        err:null
    }
},
methods:{
    register(){
        //Check if the user has filled in the form
        if(!this.first__name || !this.last__name || !this.email || !this.plan || !this.phone || !this.password){
            this.err = 'Plese fill out the form and try again'
            this.removeAlert()
        }else{
            //Register the new user here
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred=>{
                db.collection('users').add({
                    first_name:this.first__name,
                    last_name:this.last__name,
                    phone:this.phone,
                    email:this.email,
                    plan:this.plan,
                    address:this.address,
                    user_id:cred.user.uid
                })
                this.$router.push({name: 'dashboard'})
            })
            .catch(err =>{
                this.err = err.message
            })
        }
    },
    removeAlert(){
        setTimeout(() => {
            document.querySelector('.message').remove()
        }, 3000);
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.signup{
    background: $primary-color;
    color: #fff !important;
    height: 100%;
    .logo{
        text-decoration: none;
        h2{
            font-weight: bolder;
            font-size: 1.7rem;
            text-decoration: none;
            padding-top: 5rem;
            color:#fff;
        }
    }
    .content{
        padding-top: 6rem;
        h1{
            color: #fff;
            font-weight: bolder;
            font-size: 3rem;
        }
        h2{
            opacity: .5;
            color: #fff;
            font-size: 1.7rem;
            padding-top: .5rem;
            font-weight: 400;
        }
        p{
            color: #0A2E65;
            font-size: .95rem;
            font-weight: 400;
            opacity: .8;
        }
        a{
            color: #0A2E65;
            font-weight: bold;
            font-size: 1rem;
        }
    }
    .form__wrapper{
        padding-top: 6rem;
        background: #fff;
        border-radius: 4px;
        padding: 3rem 2.5rem;
        margin-bottom: 3rem;
        form{
            .err{
                background: rgb(150, 43, 43);
                color: #fff;
                border-radius: 3px;
                padding:.9rem 1rem;
                margin-bottom: 1rem;
                font-size: .9rem;
            }
            input, select{
                height: 3.5rem;
                box-shadow: none;
                padding: 1rem 1rem;
                &::placeholder{
                     color: #0a2e65;
                     opacity: .6;
                }
            }
            .signup__btn{
                background: $primary-color;
                padding: .7rem 1.4rem;
                border: none;
                border-radius: 3px;
                color: #fff;
            }
        }
    }
}

@media only screen and (max-width: 600px){
    .content{
        h1{
            padding-bottom: 3 !important;
            font-size: 2.2rem !important;
        }
    }
}
</style>