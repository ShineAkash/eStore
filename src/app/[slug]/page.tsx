import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
       {/* IMG */}
       <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
       </div>
       {/* TEXT */}
       <div className="w-full lg:w-1/2 flex flex-col gap-6">
       <h1 className="text-4xl font-medium">Product Name</h1>
       <p className="text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, eius! Corporis modi voluptate nihil temporibus. Recusandae earum labore officiis asperiores veniam accusamus perspiciatis. Eius labore asperiores neque vitae, autem tempore!
       </p>
       <div className="h-[2px] bg-gray-100" />
       <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">₹560</h3>
        <h2 className="font-medium text-2xl">₹460</h2>
       </div>
       <div className="h-[2px] bg-gray-100" />
       <CustomizeProducts/>
       <Add />
       <div className="h-[2px] bg-gray-100" />
       <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio porro, aliquid esse praesentium dolorem cum numquam sit aut aspernatur reprehenderit quo aperiam. Veniam explicabo dolorem, possimus autem qui itaque.</p>
       </div>
       <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio porro, aliquid esse praesentium dolorem cum numquam sit aut aspernatur reprehenderit quo aperiam. Veniam explicabo dolorem, possimus autem qui itaque.</p>
       </div>
       <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio porro, aliquid esse praesentium dolorem cum numquam sit aut aspernatur reprehenderit quo aperiam. Veniam explicabo dolorem, possimus autem qui itaque.</p>
       </div>
       </div>
    </div>
  )
}

export default SinglePage