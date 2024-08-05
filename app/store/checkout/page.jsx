'use client';
import { useState, useEffect } from 'react';
import Information from '@/components/CheckoutStep-Information';
import Shipping from '@/components/CheckoutStep-Shipping.jsx';
import Payment from '@/components/CheckoutStep-Payment';
import ShoppingBagItem from '@/components/ShoppingBagItem';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';
import StepNavigation from '@/components/SheckoutStepNavigarion';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { shoppingBagItems, subtotal, totalQuantity, cartId } =
    useShoppingBagContext();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <section className='grid grid-cols-2'>
      <div
        name='checkout left side'
        className='absolute inset-y-0 left-0 px-5 pt-10 w-[50%] bg-white'
      >
        <div className='flex flex-col'>
          <div className='flex self-center w-40'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 166 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='logo' clipPath='url(#clip0_36_369)'>
                <g id='Group'>
                  <path
                    id='Vector'
                    d='M13.3923 9.29198H1.85841V0.383423H0V19.6165H1.85841V9.94094H13.3923V19.6165H15.2802V0.383423H13.3923V9.29198Z'
                    fill='black'
                  />
                  <path
                    id='Vector_2'
                    d='M64.6901 6.04713C64.1887 4.83769 63.4807 3.77574 62.5662 2.86128C61.7403 2.03533 60.7963 1.38636 59.7049 0.884884H60.0884H60.1179C61.7108 0.884884 63.3037 0.884884 64.9261 0.884884C65.0146 0.884884 65.0736 0.884884 65.1621 0.884884C65.1916 0.884884 65.2506 0.884884 65.3096 0.855386C65.3096 0.5604 65.3096 0.294914 65.3096 0.0294269C65.1916 -0.0295702 65.0736 -7.16583e-05 64.9851 -7.16583e-05C61.8583 -7.16583e-05 58.7019 -7.16583e-05 55.5751 -7.16583e-05C55.5456 -7.16583e-05 55.5161 -7.16583e-05 55.4866 -7.16583e-05C55.4571 -7.16583e-05 55.4276 -7.16583e-05 55.3981 -7.16583e-05C55.1916 -7.16583e-05 55.0146 -7.16583e-05 54.8081 -7.16583e-05C46.932 -7.16583e-05 39.0559 -7.16583e-05 31.1798 -7.16583e-05C31.1503 -7.16583e-05 31.1208 -7.16583e-05 31.0913 -7.16583e-05C31.0618 -7.16583e-05 31.0323 -7.16583e-05 31.0028 -7.16583e-05C30.7668 -7.16583e-05 30.5308 -7.16583e-05 30.3243 -7.16583e-05C27.3745 -7.16583e-05 24.4246 -7.16583e-05 21.5043 -7.16583e-05C21.4158 -7.16583e-05 21.3273 -7.16583e-05 21.2683 -7.16583e-05C21.2388 -7.16583e-05 21.1798 0.0294269 21.1503 0.0294269C21.1208 0.265415 21.1208 0.737391 21.1503 0.884884C21.1798 0.884884 21.2093 0.914383 21.2683 0.914383H21.3568C21.3863 0.914383 21.3863 0.914383 21.4158 0.914383C22.3892 0.914383 23.3627 0.914383 24.3361 0.914383C25.0441 0.914383 25.7521 0.914383 26.46 0.914383C26.4895 0.914383 26.5485 0.914383 26.578 0.914383H26.8435C25.7521 1.41586 24.8081 2.06483 23.9822 2.89078C23.8642 3.00878 23.7757 3.12677 23.6577 3.21527C22.8907 4.04123 22.3007 4.98518 21.8583 6.07662C21.3568 7.28606 21.0913 8.6135 21.0913 10.0294C21.0913 11.4454 21.3568 12.7433 21.8583 13.9822C22.3007 15.0442 22.8907 15.9881 23.6577 16.8436C23.7757 16.9616 23.8642 17.0796 23.9822 17.1681C24.1002 17.2861 24.2182 17.4041 24.3361 17.4926C25.1621 18.23 26.1061 18.8495 27.168 19.292C27.581 19.469 27.994 19.5869 28.4069 19.7049C29.2624 19.9409 30.1474 20.0589 31.0913 20.0589C32.4482 20.0589 33.7167 19.8229 34.8966 19.351C34.9261 19.3215 34.9851 19.3215 35.0146 19.292C35.0736 19.2625 35.1621 19.233 35.2211 19.2035C36.342 18.702 37.345 18.0235 38.2005 17.1681C39.1149 16.2536 39.8229 15.1917 40.3243 13.9822C40.8258 12.7728 41.0913 11.4454 41.0913 10.0294C41.0913 8.6135 40.8258 7.31556 40.3243 6.07662C40.1179 5.60465 39.8819 5.13267 39.6164 4.69019H46.9025C46.637 5.13267 46.401 5.57515 46.1946 6.07662C45.6931 7.28606 45.4276 8.6135 45.4276 10.0294C45.4276 11.4454 45.6931 12.7433 46.1946 13.9822C46.696 15.1917 47.404 16.2536 48.3184 17.1681C49.2329 18.0825 50.2948 18.7905 51.5043 19.292C51.9468 19.469 52.4187 19.6459 52.9202 19.7639C53.7167 19.9704 54.5721 20.0589 55.4571 20.0589C56.637 20.0589 57.7285 19.8819 58.7904 19.528C58.9969 19.469 59.2034 19.3805 59.4099 19.292C60.1768 18.9675 60.8848 18.584 61.5338 18.0825C61.9173 17.817 62.2712 17.4926 62.5957 17.1681C63.5102 16.2536 64.2181 15.1917 64.7196 13.9822C65.1916 12.8318 65.4571 11.5633 65.4571 10.2064C65.4571 10.1474 65.4571 10.0884 65.4571 10.0294C65.4276 8.584 65.1916 7.28606 64.6901 6.04713ZM61.8878 15.7521C61.8583 15.8111 61.8288 15.8406 61.7993 15.8996C61.7698 15.9291 61.7698 15.9586 61.7403 15.9881C61.1503 16.8731 60.4423 17.6105 59.5574 18.171C58.3774 18.938 56.991 19.351 55.3981 19.351C54.8376 19.351 54.3066 19.292 53.8052 19.2035C53.7757 19.2035 53.7462 19.2035 53.7167 19.174C53.5987 19.1445 53.5102 19.115 53.3922 19.0855C53.3332 19.056 53.2447 19.056 53.1857 19.0265C53.1562 19.0265 53.1267 18.997 53.0972 18.997C52.4482 18.7905 51.8288 18.525 51.2683 18.1415C51.0323 17.994 50.8258 17.8465 50.6193 17.6695C49.7344 16.9321 49.0264 16.0176 48.4954 14.8672C47.8465 13.4513 47.4925 11.8288 47.4925 9.97043C47.4925 8.11202 47.817 6.4601 48.4954 5.07367C48.5544 4.92618 48.6429 4.80819 48.7019 4.6607H58.6724V3.36276H49.5574C49.5869 3.30376 49.6459 3.24477 49.6754 3.21527C50.1474 2.68429 50.6783 2.21232 51.2683 1.82884C51.9173 1.38636 52.6252 1.09137 53.3922 0.914383H53.4512H53.4807C54.7491 0.914383 56.0471 0.914383 57.3155 0.914383H57.345H57.3745C58.1415 1.12087 58.8789 1.41586 59.5279 1.85834C60.7078 2.6548 61.6518 3.74624 62.3007 5.13267C62.9497 6.5191 63.3037 8.17102 63.3037 9.99993C63.3037 11.8583 62.9792 13.4808 62.3007 14.8967C62.2122 15.1917 62.0648 15.4867 61.8878 15.7521ZM38.7019 12.5958C38.7019 12.6253 38.7019 12.6253 38.7019 12.6548C38.5249 13.4513 38.2889 14.1887 37.9645 14.8967C37.3155 16.3126 36.3715 17.4041 35.1916 18.171C34.0117 18.938 32.6252 19.351 31.0323 19.351C29.4689 19.351 28.0825 18.9675 26.873 18.171C25.6931 17.4041 24.7491 16.3126 24.1002 14.8967C23.4512 13.4808 23.0972 11.8583 23.0972 9.99993C23.0972 8.14152 23.4217 6.4896 24.1002 5.10317C24.7786 3.71674 25.6931 2.6253 26.873 1.82884C27.168 1.62235 27.463 1.47485 27.7875 1.32736C27.935 1.26836 28.0825 1.20937 28.23 1.15037C28.2594 1.15037 28.2595 1.15037 28.2889 1.12087C28.5249 1.03238 28.7609 0.97338 28.9969 0.914383H29.0264H29.0559C30.3538 0.914383 31.6223 0.914383 32.9202 0.914383H32.9497H32.9792C33.3332 1.00288 33.6577 1.12087 33.9527 1.23887C34.3656 1.41586 34.7491 1.62235 35.1326 1.85834C35.2506 1.94683 35.3391 2.00583 35.4571 2.09432C35.9586 2.4778 36.4305 2.92028 36.814 3.39226H27.935V4.69019H37.758C37.8465 4.83769 37.9055 4.98518 37.994 5.13267C38.6429 6.5191 38.9969 8.17102 38.9969 9.99993C38.9969 10.8554 38.9379 11.6518 38.7904 12.4188C38.7314 12.4778 38.7314 12.5368 38.7019 12.5958ZM38.6429 3.39226C38.4954 3.21527 38.3479 3.03828 38.171 2.89078C37.345 2.06483 36.401 1.41586 35.3096 0.914383H51.1798C51.0028 1.00288 50.8553 1.06188 50.6783 1.15037C49.7934 1.62235 49.0264 2.18282 48.3184 2.89078C48.1415 3.06777 47.994 3.21527 47.8465 3.39226H38.6429Z'
                    fill='black'
                  />
                  <path
                    id='Vector_3'
                    d='M73.0679 19.056V0.383423H71.2095V19.6165H79.2921V18.23L74.7198 18.9085C73.9823 18.997 73.4219 19.056 73.0679 19.056Z'
                    fill='black'
                  />
                  <path
                    id='Vector_4'
                    d='M85.7227 0.383423H83.8643V19.6165H85.7227V0.383423Z'
                    fill='black'
                  />
                  <path
                    id='Vector_5'
                    d='M102.478 10.5014H107.552V17.6401C106.903 18.2005 106.106 18.6135 105.192 18.9085C104.277 19.2035 103.304 19.351 102.242 19.351C100.531 19.351 98.997 18.9675 97.6991 18.171C96.4011 17.4041 95.3982 16.3126 94.6607 14.8967C93.9233 13.4808 93.5693 11.8584 93.5693 9.99996C93.5693 8.14155 93.9233 6.48963 94.6607 5.1032C95.3687 3.68727 96.4011 2.62533 97.6991 1.82887C98.997 1.0619 100.501 0.648925 102.242 0.648925C103.392 0.648925 104.484 0.825916 105.516 1.1504C106.549 1.47488 107.404 1.97636 108.142 2.59583H108.289L108.437 1.0619C107.935 0.855415 107.345 0.648925 106.637 0.501432C105.929 0.35394 105.162 0.235946 104.395 0.117952C103.628 0.029456 102.891 -0.029541 102.242 -0.029541C100.708 -0.029541 99.292 0.235946 97.9646 0.737421C96.6666 1.2389 95.5457 1.94686 94.5722 2.86131C93.5988 3.77577 92.8318 4.83772 92.3008 6.04715C91.7699 7.25659 91.5044 8.58403 91.5044 9.99996C91.5044 11.4159 91.7699 12.7433 92.3008 13.9528C92.8318 15.1622 93.5988 16.2241 94.5722 17.1386C95.5457 18.0531 96.6666 18.761 97.9646 19.2625C99.2625 19.764 100.678 20.0295 102.242 20.0295C103.746 20.0295 105.103 19.7935 106.313 19.3215C107.522 18.8495 108.555 18.2005 109.41 17.3451V9.82297H102.448V10.5014H102.478Z'
                    fill='black'
                  />
                  <path
                    id='Vector_6'
                    d='M120.265 0.383423L112.891 19.6165H114.897L117.728 10.6194H123.953L127.374 19.6165H129.38L121.976 0.383423H120.265ZM117.905 9.94094L120.472 1.79935H120.649L123.717 9.94094H117.905Z'
                    fill='black'
                  />
                  <path
                    id='Vector_7'
                    d='M148.407 16.6962H148.23L134.425 0H134.101L133.393 19.6165H135.28L134.661 3.30383H134.838L148.643 20H148.968L149.676 0.383481H147.788L148.407 16.6962Z'
                    fill='black'
                  />
                  <path
                    id='Vector_8'
                    d='M165.133 12.0059C164.631 11.2684 163.982 10.6195 163.215 10.0885C162.448 9.55752 161.622 9.05605 160.826 8.58407C160.118 8.17109 159.44 7.75811 158.82 7.34513C158.201 6.90265 157.699 6.43068 157.286 5.8997C156.903 5.36873 156.696 4.71976 156.696 3.9528C156.696 2.94985 157.05 2.15339 157.758 1.53392C158.466 0.943953 159.41 0.648968 160.59 0.648968C162.212 0.648968 163.569 1.20944 164.602 2.35988H164.779L164.926 0.825959C164.454 0.58997 163.805 0.383481 162.979 0.235988C162.124 0.0884956 161.357 0 160.62 0C158.968 0 157.64 0.412979 156.637 1.26844C155.634 2.12389 155.133 3.24484 155.133 4.63127C155.133 5.57522 155.369 6.37168 155.811 7.02065C156.283 7.69911 156.844 8.28908 157.581 8.79056C158.289 9.29204 159.056 9.76401 159.823 10.236C160.973 10.885 161.858 11.5044 162.507 12.0649C163.156 12.6254 163.628 13.1858 163.923 13.7463C164.218 14.3068 164.336 14.8968 164.336 15.5457C164.336 16.6962 163.953 17.6106 163.186 18.3186C162.419 18.997 161.416 19.351 160.177 19.351C159.292 19.351 158.407 19.174 157.522 18.8201C156.637 18.4661 155.811 17.9941 155.103 17.3746H154.956L154.779 19.0265C155.664 19.3215 156.608 19.5575 157.611 19.7345C158.614 19.9115 159.469 20 160.207 20C161.357 20 162.36 19.7935 163.245 19.351C164.1 18.9086 164.779 18.2891 165.251 17.5221C165.723 16.7552 165.959 15.8407 165.959 14.8083C165.9 13.6873 165.664 12.7729 165.133 12.0059Z'
                    fill='black'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_36_369'>
                  <rect width='165.9' height='20' fill='black' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='container mx-auto'>
            <StepNavigation currentStep={step} />
            <div className='py-5'>Contact information</div>
            {step === 1 && (
              <Information onNext={() => setStep(2)} cartId={cartId} />
            )}
            {step === 2 && (
              <Shipping
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
                cartId={cartId}
              />
            )}
            {step === 3 && (
              <Payment onBack={() => setStep(2)} cartId={cartId} />
            )}
          </div>
        </div>
      </div>

      <div className='absolute inset-y-0 right-0 p-4 w-[50%] bg-custom-gray flex flex-col'>
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h1 className='text-xl'>ITEMS QUANTITY</h1>
          <span className='flex items-center justify-center w-6 h-6 p-2 m-2 -translate-x-20 bg-gray-300 rounded-full'>
            {totalQuantity}
          </span>
        </div>
        <div className='flex-1 overflow-y-auto '>
          {shoppingBagItems &&
            shoppingBagItems.map((shoppingBagItem, index) => (
              <ShoppingBagItem shoppingBagItem={shoppingBagItem} key={index} />
            ))}
        </div>
        <div className='p-6 mr-12 border-t border-gray-200'>
          <div className='flex justify-between'>
            <span>Subtotal</span>
            <span className='font-semibold '>${subtotal}</span>
          </div>
          <div className='flex justify-between py-1'>
            <span>Shipping</span>
            <span className='font-semibold '>Calculated at next step</span>
          </div>
          <div className='flex justify-between'>
            <span>Total</span>
            <span className='font-semibold '>${subtotal} + taxes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
