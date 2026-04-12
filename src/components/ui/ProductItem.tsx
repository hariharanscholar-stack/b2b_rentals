"use client";

interface ProductItemProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ProductItem({
  id,
  name,
  isActive,
  onClick,
}: ProductItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 w-full text-left transition-all duration-300 hover:opacity-80 "
    >
      {/* Product Info */}
      <div className="px-4 py-2">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-gray-500 tracking-tight">{id}</span>
          <span className="text-lg font-bold text-gray-900 tracking-tight whitespace-nowrap">
            {name}
          </span>
        </div>
        {/* Progress Bar */}
        <div
          className={`relative w-1 rounded-full overflow-hidden transition-all duration-500 ease-out ${
            isActive ? "h-16 bg-gray-300" : "h-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-primary h-full" />
        </div>
      </div>
    </button>
  );
}
