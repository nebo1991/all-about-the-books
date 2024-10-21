const HeroSection = () => {
    return (
        <>
        <div className="text-center my-8 flex flex-col items-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-purple-800 sm:text-6xl w-[400x]">
            Welcome to Book Haven
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 w-[400px]">
            At Book Haven, we believe every book has the power to inspire, educate, and entertain. Whether you’re a lifelong reader or just beginning your journey, there’s something here for everyone. Browse through our ever-growing collection, add your own favorite reads, and be part of a community that celebrates the magic of books. Your next favorite story awaits!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="text-purple-900 rounded-md border border-purple-700 border-1 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-purple-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            
            </div>
          </div>

        </>
    );
}

 export default HeroSection;