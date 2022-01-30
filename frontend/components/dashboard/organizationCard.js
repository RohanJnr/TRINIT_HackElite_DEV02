import { useRouter } from 'next/router'
import samplePic from '../../images/sampel.jpg'
import Image from 'next/image'

export default function OrganizationCard(props) {
    const router = useRouter()
    
    return (
        <div onClick={()=>router.push(`/${props.name}`)} className="my-20 p-10 w-full flex flex-row shadow-xl md:rounded-lg justify-between items-center bg-white hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="p-2 flex">
                <div className="mx-4">
                    <Image src={samplePic} width={150} height={150} className="rounded-full"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold title-font text-gray-700 my-2">{props.name}</h1>
                    <small className="text-lg font-semibold text-gray-500 m-1">Role: {props.role}</small>
                </div>
                
            </div>
            <div className="flex flex-col">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full m-2">
                    {props.button1}
                </button>
                {props.button2 ? (
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full m-2">
                        {props.button2}
                    </button>
                ):<></>}
                
            </div>
        </div>
    )
}