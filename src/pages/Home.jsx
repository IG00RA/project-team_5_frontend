import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { Description } from '../components/Description/Description';
import { useEffect, useState } from 'react';
import { fetchReviewsData } from 'redux/review/reviewOperations';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

export default function Home() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchReviewsData();
      setReviews(data);
    })();
  }, []);
  
  return (
    <div>
        <AuthSection />
        <Description />
        <ReviewsSlider reviews={reviews} />
        <ScrollToTop/>
      </div>
  );
};