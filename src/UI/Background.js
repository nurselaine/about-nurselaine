import './Background.scss';

import { When } from 'react-if';

export default function Background() {

  const parallax = (e) => {
    document.querySelectorAll(".parallax-wrap div.parallax-img").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <section id='background'>
      <When condition={window.innerWidth > 600}>
        <div className='parallax-wrap' onMouseMove={parallax} >
          <div className='parallax-img' value="-5"><img src="./assets/img/scalene-triangle.png" alt="" /></div>
          <div className='parallax-img' value="5"><img src="./assets/img/star.png" alt="" /></div>
          <div className='parallax-img' value="5"><img src="./assets/img/octagon.png" alt="" /></div>
          <div className='parallax-img' value="-5"><img src="./assets/img/trapezoid.png" alt="" /></div>
          <div className='parallax-img' value="5"><img src="./assets/img/heptagon.png" alt="" /></div>
          <div className='parallax-img' value="-5"><img src="./assets/img/parallelogram.png" alt="" /></div>
          <div className='parallax-img' value="5"><img src="./assets/img/diamond.png" alt="" /></div>
          <div className='parallax-img' value="-5"><img src="./assets/img/line.png" alt="" /></div>
          <div className='parallax-img' value="-5"><img src="./assets/img/line-black.png" alt="" /></div>
        </div>
      </When>
    </section>
  )
}