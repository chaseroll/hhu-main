import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import getStripe, { PRICE_ID } from '../lib/getStripe';

function Header() {
  const location = useLocation();
  const [menustate, setMenustate] = useState(false);

  const changeTheme = () => {
    if (localStorage.getItem('color-theme') === 'light') {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
    window.location.href = location.pathname;
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

  async function handleMenuOpen() {
    setMenustate(true);
  }

  async function handleMenuClose() {
    setMenustate(false);
  }

  return (
    <header className='fixed top-0 left-0 w-full h-28 flex items-center justify-between px-5 lg:px-20 z-50 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60'>
      <div className='flex items-center'>
        <a href='/'>
          <h3 className='font-bold dark:text-white'>HHU</h3>
        </a>
        <div onClick={handleMenuOpen} className="menu-btn md:hidden ml-4 cursor-pointer">
          {/* Add your menu icon here */}
        </div>
      </div>
      <div className={`w-full md:w-auto absolute md:relative top-0 bottom-0 left-0 right-0 bg-black md:bg-transparent md:flex md:items-center md:justify-center transition-transform transform ${menustate ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div onClick={handleMenuClose} className="close md:hidden absolute top-4 right-4 cursor-pointer">X</div>
        <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <a onClick={handleMenuClose} href='/#about-us' className="text-white md:text-black dark:md:text-white">About Us</a>
          <a onClick={handleMenuClose} href='/#projects' className="text-white md:text-black dark:md:text-white">Projects</a>
          <a onClick={handleMenuClose} href='/#upcoming' className="text-white md:text-black dark:md:text-white">Upcoming</a>
          <a onClick={handleMenuClose} href='/#contact' className="text-white md:text-black dark:md:text-white">Contact</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://buy.stripe.com/test_14kfZY1irclPbaofYY" className="flex items-center h-10 px-4 text-white bg-black dark:text-black dark:bg-white rounded-lg">
          Donation
        </a>
        <button onClick={changeTheme} className="h-10 w-10 flex items-center justify-center bg-black dark:bg-white rounded-lg p-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57141 15.9999C8.57141 20.1026 11.8973 23.4284 16 23.4284V8.57129C11.8973 8.57129 8.57141 11.8972 8.57141 15.9999Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 1.14258V3.42829" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 28.5713V30.857" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.857 16H28.5713" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.42854 16H1.14282" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5143 5.48535L24.8914 7.10821" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.1087 24.8906L5.48584 26.5135" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5142 26.5135L24.8914 24.8906" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.10857 7.10821L5.48572 5.48535" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;