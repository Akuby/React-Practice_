import '../css/MySlider.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import img1 from '../images/slide-image1.jfif'
import img2 from '../images/slide-image2.jfif'
import img3 from '../images/slide-image3.jfif'

function MySlider() {
  const myImageList = [img1, img2, img3]
  const result = myImageList.map(
    (data, idx) => (
      <div key={idx} id='my-slide-element'>
        <img src={data} alt={idx} />
      </div>
    )
  )
  const settings = {
    dots: true,

  };
  return(
    <div id='slider'>
      <Slider {...settings}>
        {result}
      </Slider>
    </div>
  )
}
export default MySlider;