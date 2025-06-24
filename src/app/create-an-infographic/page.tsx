// "use client"

// import React, { useState } from 'react';
// // Using Lucide React for icons, assumed to be available in the environment.
// // For a standalone React setup, you'd install: npm install lucide-react
// import { Sparkles, Loader2, Info } from 'lucide-react';

// // Main App component
// const App = () => {
//   const [topic, setTopic] = useState('Sustainable Cities');
//   const [infographicData, setInfographicData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   /**
//    * Fetches infographic content from the Gemini API.
//    * The response is structured as JSON using a predefined schema.
//    */
//   const generateInfographicContent = async () => {
//     setLoading(true);
//     setError(null);
//     setInfographicData(null); // Clear previous data

//     try {
//       // Construct the prompt for the Gemini model
//       const prompt = `Generate a detailed infographic content for the topic "${topic}".
//       Provide a main title, a brief introduction, and 3-4 sections.
//       Each section should have a heading and 3-5 key points.
//       The content should be factual and engaging.`;

//       const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];

//       // Define the expected JSON schema for the Gemini response
//       const generationConfig = {
//         responseMimeType: "application/json",
//         responseSchema: {
//           type: "OBJECT",
//           properties: {
//             title: { type: "STRING" },
//             introduction: { type: "STRING" },
//             sections: {
//               type: "ARRAY",
//               items: {
//                 type: "OBJECT",
//                 properties: {
//                   heading: { type: "STRING" },
//                   points: {
//                     type: "ARRAY",
//                     items: { type: "STRING" }
//                   }
//                 },
//                 required: ["heading", "points"]
//               }
//             }
//           },
//           required: ["title", "introduction", "sections"]
//         }
//       };

//       const payload = {
//         contents: chatHistory,
//         generationConfig: generationConfig
//       };

//       // API key is left empty; the Canvas environment will provide it.
//       const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//             const apiKey = GEMINI_API_KEY;
//       const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       if (result.candidates && result.candidates.length > 0 &&
//           result.candidates[0].content && result.candidates[0].content.parts &&
//           result.candidates[0].content.parts.length > 0) {
//         const jsonString = result.candidates[0].content.parts[0].text;
//         const parsedJson = JSON.parse(jsonString);
//         setInfographicData(parsedJson);
//       } else {
//         setError('No valid content found in the Gemini response. Please try again.');
//       }
//     } catch (err) {
//       console.error("Error generating infographic content:", err);
//       setError(`Failed to generate infographic: ${err.message}. Please try again.`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 p-4 sm:p-6 lg:p-8 font-inter flex flex-col items-center">
//       <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
//           Gemini-Powered Infographic Creator
//         </h1>
//         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//           Enter a topic and let Gemini generate a dynamic infographic for you!
//         </p>

//         {/* Input and Button Section */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-10">
//           <input
//             type="text"
//             className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 transition duration-200 ease-in-out"
//             placeholder="e.g., The Future of Space Exploration"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//             disabled={loading}
//           />
//           <button
//             onClick={generateInfographicContent}
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" size={20} /> Generating...
//               </>
//             ) : (
//               <>
//                 <Sparkles size={20} /> Generate Infographic
//               </>
//             )}
//           </button>
//         </div>

//         {/* Error Message Display */}
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-8" role="alert">
//             <div className="flex items-center">
//                 <Info className="mr-2" size={20} />
//                 <span className="block sm:inline">{error}</span>
//             </div>
//             <p className="mt-2 text-sm">Please check your internet connection or try a different topic.</p>
//           </div>
//         )}

//         {/* Infographic Content Display */}
//         {infographicData && (
//           <div className="mt-8 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-inner border border-blue-100 animate-fade-in-up">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
//               {infographicData.title}
//             </h2>
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
//               {infographicData.introduction}
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {infographicData.sections.map((section, index) => (
//                 <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                   <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
//                     <span className="p-2 bg-blue-100 rounded-full text-blue-600">
//                         {/* Placeholder icon - you might replace with a relevant Lucide icon */}
//                         <Sparkles size={20} />
//                     </span>
//                     {section.heading}
//                   </h3>
//                   <ul className="list-none space-y-3 pl-0">
//                     {section.points.map((point, pointIndex) => (
//                       <li key={pointIndex} className="flex items-start text-gray-700">
//                         <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                         </svg>
//                         <span className="flex-1">{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Initial Prompt/Placeholder if no data */}
//         {!loading && !error && !infographicData && (
//           <div className="mt-8 p-6 text-center text-gray-500 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
//             <Sparkles className="mx-auto mb-4 text-blue-400" size={48} />
//             <p className="text-lg">Enter a topic above and click &quot;Generate Infographic&quot; to see the magic happen!</p>
//           </div>
//         )}
//       </div>

//       {/* Tailwind CSS Script - Important for styling */}
//       <script src="https://cdn.tailwindcss.com"></script>
//       {/* Google Fonts - Inter */}
//       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />

//       {/* Custom CSS for fade-in animation */}
//       <style>
//         {`
//         .font-inter {
//           font-family: 'Inter', sans-serif;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default App;
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
