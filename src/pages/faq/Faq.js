import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <h1>this is faq page</h1>
        </div>
    );
};

export default FAQ;