import { useState } from 'react';

type RatingComponentProps = {
    onRate: (rating: number) => void;
};

function RatingComponent({ onRate }: RatingComponentProps) {
    const [selectedRating, setSelectedRating] = useState<number>(0);

    const handleClick = (rating: number) => {
        setSelectedRating(rating);
        onRate(rating);
    };

    return (
        <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    data-testid={`star-${star}`}
                    onClick={() => handleClick(star)}
                    className={`cursor-pointer text-3xl transition-colors ${
                        selectedRating >= star
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                    }`}
                >
                ★
            </span>
            ))}
        </div>
    )
}

export default RatingComponent;