const Header = () => {
  return (
    <header className="rounded-br-md rounded-bl-md shadow-md">
      <nav className="flex flex-row justify-between py-7 px-10">
        <div>
          <h1 className="text-3xl text-black font-bold">Elite House</h1>
        </div>
        <div>
          <p className="text-lg font-semibold">Admin</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
