import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Owls-Logo-wftpTF7ltNw5i5aFWUMvaWpsVKbPQc.png"
          alt="The Owls Logo"
          width={50}
          height={50}
        />
        <ul className="flex space-x-6">
          {["Home", "About", "Shows", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to="#"
                className="text-white hover:text-orange-200 font-bold text-lg transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
