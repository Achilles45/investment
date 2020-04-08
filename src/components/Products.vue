<template>
  <div class="products" id="products">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <img src="../assets/images/img4.svg" class="img-fluid" alt="">
              </div>
              <div class="col-md-6">
                  <div class="heading">
                      <h2>Flexible Investments & Crowdfunding Solutions</h2>
                      <p>Our features were created with our users in mind so you can get started in few minutes from any device.</p>
                  </div>
                  <div class="details">
                      <div class="first d-flex">
                          <!-- <div class="label">1</div> -->
                          <div class="content">
                              <h4>Investment Solution</h4>
                              <p>You can invest in different asset classes ranging from cryptocurrencies, mutual funds, to custom packages and others.</p>
                          </div>
                      </div><br>
                       <!-- <div class="first d-flex">
                          <div class="label">2</div>
                          <div class="content">
                              <h4>Budgeting Solution</h4>
                              <p>VueFinance can also help you keep track of your finances by providing a detailed record of all incomes and expenditures.</p>
                          </div>
                      </div> -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.products{
    padding: 6rem 0;
    .heading{
        h2{
            font-weight: bold;
            color:$primary-color;
        }
        p{
            color:#00093a;
            opacity: .7;
            padding-top: .4rem;
            font-weight: 400;
            line-height: 1.7;
            font-size: 1rem;
        }
    }
    .details{
        padding-top: 1.6rem;
        .first{
            .label{
                background: $primary-color;
                color: #fff !important;
                border-radius: 50%;
                height: 40px;
                width: 70px;
                padding-top: .5rem;
                text-align: center;
                margin-right: 2rem;
            }
            .content{
                h4{
                    font-weight: bold;
                    color: $primary-color;
                    padding-bottom: .4rem;
                    opacity: .8;
                }
                p{
                    color: #00093a;
                    opacity: .7;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>