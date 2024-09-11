import { FaStar } from "react-icons/fa";

export default function Star({ percentage }) {
  // Calculate the number of full stars
  const fullStars = Math.floor((percentage / 100) * 5);
  // Calculate the number of partial stars if needed
  const partialStars = (percentage / 100) * 5 - fullStars;
  // Calculate the number of empty stars
  const emptyStars = 5 - fullStars - Math.ceil(partialStars);

  return (
    <div className="flex">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} size={25} className="text-[#FACC15]" />
      ))}
      {/* Render partial star if needed */}
      {partialStars > 0 && (
        <FaStar
          size={25}
          className="text-[#FACC15]"
          style={{
            clipPath: `polygon(0 0, ${partialStars * 100}% 0, ${partialStars * 100}% 100%, 0% 100%)`
          }}
        />
      )}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={index + fullStars + 1} size={25} className="text-[#D1D5DB]" />
      ))}
    </div>
  )
}
