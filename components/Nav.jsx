import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="icon">
          <i className="fa-solid fa-house" />
        </Link>
        <Link href="/new-ticket" className="icon">
          <i className="fa-solid fa-ticket"></i>
        </Link>
      </div>
      <div>
        <p className="text-default-text">faruk21@gmail.com</p>
      </div>
    </nav>
  );
}
