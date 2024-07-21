"use client"
import Image from "next/image";
import { useState } from "react";
const image=[
  {
  id:1,
  url:"https://img.freepik.com/free-photo/beautiful-shot-stylish-grey-chair-isolated-white-background_181624-25232.jpg?t=st=1721488439~exp=1721492039~hmac=bc412aaf5863172fb71841ba627be95e2be35b2febaabfd21c6b1475923ebaa6&w=360"
},
  {
  id:2,
  url:"https://img.freepik.com/free-psd/chair-pillow_176382-876.jpg?t=st=1721489001~exp=1721492601~hmac=6a531bcbcee7982ddf25516085753380982734b652ea155e7a2ec7217aeac130&w=740"
},
  {
  id:3,
  url:"https://img.freepik.com/free-psd/chair-pillow_176382-879.jpg?t=st=1721489040~exp=1721492640~hmac=89f14a290cfc893467eb864fe2e8df9bb0b91b3e4666f253e4ff0e636f551a2a&w=740"
},
  {
  id:4,
  url:"https://img.freepik.com/free-photo/beautiful-shot-modern-black-grey-chair-isolated-white_181624-22598.jpg?t=st=1721489073~exp=1721492673~hmac=fd98750ef0efd3a9645e5ca90c310b90bfbc1d62b4919a33e2a4331b4de99775&w=360"
}
]

const ProductImages = () => {
  const [index,setIndex]=useState(0)
  return (
    <div className="">
        <div className="h-[500px] relative">
            <Image src={image[index].url} alt="" layout="fill" sizes="50vw" className="object-cover rounded-md"/>
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {image.map((img,i)=>(
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"key={img.id} onClick={()=> setIndex(i)}>
            <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md"/>
             </div>
          ))}
        </div>
    </div>
  )
}

export default ProductImages