import Laptop from "../../assets/images/Laptop.svg"
import Mobile from "../../assets/images/Smartphone.svg"
import Camera from "../../assets/images/camera.svg"
import TVRemote from "../../assets/images/Tv And Remote.svg"
import Accessories from "../../assets/images/Speaker.svg"
import Other from "../../assets/images/Gamepad.svg"

const Category = () => {
  return (
    <div className="my-10">
        <h2 className="text-4xl font-bold font-title mb-5">Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center gap-5">
            {/* Category 1 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={Laptop} alt="Computer & Laptop Image" />
                <p className="text-lg font-medium text-[#383838]">Computer & Laptop</p>
            </figure>
            {/* Category 2 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={Mobile} alt="Mobile Image" />
                <p className="text-lg font-medium text-[#383838]">Mobile & Tablet</p>
            </figure>
            {/* Category 3 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={Camera} alt="Laptop Image" />
                <p className="text-lg font-medium text-[#383838]">Camera</p>
            </figure>
            {/* Category 4 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={TVRemote} alt="TVRemote Image" />
                <p className="text-lg font-medium text-[#383838]">TV & Smart Box</p>
            </figure>
            {/* Category 5 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={Accessories} alt="Accessories Image" />
                <p className="text-lg font-medium text-[#383838]">Accessories</p>
            </figure>
            {/* Category 6 */}
            <figure>
                <img className="w-14 h-14 mx-auto" src={Other} alt="Computer & Laptop Image" />
                <p className="text-lg font-medium text-[#383838]">Other Categories</p>
            </figure>
        </div>
    </div>
  )
}

export default Category