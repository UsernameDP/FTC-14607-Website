import React from "react";

function Banner({ name, content, href }) {
    return (
        <section className="w-full bg-red-700 text-white">
            <section className="flex justify-center items-center px-4 py-3 sm:px-20 max-w-8xl mx-auto">
                    <h3 className="font-bold text-xl">
                     Sign up for our CAD Camp by 11/30 11:59 PM EST 🤖 {' '}
                    <a href="https://bit.ly/robotuprisingcad" className="text-black underline">https://bit.ly/robotuprisingcad</a>
            </h3>
        </section>
        </section>
    );
}

export default Banner;
