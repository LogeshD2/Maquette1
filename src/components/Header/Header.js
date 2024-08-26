import React from "react";
import Button from "../UI/Button/Button";
import logo from "../../assets/image/Logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-neutral-silver">
      {/* Logo Section */}
      <div className="flex-shrink-0 ml-[105px]">
        <img src={logo} alt="Logo" width="154.49" height="24"/>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex" style={{ gap: "50px" }}>
          <li className="text-body-1 font-regular text-gray-900">
            <p>Home</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900">
            <p>Service</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900">
            <p>Feature</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900">
            <p>Product</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900">
            <p>Testimonial</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900">
            <p>FAQ</p>
          </li>
        </ul>
      </nav>

      {/* Authentication Links */}
      <div className="flex items-center space-x-4">
        <div className="text-primary">Login</div>
        <Button label={"Sign up"} />
      </div>
    </header>
  );
}
