export default function StepNavigation({ currentStep }) {
  const steps = [
    { name: 'Information', currentOrCompleted: currentStep >= 1 },
    { name: 'Shipping', currentOrCompleted: currentStep >= 2 },
    { name: 'Payment', currentOrCompleted: currentStep === 3 },
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
                <a
                  href='#'
                  className={`text-sm font-medium ${
                    step.currentOrCompleted
                      ? 'text-blue-600 hover:text-blue-900'
                      : 'text-gray-500'
                  }`}
                  aria-current={currentStep === index + 1 ? 'page' : undefined}
                >
                  {step.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
