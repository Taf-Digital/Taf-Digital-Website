import Logo from "./Logo";
import NavLinks from "./navLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >
      <div className="container">
        <nav
          className="
            glass
            rounded-full
            mt-6
            px-8
            py-4
            flex
            items-center
            justify-between
          "
        >
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-4">

            <MobileMenu />

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;