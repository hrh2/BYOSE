import {formatDate} from "../../../utils/helpers.js";

// eslint-disable-next-line react/prop-types,no-unused-vars
export default function ProductCard03({inventory}) {
    return (
    <div className="flex flex-col gap-3">
      {/* eslint-disable-next-line react/prop-types */}
      <div className="w-full bg-slate-700 min-h-[27vh] bg-cover bg-center bg-no-repeat rounded-md p-4" style={{backgroundImage:`url(${inventory?inventory.product.images[0]:""})`}}>
          {/* eslint-disable-next-line react/prop-types */}
        <span className="bg-[#FFF] dark:bg-[#000] p-1 px-2 rounded-md text-[#634C9F] dark:text-[#9cb360] font-bold pt-2">{inventory?inventory.product.category:`Un Categorized`}</span>
      </div>
      <div className="p-3">
          {/* eslint-disable-next-line react/prop-types */}
        <p className="text-[#030712] dark:text-[#fcf8ed] text-[21px] text-justify font-bold">{inventory?inventory.product.description:"How grocers are approaching delivery as the market evolves"}</p>
        <p className="text-[#4B5563] dark:text-[#b4aa9c] text-[15px] text-justify font-normal">Bilmålvakt treskade i nibel den mobilmissbruk deren
        jyn nöning osk heterostik i rel ultran. Fälass</p>
      </div>
      <div className="flex flex-row gap-3 text-[14px]">
        <span className="flex gap-2 font-semibold"><i className="font-normal">by</i>Byose</span>
        {/* eslint-disable-next-line react/prop-types */}
        <span className="text-[#374151] dark:text-[#c8beae]">{inventory?formatDate(inventory&&inventory.product.createdAt):`3 Nov 2023`}</span>
      </div>
    </div>
  )
}
