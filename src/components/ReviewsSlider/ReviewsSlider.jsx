import React, { useState } from 'react';
import { ReviewRaiting, ReviewPhoto, ReviewUsername, ReviewWrap, Title, Wrap, UserWrap, ReviewContainer, ReviewText, PhotoWrap, CarouselWrap } from 'components/ReviewsSlider/ReviewsSlider.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CustomCarouselButtons } from './CustomCarouselButtons'

const ReviewsSlider = ({ reviewsData }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 25;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const RatingComponent = ({ value }) => {
    const maxRating = 5;
    const ratingArray = Array.from(
      { length: maxRating },
      (_, index) => index + 1
    );
  }

  return (
    <Wrap>
      <Title>Reviews</Title>          
      <div>
        <CarouselWrap>
        <Carousel
          autoPlay={true}
          selectedItem={currentIndex}
          InfiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          showIndicators={false}
          stopOnHover={true}
          emulateTouch={true}
          interval={1500}
          transitionTime={500}   
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

                      {/* <RatingComponent value={review.raiting}> */}

                        {review.raiting}
                        <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                      {/* </RatingComponent> */}

                    {/* </ReviewRaiting> */}
                    </UserWrap>
                  </ReviewContainer>
                <ReviewText>{review.review}</ReviewText>
              </ReviewWrap>
          ))}
        </Carousel>
        </CarouselWrap>
      </div>
      <CustomCarouselButtons
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </Wrap>
  )
}

export default ReviewsSlider;
