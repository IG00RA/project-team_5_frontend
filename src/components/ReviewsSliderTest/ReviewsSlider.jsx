import 'slick-carousel/slick/slick.css';
import { Btn, StyledSlider } from './ReviewsSlider.styled';
  
export const ReviewsSlider = ({ reviews }) => {

  const CustomNextArrow = props => <Btn {...props}>Next</Btn>
  
  const CustomPrevArrow = props => <Btn {...props}>Prev</Btn>

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <ul>
      <StyledSlider {...settings}>
        {/* {reviews.map((review, idx) => (
          <li key={idx}>
            {review.review}
          </li>
        ))} */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </StyledSlider>
    </ul>
  );
};