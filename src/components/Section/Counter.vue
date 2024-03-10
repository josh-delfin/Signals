<template>
    <div class="counter">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-3 col-md-4 text-center">
            <v-counter-item img-src="assets/img/counter-1.png" count="50M+" text="Trading Volume (USD)" />
          </div>
          <div class="col-xl-3 col-md-4 text-center">
            <v-counter-item img-src="assets/img/counter-2.png" count="400K+" text="Transactions" />
          </div>
          <div class="col-xl-3 col-md-4 text-center">
            <v-counter-item img-src="assets/img/counter-3.png" count="10K+" text="Happy Users" />
          </div>
          <div class="col-xl-3 col-md-4 text-center">
            <v-counter-item img-src="assets/img/counter-4.png" count="20K+" text="Custom Portfolios Created" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Counter',
  });
  </script>
  
  <style>
  .counter {
    padding: 90px 0px 60px;
  }
  .counter .page-counter {
    margin-top: 30px;
  }
  .counter .page-counter .thmb {
    margin: 0 auto 0px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0.942px 17.975px 24px 0px rgba(110, 100, 199, 0.22);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counter .page-counter .counter-item {
    margin-top: 34px;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 40px;
    line-height: 60px;
    color: #142645;
  }
  .counter .page-counter .counter-item h2.fifty span {
    font-family: "Josefin Sans", sans-serif;
    font-size: 40px;
    line-height: 60px;
    color: #142645;
  }
  .counter .page-counter .counter-item p.text {
    color: #142645;
  }
  </style>
  