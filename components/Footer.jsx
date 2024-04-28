import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-black.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 pt-10'>
      <div className='container mx-auto flex flex-col md:flex-row items-top justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image src={logo} alt='Logo' className='w-44' />
        </div>
        <div>
          <section>
            <div className='mb-3 text-gray-400'>ABOUT US</div>
            <ul>
              <li>
                <a href='/about_us'>About us</a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Work with us
                </a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Customer care
                </a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Terms of services
                </a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Refund policy
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <div className='mb-3 text-gray-400'>INFORMATION</div>
            <ul>
              <li>
                <a href='/delivery'>Delivery &amp; returns</a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Payment methods
                </a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Size guide
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <div className='mb-3 text-gray-400'>TERMS &amp; CONDITIONS</div>
            <ul>
              <li>
                <a href='/privacy'>Privacy policy</a>
              </li>
              <li>
                <a href='/terms'>Terms &amp; Conditions</a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Cookies policy
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <div className='mb-3 text-gray-400'>HELP</div>
            <ul>
              <li>
                <a aria-current='page' href='/'>
                  Feel free to get in touch
                </a>
              </li>
              <li>
                <a aria-current='page' href='/'>
                  Phone:
                  <span>+48 694 834 574</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className='flex justify-center items-center bg-black w-full h-14'>
        <p className='text-sm text-gray-400 mt-2 md:mt-0'>
          &copy; Copyright {currentYear}, Hooligans. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
