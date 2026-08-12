import { HiMenu } from "react-icons/hi";

function MobileMenu() {
  return (
    <button
      className="
        lg:hidden
        text-white
        text-3xl
      "
    >
      <HiMenu />
    </button>
  );
}

export default MobileMenu;