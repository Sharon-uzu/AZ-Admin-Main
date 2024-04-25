import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons/lib";
import {  useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../../contextApi/SearchContext";
// import { useAsyncDebounce } from "react-table";
import dp from '../../assets/images/dp.jpeg';


const MainHeaderBar = (props) => {

  const { searchInput,setSearchInput } = useSearchContext()

  // const onSearchInput = useAsyncDebounce(value => {
    // setSearchInput(value)
  // }, 1000)


  const [toggleSearch, setToggleSearch] = useState(true);
  const searchRef = useRef();
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setToggleSearch(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);
  
    return (
      <>
        <IconContext.Provider value={{ color: "gray" }}>
          <div className="  md:left-44  bg-white w-full  md:flex flex-col justify-between items-center z-40">
            <div className="w-full h-full flex justify-between items-center mb-8">
                <h1 className="headtitle">{props.headTitle}</h1>     
                  <div className="w-[30%] flex justify-between items-center ">
                   


                        <CiSearch
                          style={{
                            
                            fontSize: "1.7em",
                          }}
                          onClick={()=>setToggleSearch(!toggleSearch)}
                        />
                      {toggleSearch && 
                        <input
                          ref={searchRef}
                          type="search"
                          className="md:max-w-[35%] bg-transparent  pl-2 text-sm  rounded-md  border-5 border-none"
                          placeholder={`Search ${location.pathname.substring(10)}...`}
                          value={searchInput || ""}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                        }
                        
                    <IoIosNotificationsOutline 
                    style={{marginInline:"auto 1.2em",fontSize:"1.5em"}}/>

                    <img src={dp} alt="" className="w-[45px] h-[45px] rounded-[45px] object-cover"/>
                    <h5 className="text-[17px] text-gray-800 ml-2">Jude Abel</h5>
                  </div>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  };

export { MainHeaderBar };
