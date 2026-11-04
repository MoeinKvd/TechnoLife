"use client"
import { CaretUpIcon, InstagramLogoIcon, TelegramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

const Footer = () => {
    return (
        <div>
            <div className="flex bg-gradient-to-r from-[#0079B1] to-[#1B3671] w-[98%] h-[1760px] rounded-3xl mx-auto mb-2">
                <div className="h-[95%] w-[90%] mx-auto my-auto">
                    <div className=" w-[100%] h-[127px] flex flex-row justify-between items-center">

                        <div className="w-[50%]">
                            <button type="button" className="flex items-center justify-center gap-[10px] fontdubai cursor-pointer rounded-xl bg-white w-[180px] h-[36px]">
                                بازگشت به بالا
                                <CaretUpIcon size={24} />
                            </button>
                        </div>
                        <div dir="rtl" className="w-[50%]">
                            <img className="w-[174px] h-[65px]" src="/Images/Logos/static_white_logo_techno.svg" alt="" />
                        </div>
                    </div>
                    <hr className="mt-6 text-white" />
                    <div className="grid grid-cols-3 grid-rows-2 gap-[10px] h-[900px]  w-full mt-[30px]  ">
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                        <div className=" flex flex-col items-end gap-4 p-[10px] justify-start fontdubai text-white">
                            <h3 className="text-3xl my-[20px]">درباره ما</h3>
                            <a href="">اپلیکیشن تکنولایف</a>
                            <a href="">تکنولایف در یک نگاه</a>
                            <a href="">اهداف و تعهد های ما</a>
                            <a href="">سوالات متداول</a>
                            <a href="">فروشگاه های حضوری</a>
                            <a href="">تماس با ما</a>
                            <a href="">گزارش سال 1403</a>
                        </div>
                    </div>
                    <hr className="mt-6 text-white" />
                    <div dir="rtl" className="grid grid-cols-3 grid-rows-1 gap-[10px] h-[225px] w-full mt-[30px] text-white">
                        <div className="flex flex-col ">
                            <h4 className="text-2xl mt-5 fontdubai">ارتباط با ما</h4>
                            <h5 className="mt-8 fontdubai">تلفن:  021-91077500</h5>
                            <h5 className="mt-2 fontdubai">ایمیل:  info@technolife.com</h5>

                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-2xl mt-5 fontdubai">شبکه های اجتماعی</h4>
                            <div className="flex flex-row pr-[30px] text-3xl gap-[30px] mt-8">
                                <a href="">
                                    <InstagramLogoIcon size={24} />
                                </a>
                                <a href="">
                                    <TelegramLogoIcon size={24} />
                                </a>
                                <a href="">
                                    <YoutubeLogoIcon size={24} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl mt-5 fontdubai"> دانلود اپلیکیشن ما از :</h4>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-5">
                                <div className="bg-white flex h-[48px] items-center rounded-xl justify-center">
                                    <a href="">
                                        <img src="/Images/marketsfooter/footerBazzar.webp" alt="" />
                                    </a>
                                </div>
                                <div className="bg-white flex h-[48px] items-center rounded-xl justify-center">
                                    <a href="">
                                        <img className="w-full h-[35px]" src="/Images/marketsfooter/footerDirectApp.png" alt="" />
                                    </a>
                                </div>
                                <div className="bg-white flex h-[48px] items-center rounded-xl justify-center">
                                    <a href="">
                                        <img src="/Images/marketsfooter/footermayket.webp" alt="" />
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <hr className="mt-6 text-white" />
                    <div dir="rtl" className="flex flex-row justify-between">
                        <div className="grid w-[50%] grid-cols-3 grid-rows-1 mt-8">
                            <img className="w-[140px] h-[39px]" src="/Images/marketsfooter/footerImg9b2XMW.webp" alt="" />
                            <img className="w-[140px] h-[39px]" src="/Images/marketsfooter/footerImgcXMKSD.webp" alt="" />
                            <img className="w-[140px] h-[39px]" src="/Images/marketsfooter/footerImghiCzG8.webp" alt="" />
                        </div>
                        <div className="grid grid-cols-5 grid-rows-1 gap-5 mt-8">
                            <div className="flex justify-center items-center w-[76px] h-[76px] bg-white rounded-sm" >
                                <a href="">
                                    <img className="w-[60px] h-[60px]" src="/Images/marketsfooter/enemad/logo-e.png" alt="" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[76px] h-[76px] bg-white rounded-sm" >
                                <a href="">
                                    <img className="w-[60px] h-[60px] fit" src="/Images/marketsfooter/enemad/etehadie.svg" alt="" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[76px] h-[76px] bg-white rounded-sm" >
                                <a href="">
                                    <img className="w-[60px] h-[60px]" src="/Images/marketsfooter/enemad/c4.webp" alt="" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[76px] h-[76px] bg-white rounded-sm" >
                                <a href="">
                                    <img className="w-[60px] h-[60px]" src="/Images/marketsfooter/enemad/c5.webp" alt="" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[76px] h-[76px] bg-white rounded-sm" >
                                <a href="">
                                    <img className="w-[60px] h-[60px]" src="/Images/marketsfooter/enemad/samandehi.webp" alt="" />
                                </a>
                            </div>


                        </div>
                    </div>

                    <div dir="rtl" className=" flex justify-center py-[30px] mt-25 gap-4">
                        <span className="fontdubai text-xl text-white" >1391-1405</span>
                        <span className="fontdubai text-xl text-white">تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می باشد</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer