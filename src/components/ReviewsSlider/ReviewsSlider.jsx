import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import {
  StyledSliser,
  ReviewsWrapper,
  Title,
  Img,
  ReviewWrapper,
  Name,
  Review,
  BtnArrowPrev,
  BtnArrowNext,
  Icon,
} from './ReviewsSlider.styled';
import { useEffect, useState } from 'react';

import {
  AvatarTextContainer,
  AvatarText,
} from 'components/UserForm/UserForm.styled';

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
  const [slide, setSlide] = useState(window.innerWidth >= 1440 ? 2 : 1);

  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth >= 1440) {
        setSlide(2);
        return;
      }

      if (window.innerWidth < 1440) {
        setSlide(1);
        return;
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const CustomNextArrow = props => (
    <BtnArrowNext {...props}>
      <Icon>
        <use href={sprite + '#icon-down-arrow-right'}></use>
      </Icon>
    </BtnArrowNext>
  );

  const CustomPrevArrow = props => (
    <BtnArrowPrev {...props}>
      <Icon>
        <use href={sprite + '#icon-down-arrow-left'}></use>
      </Icon>
    </BtnArrowPrev>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: slide,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <ReviewsWrapper>
      <Title>Reviews</Title>
      <ul>
        <StyledSliser {...settings}>
          {reviews.map(review => (
            <li key={review.owner._id}>
              <ReviewWrapper>
                {review.owner.avatarURL ? (
                  <Img
                    src={review.owner.avatarURL}
                    alt={review.owner.userName}
                  />
                ) : (
                  <AvatarTextContainer
                    style={{
                      height: '50px',
                      width: '50px',
                    }}
                  >
                    <AvatarText
                      style={{
                        fontSize: '22px',
                      }}
                    >
                      {review.owner.userName ? review.owner.userName[0] : ''}
                    </AvatarText>
                  </AvatarTextContainer>
                )}

                <div>
                  <Name>{review.owner.userName}</Name>
                  <RatingComponent value={review.rating} />
                  <Review>{review.review}</Review>
                </div>
              </ReviewWrapper>
            </li>
          ))}
        </StyledSliser>
      </ul>
    </ReviewsWrapper>
  );
};

ReviewsSlider.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};