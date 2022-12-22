import { useRouter } from "next/router";
import Link from "next/link";
import SearchInput from "../components/SearchInput";

function Header() {
  const { pathname } = useRouter();
  return (
    <>
      {!Boolean(pathname.includes("auth") || pathname === '/') && (
        <header className="p-5">
          <div className="flex justify-between max-w-7xl mx-auto flex-1 flex-grow">
            <Link className="w-max overflow-hidden break-keep" href={"/home"}>
              <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-fontPrimary to-secondary break-keep">
                Data-Films
              </span>
            </Link>
            <SearchInput />
            <nav>
              <ul className="flex gap-3">
                <li>
                  <Link href={"/home"}>Movies</Link>
                </li>
                <li>
                  <Link href={"/auth/signout"}>Sign Out</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
