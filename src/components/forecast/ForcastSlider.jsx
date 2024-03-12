import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ForcastCard from "./ForcastCard";

import SunnyIcon from "../../assets/forecast/sunny.svg";
import WindModIcon from "../../assets/forecast/wind-mod.svg";
import MCloudyIcon from "../../assets/forecast/mostlyCloudy.svg";
import WindLowIcon from "../../assets/forecast/wind-low.svg";
import LRainIcon from "../../assets/forecast/lightRain.svg";
import HRainIcon from "../../assets/forecast/heavyRain.svg";
import WindModTwoIcon from "../../assets/forecast/wind-mod2.svg";
import WindHighIcon from "../../assets/forecast/wind-high.svg";
import NextIcon from "../../assets/next-btn.svg";

const ForcastSlider = () => {
  // Data
  const futureForecaseData = [
    {
      id: 1,
      date: "Today",
      weatherImg: SunnyIcon,
      temp: "14°C",
      type: "Sunny",
      windImage: WindModIcon,
      windValue: "6.7",
      windType: "Moderate",
    },
    {
      id: 2,
      date: "Tue, Sep 16",
      weatherImg: MCloudyIcon,
      temp: "14°C",
      type: "Mostly Cloudy",
      windImage: WindLowIcon,
      windValue: "1.2",
      windType: "Low",
    },
    {
      id: 3,
      date: "Wed, Sep 17",
      weatherImg: LRainIcon,
      temp: "9°C",
      type: "Light Rain",
      windImage: WindModTwoIcon,
      windValue: "4.1",
      windType: "Moderate",
    },
    {
      id: 4,
      date: "Thu, Sep 18",
      weatherImg: MCloudyIcon,
      temp: "10°C",
      type: "Mostly Cloudy",
      windImage: WindHighIcon,
      windValue: "8.2",
      windType: "High",
    },
    {
      id: 5,
      date: "Thu, Sep 18",
      weatherImg: HRainIcon,
      temp: "7°C",
      type: "Heavy Rain",
      windImage: WindModIcon,
      windValue: "6.3",
      windType: "Moderate",
    },
    {
      id: 6,
      date: "Today",
      weatherImg: SunnyIcon,
      temp: "14°C",
      type: "Sunny",
      windImage: WindModIcon,
      windValue: "6.7",
      windType: "Moderate",
    },
    {
      id: 7,
      date: "Tue, Sep 16",
      weatherImg: MCloudyIcon,
      temp: "14°C",
      type: "Mostly Cloudy",
      windImage: WindLowIcon,
      windValue: "1.2",
      windType: "Low",
    },
    {
      id: 8,
      date: "Today",
      weatherImg: SunnyIcon,
      temp: "14°C",
      type: "Sunny",
      windImage: WindModIcon,
      windValue: "6.7",
      windType: "Moderate",
    },
    {
      id: 9,
      date: "Tue, Sep 16",
      weatherImg: MCloudyIcon,
      temp: "14°C",
      type: "Mostly Cloudy",
      windImage: WindLowIcon,
      windValue: "1.2",
      windType: "Low",
    },
    {
      id: 10,
      date: "Wed, Sep 17",
      weatherImg: LRainIcon,
      temp: "9°C",
      type: "Light Rain",
      windImage: WindModTwoIcon,
      windValue: "4.1",
      windType: "Moderate",
    },
    {
      id: 11,
      date: "Thu, Sep 18",
      weatherImg: MCloudyIcon,
      temp: "10°C",
      type: "Mostly Cloudy",
      windImage: WindHighIcon,
      windValue: "8.2",
      windType: "High",
    },
    {
      id: 12,
      date: "Thu, Sep 18",
      weatherImg: HRainIcon,
      temp: "7°C",
      type: "Heavy Rain",
      windImage: WindModIcon,
      windValue: "6.3",
      windType: "Moderate",
    },
    {
      id: 13,
      date: "Today",
      weatherImg: SunnyIcon,
      temp: "14°C",
      type: "Sunny",
      windImage: WindModIcon,
      windValue: "6.7",
      windType: "Moderate",
    },
    {
      id: 14,
      date: "Tue, Sep 16",
      weatherImg: MCloudyIcon,
      temp: "14°C",
      type: "Mostly Cloudy",
      windImage: WindLowIcon,
      windValue: "1.2",
      windType: "Low",
    },
  ];

  const [slideBegOrNot, handleSlideBtyState] = useState({
    isFirst: true,
    isLast: false,
  });

  // Ref for the carousel
  const SliderRef = useRef();

  // Next SLide
  const handlePrev = () => {
    SliderRef?.current.swiper.slidePrev();
  };

  // Next SLide
  const handleNext = () => {
    SliderRef?.current.swiper.slideNext();
  };

  const onSlideChange = (swiper) => {
    handleSlideBtyState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isFirst, isLast } = slideBegOrNot;

  return (
    <div className="w-full relative">
      <Swiper
        ref={SliderRef}
        onSlideChange={onSlideChange}
        spaceBetween={16}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {futureForecaseData?.map((item) => (
          <SwiperSlide key={item.id}>
            <ForcastCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom Controller */}
      <div>
        {/* prev Icon */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-50">
          <img
            src={NextIcon}
            alt="next-icon"
            onClick={handlePrev}
            className={`cursor-pointer rotate-180 ${
              isFirst === true ? "invisible" : "visible"
            } duration-300 select-none`}
          />
        </div>

        {/* Next Icon */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-50">
          <img
            src={NextIcon}
            alt="next-icon"
            onClick={handleNext}
            className={`cursor-pointer ${
              isLast === true ? "invisible" : "visible"
            } duration-300 select-none`}
          />
        </div>
      </div>
    </div>
  );
};

export default ForcastSlider;
