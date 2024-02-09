interface ShoeCardProps {
  imageUrl: string;
  onShoeChange: (url: string) => void;
  currentShoeUrl: string;
}
const ShoeCard = ({
  imageUrl,
  onShoeChange,
  currentShoeUrl,
}: ShoeCardProps) => {
    console.log({currentShoeUrl, imageUrl});
    
  return (
    <div
      className={`bg-card object-cover object-center rounded-lg max-sm:p-4 ${
        imageUrl === currentShoeUrl ? "border-coral-red" : "border-none"
      }`}
      onClick={() => onShoeChange(imageUrl)}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imageUrl} alt="shoe" className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
