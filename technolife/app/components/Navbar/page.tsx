"use client"
import "../../Styles/input.css"
import {MagnifyingGlassIcon , ShoppingCartIcon ,ListIcon} from "@phosphor-icons/react"
const Navbar = () => {
    return (
        <div>
            <img className="w-[100%]" src="https://www.technolife.com/image/banner_TopGifLandingDesktop_geE0U4_6d5295d3-7052-49f6-b150-811ef3077677.gif" alt="" />
            <div className="parentDiv bg-white w-[100%] h-[130px] flex flex-col justify-center items-center mt-[30px]">
                <div className="firstDiv w-[98%] h-[52px]  flex justify-between mt-[-48px]">
                    <div className="icon-login-singin-Div flex justify-between w-[225px] h-[40px] ">
                        <div className="Icon h-[40px] w-[40px] border border-[0.5px] border-[#F2F4F5] rounded-[10px] flex justify-center items-center">
                            <ShoppingCartIcon size={24} color="#000" />
                        </div>
                        <div className="login-singin-Div w-[159px] h-[40px] border border-[1px] border-black flex justify-evenly items-center rounded-[9px]">
                            <span className="text-[#212121]">
                                ثبت نام
                            </span>
                            <span className="text-[#212121]">
                                |
                            </span>
                            <span className="text-[#212121]">
                                ورود
                            </span>
                        </div>
                    </div>
                    <div className="search-logo-Div w-[850px] h-[70px]  flex justify-between items-center mt-[-8px]">
                        <div className="search-Div w-[680px] h-[55px] bg-[#f0f0f0] flex justify-center items-center rounded-[5px]">
                            <div className="input-shoppingIcon-Div flex justify-center items-center">
                                
                                <input className="w-[600px] h-[18px] text-[#696b6c]  " type="search" name="" id="" placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید" />
                                <MagnifyingGlassIcon size={35} color="#ADB1B6" />
                            </div>
                        </div>
                        <img className="logo w-[110px] h-[50px]" src="https://www.technolife.com/image/static_logo_techno_new.svg" alt="" />
                    </div>
                </div>
                <div className="mt-[15px] ">
                    <ul className="flex flex-row justify-start items-center">
                        <li className="flex flex-row justify-center mx-[10px]">
                            <a className="mr-[10px] fontdana" href="">دسته بندی محصولات</a>
                            <ListIcon size={24} />
                        </li>
                        <li className="flex flex-row justify-center mx-[10px]">
                            <a className="flex flex-row mr-[10px] fontdana" href="">
                            دستهب نید
                            <ListIcon size={24} />
                            
                            </a>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;