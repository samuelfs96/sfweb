const Skeleton = ({style}) => {
  return (
    <div
      style={style}
      className="flex items-center justify-center bg-gray-700 animate-pulse dark:bg-gray-900"
    />
  );
};

export default Skeleton;
