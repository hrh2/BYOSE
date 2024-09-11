import { PiPlantFill } from 'react-icons/pi'

// eslint-disable-next-line react/prop-types
export default function Organic({text}) {
  return (
    <span className="text-[#166534] bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] text-center font-semibold text-lg rounded-3xl px-3 py-1 flex gap-2"><PiPlantFill size={25} />{text?text:`Organic`}</span>
  )
}
