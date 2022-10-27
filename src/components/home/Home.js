
import './Home.scss';

export default function Home() {

const parallax = (e) => {
  document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - e.pageX * position) / 90;
    const y = (window.innerHeight - e.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


  return (
<div class="parallax-wrap" onMouseMove={parallax}>
  {/* <div value="-15"><img src="../../../public/img/octagon.png" alt=""/></div> */}
  <span value='-15'></span>
  <span value="5"></span>
  <span value="30"></span>
  <span value="-5"></span>
  <span value="15"></span>
  <h2>Hello. I'm Elaine</h2>
</div>
  )
}