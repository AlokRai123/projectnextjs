'use client';
import { Meteors } from "../../components/ui/meteors";
 

 
function page() {
  return (
   
    <div className="min-h-screen bg-black py-12 pt-36 text-center p-40">
    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
     <p className="p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, inventore cupiditate! Excepturi, rerum officia. Libero magni rerum atque, quia cum quo quisquam cumque, iste, sunt eos in distinctio voluptate adipisci.</p>
    
    <div className=" items-center justify-center">
    <input type="email" 
    placeholder="Enter your email"
    className=" mb-15 border border-black p-2 rounded-md w-1/2 bg-gray-700 p-3"
    />
    <textarea id="message" rows="4" className="mt-2block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    </div>

    <button className="border border-black p-2 rounded-md bg-gray-300 text-black">Send message </button>
</div>
    
  )
}

export default page