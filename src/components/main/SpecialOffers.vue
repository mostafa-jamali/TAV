<template>
  <div class="special-offers mt-4">
    <div class="d-flex justify-content-between">
      <p><b>Special Offers</b></p>
      <a href="/services/all"><b class="see-all-link">See All</b></a>
    </div>
    <div class="slider">
      <div>
        <b-carousel id="carousel-fade" fade indicators img-width="150" img-height="150">
          <b-carousel-slide img-blank img-alt="#" v-for="carouselItem in carouselData">
            <section>
              <h1 class="percent-item">{{ carouselItem.percent }}%</h1>
              <h4 class="title-item">{{ carouselItem.title }}</h4>
              <p class="text-item">
                {{ carouselItem.text1 }} <br />
                {{ carouselItem.text2 }}
              </p>
            </section>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SpecialOffers',
  data() {
    return {
      carouselData: [
        {
          percent: '25',
          title: 'Today`s Special! (1)',
          text1: 'Get discount for every (1)',
          text2: 'order, only valid for today (1)',
        },
        {
          percent: '35',
          title: 'Today`s Special! (2)',
          text1: 'Get discount for every (2)',
          text2: 'order, only valid for today (2)',
        },
        {
          percent: '45',
          title: 'Today`s Special! (3)',
          text1: 'Get discount for every (3)',
          text2: 'order, only valid for today (3)',
        },
        {
          percent: '55',
          title: 'Today`s Special! (4)',
          text1: 'Get discount for every (4)',
          text2: 'order, only valid for today (4)',
        },
      ],
    };
  },
};
</script>
