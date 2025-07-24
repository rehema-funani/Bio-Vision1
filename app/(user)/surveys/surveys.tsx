// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import { BookOpen, Clock, DollarSign, GraduationCap, Heart, Leaf, MessageSquare, Smile, Sprout, Users, X, ArrowLeft, Star, CheckCircle } from "lucide-react";

// // Define types
// interface Survey {
//     id: number;
//     title: string;
//     description: string;
//     duration: string;
//     responses: number;
//     status: 'ongoing' | 'closed';
// }

// interface SurveyResponses {
//     usage: string;
//     satisfaction: string;
//     experience: string | number;
//     recommendation: string | number;
//     interaction: string | number;
//     questions: (string | number)[];
// }

// interface SurveyCardProps {
//     survey: Survey;
//     isOngoing?: boolean;
// }

// export default function Surveys() {
//     const pathname = usePathname();
//     const [searchQuery, setSearchQuery] = useState("");
//     const [heroSearchQuery, setHeroSearchQuery] = useState("");
//     const [showSurveyModal, setShowSurveyModal] = useState(false);
//     const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//     const [currentFilter, setCurrentFilter] = useState("ongoing");
//     const [surveyResponses, setSurveyResponses] = useState<SurveyResponses>({
//         usage: '',
//         satisfaction: '',
//         experience: '',
//         recommendation: '',
//         interaction: '',
//         questions: ['', '', '', '', '']
//     });
    
//     const allSurveysRef = useRef<HTMLElement>(null);

//     const navigationItems = [
//         { name: "Home", href: "/" },
//         { name: "Our Mission", href: "/mission" },
//         { name: "Shop", href: "/shop" },
//         { name: "Resources", href: "/resources" },
//         { name: "Outlets", href: "/outlets" },
//         { name: "Surveys", href: "/surveys" },
//         { name: "Events", href: "/events" },
//         { name: "Contact Us", href: "/contact" },
//     ];

//     // Sample survey data
//     const ongoingSurveys: Survey[] = [
//         {
//             id: 1,
//             title: "Farmer Resource Feedback",
//             description: "Help us better understand your experience with digital AE/EOA training.",
//             duration: "3-4 minutes",
//             responses: 156,
//             status: "ongoing"
//         },
//         {
//             id: 2,
//             title: "Consumer Awareness Survey",
//             description: "Share your thoughts on organic product awareness in your community.",
//             duration: "5-6 minutes", 
//             responses: 89,
//             status: "ongoing"
//         },
//         {
//             id: 3,
//             title: "Market Access Feedback",
//             description: "Tell us about your experience accessing markets for your produce.",
//             duration: "4-5 minutes",
//             responses: 203,
//             status: "ongoing"
//         },
//         {
//             id: 4,
//             title: "Training Program Evaluation",
//             description: "Evaluate the effectiveness of our recent training programs.",
//             duration: "3-4 minutes",
//             responses: 178,
//             status: "ongoing"
//         },
//         {
//             id: 5,
//             title: "Technology Adoption Survey", 
//             description: "Help us understand how farmers are adopting new technologies.",
//             duration: "6-7 minutes",
//             responses: 134,
//             status: "ongoing"
//         },
//         {
//             id: 6,
//             title: "Community Impact Assessment",
//             description: "Share how our programs have impacted your community.",
//             duration: "4-5 minutes",
//             responses: 267,
//             status: "ongoing"
//         }
//     ];

//     const allSurveys: Survey[] = [
//         ...ongoingSurveys,
//         {
//             id: 7,
//             title: "Annual Satisfaction Survey",
//             description: "Your overall satisfaction with our services and programs.",
//             duration: "8-10 minutes",
//             responses: 543,
//             status: "closed"
//         },
//         {
//             id: 8,
//             title: "Product Quality Assessment",
//             description: "Rate the quality of products from our certified farmers.",
//             duration: "3-4 minutes",
//             responses: 387,
//             status: "closed"
//         },
//         {
//             id: 9,
//             title: "Partnership Feedback",
//             description: "Feedback on our partnership programs and collaborations.",
//             duration: "5-6 minutes",
//             responses: 298,
//             status: "closed"
//         },
//         {
//             id: 10,
//             title: "Website Usability Study",
//             description: "Help us improve your experience on our platform.",
//             duration: "4-5 minutes",
//             responses: 421,
//             status: "closed"
//         }
//     ];

//     // Filter surveys based on search query and current filter
//     const getFilteredSurveys = () => {
//         let surveysToFilter = [];
        
//         if (currentFilter === "all") {
//             surveysToFilter = allSurveys;
//         } else if (currentFilter === "ongoing") {
//             surveysToFilter = ongoingSurveys;
//         } else if (currentFilter === "closed") {
//             surveysToFilter = allSurveys.filter(survey => survey.status === "closed");
//         }

//         const searchTerm = heroSearchQuery.toLowerCase();
//         if (searchTerm) {
//             return surveysToFilter.filter(survey => 
//                 survey.title.toLowerCase().includes(searchTerm) ||
//                 survey.description.toLowerCase().includes(searchTerm)
//             );
//         }

