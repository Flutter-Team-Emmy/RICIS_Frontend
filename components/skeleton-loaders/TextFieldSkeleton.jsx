const TextFieldSkeleton = () => {
  return (
    <div className="w-full">
      <span className="block mb-3 w-24 h-4 bg-gray-200 animate-pulse"></span>
      <div className="w-72 h-12 bg-gray-200 animate-pulse rounded-xl"></div>
    </div>
  );
};

export default TextFieldSkeleton;
