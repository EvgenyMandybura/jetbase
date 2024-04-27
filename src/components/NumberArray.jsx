export const NumberArray = ({ array, title }) => {
    if (!Array.isArray(array)) {
        return null;
    }

    return (
        <div>
            <p className="font-bold">{title}</p>
            <div className="flex flex-wrap">
                {array.map((number) => (
                    <span className="text-sm mr-2 break-words" key={number}>
            {number}{array[array.length - 1] !== number && ','}
          </span>
                ))}
            </div>
        </div>
    );
};