//         return surveysToFilter;
//     };

//     // Survey Modal Functions
//     const openSurveyModal = () => {
//         setShowSurveyModal(true);
//         // Reset responses
//         setSurveyResponses({
//             usage: '',
//             satisfaction: '',
//             experience: '',
//             recommendation: '',
//             interaction: '',
//             questions: ['', '', '', '', '']
//         });
//     };

//     const closeSurveyModal = () => {
//         setShowSurveyModal(false);
//     };

//     const handleResponseChange = (field: keyof SurveyResponses, value: string | number) => {
//         setSurveyResponses(prev => ({
//             ...prev,
//             [field]: value
//         }));
//     };

//     const handleQuestionResponse = (questionIndex: number, value: string | number) => {
//         setSurveyResponses(prev => ({
//             ...prev,
//             questions: prev.questions.map((q, i) => i === questionIndex ? value : q)
//         }));
//     };

//     const submitSurvey = () => {
//         // Handle survey submission
//         console.log('Survey submitted:', surveyResponses);
//         closeSurveyModal();
//         setShowSuccessPopup(true);
//     };

//     const closeSuccessPopup = () => {
//         setShowSuccessPopup(false);
//     };

//     const takeAnotherSurvey = () => {
//         setShowSuccessPopup(false);
//         openSurveyModal();
//     };

//     const SurveyCard = ({ survey, isOngoing = false }: SurveyCardProps) => (
//         <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
//             <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                         <span
//                             className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                 isOngoing
//                                     ? "bg-green-100 text-green-700"
//                                     : "bg-gray-100 text-gray-600"
//                             }`}
//                         >
//                             {isOngoing ? "Ongoing" : "Closed"}
//                         </span>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                         {survey.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4">{survey.description}</p>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4 text-sm text-gray-500">
//                     <div className="flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         <span>{survey.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <MessageSquare className="w-4 h-4" />
//                         <span>{survey.responses} responses</span>
//                     </div>
//                 </div>

//                 {isOngoing && (
//                     <button 
//                         onClick={openSurveyModal}
//                         className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
//                     >
//                         Take Survey
//                     </button>
//                 )}
//             </div>
//         </div>
//     );

//     // Success Popup Component
//     const SuccessPopup = () => {
//         if (!showSuccessPopup) return null;

//         return (
//             <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//                 <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
                
//                 <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl">
//                     <div className="p-8 text-center">
//                         {/* Success Icon */}
//                         <div className="flex justify-center mb-6">
//                             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                                 <CheckCircle className="w-8 h-8 text-green-600" />
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                             Thanks for Sharing Your Insights!
//                         </h2>

//                         {/* Description */}
//                         <p className="text-gray-600 mb-8 leading-relaxed">
//                             Your feedback has been received. Teams and You're helping improve access to better farming tools across Africa!
//                         </p>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-3">
//                             <button
//                                 onClick={takeAnotherSurvey}
//                                 className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
//                             >
//                                 Take Another Survey
//                             </button>
//                             <button
//                                 onClick={closeSuccessPopup}
//                                 className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-colors duration-200"
//                             >
//                                 Go Back
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // One-page Survey Modal Component
//     const SurveyModal = () => {
//         if (!showSurveyModal) return null;

//         return (
//             <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//                 {/* Blurred background overlay */}
//                 <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>
                
//                 <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//                     <div className="p-8">
//                         {/* Header */}
//                         <div className="flex items-center justify-between mb-8">
//                             <div>
//                                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Satisfaction Survey</h2>
//                                 <p className="text-gray-600">Your feedback is valuable and will help us shape future products and experiences. This survey will take approximately 4 minutes to complete.</p>
//                             </div>
//                             <button
//                                 onClick={closeSurveyModal}
//                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                         </div>

