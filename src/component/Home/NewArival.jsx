import { Link } from "react-router-dom"
import SmartPhone from "../../assets/images/smartphone.jpeg"
import Specker from "../../assets/images/speacker.png"
import TV from "../../assets/images/tv.png"
import Star from "../../assets/images/Star.svg"


const NewArival = () => {
  return (
    <div className="my-40">
        <div className="my-5 flex justify-between items-center">
            <h2 className="max-[360px]:text-lg text-3xl sm:text-4xl text-[#383838] font-semibold font-title">New Arrival</h2>
            <Link className="max-[360px]:text-sm text-2xl font-medium text-primary">View All</Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* New Arival Item 1 */}
            <div className="flex flex-col gap-5 border-2 border-gray p-4 rounded-2xl">
                <figure>
                    <img className="rounded-2xl" src={SmartPhone} alt="New Arival Smartphone Image" />
                </figure>

                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xl text-[#383838] font-semibold font-title">Smartphone 5G</h3>
                        <span className="text-xl text-[#383838] font-semibold font-title">$299.00</span>
                    </div>

                    <div className="flex max-[360px]:flex-col max-[360px]:gap-y-5 justify-between items-center">
                        <button className="max-[360px]:order-2 px-4 py-2 rounded-lg bg-primary text-lg text-white">Add to Cart</button>

                        <div className="flex  justify-between items-center max-[360px]:order-1">
                            <span className="flex justify-between items-center border-r-2 border-[#D0D0D2] pr-2 gap-x-1">
                                <img src={Star} alt="Star Image" />
                               <span className="text-lg text-gray font-medium font-title">5.0</span>
                            </span>

                            <p className="ml-2 text-lg font-medium text-gray font-title">Sold 99</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* New Arival Item 2 */}
            <div className="flex flex-col gap-5 border-2 border-gray p-4 rounded-2xl">
                <figure>
                    <img className="rounded-2xl" src={Specker} alt="New Arival Specker Image" />
                </figure>

                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xl text-[#383838] font-semibold font-title">USB Speaker Portable</h3>
                        <span className="text-xl text-[#383838] font-semibold font-title">$299.00</span>
                    </div>

                    <div className="flex max-[360px]:flex-col max-[360px]:gap-y-5 justify-between items-center">
                        <button className="max-[360px]:order-2 px-4 py-2 rounded-lg bg-primary text-lg text-white">Add to Cart</button>

                        <div className="flex  justify-between items-center max-[360px]:order-1">
                            <span className="flex justify-between items-center border-r-2 border-[#D0D0D2] pr-2 gap-x-1">
                                <img src={Star} alt="Star Image" />
                               <span className="text-lg text-gray font-medium font-title">5.0</span>
                            </span>

                            <p className="ml-2 text-lg font-medium text-gray font-title">Sold 99</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* New Arival Item 3 */}
            <div className="flex flex-col gap-5 border-2 border-gray p-4 rounded-2xl">
                <figure>
                    <img className="rounded-2xl" src={TV} alt="New Arival TV Image" />
                </figure>

                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xl text-[#383838] font-semibold font-title">Smart TV</h3>
                        <span className="text-xl text-[#383838] font-semibold font-title">$299.00</span>
                    </div>

                    <div className="flex max-[360px]:flex-col max-[360px]:gap-y-5 justify-between items-center">
                        <button className="max-[360px]:order-2 px-4 py-2 rounded-lg bg-primary text-lg text-white">Add to Cart</button>

                        <div className="flex  justify-between items-center max-[360px]:order-1">
                            <span className="flex justify-between items-center border-r-2 border-[#D0D0D2] pr-2 gap-x-1">
                                <img src={Star} alt="Star Image" />
                               <span className="text-lg text-gray font-medium font-title">5.0</span>
                            </span>

                            <p className="ml-2 text-lg font-medium text-gray font-title">Sold 99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArival