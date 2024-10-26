
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4 ">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h4 className="text-lg font-bold">Brew Bliss Cafe`</h4>
                     <p>Your daily dose of fresh, brewed coffee!</p>
                </div>
             
             <div className="mb-4">
                <h5 className="text-md font-semibold mb-2">Follow Us</h5>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook-icon.png" alt="Facebook" width={24} height={24}/>
                    </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-icon.png" alt="Instagram" width={24} height={24}/>
                    </a>
                    </li>

                    <li>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img src="/x-icon.png" alt="X" width={24} height={24}/>
                    </a>
                    </li>
                </ul>
             </div>

            <div className="mb-4">
                <p>Email: contact@brewblisscafe.com</p>
                <p>Phone: +1 123-456-7890</p>
            </div>
           
           <div className="mb-4">
            <h5 className="text-md font-semibold mb-2">Quick Links</h5>
            <ul className="flex justify-center space-x-4">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
            </ul>

           </div>

             <div>
                <p>Hours: Mon-Fri: 8 AM - 8 PM, Sat-Sun: 9 AM - 5 PM</p>
             </div>


         <div className="mt-4">
            <p>&copy; 2024Brew Bliss Cafe`. All Rights Reserved.</p>

         </div>


            </div>

        </footer>
    );
};
export default Footer;