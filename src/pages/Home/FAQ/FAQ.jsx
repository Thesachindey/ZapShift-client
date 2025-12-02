import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router';

const FAQ = () => {
    const faqData = [
        {
            "question": "How do I create an account?",
            "answer": "Click the 'Sign Up' button in the top right corner and follow the registration process."
        },
        {
            "question": "How can I track my delivery in real time?",
            "answer": "Log in to your dashboard and open the 'Live Tracking' section to view your rider's real-time location."
        },
        {
            "question": "How do I assign a delivery to a rider?",
            "answer": "Go to the 'Orders' tab, select an order, and choose a rider from the assignment dropdown."
        },
        {
            "question": "Can I manage multiple stores or branches?",
            "answer": "Yes, ZapShift supports multi-branch management. Add branches from the 'Store Settings' panel."
        },
        {
            "question": "How do I update my profile information?",
            "answer": "Go to 'My Account' settings and select 'Edit Profile' to make changes."
        }
    ]

    return (
        <div className='py-20 px-9 '>
            <div className=" ">
                <div className='text-center'>
                    <h1 className='text-4xl text-secondary font-bold mb-6'>Frequently Asked Question (FAQ)</h1>
                    <p className='text-gray-500'>
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                    </p>
                </div>
                <div className="space-y-3 my-9">
                    {
                        faqData.map((faq, index) =>
                            <div key={index} className="collapse collapse-arrow bg-base-100  border border-base-300 py-5 text-lg ">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title font-semibold">{faq.question}</div>
                                <div className="collapse-content  text-sm">{faq.answer}</div>
                            </div>
                        )
                    }
                </div>
                {/* btn  */}
                <div className="flex justify-start md:justify-center ">
                    <Link className='btn px-5 border-0 rounded-lg text-center btn-primary text-secondary relative'>See More FAQ's <span className=' absolute -right-11 rotate-45 p-3 bg-secondary rounded-full text-primary text-xl'><FaArrowUp /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;