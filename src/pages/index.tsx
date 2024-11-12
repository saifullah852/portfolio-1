"use client"
import Link from "next/link"
import image from"next/image"
import React from "react"




export default function Nav () {
 return (
  <div>
  <title>Portfolio</title>
   <div>
    

     <header className="text-gray-400 bg-gray-900 body-font">
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
           <a className="mr-5 hover:text-white">Home</a>
           <a className="mr-5 hover:text-white">About us</a>
           <a className="mr-5 hover:text-white">Contact us</a>
           <a className="hover:text-white">Privacy policy</a>
         </nav>
         <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
           </svg>
           <span className="ml-3 text-xl xl:block lg:hidden">Saifullah Zain</span>
         </a>
         <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
           <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">subscribe
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
             </svg>
           </button>
         </div>
       </div>
     </header>

     <section className="text-gray-400 bg-gray-900 body-font">
       <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
         <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="SZ" src="https://img.freepik.com/premium-vector/sz-letter-logo-design-black-background-initial-monogram-letter-sz-logo-design-vector-template_634196-1216.jpg" />
         <div className="text-center lg:w-2/3 w-full">
           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Web designer SEO</h1>
           <p className="leading-relaxed mb-8">I am Saifullah Zain, a passionate and detail-oriented electronics engineer with over a decade of experience in designing,implementing, testing and delivering complex back-end and web applications. my journey has been fueled by a strong commitment to excellence and a deep love for problem-solving both in the technical and creative realms.  </p>
           <div className="flex justify-center">
             <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                 <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
               </svg>
               <span className="ml-4 flex items-start flex-col leading-none">
                 <span className="text-xs text-gray-500 mb-1">GET IT ON</span>
                 <span className="title-font font-medium">Google Play</span>
               </span>
             </button>


             <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                 <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                 <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
               </svg>
               <span className="ml-4 flex items-start flex-col leading-none">
                 <span className="text-xs text-gray-500 mb-1">Download on the</span>
                 <span className="title-font font-medium">App Store</span>
               </span>
             </button>
           </div>
         </div>
       </div>
     </section>
     <section className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col">
           <div className="h-1 bg-gray-800 rounded overflow-hidden">
             <div className="w-24 h-full bg-indigo-500"></div>
           </div>
           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
             <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Saifullah Zain</h1>
             <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Explore My Latest Projects</p>
           </div>
         </div>
         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img alt="content" className="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6HhoxNy4o6DxgGuWjDJ6OC7vKTMCZdIO7g&s" />
             </div>
             <h2 className="text-xl font-medium title-font text-white mt-5">Project 1:Calculator</h2>
             <p className="text-base leading-relaxed mt-2">Description:A simple calculator which performs  basic arithematic operations. Perfect for learning the basics of javascript funtion and user interface</p>
             <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                 <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
             </a>
           </div>
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.pixabay.com/photo/2024/09/16/11/30/atm-9051170_640.png" />
             </div>
             <h2 className="text-xl font-medium title-font text-white mt-5">Project 2:ATM</h2>
             <p className="text-base leading-relaxed mt-2"> Description: A simulation of an ATM system that handles deposits,withdrawls and balance inquiries. Useful for understanding user input and data managment.</p>
             <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                 <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
             </a>
           </div>
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img alt="content" className="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdvtQxcvJI3-59X6mlcONEdxR0apYAXkXNw&s" />
             </div>
             <h2 className="text-xl font-medium title-font text-white mt-5">Project 3:currency converter</h2>
             <p className="text-base leading-relaxed mt-2">Description: A currency converter that allows users to convert between different currencies using real time exchange rate. demonstrates API integration and data handling.</p>
             <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                 <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
             </a>
           </div>
         </div>
       </div>
     </section>

     <section className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="text-center mb-20">
           <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Saifullah Zain</h1>
           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I am a front end developer and SEO.</p>
         </div>
         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">Calculator</span>
             </div>
           </div>
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">ATM Machine</span>
             </div>
           </div>
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">Currency converter</span>
             </div>
           </div>
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">Todo list</span>
             </div>
           </div>
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">Projects</span>
             </div>
           </div>
           <div className="p-2 sm:w-1/2 w-full">
             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                 <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                 <path d="M22 4L12 14.01l-3-3"></path>
               </svg>
               <span className="title-font font-medium text-white">machine</span>
             </div>
           </div>
         </div>
         <button className="bg-gray-800 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
             <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
           </svg>
           <span className="ml-4 flex items-start flex-col leading-none">
             <span className="text-xs text-gray-500 mb-1">GET IT ON</span>
             <span className="title-font font-medium">Google Play</span>
           </span>
         </button>

         <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit On My Github </button>
       </div>
     </section>
     <section className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col">
           <div className="h-1 bg-gray-800 rounded overflow-hidden">
             <div className="w-24 h-full bg-indigo-500"></div>
           </div>
           <div className="flex flex mx-auto mt-16 sm:flex-row flex-col py-6 mb-12">
             <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Saifullah Zain</h1>
             <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
           </div>
         </div>
       </div>
     </section>

     <section className="text-gray-400 bg-gray-900 body-font relative">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col text-center w-full mb-12">
           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You need any kind of help plz contact us</p>
         </div>
         <div className="lg:w-1/2 md:w-2/3 mx-auto">
           <div className="flex flex-wrap -m-2">
             <div className="p-2 w-1/2">
               <div className="relative">
                 <label className="leading-7 text-sm text-gray-400">Name</label>
                 <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>
             </div>
             <div className="p-2 w-1/2">
               <div className="relative">
                 <label className="leading-7 text-sm text-gray-400">Email</label>
                 <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>
             </div>
             <div className="p-2 w-full">
               <div className="relative">
                 <label className="leading-7 text-sm text-gray-400">Message</label>
                 <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
               </div>
             </div>
             <div className="p-2 w-full">
               <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
             </div>
             <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
               <a className="text-indigo-400">sz805409@gmail.com</a>
               <p className="leading-normal my-5">Saifullah Zain

               </p>
               <span className="inline-flex">
                 <a className="text-gray-500">
                   <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                   </svg>
                 </a>
                 <a className="ml-4 text-gray-500">
                   <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                   </svg>
                 </a>
                 <a className="ml-4 text-gray-500">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                   </svg>
                 </a>
                 <a className="ml-4 text-gray-500">
                   <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                   </svg>
                 </a>
               </span>
             </div>
           </div>
         </div>
       </div>
     </section>
     <footer className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
         <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
           </svg>
           <span className="ml-3 text-xl">Saifullah Zain</span>
         </a>
         <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Saifullah Zain —
           <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Saifullah Zain</a>
         </p>
         <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
           <a className="text-gray-400">
             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
             </svg>
           </a>
           <a className="ml-3 text-gray-400">
             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
             </svg>
           </a>
           <a className="ml-3 text-gray-400">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
           </a>
           <a className="ml-3 text-gray-400">
             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
               <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
               <circle cx="4" cy="4" r="2" stroke="none"></circle>
             </svg>
           </a>
         </span>
       </div>
     </footer>

   </div>
   </div>
 )
}
