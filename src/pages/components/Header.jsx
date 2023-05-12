import Image from "next/image"
import {BsLightningCharge ,BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineHome,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import Logo from '/public/assets/Hulu-Logo.wine.svg'
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-2 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='Home' Icon={AiOutlineHome}/>
        <HeaderItem title='Trending' Icon={BsLightningCharge}/>
        <HeaderItem title='Verified' Icon={BsFillPatchCheckFill}/>
        <HeaderItem title='Search' Icon={AiOutlineSearch}/>
        <HeaderItem title='Account' Icon={AiOutlineUser}/>
      </div>
      <Image className="object-contain cursor-pointer"
      width={200} height={100}
      src={Logo} 
      alt=""/>
    </header>
  )
}

export default Header