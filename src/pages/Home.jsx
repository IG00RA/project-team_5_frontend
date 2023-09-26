import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { Description } from '../components/Description/Description';
import { useEffect, useState } from 'react';
import { fetchReviewsData } from 'redux/review/reviewOperations';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { CustomLoader } from 'components/Buttons/ChangeProfileButton/ChangeProfileButton.styled';
import Loader from 'components/Loader/Loader';
import { LanguageToggler } from 'components/LanguageToggler/LanguageToggler';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchReviewsData();
      setReviews(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <LanguageToggler />
      <AuthSection />
      <Description />
      {isLoading ? (
        <CustomLoader>
          <Loader />
        </CustomLoader>
      ) : (
        <ReviewsSlider reviews={reviews} />
      )}
      <ScrollToTop />
    </div>
  );
}
