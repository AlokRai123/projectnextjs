import { footer } from "motion/react-client"
import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">About Us</h3>
                <p>Music School is a premier institution dedicated to teaching the art and science of music. Our mission is to empower individuals with the knowledge and skills to excel in the world of music.</p>
            </div>
            <div className="flex flex-col pb-4">
                <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
                <Link href={'/'} className="hover:text-white hover:underline-offset-4">Home</Link>
                <Link href={'/'} className="hover:text-white hover:underline-offset-4">About</Link>
                <Link href={'/'} className="hover:text-white hover:underline-offset-4">Courses</Link>
                <Link href={'/'} className="hover:text-white hover:underline-offset-4">Contact</Link>
            </div>
            <div>

              <h3 className="text-2xl font-semibold mb-4 text-white">Follow us</h3>
              <Link className="pl-2 hover:text-white hover:underline-offset-4" href={'/'}>FaceBook</Link>
              <Link className="pl-2 hover:text-white hover:underline-offset-4" href={'/'}>Twitter</Link>
              <Link className="pl-2 hover:text-white hover:underline-offset-4" href={'/'}>Instagram</Link>

            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
                <p>New Delhi , India <br /> Greater Noida 100001 <br /> Email: alokrai8858153647@gmail.com <br /> Phone : +91 999999999</p>
            </div>
        </div>
        <div className="text-center mt-8">© 2023 Music School. All rights reserved</div>
    </footer>
  )
}

export default Footer