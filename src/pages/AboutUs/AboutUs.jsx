import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaBullseye, FaStar, FaUsers } from "react-icons/fa";

export default function AboutUs() {
    const tabs = ["Story", "Mission", "Success", "Team & Others"];
    const [active, setActive] = React.useState("Story");

    const content = {
        Story: (
            <div className="space-y-4">
                <p>
                    We began with one goal: make parcel delivery fast, reliable, and stress-free. Our focus on tracking,
                    logistics, and customer support has earned the trust of thousands.
                </p>
                <p>
                    From personal gifts to urgent business packages, we ensure every delivery reaches the right place on time.
                </p>
                <p>
                    Years of consistent service have helped us grow and build long-term relationships with customers.
                </p>
                <p>
                    Every day, our team works to improve speed, accuracy, and overall service quality.
                </p>
            </div>
        ),

        Mission: (
            <p className="text-base md:text-lg leading-relaxed">
                Our mission is to build a delivery experience that people can depend on—fast, transparent, and fully
                trackable. We aim to combine real-time tracking, smart logistics, and seamless communication so every
                customer knows exactly where their parcel is and when it will arrive. By continuously improving our
                technology and services, we work to make every delivery simple, reliable, and worry-free.
            </p>
        ),


        Success: (
            <p className="text-base md:text-lg leading-relaxed">
                Over the years, we have successfully delivered thousands of parcels with an impressive on-time success
                rate. Our efficiency comes from optimized routes, trained delivery riders, and a strong commitment to
                accuracy. Each successful delivery strengthens our reputation and motivates us to maintain—and exceed—
                this performance standard.
            </p>
        ),


        "Team & Others": (
            <p className="text-base md:text-lg leading-relaxed">
                Our team is the backbone of ZapShift. From dedicated riders to support agents and logistics managers,
                everyone works together to make deliveries smoother and faster. We focus on teamwork, continuous
                improvement, and customer satisfaction. With every passing day, we strive to enhance our service
                quality, strengthen our operations, and create a better experience for all users.
            </p>
        ),

    };

    return (
        <div className="p-6 lg:p-12 bg-base-100 text-base-content   rounded-3xl shadow">
            <h1 className="text-4xl font-bold mb-3">About Us</h1>
            <p className="text-sm mb-8 text-gray-600">
                Enjoy fast, reliable parcel delivery with real time tracking and zero hassle. From personal <br />
                packages to business shipments, we deliver on time, every time.
            </p>

            {/*divider */}
            <div className="border-t-2 border-dashed border-secondary/40 mb-8"></div>

            <div className="tabs tabs-bordered mb-6">
                {tabs.map((tab) => (
                    <a
                        key={tab}
                        className={`tab ${active === tab ? "tab-active" : ""} text-2xl `}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </a>
                ))}
            </div>

            <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="min-h-[150px]"
            >
                {content[active]}
            </motion.div>
        </div>
    );
}