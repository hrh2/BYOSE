import { MdArrowRightAlt } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function ContinueLink({className,text,link}) {
  return (
    <a href={link?link:'#'} className={`inline-flex bg-[#FFF] dark:bg-[#000]  text-[#212529] dark:text-[#dedbd9] hover:bg-[#ffffff8c] hover:text-[#00000098]  font-bold rounded-3xl ${className} `}>
      <p className="py-2 px-4 rounded-l-md inline-flex items-center m-auto">
         {text}
      </p>
      <span className="rounded-r-md flex m-auto px-2">
        <MdArrowRightAlt size={22} className='my-auto'/>
      </span>
    </a>
  )
}
