const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]">
            <option value="">Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
        </select>
        <input type="text" name="min" placeholder="min-prize"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <input type="text" name="max" placeholder="max-prize"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <select name="size" id="" className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]">
            <option>Size</option>
            <option value="">Size</option>
        </select>
        <select name="color" id="" className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]">
            <option value="">color</option>
            <option value="">red</option>
            <option value="">green</option>
        </select>
        <select name="catogary" id="" className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]">
            <option value="">Catogory</option>
            <option value="">toy</option>
            <option value="">cloth</option>
        </select>
        <select name="Allfilter" id="" className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]">
            <option value="">All filter</option>
            <option value="">filter</option>
        </select>
        </div>
        <div className=""> </div>
    </div>
  )
}

export default Filter