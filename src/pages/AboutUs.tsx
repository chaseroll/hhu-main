import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const members = [
  {
    id: 1,
    name: "Kathrine Stover - Chairman",
    img: "./img/team1.png",
  },
  {
    id: 2,
    name: "Steve Jobs - Chief Designer",
    img: "./img/team2.png",
  },
  {
    id: 3,
    name: "Elon Musk - CEO",
    img: "./img/team3.png",
  },
  {
    id: 4,
    name: "Food Pantry",
    img: "./img/team1.png",
  },
];

const histories = [
  {
    id: 2005,
    img: './img/aboutus_2.png',
    title: 'Raised 25k in funding in the opening year.',
    desc1: 'Help us on our mission to improve the lives of those in Fannin County.',
    desc2: 'After that we knew we were on to something big.',
    value1: 'Raised 25k in funding.',
    value2: 'Supplied more than 10,000 meals.',
  },
  {
    id: 2010,
    img: './img/aboutus_2.png',
    title: 'Raised 35k in funding in the opening year.',
    desc1: 'Help us on our mission to improve the lives of those in Fannin County.',
    desc2: 'After that we knew we were on to something big.',
    value1: 'Raised 25k in funding.',
    value2: 'Supplied more than 10,000 meals.',
  },
  {
    id: 2015,
    img: './img/aboutus_2.png',
    title: 'Raised 45k in funding in the opening year.',
    desc1: 'Help us on our mission to improve the lives of those in Fannin County.',
    desc2: 'After that we knew we were on to something big.',
    value1: 'Raised 25k in funding.',
    value2: 'Supplied more than 10,000 meals.',
  },
  {
    id: 2024,
    img: './img/aboutus_2.png',
    title: 'Raised 55k in funding in the opening year.',
    desc1: 'Help us on our mission to improve the lives of those in Fannin County.',
    desc2: 'After that we knew we were on to something big.',
    value1: 'Raised 25k in funding.',
    value2: 'Supplied more than 10,000 meals.',
  },
]

