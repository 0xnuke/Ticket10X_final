const Funding_section = () => {

  
    return (

      <div className="text-center bg-white text-gray-800 py-24 px-6">
        <h1
          className="text-5xl md:text-6xl xl:text-7xl font-bold
        tracking-tight mb-12"
        >
          <span className="capitalize">Bring Music Events to life on</span>
          <br />
          <span className="uppercase text-green-600">Ticket10X.</span>
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
          text-white font-medium text-xs leading-tight uppercase
          rounded-full shadow-md hover:bg-green-700"
            onClick={() => ('createModal', 'scale-100')}
          >
            Make Event
          </button>
  
          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-green-600
          font-medium text-xs leading-tight uppercase text-green-600
          rounded-full shadow-md bg-transparent hover:bg-green-700
          hover:text-white"
          >
            Vote Event
          </button>
        </div>

      </div>
    

        
    )
  }
  
  export default Funding_section