//                         {/* All Questions in One Page */}
//                         <div className="space-y-10">
//                             {/* Question 1 */}
//                             <div className="space-y-6">
//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">How often do you use our product/service?</h3>
//                                     <div className="flex flex-wrap gap-3">
//                                         {['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'].map((option) => (
//                                             <button
//                                                 key={option}
//                                                 onClick={() => handleResponseChange('usage', option)}
//                                                 className={`px-4 py-2 rounded-full border transition-colors ${
//                                                     surveyResponses.usage === option
//                                                         ? 'bg-green-600 text-white border-green-600'
//                                                         : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
//                                                 }`}
//                                             >
//                                                 {option}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">How satisfied are you with our product?</h3>
//                                     <div className="flex justify-center gap-4">
//                                         {[
//                                             { emoji: '😭', label: 'Very Dissatisfied' },
//                                             { emoji: '😟', label: 'Dissatisfied' },
//                                             { emoji: '😐', label: 'Neutral' },
//                                             { emoji: '😊', label: 'Satisfied' },
//                                             { emoji: '😍', label: 'Very Satisfied' }
//                                         ].map((option, index) => (
//                                             <button
//                                                 key={index}
//                                                 onClick={() => handleResponseChange('satisfaction', option.label)}
//                                                 className={`flex flex-col items-center p-3 rounded-lg border transition-colors ${
//                                                     surveyResponses.satisfaction === option.label
//                                                         ? 'bg-green-50 border-green-400'
//                                                         : 'bg-white border-gray-200 hover:border-green-300'
//                                                 }`}
//                                             >
//                                                 <span className="text-2xl mb-1">{option.emoji}</span>
//                                                 <span className="text-xs text-gray-600">{option.label}</span>
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Question 2 */}
//                             <div className="space-y-6 border-t pt-8">
//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">How would you rate your experience with our product?</h3>
//                                     <div className="flex justify-center gap-2">
//                                         {[1, 2, 3, 4, 5].map((star) => (
//                                             <button
//                                                 key={star}
//                                                 onClick={() => handleResponseChange('experience', star)}
//                                                 className="p-1"
//                                             >
//                                                 <Star
//                                                     className={`w-8 h-8 ${
//                                                         star <= Number(surveyResponses.experience || 0)
//                                                             ? 'text-yellow-400 fill-current'
//                                                             : 'text-gray-300'
//                                                     }`}
//                                                 />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">On the scale of 1-10, how likely would you recommend our product to others?</h3>
//                                     <div className="flex flex-wrap justify-center gap-2">
//                                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                                             <button
//                                                 key={num}
//                                                 onClick={() => handleResponseChange('recommendation', num)}
//                                                 className={`w-10 h-10 rounded-full border transition-colors ${
//                                                     Number(surveyResponses.recommendation) === num
//                                                         ? 'bg-green-600 text-white border-green-600'
//                                                         : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
//                                                 }`}
//                                             >
//                                                 {num}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Question 3 */}
//                             <div className="space-y-6 border-t pt-8">
//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">Based on your experience, how easy or difficult was it to interact with our company?</h3>
//                                     <div className="flex justify-center gap-2">
//                                         {[1, 2, 3, 4, 5].map((num) => (
//                                             <button
//                                                 key={num}
//                                                 onClick={() => handleResponseChange('interaction', num)}
//                                                 className={`px-4 py-2 rounded-full border transition-colors ${
//                                                     Number(surveyResponses.interaction) === num
//                                                         ? 'bg-green-600 text-white border-green-600'
//                                                         : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
//                                                 }`}
//                                             >
//                                                 {num}
//                                             </button>
//                                         ))}
//                                     </div>
//                                     <div className="flex justify-between text-sm text-gray-500 mt-2">
//                                         <span>Very difficult</span>
//                                         <span>Very easy</span>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Questions</h3>
//                                     <div className="space-y-4">
//                                         {['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'].map((question, index) => (
//                                             <div key={index} className="flex items-center justify-between">
//                                                 <span className="font-medium">{question}</span>
//                                                 <div className="flex gap-2">
//                                                     {[1, 2, 3, 4, 5].map((rating) => (
//                                                         <button
//                                                             key={rating}
//                                                             onClick={() => handleQuestionResponse(index, rating)}
//                                                             className={`w-8 h-8 rounded-full border text-sm transition-colors ${
//                                                                 Number(surveyResponses.questions[index]) === rating
//                                                                     ? 'bg-green-600 text-white border-green-600'
//                                                                     : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
//                                                             }`}
//                                                         >
//                                                             {rating}
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         ))}
//                                         <div className="flex justify-between text-xs text-gray-500 mt-2">
//                                             <span>Strongly Disagree</span>
//                                             <span>Strongly Agree</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer */}
//                         <div className="flex justify-end items-center gap-3 mt-10 pt-6 border-t">
//                             <button
//                                 onClick={closeSurveyModal}
//                                 className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-full font-medium transition-colors"
//                             >
//                                 Save Draft
//                             </button>
//                             <button
//                                 onClick={submitSurvey}
//                                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen bg-white text-gray-800">
//             <div className="fixed inset-0 bg-black/40" />

//             {/* Fixed Navbar */}
//             <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
//                 <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <img
//                             src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//                             alt="Biovision Africa Trust"
//                             className="h-12 md:h-14 object-contain"
//                         />
//                     </div>

//                     {/* Navigation */}
//                     <nav className="hidden lg:flex items-center space-x-2">
//                         {navigationItems.map((item, index) => (
//                             <div key={item.name} className="flex items-center">
//                                 <Link
//                                     href={item.href}
//                                     className={`text-sm font-semibold px-2 transition ${
//                                         pathname === item.href
//                                             ? "text-green-500"
//                                             : "text-white hover:text-green-400"
//                                     }`}
//                                 >
//                                     {item.name}
//                                 </Link>
//                                 {index < navigationItems.length - 1 && (
//                                     <span className="h-6 w-px bg-white/40 mx-2" />
//                                 )}
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Search + Sign Up */}
//                     <div className="flex items-center gap-4">
//                         <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="bg-transparent text-white placeholder-white/50 text-sm px-4 py-2 w-32 focus:outline-none"
//                             />
//                             <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 transition">
//                                 Search
//                             </button>
//                         </div>
//                         <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             </header>

