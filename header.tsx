
import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white text-1 gap-20" style={{fontFamily:'Lobster, cursive',}}>
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2x1 font-bold">Brew Bliss Cafe`</h1>
        <nav className="container mx-auto flex justify-between gap-6">
          <ul className="flex space-x-6">
            <li><Link href="/"><a className="hover:text-gray-400 gap-6"></a>Home</Link></li>
            <li><Link href="/about"><a className="hover:text-gray-400"></a>About us</Link></li>
            <li><Link href="/menu"><a className="hover:text-gray-400"></a>Menu</Link></li>
            <li><Link href="/contact"><a className="hover:text-gray-400"></a>Contact us</Link></li>
            <li><Link href="/order"><a className="hover:text-gray-400"></a>Order Online</Link></li>
            <li><Link href="/locaton"><a className="hover:text-gray-400"></a>Location</Link></li>


          </ul>
        </nav>

      </div>

    </header>
  );
};
export default Header;