import Image from "next/image";
import Link from "next/link";




const page = () => {

    const videoURL = 'https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949';


    return (
        <section className="flex flex-wrap max-lg:justify-center max-lg:px-5">
            <div className="w-[500px] h-screen bg-[url('/bg.jpg')] bg-no-repeat bg-cover lg:block hidden"  >

            </div>

            <div className="flex-1 font-ubuntu flex flex-col max-lg:mt-20 mt-40 lg:ml-52  ml-12 max-w-[600px]  " >
                <h1 className="text-[32px] font-bold">Sign in to Fribbble</h1>

                <div className="mt-10 border-[2px] border-gray-800 px-2 py-6 rounded-full flex justify-center items-center gap-4 cursor-pointer">
                    <span>
                            <Image
                                src='/google.png'
                                alt='Google Image'
                                width={24}
                                height={24}
                            />
                    </span>
                    <p className="font-ubuntu font-semibold text-[16px]">Sign in with Google</p>
                </div>

                <div className="mt-8 flex  items-center justify-center gap-4">
                    <div className=" h-[1px] w-[180px] bg-slate-600 max-lg:hidden"></div>
                    <div>
                        <p className="font-ubuntu text-[18px] text-gray-600">or sign in with email</p>
                    </div>
                    <div className=" h-[1px] w-[180px] bg-slate-600 max-lg:hidden"></div>

                </div>


                {/* Login Inputs */}
                
                <div>


                    <label className="flex flex-col mt-16">

                        <span className="font-semibold text-[20px] leading-7">Username or Email</span>
                        <input type="text" className=" py-6 mt-2 border-[1px] px-4 outline:none border-gray-400 rounded-2xl"/>
                    </label>


                    <label className="flex flex-col mt-16">

                        <span className="font-semibold text-[20px] leading-7">Password
                            <span className="float-right"><Link href="/" className="text-[16px] font-normal underline">Forgot?</Link></span>
                        </span>
                        <input type="text" className=" py-6 mt-2 border-[1px] px-4 outline:none border-gray-400 rounded-2xl"/>
                    </label>
                    
                    <div className="mt-12 bg-[#0d0c22] py-6 text-white flex items-center justify-center rounded-full">
                        <Link href="/" className="w-full text-center">Sign In</Link>
                    </div>
                    
                    <div className="mt-9 text-center">
                        <p className="text-[18px]">Don't have an account? <Link href="/" className="text-[16px] font-normal underline">Sign Up?</Link></p>
                    </div>

                </div>


            </div>

        </section>
    )
}

export default page