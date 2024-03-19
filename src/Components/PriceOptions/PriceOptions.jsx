import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

        const PriceOptions = [
            {
            "id": "1",
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "24/7 access to the gym",
                "Discounts on gym merchandise"
            ]
            },
            {
            "id": "2",
            "name": "Standard Membership",
            "price": "$49.99/month",
            "features": [
                "All features of Basic Membership",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Access to swimming pool",
                "Complimentary beverages"
            ]
            },
            {
            "id": "3",
            "name": "Premium Membership",
            "price": "$79.99/month",
            "features": [
                "All features of Standard Membership",
                "Personalized workout plans",
                "Access to personal trainers",
                "Towel service",
                "Nutritional counseling",
                "Access to exclusive member events"
            ]
            }
        ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;