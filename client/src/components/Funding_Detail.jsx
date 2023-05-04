


const FundingDetail = () => {
  
  return (
    // Main Container
    <div>

    {/* Card 1 */}

    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src={'../funding_detail/event_1.jpg'}
            alt={'title'}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {'Music Event 1'}
              </h5>
              <small className="text-gray-500">
                {'12 Days left'}
              </small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
           
                <small className="text-gray-500 font-bold text-lg">
                  {'3,210 votings'}
                </small>
              </div>

              <div className="font-bold">
                {
                  <big className="text-gray-500">Open</big>
                }
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-5">
                {'This crowdfunding music event is a tour featuring up-and-coming indie bands, with funds raised going towards supporting independent music venues that have been impacted by the pandemic.'}
                </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                 >
                 </div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small>{'USDC Raised'} </small>
                <small className="flex justify-start items-center">
                  <span>{'19,230 / 35,000'} USDC</span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                   >
                    Vote Event
                  </button>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Card 2 */}
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src={'../funding_detail/event_2.jpg'}
            alt={'title'}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {'Music Event 2'}
              </h5>
              <small className="text-gray-500">
                {'45 Day left'}
              </small>
            </div>

            <div className="flex justify-between items-center w-full pt-2">
              <div className="flex justify-start space-x-2">
             
                <small className="text-gray-500 font-bold text-lg">
                  {'4,000 votings'}
                </small>
              </div>

              <div className="font-bold">
                {
                  <big className="text-green-500">Success</big>
                }
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-5">{'This crowdfunding music event is a series of outdoor concerts featuring local musicians, with proceeds going towards environmental conservation efforts in the community.'}
              </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                 >
                 </div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small>{'USDC Raised'} </small>
                <small className="flex justify-start items-center">
                  <span>{'40,000 / 40,000 '} USDC</span>
                </small>
              </div>
                
              <div className="flex justify-start items-center space-x-2 mt-4">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                   >
                    Vote Event
                  </button>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Card 3 */}
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src={'../funding_detail/event_3.jpg'}
            alt={'title'}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {'Music Event 3'}
              </h5>
              <small className="text-gray-500">
                {'17 Day left'}
              </small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
              
                <small className="text-gray-500 font-bold text-lg">
                  {'3,670 votings'}
                </small>
              </div>

              <div className="font-bold">
                {
                  <big className="text-gray-500">Open</big>
                }
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-5">{'This crowdfunding music event is a charity concert featuring a range of popular artists, with proceeds going towards supporting mental health initiatives for musicians and music industry professionals.'}
              </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                 >
                 </div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small>{'USCD Raised'} </small>
                <small className="flex justify-start items-center">
                  <span>{'40,650 / 50,000'} USDC </span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                   >
                    Vote Event
                  </button>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     



      {/* Card 4 */}
      <div className="pt-24 mb-5 px-6 flex justify-center">
        <div className="flex justify-center flex-col md:w-2/3">
          <div
            className="flex justify-start items-start
          sm:space-x-4 flex-wrap"
          >
            <img
              src={'../funding_detail/event_4.jpg'}
              alt={'title'}
              className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
            />

            <div className="flex-1 sm:py-0 py-4">
              <div className="flex flex-col justify-start flex-wrap">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {'Music Event 4'}
                </h5>
                <small className="text-gray-500">
                  {'21 Day left'}
                </small>
              </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
               
                <small className="text-gray-500 font-bold text-lg">
                  {'3,260 votings'}
                </small>
              </div>

              <div className="font-bold">
                {
                  <big className="text-gray-500">Open</big>
                }
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-5">{'This crowdfunding music event is a collaboration between musicians and visual artists, with funds raised going towards supporting local arts initiatives. The event will feature live music performances and art exhibitions.'}
              </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                 >
                 </div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small className="text-lg" >{'USCD Raised'} </small>
                <small className="flex justify-start items-center">
                  <span className="text-lg">{'34,550 / 40,000'} USDC </span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                   >
                    Vote Event
                  </button>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   

    </div>
  )
}

export default FundingDetail