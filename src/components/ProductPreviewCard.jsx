const ProductPreviewCard = ({ img, setBigProductImage, bigProductImage }) => {
  const handleClick = () => {
    if (bigProductImage !== img.bigPhone) {
      setBigProductImage(img.bigPhone);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigProductImage === img.bigPhone
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 dark-border`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={img.thumbnail}
          alt="phone collection"
          className="object-cover w-3/4 h-2/4"
        />
      </div>
    </div>
  );
};

export default ProductPreviewCard;