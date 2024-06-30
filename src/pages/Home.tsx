import React, { useRef , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Map from '../components/Map';
import getStripe, {PRICE_ID} from '../lib/getStripe';

import emailjs from '@emailjs/browser';

const projects = [
  {
    id: 1,
    name: "Food Pantry",
    img: "./img/project1.png",
  },
  {
    id: 2,
    name: "Shelters",
    img: "./img/project2.png",
  },
  {
    id: 3,
    name: "Clothing",
    img: "./img/project3.png",
  },
  {
    id: 4,
    name: "Food Pantry",
    img: "./img/project1.png",
  },
];

const events = [
  {
    id: 1,
    title: "Education for Poor Children",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "10:00 - 18:00, Friday",
  },
  {
    id: 2,
    title: "Education for Poor Children",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "10:00 - 18:00, Friday",
  },
  {
    id: 3,
    title: "Education for Poor Children",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    date: "10:00 - 18:00, Friday",
  }
];

function Home() {
  const form = useRef(null);
  const [message, setMessage] = useState('');
  const [sname, setSname] = useState('');
   const [sepvalue, setSepvalue] = useState('');
   const [smessage, setSmessage] = useState('');
   const [isloading, setIsloading] = useState(false);
  const [formsuccess, setFormsuccess] = useState(false);
 const [snameerror, setSnameerror] = useState(false);
  const [sepvalueerror, setSepvalueerror] = useState(false);
  const [smessageerror, setSmessageerror] = useState(false);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      lineItems: [{
        price: PRICE_ID,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/success`,
      submitType: 'donate',
    });
    console.warn(error.message);
  }
  
  const signup = () => {
    setMessage('Hi I am interested in volunteering for your organization"');
  }
   
const handleform = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
   setIsloading(true);
 const currentForm = form.current;
    if (currentForm == null) return;
  if(sname && sepvalue && smessage)
  {
    setSnameerror(false);
    setSepvalueerror(false);
    setSmessageerror(false);
    emailjs
      .sendForm('service_ws21xtl', 'template_mcvpuol', currentForm, {
        publicKey: '-Rm081AKzibsOHEEV',
      })
      .then(
        () => {
          setIsloading(false);
          setFormsuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  else
  {
    setIsloading(false);
    if(sname)
    {
       setSnameerror(false);
    }
    else
    {
    setSnameerror(true);
    }
     if(sepvalue)
    {
       setSepvalueerror(false);
    }
    else
    {
    setSepvalueerror(true);
    }
    if(smessage)
    {
       setSmessageerror(false);
    }
    else
    {
    setSmessageerror(true);
    }
  }
}
  return (
    <div className="home bg-white text-black dark:bg-black dark:text-white">
      <section className="relative section1 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-4xl md:text-[64px] font-bold text-center dark:text-white">All Is Grace.</h1>
          <h3 className="text-base md:text-[32px] leading-[1.5] text-center font-['Roboto-thin'] max-w-2xl mt-2 md:mt-12 dark:text-[#909090]">
            Join us in serving those in Fannin County who need our help the most.
          </h3>
          <a href='#upcoming' className="px-4 sm:px-12 py-2 sm:py-4 font-semibold rounded-[5px] sm:rounded-xl text3 sm:text2 mt-6 md:mt-16 bg-[#FF3F4F] dark:text-black">
            Events
          </a>
        </div>
        <div className="absolute left-0 bottom-0 w-full">
          <img src="./img/home_section1_effect.png" alt="effect1" className="w-full" />
        </div>
      </section>

      <section className="section2  w-full max-w-screen-2xl px-5 sm:px-8 mx-auto py-16">
        <div className="flex flex-col items-center text-center md:py-32">
          <h3 className="max-w-2xl">
            <span className="font-medium ml-2 dark:text-white">21,450</span>
            <span className="font-['Roboto-thin'] ml-2 dark:text-[#909090]">People in</span>
            <span className="font-medium ml-2 dark:text-white">Fannin County</span>
            <span className="font-['Roboto-thin'] ml-2 dark:text-[#909090]">are unsure of where their next meal will come from.</span>
          </h3>
          <p className="text1 mt-12 dark:text-white">
            We believe we can make a difference.
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-8 mt-20 dark:text-white">
            <div className="flex flex-col items-center">
              <svg width="57" height="50" viewBox="0 0 57 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35px] md:w-[57px] stroke-black dark:stroke-white">
                <path d="M43.25 11.8571C43.25 10.4736 42.9773 9.10355 42.448 7.82528C41.9187 6.54704 41.1425 5.38558 40.1642 4.40724C39.1858 3.42893 38.0244 2.65287 36.7461 2.12339C35.4679 1.59391 34.0978 1.32141 32.7143 1.32141H11.6429C9.43158 1.32141 7.2764 2.01715 5.4825 3.31009C3.68865 4.60308 2.34707 6.42765 1.64781 8.52544C0.948542 10.6232 0.927054 12.8879 1.58638 14.9985C2.24571 17.1092 3.55244 18.959 5.32143 20.2857V43.4643C5.32143 44.5819 5.76545 45.654 6.55575 46.4442C7.3461 47.2344 8.418 47.6786 9.53572 47.6786H34.8214C35.9391 47.6786 37.011 47.2344 37.8014 46.4442C38.5917 45.654 39.0357 44.5819 39.0357 43.4643V20.2857C40.3467 19.3066 41.4105 18.0346 42.1421 16.5711C42.8741 15.1076 43.2534 13.4933 43.25 11.8571Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.0714 1.32141H45.3572C46.7407 1.32141 48.1108 1.59391 49.389 2.12339C50.6672 2.65287 51.8286 3.42893 52.8072 4.40724C53.7853 5.38558 54.5616 6.54704 55.0909 7.82528C55.6202 9.10355 55.8929 10.4736 55.8929 11.8571C55.8962 13.4933 55.517 15.1076 54.7849 16.5711C54.0533 18.0346 52.9896 19.3066 51.6786 20.2857V43.4643C51.6786 44.5819 51.2344 45.654 50.4442 46.4442C49.654 47.2344 48.5819 47.6786 47.4643 47.6786H17.9643" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M51.6786 20.2856H39.0357" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="font-medium mt-6">126,391</h3>
              <p className="text1 mt-6 font-['Roboto-thin'] dark:text-[#909090]">Meal Provided</p>
            </div>
            <div className="flex flex-col items-center dark:text-white">
              <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35px] md:w-[57px] stroke-black dark:stroke-white">
                <path d="M1.14285 29.2857L29 1.42859L56.8571 29.2857" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.71428 20.7144V48.5715H48.2857V20.7144" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="font-medium mt-6">1,321</h3>
              <p className="text1 mt-6 font-['Roboto-thin'] dark:text-[#909090]">Shelters Built</p>
            </div>
            <div className="flex flex-col items-center dark:text-white">
              <svg width="40" height="50" viewBox="0 0 44 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[28px] md:w-[57px] stroke-black dark:stroke-white">
                <path d="M43.4286 14H30.5714V1.14282H13.4286V14H0.571411V31.1428H13.4286V56.8571H30.5714V31.1428H43.4286V14Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="font-medium mt-6">9,422</h3>
              <p className="text1 mt-6 font-['Roboto-thin'] dark:text-[#909090]">Lives Changed</p>
            </div>
          </div>
        </div>

        <div id='about-us' className="relative w-full py-8 md:px-20 mt-12 md:mt-0 flex flex-col lg:flex-row items-center gap-20 total_donation">
          <div className="absolute top-[512px] lg:top-0 right-0">
            <img src="./img/home_section2_effect.png" alt="effect2" className="w-3/5 float-right -mt-20 hidden dark:block" />
            <img src="./img/home_section2_effect_light.png" alt="effect2" className="w-3/5 float-right -mt-20 block dark:hidden" />
          </div>
          <div className="flex-1">
            <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">About Us</h2>
            <p className=" text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-8 dark:text-[#909090]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            </p>
            <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-4 dark:text-[#909090]">
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
            <div className='mt-12'>
              <a href='/aboutus' className=" inline-block leading-[1.5]  px-4 sm:px-8 py-2 sm:py-4 h-[38px] sm:h-14 text3 sm:text2  rounded-[5px] sm:rounded-xl bg-[#E2E2E2] dark:bg-[#101010]">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-[90%] sm:w-full lg:w-auto flex-1 p-8 rounded-xl z-30 bg-white dark:bg-black text-center sm:text-left">
            <div className="flex flex-col gap-4 sm:gap-0 sm:grid sm:grid-cols-2 sm:py-4 font-['Roboto-thin'] stroke-black dark:stroke-white">
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Food Donation</p>
              </div>
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Water Supply</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:grid sm:grid-cols-2 sm:py-4 mt-4 sm:mt-0 font-['Roboto-thin'] stroke-black dark:stroke-white">
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Money Donation</p>
              </div>
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Education Supply</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:grid sm:grid-cols-2 sm:py-4 mt-4 sm:mt-0 font-['Roboto-thin'] stroke-black dark:stroke-white">
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Dress Donation</p>
              </div>
              <div className="flex items-center gap-8">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.714294 11.2144L4.61429 16.2286C4.74589 16.3996 4.91452 16.5386 5.10751 16.6351C5.30049 16.7316 5.51284 16.7831 5.72858 16.7857C5.94085 16.7883 6.15101 16.7433 6.34377 16.6544C6.53651 16.5654 6.70701 16.4346 6.84287 16.2714L19.2857 1.21436" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base sm:text[20px] leading-[1.5]">Toys Donation</p>
              </div>
            </div>
            <h3 className="mt-8 text-[24px] sm:text-[32px]">Total Donation</h3>
            <div className="w-full h-2 mt-8 rounded-full bg-[#D9D9D9] dark:bg-white">
              <div className="w-2/3 h-2 rounded-full bg-[#FF3F4F]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mt-8">
              <p className="text-[18px] sm:text-[24px]">Collection - $75k</p>
              <p className="text-[18px] sm:text-[24px]">Goal - $100k</p>
            </div>
            <a href="https://buy.stripe.com/test_14kfZY1irclPbaofYY" className="w-[90px] sm:w-[118px] mx-auto sm:mx-0 flex items-center mt-12 px-4 sm:px-8 h-[38px] sm:h-14 text3 sm:text2 rounded-[5px] sm:rounded-xl dark:text-black bg-[#FF3F4F]">
              Donate
            </a>
          </div>
        </div>

        <div className="relative w-full md:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="absolute lg:relative w-[37%] top-[78%] lg:top-0 right-0 lg:right-auto lg:w-2/5 lg:p-8">
            <img src="./img/home_section2_effect2.png" alt="effect2" className="w-full hidden dark:block" />
            <img src="./img/home_section2_effect2_light.png" alt="effect2" className="w-full float-right -mt-6 block dark:hidden" />
          </div>
          <div className="relative lg:w-3/5 lg:pr-12">
            <img src="./img/smiling_child.png" alt="smiling child" className="w-full" />
            <div className="relative mt-[-60px] lg:mt-0  lg:absolute lg:-bottom-12 lg:-left-80 rounded-xl p-8 sm:p-12 w-[90%] lg:w-96 bg-white dark:bg-black">
              <h3 className="text-[24px] sm:text-[32px]">Volunteer With Us</h3>
              <p className="text-base sm:text-[20px] leading-[1.5] mt-4 sm:mt-8 font-['Roboto-thin'] dark:text-[#909090]">
                Help us on our mission to improve the lives of those in Fannin County
              </p>
              <div className='mt-8 sm:mt-12'>
                <a
                  href='#contact'
                  onClick={() => setMessage('Hi I am interested in volunteering for your organization')}
                  className="inline-block leading-[1.5] h-[38px] sm:h-14 px-4 sm:px-8 py-2 sm:py-4 text3 sm:text2  rounded-[5px] sm:rounded-xl dark:text-black bg-[#FF3F4F]"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id='projects' className="w-full py-10 sm:py-20 gap-20">
          <h2 className="w-full text-center text-[30px] sm:text-[48px] leading-[1.5]">Projects</h2>
          <h3 className="w-full text-center text-lg sm:text-[32px] leading-[1.5] mt-4 sm:mt-12 font-['Roboto-thin'] dark:text-[#909090]">
            Subsidiary Charity’s Managed by the Heaven Help Us Foundation
          </h3>
          <div className='mt-12 sm:mt-28 w-full'>
            <Swiper
              spaceBetween={70}
              slidesPerView={1}
               breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024:{
      slidesPerView:3
    }
  }}
              pagination={pagination}
              modules={[Pagination]}
            >
              {projects.map(_ =>
                <SwiperSlide key={_.id}>
                  <a href='/projects' className='flex justify-center'>
                    <div className="w-fit">
                      <img src={_.img} />
                      <h3 className=" text-[20px] sm:text-[32px] py-6 sm:py-8 text-center rounded-b-3xl bg-[#E2E2E2] dark:bg-[#101010]">
                        {_.name}
                      </h3>
                    </div>
                  </a>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>

        <div id='upcoming' className="w-full  py-10 sm:py-20 gap-20">
          <h2 className="w-full text-center text-[30px] sm:text-[48px] leading-[1.5]">Upcoming Events</h2>
          <h3 className="w-full text-center text-lg sm:text-[32px] leading-[1.5] mt-4 sm:mt-12 font-['Roboto-thin'] dark:text-[#909090]">
            Join Upcoming Events and Webinars
          </h3>
          <div className='mt-12 sm:mt-28 grid lg:grid-cols-2 gap-10 lg:gap-20'>
            <div className="w-full">
              <a href='/upcoming'>
                <img src="./img/poor_child.png" alt="poor child" className="w-full rounded-t-xl" />
              </a>
              <div className="p-8 rounded-b-xl bg-[#E2E2E2] dark:bg-[#101010]">
                <h3 className="text-[20px] sm:text-[32px] leading-[1.5]">Education for Poor Children</h3>
                <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-4 dark:text-[#909090]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                </p>
                <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-8 dark:text-[#909090]">
                  10:00 - 18:00, Thursday
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col justify-between gap-12'>
              {events.map((_, idx) => <div key={_.id} className="flex  sm:items-center gap-4 sm:gap-8">
                <div className='w-[4rem] sm:w-40 h-[4rem] sm:h-40 font-bold flex flex-col items-center justify-center rounded-[5px] sm:rounded-xl bg-[#E2E2E2] dark:bg-[#101010]'>
                  <h1 className='text-[24px] sm:text-[64px] leading-[1.5]'>{28 + idx}</h1>
                  <h3 className='text-[12px] sm:text-[32px] leading-[1.5]'>July</h3>
                </div>
                <div className='flex-1'>
                  <p className='text-[18px] sm:text-[24px] leading-[1.5]'>{_.title}</p>
                  <p className='text-base sm:text-[20px] mt-4 dark:text-[#909090]'>{_.desc}</p>
                  <p className='text-base sm:text-[20px] mt-4 dark:text-[#909090]'>{_.date}</p>
                </div>
              </div>)}
            </div>
          </div>
        </div>

        <div id="contact" className="w-full pt-16 md:pt-32 md:pb-20 flex flex-col lg:flex-row lg:gap-20">
          <div className=' w-full lg:w-3/5 '>
            <Map center={[51.505, -0.09]} zoom={13} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12'>
              <div>
                <p className='text-[20px] sm:text-[24px]'>Address</p>
                <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-4 dark:text-[#909090]">
                  1455 Lickskillet Circle, Epworth, GA, 30541, United States
                </p>
              </div>
              <div>
                <p className='text-[20px] sm:text-[24px]'>Contacts</p>
                <p className="text-base sm:text-[20px] leading-[1.5]  font-['Roboto-thin'] mt-4 dark:text-[#909090]">
                  (706) 633-9432
                </p>
                <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] mt-4 dark:text-[#909090]">
                  rollchase@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-2/5'>
            <h2 className="font-bold mt-8 sm:mt-12  sm:mt-0 text-[30px] md:text-[48px] leading-[1.5]">Contact Us</h2>
            <form ref={form} onSubmit={handleform}>
            <div className="relative mt-4 sm:mt-12">
              <label className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">Name</label>
              <input type="text" name="s-name" value={sname} className="w-full h-10 px-4 rounded-lg mt-2 bg-transparent border dark:border-[#101010] focus:outline-none" onChange={(e)=>setSname(e.target.value)}/>
              {snameerror ? <div className="c-error">* Field required!</div>: ""}
            </div>
            <div className="relative mt-4 sm:mt-8">
              <label  className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">Email / Phone</label>
              <input type="text" name="s-epvalue" value={sepvalue} className="w-full h-10 px-4 rounded-lg mt-2 bg-transparent border dark:border-[#101010] focus:outline-none" onChange={(e)=>setSepvalue(e.target.value)}/>
              {sepvalueerror ? <div className="c-error">* Field required!</div>: ""}
            </div>
            <div className="relative mt-4 sm:mt-8">
              <label className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">Message</label>
              <textarea  name="s-message" value={smessage} onChange={(e) => setSmessage(e.target.value)}  className="w-full h-28 p-4 rounded-lg mt-2 bg-transparent focus:outline-none border dark:border-[#101010]" />
               {smessageerror ? <div className="c-error">* Field required!</div>: ""}
            </div>
            <button type="submit" className="h-[38px] sm:h-14 px-4 sm:px-8 py-2 sm:py-4 mt-8 text3 sm:text2 text-black rounded-[5px] sm:rounded-md bg-[#E2E2E2] dark:bg-white"  disabled={isloading}>
             Send Message
            </button>  {isloading ? <div className="loader"><div className="circle"></div></div> : ""} 
              {formsuccess? <div className="success-box">Message send successfully.</div> : ""}
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
