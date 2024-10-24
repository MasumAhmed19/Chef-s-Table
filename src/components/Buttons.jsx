const Buttons = ({name}) => {
    return (
      <>
        <button className="group relative border-2 border-dashed px-5 py-2 rounded-md border-[#525252]">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-300 group-hover:-translate-y-[110%] group-hover:skew-y-14">
              <h2 className="font-semibold">{name}</h2>
            </div>
            <div className="absolute translate-y-[114%] skew-y-12 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
              <h2 className="font-semibold">{name}</h2>
            </div>
          </span>
        </button>
      </>
    )
  }
  
  export default Buttons
  