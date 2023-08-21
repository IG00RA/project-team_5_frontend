import 'slick-carousel/slick/slick.css';
import { Btn, StyledSlider } from './ReviewsSlider.styled';

const RatingComponent = ({ value }) => {
  const maxRating = 5;
  console.log(value)
  
  const ratingArray = Array.from(
    { length: maxRating },
    (_, index) => index + 1
  );

  return (
    <div className="rating">
      <div>
        {ratingArray.map(ratingValue => (
          <input
            key={ratingValue}
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked={ratingValue === value}
          />
        ))}
      </div>
    </div>
  );
};

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
        {reviews.map((review, idx) => (
          <li key={idx}>
            {review.review}
            <RatingComponent value={review.raiting} />{' '}
          </li>
        ))}
      </StyledSlider>
    </ul>
  );
};