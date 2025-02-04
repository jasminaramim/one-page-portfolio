
import {AiFillGithub} from 'react-icons/ai'
const Banner = () => {
    return (
        <div className="lg:px-56 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse  justify-between lg:gap-28 items-center ">
           <div className="h-full  lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
            <h1 className="text-[72px] font-bold mb-8 leading-normal ">Welcome To <br /><span className="text-fuchsia-500"> My Website</span></h1>
            <p className="w-[400px] text-xl" >Web Developer | Frontend and Backend Enthusiast | Passionate About Building Interactive, User-Centric Web Applications

With a strong foundation in JavaScript, HTML, CSS, and proficiency in frameworks like React and Node.js</p>
<div className="flex mt-8 gap-2 ">
    <div className="flex items-center justify-center">
        <div className="flex space-x-2">
            <a href="" className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2 ">
                <AiFillGithub className="text-[28px]"/>
            </a>

            <a href="" className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2 ">
                <AiFillGithub className="text-[28px]"/>
            </a>

            <a href="" className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2 ">
                <AiFillGithub className="text-[28px]"/>
            </a>

            <a href="" className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2 ">
                <AiFillGithub className="text-[28px]"/>
            </a>
        </div>
    </div>
</div>
                </div> 
        </div>
    );
};

export default Banner;