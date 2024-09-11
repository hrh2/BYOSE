import ContinueLink from "../../Buttons/Continue";
const img = 'https://i.pinimg.com/originals/3a/30/fb/3a30fbcd481c2d2929b02ccd605e3158.jpg';

// eslint-disable-next-line react/prop-types
export default function Shops({vendor,image}) {
  return (
    <div className=" mx-auto  w-full bg-contain bg-right bg-no-repeat rounded-md" style={{backgroundImage: `url(${image?image:img})`}}>
      <div className="flex flex-col gap-3 bg-[#aaaa9b8a] dark:bg-[#55556475] p-4 px-8 rounded-md">
        <h3 className="text-[#EA580C] dark:text-[#15a7f3] text-[14px] font-medium">Only This Week</h3>
          {/* eslint-disable-next-line react/prop-types */}
        <h2 className="text-[#111827] dark:text-[#eee7d8] text-[22px] font-bold text-justify">{vendor.storeName}&nbsp;&nbsp;&nbsp;
        </h2>
        <p className="text-[#6B7280] dark:text-[#948d7f] text-[15px] font-normal">
          <i>
              {/* eslint-disable-next-line react/prop-types */}
            {vendor.storeDescription}
           </i>
        </p>
        <div>
            {/* eslint-disable-next-line react/prop-types */}
          <ContinueLink link={`/stores/${vendor.vendor}`} text={"Shop now"} />
        </div>
      </div>
    </div>
  );
}
