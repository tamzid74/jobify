import logo from "../assets/images/employee_2936747 (2).png";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content font-roboto">
        <aside>
          <img className="w-20" src={logo} alt="" />
          <p className="font-roboto">
            <span className="text-primary font-bold">Jobify</span> website co...
            <br />
            Providing reliable jobs since <span className="text-primary font-bold">1992</span>
          </p>
        </aside>
        <nav>
        <header className=" text-primary font-bold text-base">Address</header>
          <p>Head Office: Banani,Dhaka,Bangladesh</p>
          <p>Phone number: +880-1300072001</p>
          <p>Email: jobifyco@web.com</p>
        </nav>
        <nav>
          <header className="text-primary font-bold text-base">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="text-primary font-bold text-base">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="flex justify-center text-2xl gap-5 text-primary bg-base-200">
        <FaFacebook className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />
        <FaTwitterSquare className="cursor-pointer" />
      </div>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
          <p className="font-roboto">
            Copyright © 2023 - All right reserved by <span className="text-primary font-bold">Jobify</span> website co...
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
