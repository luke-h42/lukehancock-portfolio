import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-white font-bold sticky top-0 z-10">
      <div className="py-4 flex items-center justify-between container mx-auto px-6 max-w-screen-xl ">
        <div className="">
          <Link
            href="#Hero"
            to="Hero"
            smooth={true}
            duration={500}
            offset={-56}
            className="cursor-pointer "
          >
            Luke Hancock
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-12">
          <Link
            href="#Hero"
            to="Hero"
            smooth={true}
            duration={500}
            offset={-56}
            className="cursor-pointer hover:underline"
            activeClass="text-blue-600"
            spy={true}
          >
            Home
          </Link>
          <Link
            href="#Projects"
            to="Projects"
            smooth={true}
            duration={500}
            offset={-56}
            className="cursor-pointer hover:underline "
            activeClass="text-blue-600"
            spy={true}
          >
            Projects
          </Link>
          <Link
            href="#Contact"
            to="Contact"
            smooth={true}
            duration={500}
            offset={-56}
            className="cursor-pointer hover:underline "
            activeClass="text-blue-600"
            spy={true}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
