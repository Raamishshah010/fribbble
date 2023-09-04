
const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="mt-32 ">
                <h5 className="text-[18px] bg-pink-200 py-3 px-12 rounded-full font-semibold font-poppins">Over 3 million ready-to-work creatives in our community!</h5>
            </div>

            <h1 className="text-center text-8xl max-md:w-full max-md:text-4xl max-w-[800px] mt-6 leading-tight font-cardo text-slate-900">Hire the world’s top creative talent.</h1>
            <p className="mt-8 text-2xl font-poppins text-center">Connect with a community of millions of top-rated designers & agencies around the world.</p>

            <div className="flex items-center justify-center mt-12">
                <button className="bg-black px-12 py-4 text-white text-xl rounded-full">Start hiring today</button>
            </div>

        </section>
    )
}

export default Hero