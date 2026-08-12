import logo from "../../assets/logos/Taf Digital Logo.png";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <img
        src={logo}
        alt="Taf Digital"
        className="w-14"
      />

      <div>
        <h2 className="font-black text-2xl">
          TAF DIGITAL
        </h2>

        <p className="text-xs text-gray-400">
          Where Innovation Meets Security
        </p>
      </div>
    </a>
  );
}

export default Logo;