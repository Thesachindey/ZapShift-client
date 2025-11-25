import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review1 }) => {
    //  "id": "5f47ac10b4f1c03e8c567890",
    // "user_email": "david.lee@example.com",
    // "userName": "David Lee",
    // "delivery_email": "delivery5@example.com",
    // "ratings": 2.9,
    // "review": "Late delivery and no updates. Disappointed.",
    // "parcel_id": "5f47ac10b4f1c03e8c098765",
    // "pick_up_email": "pickup5@example.com",
    // "user_photoURL": "https://randomuser.me/api/portraits/men/19.jpg",
    // "date": "2024-08-02T16:45:00.000Z"
    const { userName, review, user_photoURL } = review1;
    return (
        <div>
            <div className="card bg-base-100 shadow-md rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto">

                {/* Quote Icon */}
                <FaQuoteLeft className="text-primary text-2xl sm:text-3xl mb-2 sm:mb-3" />

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-secondary mb-3 sm:mb-4 leading-relaxed">
                    {review}
                </p>

                {/* Divider */}
                <div className="border-t-2 border-dashed border-primary/40 my-3 sm:my-4"></div>

                {/* User Info */}
                <div className="flex flex-col sm:flex-row  text-center sm:text-start items-center gap-2 sm:gap-3">

                    <div className="w-10 h-10 sm:w-12  sm:h-12 rounded-full overflow-hidden bg-primary">
                        <img
                            src={user_photoURL}
                            alt={userName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold text-base sm:text-lg text-primary">
                            {userName}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Senior Product Designer
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReviewCard;