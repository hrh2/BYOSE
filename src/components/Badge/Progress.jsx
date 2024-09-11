// Progress.jsx
import PropTypes from 'prop-types';

const Progress = ({ percentage }) => {
    const getColor = (percentage) => {
        if (percentage < 33) {
            return 'bg-red-500';
        } else if (percentage < 66) {
            return 'bg-yellow-500';
        } else {
            return 'bg-green-500';
        }
    };

    return (
        <div className="w-full bg-gray-300 rounded-full h-4">
            <div
                className={`h-4 rounded-full ${getColor(percentage)}`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
};

export default Progress;
