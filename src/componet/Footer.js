import React from "react";

export default () => {
  return (
    <div className="bg-gray-800 text-gray-100 py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-end px-4">
        <div className="flex items-center">
          <p className="text-sm mr-4">聯繫我:</p>
          <a
            href="mailto:com414141@gmail.com"
            className="text-gray-100 hover:text-gray-300 mr-4"
          >
            Email
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100000429977627"
            className="text-gray-100 hover:text-gray-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};