function AboutUs() {
  const [hKey, setHKey] = useState(2005);

  const selectedHistory = useMemo(() => {
    return histories.find(_ => _.id == hKey);
  }, [hKey]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className="page bg-white text-black dark:bg-black dark:text-white">
      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-1/2 xl:w-auto">
            <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">Helping our community one step at a time.</h2>
            <p className="mt-4 sm:mt-12 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              Help us on our mission to improve the lives of those in Fannin County
            </p>
          </div>
          <div className='h-[310px] sm:h-[486px]'>
            <Swiper
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              spaceBetween={100}
              slidesPerView={1}
              className="h-full"
            >
              <SwiperSlide>
                <img src="./img/aboutus_1.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/aboutus_1.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/aboutus_1.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/aboutus_1.png" className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto py-8 sm:py-16">
        <h2 className="text-center text-[30px] sm:text-[48px] leading-[1.5]">
          Our History
        </h2>
        <p className="mt-4 sm:mt-12 text-base sm:text-[20px] leading-[1.5] text-center font-['Roboto-thin'] dark:text-[#909090]">
          Founding in 1969, our foundation has been on a mission to improve the lives of those in Fannin County
        </p>
        <div className="relative mt-12 sm:mt-20 flex items-center justify-between">
          <div className="absolute w-[98%] h-[1px] z-0 bg-[#E2E2E2] dark:bg-white" />
          <div
            onClick={()=>setHKey(2005)}
            className={`text-[12px] sm:text-[24px] py-2 sm:py-4 px-4 sm:px-8 z-10 cursor-pointer ${hKey == 2005 ? 'text-white dark:text-black bg-black dark:bg-white' : 'dark:text-[#909090] bg-[#E2E2E2] dark:bg-[#101010]'}`}
          >
            2005
          </div>
          <div
            onClick={()=>setHKey(2010)}
            className={`text-[12px] sm:text-[24px] py-2 sm:py-4 px-4 sm:px-8  z-10 cursor-pointer ${hKey == 2010 ? 'text-white dark:text-black bg-black dark:bg-white' : 'dark:text-[#909090] bg-[#E2E2E2] dark:bg-[#101010]'}`}
          >
            2010
          </div>
          <div
            onClick={()=>setHKey(2015)}
            className={`text-[12px] sm:text-[24px] py-2 sm:py-4 px-4 sm:px-8  z-10 cursor-pointer ${hKey == 2015 ? 'text-white dark:text-black bg-black dark:bg-white' : 'dark:text-[#909090] bg-[#E2E2E2] dark:bg-[#101010]'}`}
          >
            2015
          </div>
          <div
            onClick={()=>setHKey(2024)}
            className={`text-[12px] sm:text-[24px] py-2 sm:py-4 px-4 sm:px-8  z-10 cursor-pointer ${hKey == 2024 ? 'text-white dark:text-black bg-black dark:bg-white' : 'dark:text-[#909090] bg-[#E2E2E2] dark:bg-[#101010]'}`}
          >
            2024
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto mt-12 sm:m-0 md:pt-32 md:pb-16">
        {selectedHistory && <div className="flex flex-col xl:flex-row gap-10 sm:gap-20">
          <img src={selectedHistory.img} className="sm:w-1/2" />
          <div className="">
            <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">
              {selectedHistory.title}
            </h2>
            <p className="mt-4 sm:mt-20 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              {selectedHistory.desc1}
            </p>
            <p className="mt-2 sm:mt-8 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              {selectedHistory.desc2}
            </p>
            <div className="mt-8 sm:mt-20 stroke-black dark:stroke-white">
              <div className="flex items-center gap-4 sm:gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] sm:w-[20px]">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text-[20px] leading-[1.5]">{selectedHistory.value1}</p>
              </div>
              <div className="mt-6 sm:mt-12 flex items-center gap-4 sm:gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] sm:w-[20px]">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text-[20px] leading-[1.5]">{selectedHistory.value2}</p>
              </div>
            </div>
          </div>
        </div>}
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto mt-12 md:pt-32 md:pb-16">
        <h2 className="text-center text-[30px] sm:text-[48px] leading-[1.5]">
          Mission and Vision
        </h2>
        <div className="mt-4 sm:mt-20 flex flex-col md:flex-row md:gap-20">
          <div className="">
            <img src="./img/aboutus_3.png" className="" />  
            <h3 className="mt-8 sm:mt-16 sm:text-center text-[20px] sm:text-[32px] leading-[1.5]">
              Our Mission and Vision
            </h3>
            <p className="mt-4 sm:mt-8 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos consectetur, adipisci velit, sed quia non numquam eius consectetur, adipisci velit, sed.
            </p>
          </div>
          <img src="./img/aboutus_4.png" className="mt-8 mt:mt-0 md:w-[35%] xl:w-3/7" />
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-8 mx-auto  mt-12 md:pt-32 md:pb-16">
        <div className="w-full sm:py-20 gap-20">
          <h2 className="w-full text-[30px] sm:text-[48px] leading-[1.5]">Meet Our Team</h2>
          <p className="text-base sm:text-[20px] leading-[1.5] mt-4 sm:mt-8 w-full max-w-3xl font-['Roboto-thin'] dark:text-[#909090]">
            Meet the team that is responsible for HHU. Our members are committed to creating a future where humanity can thrive and prosper.
          </p>
          <div className='mt-8 sm:mt-28 w-full'>
            <Swiper
              spaceBetween={70}
              slidesPerView={3}
               breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768:{
      slidesPerView:3
    }
  }}
         
              pagination={pagination}
              modules={[Pagination]}
            >
              {members.map(_ =>
                <SwiperSlide key={_.id}>
                  <div className='flex justify-center'>
                    <div className="w-fit">
                      <img src={_.img} className='xl:h-96' />
                      <div className='pt-8 rounded-b-3xl'>
                        <p className="text2 font-['Roboto-thin'] text-black dark:text-[#909090]">
                          {_.name}
                        </p>
                        <div className='mt-4 flex gap-5 stroke-black dark:stroke-white'>
                          <button>
                            <svg width="26" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.42859 35.7144V4.28585C1.42859 3.52808 1.72961 2.80137 2.26543 2.26555C2.80125 1.72973 3.52796 1.42871 4.28573 1.42871H35.7143C36.472 1.42871 37.1989 1.72973 37.7346 2.26555C38.2703 2.80137 38.5714 3.52808 38.5714 4.28585V35.7144C38.5714 36.4721 38.2703 37.199 37.7346 37.7347C37.1989 38.2704 36.472 38.5716 35.7143 38.5716H27.1429V25.0287H29.1714C29.6337 25.0287 30.0769 24.8451 30.4037 24.5183C30.7306 24.1914 30.9143 23.7481 30.9143 23.2859V21.0859C30.9143 20.857 30.8692 20.6303 30.7817 20.4189C30.694 20.2074 30.5657 20.0153 30.4037 19.8535C30.242 19.6916 30.0497 19.5633 29.8383 19.4757C29.6269 19.3881 29.4003 19.343 29.1714 19.343H27.2572V16.6573C27.2572 14.2573 28.3429 14.2573 29.4286 14.2573H30.8286C31.0586 14.2668 31.2877 14.2256 31.5 14.1367C31.7123 14.0479 31.9026 13.9135 32.0572 13.743C32.2232 13.5849 32.3546 13.3941 32.4432 13.1827C32.5317 12.9712 32.5754 12.7437 32.5714 12.5144V10.4001C32.5792 10.1675 32.5409 9.9356 32.4586 9.71777C32.3766 9.49991 32.2526 9.30037 32.0932 9.13054C31.934 8.96074 31.7429 8.82394 31.5309 8.72803C31.3189 8.63211 31.0897 8.57894 30.8572 8.57157H27.5714C26.6127 8.53551 25.6576 8.70803 24.772 9.07717C23.8865 9.44628 23.0916 10.0033 22.4424 10.7096C21.7931 11.4159 21.3049 12.2547 21.0115 13.1682C20.718 14.0816 20.6264 15.0478 20.7429 16.0001V19.343H18.9143C18.683 19.3392 18.4533 19.3815 18.2386 19.4674C18.0238 19.5533 17.8283 19.681 17.6634 19.8433C17.4985 20.0055 17.3676 20.1989 17.2782 20.4122C17.1888 20.6256 17.1428 20.8546 17.1429 21.0859V23.2859C17.1428 23.5171 17.1888 23.7461 17.2782 23.9595C17.3676 24.1728 17.4985 24.3662 17.6634 24.5285C17.8283 24.6907 18.0238 24.8185 18.2386 24.9043C18.4533 24.9902 18.683 25.0325 18.9143 25.0287H20.7429V38.5716H4.28573C3.52796 38.5716 2.80125 38.2704 2.26543 37.7347C1.72961 37.199 1.42859 36.4721 1.42859 35.7144Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button>
                            <svg width="26" height="22" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.6087 39.3744C13.7178 40.5941 11.4645 41.1258 9.22775 40.88C6.99101 40.6338 4.90717 39.6252 3.32668 38.0233L1.94494 36.6723C1.33918 36.0526 1 35.2206 1 34.3541C1 33.4877 1.33918 32.6553 1.94494 32.036L7.8096 26.2326C8.42403 25.6288 9.25101 25.2905 10.1125 25.2905C10.9739 25.2905 11.801 25.6288 12.4154 26.2326C13.035 26.8384 13.8671 27.1776 14.7336 27.1776C15.6001 27.1776 16.4322 26.8384 17.0518 26.2326L26.2633 17.0211C26.5706 16.7183 26.8146 16.3574 26.9812 15.9594C27.1477 15.5614 27.2335 15.1343 27.2335 14.7029C27.2335 14.2714 27.1477 13.8443 26.9812 13.4463C26.8146 13.0484 26.5706 12.6875 26.2633 12.3846C25.6595 11.7702 25.3212 10.9432 25.3212 10.0818C25.3212 9.22031 25.6595 8.39332 26.2633 7.77889L32.0972 1.94494C32.7169 1.33917 33.5489 1 34.4154 1C35.2821 1 36.1141 1.33917 36.7338 1.94494L38.0849 3.32668C39.6864 4.90717 40.6951 6.99101 40.9412 9.22775C41.1874 11.4645 40.6557 13.7178 39.4357 15.6087C33.0797 24.976 24.9923 33.0424 15.6087 39.3744Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-8 mx-auto mt-12 md:mt-0 py-16">
        <div className="w-full gap-20">
          <h2 className="w-full text-[30px] sm:text-[48px] leading-[1.5]">Our Sponsors</h2>
          <p className="text-base sm:text-[20px] leading-[1.5] mt-4 sm:mt-8 w-full max-w-3xl dark:font-['Roboto-thin'] dark:text-[#909090]">
            Meet the team that is responsible for HHU.
          </p>
          <div className='mt-8 sm:my-16'>
            <Swiper
              spaceBetween={40}
              slidesPerView={4}
              breakpoints={{
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },         
    768:{
      slidesPerView:4
    }
  }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
            >
              <SwiperSlide>
                <img src='./img/spacex-white.png' className='hidden dark:block' />
                <img src='./img/SpaceX_Black.png' className='dark:hidden' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./img/Amazon-white.png' className='hidden dark:block' />
                <img src='./img/amazon-black.png' className='dark:hidden' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./img/Google-white.png' className='hidden dark:block' />
                <img src='./img/google-black.png' className='dark:hidden' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./img/spacex-white.png' className='hidden dark:block' />
                <img src='./img/SpaceX_Black.png' className='dark:hidden' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./img/spacex-white.png' className='hidden dark:block' />
                <img src='./img/SpaceX_Black.png' className='dark:hidden' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
