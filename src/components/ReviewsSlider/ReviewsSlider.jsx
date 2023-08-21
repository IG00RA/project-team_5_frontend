import 'slick-carousel/slick/slick.css';
import { Btn, StyledSlider } from './ReviewsSlider.styled';

const RatingComponent = ({ value }) => {
  const maxRating = 5;
  const ratingArray = Array.from(
    { length: maxRating },
    (_, index) => index + 1
  );

  return (
    <div className="rating">
      {ratingArray.map(ratingValue => (
        <input
          key={ratingValue}
          type="checkbox"
          name="rating"
          className="mask mask-star-2 bg-stars-color"
          checked={value === ratingValue.toString()}
        />
      ))}
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