//             {/* Survey Modal */}
//             <SurveyModal />

//             {/* Success Popup */}
//             <SuccessPopup />

//             {/* Main Content */}
//             <main className={`relative z-10 pt-24 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
//                 {/* Hero Section */}
//                 <section className="bg-gray-50 py-16 px-4">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//                             Your Voice Shapes the<br />
//                             <span className="text-green-600">Future of Agroecology</span>
//                         </h1>
//                         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//                             Take part in quick surveys to share your thoughts, improve our resources, and
//                             strengthen our network.
//                         </p>
                        
//                         {/* Filter Tags and Search */}
//                         <div className="flex items-center justify-center gap-4 mb-8">
//                             {/* Filter buttons in a container with border */}
//                             <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
//                                 <button 
//                                     onClick={() => setCurrentFilter("all")}
//                                     className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
//                                         currentFilter === "all" 
//                                             ? "bg-green-600 text-white hover:bg-green-700" 
//                                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                                     }`}
//                                 >
//                                     All
//                                 </button>
//                                 <button 
//                                     onClick={() => setCurrentFilter("ongoing")}
//                                     className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
//                                         currentFilter === "ongoing" 
//                                             ? "bg-green-600 text-white hover:bg-green-700" 
//                                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                                     }`}
//                                 >
//                                     Ongoing
//                                 </button>
//                                 <button 
//                                     onClick={() => setCurrentFilter("closed")}
//                                     className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
//                                         currentFilter === "closed" 
//                                             ? "bg-green-600 text-white hover:bg-green-700" 
//                                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                                     }`}
//                                 >
//                                     Completed
//                                 </button>
//                             </div>
                            
//                             {/* Search input */}
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     placeholder="Search surveys..."
//                                     value={heroSearchQuery}
//                                     onChange={(e) => setHeroSearchQuery(e.target.value)}
//                                     className="pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white w-64"
//                                 />
//                                 <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                 </svg>
//                             </div>
                            
//                             {/* Filter icon */}
//                             <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
//                                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Search Results Info */}
//                         {heroSearchQuery && (
//                             <div className="mb-4 text-sm text-gray-600">
//                                 Showing {getFilteredSurveys().length} results for "{heroSearchQuery}"
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 {/* Filtered Surveys Section */}
//                 <section className="bg-white py-12 px-4">
//                     <div className="max-w-6xl mx-auto">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                             {currentFilter === "all" ? "All Surveys" : 
//                              currentFilter === "ongoing" ? "Ongoing Surveys" : "Completed Surveys"}
//                         </h2>
                        
