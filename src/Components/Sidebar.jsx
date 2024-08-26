import React, { useState } from "react";

const Sidebar = ({ categories, applications, onCategorySelect, onApplicationSelect,title }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    return (
        <div className=" text-center w-64 p-4 rounded-md ">
            <div className="mb-4">
                <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="w-full bg-gray-300 p-2 rounded-md text-left font-bold flex justify-between items-center"
                >
                    Browse by Categories
                    <span>{isCategoryOpen ? "▲" : "▼"}</span>
                </button>
                {isCategoryOpen && (
                    <ul className="mt-2">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={`p-2 cursor-pointer hover:bg-gray-400 border-b-2 ${title == category?'bg-gray-200':''}`}
                                onClick={() => onCategorySelect(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <button
                    onClick={() => setIsApplicationOpen(!isApplicationOpen)}
                    className="w-full bg-gray-300 p-2 rounded-md text-left font-bold flex justify-between items-center"
                >
                    Browse by Application
                    <span>{isApplicationOpen ? "▲" : "▼"}</span>
                </button>
                {isApplicationOpen && (
                    <ul className="mt-2">
                        {applications.map((application, index) => (
                            <li
                                key={index}
                                className={`p-2 cursor-pointer hover:bg-gray-400 border-b-2 ${title == application?'bg-gray-200':''}`}
                                onClick={() => onApplicationSelect(application)}
                            >
                                {application}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
