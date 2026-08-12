import { navigation } from "../../data/navigation";

function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="
              relative
              text-white
              hover:text-cyan-400
              transition
              duration-300
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;