import React from 'react';
import { ReviewRaiting, ReviewPhoto, ReviewUsername, ReviewWrap, Title, Wrap, UserWrap, ReviewContainer, ReviewText, PhotoWrap } from 'components/ReviewsSlider/ReviewsSlider.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const ReviewsSlider = ({ reviewsData }) => {

  const sliderSettings = {
  autoPlay: true,
  dots: true, // Show dots (indicators)
  infinite: true, // Infinite loop
  speed: 2000, // Transition speed in milliseconds
  slidesToShow: 2, // Number of slides shown at once
  slidesToScroll: 2, // Number of slides to scroll
  showStatus: false,
  showIndicators: false,
  dynamicHeight: false,
  };

  return (
    <Wrap>
      <Title>Reviews</Title>          
      <div>
        <Carousel 
          /* autoPlay={true}
          interval={2000}
          emulateTouch={true}
          infiniteLoop={true}
          slidesToShow={'2'}
          centerSlidePercentage={true}

          useKeyboardArrows={'false'}

          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          dynamicHeight={false} */
          {...sliderSettings}
        >
          {reviewsData.map((review) => (
            <ReviewWrap key={review._id}>
              <ReviewContainer>
                <PhotoWrap>
                <ReviewPhoto src={review.owner.avatarURL} alt='Photo'/>
                </PhotoWrap>
                <UserWrap key={review.owner._id}>
                <ReviewUsername>{review.owner.userName}</ReviewUsername>
                  {/* <ReviewRaiting> */}
                    {/* {review.raiting} */}

                    <ReviewRaiting className="rating">

                      {review.raiting}
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </ReviewRaiting>

                  {/* </ReviewRaiting> */}
                </UserWrap>
              </ReviewContainer>
              <ReviewText>{review.review}</ReviewText>
            </ReviewWrap>
          ))}

          <div>
            <span>left</span>
            <span>right</span>
          </div>

        </Carousel>
      </div>
    </Wrap>
  )
}

export default ReviewsSlider;

