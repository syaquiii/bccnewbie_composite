import { navlinkprofile } from "@/data/navlinkprofile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="  mycontainer">
      <div className=" border-b border-b-normal mt-8 overflow-scroll overflow-y-hidden">
        <div className="flex space-x-8">
          {navlinkprofile.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`${
                pathname === item.url
                  ? "border-dark text-dark animate-pulse"
                  : "border-transparent text-green hover:dark hover:border-gray-300"
              } whitespace-nowrap font-bold py-4 px-1  text-xl   transition-colors duration-200`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;
