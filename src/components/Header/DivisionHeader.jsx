// eslint-disable-next-line no-unused-vars
import React, {memo} from 'react';
import ContinueLink from "../Buttons/Continue.jsx";
const MemoizedContinueLink = memo(ContinueLink);

// eslint-disable-next-line react/prop-types
function DivisionHeader({title,description,link}) {
    return (
        <div className="flex flex-row container mx-auto justify-between px-3">
            <div className="flex flex-row gap-4 py-4">
                <span className="text-[#030712] dark:text-[#fcf8ed] font-bold md:text-[21px] text-[.8rem]">{title}</span>
                <span className="text-[#696d75] dark:text-[#96928a] md:text-base text-[.7rem] w-[60%]">{description}</span>
            </div>
            <div>
                <MemoizedContinueLink link={link} className={" bg-[#FFF] text-[.7rem]"} text={<>View&nbsp;all</>}/>
            </div>
        </div>
    );
}

export default DivisionHeader;