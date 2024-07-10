import { faAngleDown, faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'

function AboutUs() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const faq = [
        {question:'What is a Payment Gateway?',answer:'lorem ipsum or whatever will be the answer'},
        {question:'Do I need to pay to Instapay even when there is no transaction going on in my business?',answer:'lorem ipsum or whatever will be the answer'},
        {question:'What platforms does Instapay payment gateway support?',answer:'lorem ipsum or whatever will be the answer'},
        {question:'Does Instapay provide international payments support?',answer:'lorem ipsum or whatever will be the answer'},
        {question:'Is there any setup fee or annual maintainance fee that I need to pay regularly?',answer:'We do not charge for the setup and annual maintainance. You only pay for the plan that you are opting to.'},
    ]
  return (
    <div className='pb-[3rem] cursor-default'>
        {/* banner */}
        <div className='relative'>
            <p className='absolute z-10 text-white text-5xl lg:text-9xl left-[25%] top-[40%] lg:left-[35%] lg:top-[50%] font-bold'>About Us</p>
            <img className='w-full lg:h-[25rem]' src="https://img.lovepik.com/background/20211021/large/lovepik-green-natural-banner-background-image_500371077.jpg" alt="" />
        </div>
        {/* content */}
        <div className='p-[3rem] flex flex-col lg:flex-row gap-[4rem]'>
            {/* para */}
            <div className='lg:w-2/3 flex flex-col gap-[2rem] text-sm lg:text-xl'>
                <p className='text-6xl font-bold'>About</p>
                <p className='text-gray-400'>Subheading for description or instructions</p>
                <p className='font-semibold'>Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
                <p className='font-semibold text-justify'>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset
                Sagar Bnavelich sleepy perfect consectetur.</p>
                <p className='font-semibold text-justify'>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset
                Sagar Bnavelich sleepy perfect consectetur.</p>
            </div>
            {/* img */}
            <div className='lg:w-1/3'>
                <img className='rounded-xl' src="https://i.pinimg.com/564x/24/a4/32/24a432c4e94128a58dc09fbb29a96372.jpg" alt="" />
            </div>
        </div>
        {/* FAQ */}
        <div className='px-[3rem]'>
          <p className='text-4xl py-[2rem] font-bold'>Frequently Asked Questions</p>
          <div className='lg:p-[2rem] relative h-[40rem] lg:h-[30rem]'>
            {/* Questions */}
            <div className='bg-white rounded-xl z-10 lg:w-[36rem] lg:my-[2rem] lg:ml-[10rem] flex flex-col shadow-xl'>
              {faq.map((faq, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveQuestion(index)}
                  onMouseLeave={() => setActiveQuestion(index)}
                  className={`flex flex-col items-start gap-[1rem] lg:px-[2rem] pt-[1rem] lg:py-[1.5rem] hover:bg-orange-500 bg-white hover:text-white text-orange-500 transition-all ease-in-out delay-100 text-sm font-bold justify-between`}
                >
                  <div className={`flex items-center gap-[1rem] px-[2rem] w-full text-sm font-bold justify-between`}>
                    <div className='flex items-center gap-[2rem]'>
                      <FontAwesomeIcon icon={faCircle} />
                      <p>{faq.question}</p>
                    </div>
                    <FontAwesomeIcon icon={activeQuestion === index ? faAngleDown : faAngleRight} />
                  </div>
                  <div className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out bg-gray-200 text-black w-full px-[2rem] ${activeQuestion === index ? 'max-h-[1000px] py-[1rem]' : 'max-h-0'}`}>
                    {activeQuestion === index && (
                      <>
                        <p className='font-bold py-[1rem]'>{faq.question}</p>
                        <p className='text-justify pb-[1rem]'>{faq.answer}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Answers */}
            <div className='hidden lg:block p-[3rem] rounded-xl bg-gray-100 lg:absolute lg:w-[40rem] lg:h-[30rem] lg:-z-10 top-3 left-[45%]'>
              <div
                className={`lg:ml-[10rem] flex flex-col gap-[3rem] transition-opacity-transform ${
                  activeQuestion !== null ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
                }`}
              >
                {activeQuestion !== null && (
                  <>
                    <p className='font-bold'>{faq[activeQuestion].question}</p>
                    <p className='text-justify'>{faq[activeQuestion].answer}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs