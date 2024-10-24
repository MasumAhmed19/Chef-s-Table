import NavName from "../components/NavName";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] md:h-[80vh] rounded-md overflow-hidden mt-10 text-center gap-5 text-white px-5 md:px-0" style={{ backgroundImage: "url('https://i.ibb.co.com/rHVXCb2/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl md:text-6xl font-bold md:w-2/3 tracking-tighter">Discover an exceptional cooking class tailored for you!</h2>
            <p className="md:w-1/2">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-5">
                <button className="px-4 py-2 bg-blue-700 rounded-full text-white"><NavName name="Explore Now"/></button>
                <button className="px-4 py-2 bg-blue-700 rounded-full text-white"><NavName name="Our Feedback"/></button>
            </div>

        </div>
    );
};

export default Hero;