import Link from "next/link";
import style from "./../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <a className={style.navbar_item} >Otaku Store</a>
      </Link>
      <Link href="/product">
        <a className={style.navbar_item}>Productos</a>
      </Link>
    </nav>
  );
}