//                         {getFilteredSurveys().length === 0 ? (
//                             <div className="text-center py-12">
//                                 <div className="text-gray-400 mb-4">
//                                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-lg font-medium text-gray-900 mb-2">No surveys found</h3>
//                                 <p className="text-gray-600">
//                                     {heroSearchQuery 
//                                         ? `No surveys match your search "${heroSearchQuery}"`
//                                         : `No ${currentFilter} surveys available at the moment`
//                                     }
//                                 </p>
//                             </div>
//                         ) : (
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 {getFilteredSurveys().map((survey) => (
//                                     <SurveyCard key={survey.id} survey={survey} isOngoing={survey.status === 'ongoing'} />
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="bg-white py-16 px-4">
//                     <div className="max-w-4xl mx-auto">
//                         <div className="bg-green-600 px-8 py-12 text-center rounded-xl">
//                             <h2 className="text-2xl font-bold mb-4 text-white">Your Story Could Inspire Thousands</h2>
//                             <p className="text-white mb-6">
//                                 Have you started your agroecology journey? Share your experience and become part
//                                 of a growing movement across Africa.
//                             </p>
//                             <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
//                                 Share your Story
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             {/* Newsletter Section */}
//             <section className={`bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 mt-13 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    
//                     {/* Left side - Newsletter info */}
//                     <div className="flex items-center gap-4 text-white">
//                         <div className="flex-shrink-0">
//                             {/* Email icon */}
//                             <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h3 className="text-xl md:text-2xl font-bold mb-2">
//                                 Join the Movement
//                             </h3>
//                             <p className="text-gray-300 text-sm md:text-base">
//                                 Get updates on AE/EOA events, stories, outlets, and resources that empower African farmers.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right side - Email signup form */}
//                     <div className="flex w-full md:w-auto min-w-80">
//                         <input
//                             type="email"
//                             placeholder="Your email address"
//                             className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
//                         />
//                         <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-full font-medium text-sm transition-colors duration-300">
//                             Subscribe
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer className={`bg-[#24231D] py-16 px-4 md:px-8 lg:px-12 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        
//                         {/* Company Info */}
//                         <div className="lg:col-span-1">
//                             {/* Logo */}
//                             <div className="mb-6">
//                                 <div className="flex items-center gap-3">
//                                     <div className="flex-shrink-0">
//                                         <img
//                                             src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//                                             alt="Biovision Africa Trust"
//                                             className="h-16 object-contain filter brightness-0 invert"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <h4 className="text-xl font-bold text-white mb-4">
//                                 Growing Africa's Future Through Sustainable Agriculture
//                             </h4>
//                             <p className="text-white font-bold text-base leading-relaxed mb-6">
//                                 We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
//                             </p>
                            
//                             {/* Social Media Links */}
//                             <div className="flex gap-3">
//                                 <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                                     </svg>
//                                 </button>
//                                 <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                                     </svg>
//                                 </button>
//                                 <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
//                                     </svg>
//                                 </button>
//                                 <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Explore Links */}
//                         <div>
//                             <h5 className="text-lg font-semibold text-white mb-6">Explore</h5>
//                             <ul className="space-y-4">
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Our Mission</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Shop</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Learn</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> FAQs</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Press & Media</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Career</a></li>
//                                 <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Become a Partner</a></li>
//                             </ul>
//                         </div>

//                         {/* Contact Info */}
//                         <div>
//                             <h5 className="text-lg font-semibold text-white mb-6">Contact</h5>
//                             <div className="space-y-4 text-white font-bold">
//                                 <div className="flex items-start gap-3">
//                                     <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                     <span>+254 (0) 20 632 4806</span>
//                                 </div>
                                
//                                 <div className="flex items-start gap-3">
//                                     <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                     <span>info@biovisionafricatrust.org</span>
//                                 </div>
                                
//                                 <div className="flex items-start gap-3">
//                                     <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                     <div>
//                                         <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-3">
//                                     <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                     <div>
//                                         <p>P.O. Box 12345, Nairobi, Kenya</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="pt-2 space-y-1 text-sm">
//                                     <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
//                                     <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
//                                     <p><span className="text-white font-bold">Sunday:</span> Closed</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Section */}
//                     <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                         <p className="text-yellow-500 text-sm font-medium">
//                             © 2025 BioVision Africa Trust. All Rights Reserved.
//                         </p>
//                         <div className="flex gap-4 text-sm">
//                             <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
//                             <span className="text-gray-600">|</span>
//                             <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
//                             <span className="text-gray-600">|</span>
//                             <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import { BookOpen, Clock, DollarSign, GraduationCap, Heart, Leaf, MessageSquare, Smile, Sprout, Users, X, ArrowLeft, Star, CheckCircle, AlertCircle } from "lucide-react";

// Define types
interface Survey {
    id: number;
    title: string;
    description: string;
    duration: string;
    responses: number;
    status: 'ongoing' | 'closed';
}

interface SurveyResponses {
    usage: string;
    satisfaction: string;
    experience: string | number;
    recommendation: string | number;
    interaction: string | number;
    questions: (string | number)[];
}

interface SurveyCardProps {
    survey: Survey;
    isOngoing?: boolean;
}

export default function Surveys() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");
    const [heroSearchQuery, setHeroSearchQuery] = useState("");
    const [showSurveyModal, setShowSurveyModal] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("ongoing");
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [showValidationError, setShowValidationError] = useState(false);
    const [surveyResponses, setSurveyResponses] = useState<SurveyResponses>({
        usage: '',
        satisfaction: '',
        experience: '',
        recommendation: '',
        interaction: '',
        questions: ['', '', '', '', '']
    });
    
    const allSurveysRef = useRef<HTMLElement>(null);

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Our Mission", href: "/mission" },
        { name: "Shop", href: "/shop" },
        { name: "Resources", href: "/resources" },
        { name: "Outlets", href: "/outlets" },
        { name: "Surveys", href: "/surveys" },
        { name: "Events", href: "/events" },
        { name: "Contact Us", href: "/contact" },
    ];

    // Sample survey data
    const ongoingSurveys: Survey[] = [
        {
            id: 1,
            title: "Farmer Resource Feedback",
            description: "Help us better understand your experience with digital AE/EOA training.",
            duration: "3-4 minutes",
            responses: 156,
            status: "ongoing"
        },
        {
            id: 2,
            title: "Consumer Awareness Survey",
            description: "Share your thoughts on organic product awareness in your community.",
            duration: "5-6 minutes", 
            responses: 89,
            status: "ongoing"
        },
        {
            id: 3,
            title: "Market Access Feedback",
            description: "Tell us about your experience accessing markets for your produce.",
            duration: "4-5 minutes",
            responses: 203,
            status: "ongoing"
        },
        {
            id: 4,
            title: "Training Program Evaluation",
            description: "Evaluate the effectiveness of our recent training programs.",
            duration: "3-4 minutes",
            responses: 178,
            status: "ongoing"
        },
        {
            id: 5,
            title: "Technology Adoption Survey", 
            description: "Help us understand how farmers are adopting new technologies.",
            duration: "6-7 minutes",
            responses: 134,
            status: "ongoing"
        },
        {
            id: 6,
            title: "Community Impact Assessment",
            description: "Share how our programs have impacted your community.",
            duration: "4-5 minutes",
            responses: 267,
            status: "ongoing"
        }
    ];

    const allSurveys: Survey[] = [
        ...ongoingSurveys,
        {
            id: 7,
            title: "Annual Satisfaction Survey",
            description: "Your overall satisfaction with our services and programs.",
            duration: "8-10 minutes",
            responses: 543,
            status: "closed"
        },
        {
            id: 8,
            title: "Product Quality Assessment",
            description: "Rate the quality of products from our certified farmers.",
            duration: "3-4 minutes",
            responses: 387,
            status: "closed"
        },
        {
            id: 9,
            title: "Partnership Feedback",
            description: "Feedback on our partnership programs and collaborations.",
            duration: "5-6 minutes",
            responses: 298,
            status: "closed"
        },
        {
            id: 10,
            title: "Website Usability Study",
            description: "Help us improve your experience on our platform.",
            duration: "4-5 minutes",
            responses: 421,
            status: "closed"
        }
    ];

    // Filter surveys based on search query and current filter
    const getFilteredSurveys = () => {
        let surveysToFilter = [];
        
        if (currentFilter === "all") {
            surveysToFilter = allSurveys;
        } else if (currentFilter === "ongoing") {
            surveysToFilter = ongoingSurveys;
        } else if (currentFilter === "closed") {
            surveysToFilter = allSurveys.filter(survey => survey.status === "closed");
        }

        const searchTerm = heroSearchQuery.toLowerCase();
        if (searchTerm) {
            return surveysToFilter.filter(survey => 
                survey.title.toLowerCase().includes(searchTerm) ||
                survey.description.toLowerCase().includes(searchTerm)
            );
        }

        return surveysToFilter;
    };

    // Validation function
    const validateSurveyResponses = () => {
        const errors: string[] = [];
        
        if (!surveyResponses.usage) {
            errors.push("Please select how often you use our product/service");
        }
        
        if (!surveyResponses.satisfaction) {
            errors.push("Please rate your satisfaction with our product");
        }
        
        if (!surveyResponses.experience) {
            errors.push("Please rate your experience with our product");
        }
        
        if (!surveyResponses.recommendation) {
            errors.push("Please rate how likely you would recommend our product");
        }
        
        if (!surveyResponses.interaction) {
            errors.push("Please rate how easy it was to interact with our company");
        }
        
        // Check if all additional questions are answered
        const unansweredQuestions = surveyResponses.questions.filter((q, index) => !q);
        if (unansweredQuestions.length > 0) {
            errors.push(`Please answer all additional questions (${unansweredQuestions.length} remaining)`);
        }
        
        return errors;
    };

    // Survey Modal Functions
    const openSurveyModal = () => {
        setShowSurveyModal(true);
        setValidationErrors([]);
        setShowValidationError(false);
        // Reset responses
        setSurveyResponses({
            usage: '',
            satisfaction: '',
            experience: '',
            recommendation: '',
            interaction: '',
            questions: ['', '', '', '', '']
        });
    };

    const closeSurveyModal = () => {
        setShowSurveyModal(false);
        setValidationErrors([]);
        setShowValidationError(false);
    };

    const handleResponseChange = (field: keyof SurveyResponses, value: string | number) => {
        setSurveyResponses(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear validation errors when user starts filling
        if (validationErrors.length > 0) {
            setValidationErrors([]);
            setShowValidationError(false);
        }
    };

    const handleQuestionResponse = (questionIndex: number, value: string | number) => {
        setSurveyResponses(prev => ({
            ...prev,
            questions: prev.questions.map((q, i) => i === questionIndex ? value : q)
        }));
        
        // Clear validation errors when user starts filling
        if (validationErrors.length > 0) {
            setValidationErrors([]);
            setShowValidationError(false);
        }
    };

    const submitSurvey = () => {
        const errors = validateSurveyResponses();
        
        if (errors.length > 0) {
            setValidationErrors(errors);
            setShowValidationError(true);
            // Scroll to top of modal to show error
            const modalElement = document.querySelector('.survey-modal-content');
            if (modalElement) {
                modalElement.scrollTop = 0;
            }
            return;
        }
        
        // Handle survey submission
        console.log('Survey submitted:', surveyResponses);
        closeSurveyModal();
        setShowSuccessPopup(true);
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    const takeAnotherSurvey = () => {
        setShowSuccessPopup(false);
        openSurveyModal();
    };

    const SurveyCard = ({ survey, isOngoing = false }: SurveyCardProps) => (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                isOngoing
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                        >
                            {isOngoing ? "Ongoing" : "Closed"}
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {survey.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{survey.description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{survey.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{survey.responses} responses</span>
                    </div>
                </div>

                {isOngoing && (
                    <button 
                        onClick={openSurveyModal}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                        Take Survey
                    </button>
                )}
            </div>
        </div>
    );

    // Success Popup Component
    const SuccessPopup = () => {
        if (!showSuccessPopup) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
                
                <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl">
                    <div className="p-8 text-center">
                        {/* Success Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Thanks for Sharing Your Insights!
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Your feedback has been received. Teams and You're helping improve access to better farming tools across Africa!
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={takeAnotherSurvey}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                            >
                                Take Another Survey
                            </button>
                            <button
                                onClick={closeSuccessPopup}
                                className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-colors duration-200"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // One-page Survey Modal Component
    const SurveyModal = () => {
        if (!showSurveyModal) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Blurred background overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>
                
                <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl survey-modal-content">
                    <div className="p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Satisfaction Survey</h2>
                                <p className="text-gray-600">Your feedback is valuable and will help us shape future products and experiences. This survey will take approximately 4 minutes to complete.</p>
                                <p className="text-sm text-red-600 mt-2 font-medium">* All fields are required</p>
                            </div>
                            <button
                                onClick={closeSurveyModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Validation Error Alert */}
                        {showValidationError && validationErrors.length > 0 && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm font-medium text-red-800 mb-2">
                                            Please complete all required fields:
                                        </h3>
                                        <ul className="text-sm text-red-700 space-y-1">
                                            {validationErrors.map((error, index) => (
                                                <li key={index} className="flex items-start gap-1">
                                                    <span className="text-red-600">•</span>
                                                    <span>{error}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* All Questions in One Page */}
                        <div className="space-y-10">
                            {/* Question 1 */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        How often do you use our product/service? <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'].map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleResponseChange('usage', option)}
                                                className={`px-4 py-2 rounded-full border transition-colors ${
                                                    surveyResponses.usage === option
                                                        ? 'bg-green-600 text-white border-green-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        How satisfied are you with our product? <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                        {[
                                            { emoji: '😭', label: 'Very Dissatisfied' },
                                            { emoji: '😟', label: 'Dissatisfied' },
                                            { emoji: '😐', label: 'Neutral' },
                                            { emoji: '😊', label: 'Satisfied' },
                                            { emoji: '😍', label: 'Very Satisfied' }
                                        ].map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleResponseChange('satisfaction', option.label)}
                                                className={`flex flex-col items-center p-3 rounded-lg border transition-colors ${
                                                    surveyResponses.satisfaction === option.label
                                                        ? 'bg-green-50 border-green-400'
                                                        : 'bg-white border-gray-200 hover:border-green-300'
                                                }`}
                                            >
                                                <span className="text-2xl mb-1">{option.emoji}</span>
                                                <span className="text-xs text-gray-600">{option.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="space-y-6 border-t pt-8">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        How would you rate your experience with our product? <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex justify-center gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => handleResponseChange('experience', star)}
                                                className="p-1"
                                            >
                                                <Star
                                                    className={`w-8 h-8 ${
                                                        star <= Number(surveyResponses.experience || 0)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        On the scale of 1-10, how likely would you recommend our product to others? <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => handleResponseChange('recommendation', num)}
                                                className={`w-10 h-10 rounded-full border transition-colors ${
                                                    Number(surveyResponses.recommendation) === num
                                                        ? 'bg-green-600 text-white border-green-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                                }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="space-y-6 border-t pt-8">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        Based on your experience, how easy or difficult was it to interact with our company? <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex justify-center gap-2">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => handleResponseChange('interaction', num)}
                                                className={`px-4 py-2 rounded-full border transition-colors ${
                                                    Number(surveyResponses.interaction) === num
                                                        ? 'bg-green-600 text-white border-green-600'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                                }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                                        <span>Very difficult</span>
                                        <span>Very easy</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        Additional Questions <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'].map((question, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <span className="font-medium">{question}</span>
                                                <div className="flex gap-2">
                                                    {[1, 2, 3, 4, 5].map((rating) => (
                                                        <button
                                                            key={rating}
                                                            onClick={() => handleQuestionResponse(index, rating)}
                                                            className={`w-8 h-8 rounded-full border text-sm transition-colors ${
                                                                Number(surveyResponses.questions[index]) === rating
                                                                    ? 'bg-green-600 text-white border-green-600'
                                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                                            }`}
                                                        >
                                                            {rating}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                                            <span>Strongly Disagree</span>
                                            <span>Strongly Agree</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end items-center gap-3 mt-10 pt-6 border-t">
                            <button
                                onClick={closeSurveyModal}
                                className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-full font-medium transition-colors"
                            >
                                Save Draft
                            </button>
                            <button
                                onClick={submitSurvey}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <div className="fixed inset-0 bg-black/40" />

            {/* Fixed Navbar */}
            <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
                            alt="Biovision Africa Trust"
                            className="h-12 md:h-14 object-contain"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        {navigationItems.map((item, index) => (
                            <div key={item.name} className="flex items-center">
                                <Link
                                    href={item.href}
                                    className={`text-sm font-semibold px-2 transition ${
                                        pathname === item.href
                                            ? "text-green-500"
                                            : "text-white hover:text-green-400"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                                {index < navigationItems.length - 1 && (
                                    <span className="h-6 w-px bg-white/40 mx-2" />
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Search + Sign Up */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent text-white placeholder-white/50 text-sm px-4 py-2 w-32 focus:outline-none"
                            />
                            <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 transition">
                                Search
                            </button>
                        </div>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>

            {/* Survey Modal */}
            <SurveyModal />

            {/* Success Popup */}
            <SuccessPopup />

            {/* Main Content */}
            <main className={`relative z-10 pt-24 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
                {/* Hero Section */}
                <section className="bg-gray-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Your Voice Shapes the<br />
                            <span className="text-green-600">Future of Agroecology</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Take part in quick surveys to share your thoughts, improve our resources, and
                            strengthen our network.
                        </p>
                        
                        {/* Filter Tags and Search */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            {/* Filter buttons in a container with border */}
                            <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                                <button 
                                    onClick={() => setCurrentFilter("all")}
                                    className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
                                        currentFilter === "all" 
                                            ? "bg-green-600 text-white hover:bg-green-700" 
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    All
                                </button>
                                <button 
                                    onClick={() => setCurrentFilter("ongoing")}
                                    className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
                                        currentFilter === "ongoing" 
                                            ? "bg-green-600 text-white hover:bg-green-700" 
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    Ongoing
                                </button>
                                <button 
                                    onClick={() => setCurrentFilter("closed")}
                                    className={`px-4 py-2 rounded-full text-sm transition ml-1 ${
                                        currentFilter === "closed" 
                                            ? "bg-green-600 text-white hover:bg-green-700" 
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    Completed
                                </button>
                            </div>
                             {/* Search input */}
                             <div className="relative">
                                 <input
                                    type="text"
                                    placeholder="Search surveys..."
                                    value={heroSearchQuery}
                                    onChange={(e) => setHeroSearchQuery(e.target.value)}
                                    className="pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white w-64"
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            
                            {/* Filter icon */}
                            <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Results Info */}
                        {heroSearchQuery && (
                            <div className="mb-4 text-sm text-gray-600">
                                Showing {getFilteredSurveys().length} results for "{heroSearchQuery}"
                            </div>
                        )}
                    </div>
                </section>

                {/* Filtered Surveys Section */}
                <section className="bg-white py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            {currentFilter === "all" ? "All Surveys" : 
                             currentFilter === "ongoing" ? "Ongoing Surveys" : "Completed Surveys"}
                        </h2>
                        
                        {getFilteredSurveys().length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No surveys found</h3>
                                <p className="text-gray-600">
                                    {heroSearchQuery 
                                        ? `No surveys match your search "${heroSearchQuery}"`
                                        : `No ${currentFilter} surveys available at the moment`
                                    }
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getFilteredSurveys().map((survey) => (
                                    <SurveyCard key={survey.id} survey={survey} isOngoing={survey.status === 'ongoing'} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-green-600 px-8 py-12 text-center rounded-xl">
                            <h2 className="text-2xl font-bold mb-4 text-white">Your Story Could Inspire Thousands</h2>
                            <p className="text-white mb-6">
                                Have you started your agroecology journey? Share your experience and become part
                                of a growing movement across Africa.
                            </p>
                            <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
                                Share your Story
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Newsletter Section */}
            <section className={`bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 mt-13 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Left side - Newsletter info */}
                    <div className="flex items-center gap-4 text-white">
                        <div className="flex-shrink-0">
                            {/* Email icon */}
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">
                                Join the Movement
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base">
                                Get updates on AE/EOA events, stories, outlets, and resources that empower African farmers.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Email signup form */}
                    <div className="flex w-full md:w-auto min-w-80">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-full font-medium text-sm transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={`bg-[#24231D] py-16 px-4 md:px-8 lg:px-12 ${showSurveyModal || showSuccessPopup ? 'blur-sm' : ''}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            {/* Logo */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
                                            alt="Biovision Africa Trust"
                                            className="h-16 object-contain filter brightness-0 invert"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-4">
                                Growing Africa's Future Through Sustainable Agriculture
                            </h4>
                            <p className="text-white font-bold text-base leading-relaxed mb-6">
                                We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex gap-3">
                                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div>
                            <h5 className="text-lg font-semibold text-white mb-6">Explore</h5>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Our Mission</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Shop</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Learn</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> FAQs</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Press & Media</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Career</a></li>
                                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Become a Partner</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h5 className="text-lg font-semibold text-white mb-6">Contact</h5>
                            <div className="space-y-4 text-white font-bold">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+254 (0) 20 632 4806</span>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>info@biovisionafricatrust.org</span>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p>P.O. Box 12345, Nairobi, Kenya</p>
                                    </div>
                                </div>
                                
                                <div className="pt-2 space-y-1 text-sm">
                                    <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
                                    <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
                                    <p><span className="text-white font-bold">Sunday:</span> Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-yellow-500 text-sm font-medium">
                            © 2025 BioVision Africa Trust. All Rights Reserved.
                        </p>
                        <div className="flex gap-4 text-sm">
                            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}