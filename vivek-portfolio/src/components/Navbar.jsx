import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-zinc-900 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">Vivek</h1>

        <div className="flex gap-6 items-center">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#certificates" className="hover:text-blue-600">Certificates</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
