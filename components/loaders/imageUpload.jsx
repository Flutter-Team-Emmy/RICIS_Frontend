import { BounceLoader, ClipLoader, GridLoader, HashLoader } from "react-spinners";


const ImageUploadLoader = () => {

    return (
        <div className="flex justify-center items-center gap-4 fixed inset-0 bg-[rgb(0,0,0,0.8)] bg-opacity-50 z-[9999]">
            <HashLoader size={40} color="#fff" />
            {/* <BounceLoader size={40} color="#fff" /> */}
            <p className="text-white text-xl lg:text-3xl italic">Preparing Documents...</p>
        </div>
    )
}


export default ImageUploadLoader;