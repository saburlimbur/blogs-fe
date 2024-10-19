import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
  const { children, type, title } = props;
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-[#e5e5e5]">
        <div className="w-[1240px] h-[800px] flex bg-[#fafafa] rounded-xl overflow-hidden border-2 shadow-2xl">
          {/* left */}
          <section className="w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1726925793996-8e478b4f99ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              className="object-cover w-full h-full"
            />
          </section>
          {/* right */}
          <section className="w-1/2 flex justify-between h-full p-6 flex-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold font-poppins text-black underline decoration-4">{title}</h2>
              <p className="text-sm font-base text-gray-400 mb-6 leading-relaxed">
                Welcome! <br />
                We're thrilled to help you get started. Please provide your details to proceed.
              </p>
            </div>

            {/* form */}
            <div>{children}</div>

            {/* conditional rendering */}
            <div className="flex items-center justify-between mt-6">
              <p className="mr-2 text-base text-gray-600">{type === 'login' ? "Don't have an account?" : 'Already have an account?'}</p>

              {type === 'login' ? (
                <Link to="/" className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300">
                  Register
                </Link>
              ) : (
                <Link to="/login" className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300">
                  Login
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AuthLayouts;
