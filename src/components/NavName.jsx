const NavName = ({name}) => {
      return (
        <>
          <a className="group relative rounded-md">
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-300 group-hover:-translate-y-[110%] group-hover:-skew-y-5 ">
                <h2 className="">{name}</h2>
              </div>
              <div className="absolute translate-y-[114%] skew-y-0 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
              <h2 className="">{name}</h2>
              </div>
            </span>
          </a>
        </>
      )
    }
    
    export default NavName
    