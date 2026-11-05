"use client"
import { MagnifyingGlassIcon, ShoppingCartIcon, ListIcon, BasketIcon, GiftIcon, CubeIcon, WalletIcon, CoinIcon } from "@phosphor-icons/react"
import "../../Styles/input.css"

const Navbar = () => {
    return (
        <div className="sticky top-0 bg-white z-5">
            <img className="w-[100%]" src="https://www.technolife.com/image/banner_TopGifLandingDesktop_geE0U4_6d5295d3-7052-49f6-b150-811ef3077677.gif" alt="" />
            <div className="parentDiv bg-white w-[100%] h-[80px] flex flex-col justify-center items-center mt-[10px]">
                <div className="firstDiv w-[98%] h-[52px]  flex justify-between items-center ">
                    <div className="icon-login-singin-Div flex justify-between w-[225px] h-[40px] ">
                        <div className="Icon h-[40px] w-[40px] border border-[0.5px] border-[#F2F4F5] rounded-[10px] flex justify-center items-center">
                            <ShoppingCartIcon size={24} color="#000" />
                        </div>
                        <div className="login-singin-Div w-[159px] h-[40px] border border-[1px] border-black flex justify-evenly items-center rounded-[9px]">
                            <span className="text-[#212121] fontdubai">
                                ثبت نام
                            </span>
                            <span className="text-[#212121]">
                                |
                            </span>
                            <span className="text-[#212121] fontdubai">
                                ورود
                            </span>
                        </div>
                    </div>
                    <div className="search-logo-Div w-[850px] h-[70px]  flex justify-between items-center">
                        <div className="search-Div w-[680px] h-[55px] bg-[#f0f0f0] flex justify-center items-center rounded-[5px]">
                            <div className="input-shoppingIcon-Div flex justify-center items-center">

                                <input className="w-[600px] h-[18px] text-[#696b6c]" type="search" name="" id="" placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید" />
                                <MagnifyingGlassIcon size={35} color="#ADB1B6" />
                            </div>
                        </div>
                        <img className="logo w-[110px] h-[50px]" src="https://www.technolife.com/image/static_logo_techno_new.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* NavbarItems */}
            <div dir="rtl" className="h-[40px] flex flex-row px-[20px] items-center">
                <ul className="flex flex-row justify-start gap-[30px] items-center">

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <ListIcon size={24} />
                            دسته بندی محصولات
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <BasketIcon size={24} />
                            خرید سازمانی
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <GiftIcon size={24} />
                            کارت هدیه
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <CubeIcon size={24} />
                            کالا های استوک
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <WalletIcon size={24} />
                            خرید اقساطی
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] fontnian" href="">
                            <CoinIcon size={24} />
                            خرید طلای دیجیتال
                        </a>
                    </li>

                    <li className="flex flex-row justify-center mx-[10px]">
                        <a className="flex flex-row gap-[10px] text-blue-700 fontnian" href="">
                            فروشنده شو
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}
export default Navbar;