import React, { useState, useEffect } from 'react';
import './App.css'


// function App() {

//   let allCountries : any = [];

//   useEffect(() => {
//     // This is a simple example of an effect hook
//     // that does not require cleanup
//     console.log('Hello, world!')

//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => {
//         allCountries = data;
//         console.log(allCountries);
//       })
//       .catch(error => console.log(error))

//     return () => {
//       // This return statement is optional
//       // and is used for cleanup
//       console.log('Goodbye, world!')
//     }
//   }
//   , [])





function App() {
  const [infos, setInfo] = useState<any[]>([]);


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setInfo(data.slice(0, 42));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);





return (
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <h2 className="mb-4 font-bold text-xl text-gray-600">Country Details</h2>
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">


        {infos.map((info, index) =>
        
          <div key={index} className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </a>
          <a className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
          <div key={index} className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src={info.flags?.png} alt={`${info.name.common} flag`}></img>
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">Currency: {info.currencies && Object.values(info.currencies)[0]?.name} ({info.currencies && Object.values(info.currencies)[0]?.symbol})</h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Country Name: {info.name.official}
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
      )}
        


      </div>
    </div>
  </div>
)
}






//   return (
//     <div>
//       {infos.map((info, index) => (
//         <img key={index} src={info.flags?.png} alt={`Flag of ${info.name.common}`} width={100} />
      

//       ))}
//       <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
//             <div className="mx-auto max-w-screen-xl px-4 w-full">
//               <h2 className="mb-4 font-bold text-xl text-gray-600">Country Details</h2>
//               <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                 <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//                     </svg>
//                   </a>
//                   <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
//                   <div className="h-auto overflow-hidden">
//                     <div className="h-44 overflow-hidden relative">
//                       <img src="https://picsum.photos/400/400" alt=""></img>
//                     </div>
//                   </div>
//                   <div className="bg-white py-4 px-3">
//                     <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
//                     <div className="flex justify-between items-center">
//                       <p className="text-xs text-gray-400">
//                         Lorem, ipsum dolor sit amet
//                       </p>
//                       <div className="relative z-40 flex items-center gap-2">
//                         <a className="text-orange-600 hover:text-blue-500" href="">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
//                           </svg>
//                         </a>
//                         <a className="text-orange-600 hover:text-blue-500" href="">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

  
// );
// }






export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';


// function App() {
//   const [countries, setCountries] = useState<any[]>([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => {
//         setCountries(data.slice(0, 42)); // Store only the first 42 countries
//       })
//       .catch(error => {
//         console.log('Error fetching data:', error);
//         // Handle errors here if needed
//       });
//   }, []);

//   // Instead of a loading state, you can check if countries array is empty to determine loading state
//   if (countries.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
//       <div className="mx-auto max-w-screen-xl px-4 w-full">
//         <h2 className="mb-4 font-bold text-xl text-gray-600">Country Details</h2>
//         <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
//           {countries.map((country, index) => (
//             <div key={index} className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//               <div className="h-auto overflow-hidden">
//                 <div className="h-44 overflow-hidden relative">
//                   <img src={country.flags?.png} alt={`${country.name.common} flag`} className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <div className="bg-white py-4 px-3">
//                 <h3 className="text-xs mb-2 font-medium">{country.name.common}</h3>
//                 <p className="text-xs text-gray-400">
//                   Official Name: {country.name.official}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   Currency: {country.currencies && Object.values(country.currencies)[0]?.name} ({country.currencies && Object.values(country.currencies)[0]?.symbol})
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

