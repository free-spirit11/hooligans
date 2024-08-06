import React from 'react';
import Link from 'next/link';

export default function StepNavigation({ currentStep }) {
  const steps = [
    { name: 'Information', stepNumber: 1 },
    { name: 'Shipping', stepNumber: 2 },
    { name: 'Payment', stepNumber: 3 },
  ];

  return (
    <div className='flex justify-center w-full pt-8 pb-3 bg-white border-b border-gray-200'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='flex items-center space-x-4'>
          {steps.map((step, index) => (
            <li key={step.name}>
              <div className='flex items-center'>
                {index > 0 && (
                  <svg
                    className='flex-shrink-0 w-5 h-5 text-gray-300'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    aria-hidden='true'
                  >
                    <path d='M5.293 7.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L8.586 11 5.293 7.707a1 1 0 010-1.414z' />
                  </svg>
                )}
                <Link
                  href={`/store/checkout?step=${step.stepNumber}`}
                  className={`text-sm font-medium ${
                    currentStep >= step.stepNumber
                      ? 'text-blue-600 hover:text-blue-900'
                      : 'text-gray-500'
                  }`}
                  aria-current={
                    currentStep === step.stepNumber ? 'page' : undefined
                  }
                >
                  {step.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
