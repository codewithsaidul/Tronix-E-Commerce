

import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-full">
        <Slider />
      </div>

      {/* PC Collection */}
      <div className="col-span-12 lg:col-span-6  bg-[url('/pcGaming.png')] bg-cover bg-center py-20 rounded-3xl px-10">
        <div className="p-2 text-center text-[#383838] bg-[#FAFAFACC] rounded-lg">
          <h2 className="text-4xl font-semibold font-title mb-3">
            PC Gaming Collection
          </h2>
          <p className="text-base font-normal">
            Explore the ultimate PC gaming collection featuring high-performance
            setups, powerful graphics cards, and immersive accessories.
          </p>
        </div>
      </div>

      {/* Camera Collection */}
      <div className="col-span-12 lg:col-span-6  bg-[url('/camera.png')] bg-cover bg-center py-20 rounded-3xl px-10">
        <div className="px-2 py-5 text-center text-[#383838] bg-[#FAFAFACC] rounded-lg">
          <h2 className="text-4xl font-semibold font-title mb-3">
            Camera Collection
          </h2>
          <p className="text-base font-normal">
          Discover our premium camera collection with cutting-edge technology, designed for both professionals and enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
