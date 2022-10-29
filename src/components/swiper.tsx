import { Component } from "preact"

import SwiperJS from 'swiper';
import 'swiper/css';

export class Swiper extends Component {
  componentDidMount() {
    const swiper = new SwiperJS(".swiper", {
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    console.log(swiper);
  }

  render() {
    return (
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>)
  }
}
