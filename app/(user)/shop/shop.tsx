"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, Box, DollarSign, GraduationCap, Headphones, Heart, Leaf, ShieldCheck, Smile, Sprout, Truck, Users, Star, MessageCircle, ChevronLeft, ChevronRight, ChevronDown, Filter, Phone, ArrowLeft } from "lucide-react";

export default function Shop() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllProducts, setShowAllProducts] = useState(false);
    
    // All Products Page State
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState(['Vegetables']);
    const [priceRange, setPriceRange] = useState([50, 1500]);
    const [selectedRating, setSelectedRating] = useState('4.0 & up');
    const [selectedTags, setSelectedTags] = useState(['Low fat']);
    
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
    // Function to scroll to Featured Products section
    const scrollToFeaturedProducts = () => {
        const featuredSection = document.getElementById('featured-products');
        if (featuredSection) {
            featuredSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // All Products Data
    const categories = [
        { name: 'Fresh Fruit', count: 134, id: 'fresh-fruit' },
        { name: 'Vegetables', count: 150, id: 'vegetables' },
        { name: 'Cooking', count: 54, id: 'cooking' },
        { name: 'Snacks', count: 47, id: 'snacks' },
        { name: 'Beverages', count: 43, id: 'beverages' },
        { name: 'Beauty & Health', count: 38, id: 'beauty-health' },
        { name: 'Bread & Bakery', count: 15, id: 'bread-bakery' }
    ];

    const popularTags = [
        'Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread',
        'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'
    ];

    const onSaleProducts = [
        { name: 'Green Apple', price: 2, originalPrice: 3.99, seller: 'Mr.food', rating: 4, image: '🍏', category: 'Vegetables' },
        { name: 'Oranges', price: 2, originalPrice: 3.99, seller: 'Mr.food', rating: 4, image: '🍊', category: 'Fruits' },
        { name: 'Lettuce', price: 2, originalPrice: 3.99, seller: 'Mr.food', rating: 4, image: '🥬', category: 'Vegetables' }
    ];
    
    const allProducts = [
        { id: 1, name: 'Lettuce', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥬', category: 'Vegetables' },
        { id: 2, name: 'Red Peppers', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🫑', category: 'Vegetables' },
        { id: 3, name: 'Okra', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🌶️', category: 'Vegetables' },
        { id: 4, name: 'Corn', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🌽', category: 'Vegetables' },
        { id: 5, name: 'Mangoes', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥭', category: 'Vegetables' },
        { id: 6, name: 'Green Peppers', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🫑', category: 'Vegetables' },
        { id: 7, name: 'Cucumbers', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥒', category: 'Vegetables' },
        { id: 8, name: 'Chillis', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🌶️', category: 'Vegetables' },
        { id: 9, name: 'Tomatoes', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🍅', category: 'Vegetables' },
        { id: 10, name: 'Eggplants', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🍆', category: 'Vegetables' },
        { id: 11, name: 'Cauliflower', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥦', category: 'Vegetables' },
        { id: 12, name: 'Green Apple', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🍏', category: 'Vegetables' },
        { id: 13, name: 'Potatoes', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥔', category: 'Vegetables' },
        { id: 14, name: 'Chinese', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥬', category: 'Vegetables' },
        { id: 15, name: 'Red Chillis', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🌶️', category: 'Vegetables' },
        { id: 16, name: 'Lettuce', seller: 'Mr.food', rating: 4, reviews: 4, price: 2, originalPrice: 3.99, image: '🥬', category: 'Vegetables' }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star 
                    key={i} 
                    size={12} 
                    className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
            );
        }
        return stars;
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prev => 
            prev.includes(categoryId) 
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleTagClick = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const handleShowAllProducts = () => {
        setShowAllProducts(true);
    };

    const handleBackToShop = () => {
        setShowAllProducts(false);
    };

    // All Products Page Component
    if (showAllProducts) {
        return (
            <div className="mt-24 min-h-screen bg-gray-50">
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

                {/* Header with breadcrumb and back button */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm space-x-2">
                                <span>🏠</span>
                                <ChevronRight size={16} />
                                <span>Shop</span>
                                <ChevronRight size={16} />
                                <span className="text-green-400">All Products</span>
                            </div>
                            <button 
                                onClick={handleBackToShop}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Back to Shop
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-80 space-y-6">
                            {/* Filter Button */}
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
                                <Filter size={16} />
                                Filter
                            </button>

                            {/* All Categories */}
                            <div className="bg-white rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium">All Categories</h3>
                                    <ChevronDown size={16} />
                                </div>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategories.includes(category.name)}
                                                onChange={() => handleCategoryChange(category.name)}
                                                className="w-4 h-4 text-green-500"
                                            />
                                            <span className="text-sm text-gray-700">{category.name}</span>
                                            <span className="text-xs text-gray-500">({category.count})</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="bg-white rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium">Price</h3>
                                    <ChevronDown size={16} />
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="50"
                                            max="1500"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                                            <span>Price: {priceRange[0]} — {priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="bg-white rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium">Rating</h3>
                                    <ChevronDown size={16} />
                                </div>
                                <div className="space-y-3">
                                    {['5.0', '4.0 & up', '3.0 & up', '2.0 & up', '1.0 & up'].map((rating) => (
                                        <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedRating === rating}
                                                onChange={() => setSelectedRating(rating)}
                                                className="w-4 h-4 text-green-500 rounded"
                                            />
                                            <div className="flex items-center space-x-1">
                                                {renderStars(parseFloat(rating))}
                                                <span className="text-sm text-gray-700 ml-2">{rating}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-medium">Popular Tag</h3>
                                    <ChevronDown size={16} />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => handleTagClick(tag)}
                                            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                                                selectedTags.includes(tag)
                                                    ? 'bg-green-500 text-white border-green-500'
                                                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Discount Banner */}
                            <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-lg p-4 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-2xl font-bold">79% Discount</div>
                                    <div className="text-sm opacity-90">on your first order</div>
                                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium mt-3 hover:bg-gray-100 flex items-center gap-2">
                                        Shop Now
                                        <span>→</span>
                                    </button>
                                </div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mb-10"></div>
                            </div>

                            {/* On Sale */}
                            <div className="bg-white rounded-lg p-4">
                                <h3 className="font-medium mb-4">On Sale</h3>
                                <div className="space-y-3">
                                    {onSaleProducts.map((product, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-2 border border-green-200 rounded-lg">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <span className="text-lg">{product.image}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-500">{product.category}</div>
                                                <div className="font-medium text-sm">{product.name}</div>
                                                <div className="text-xs text-gray-500">By {product.seller}</div>
                                                <div className="flex items-center space-x-1">
                                                    {renderStars(product.rating)}
                                                    <span className="text-xs text-gray-500">({product.rating})</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-green-600 font-semibold">${product.price}</div>
                                                <div className="text-xs text-gray-400 line-through">${product.originalPrice}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Top Bar */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-sm text-gray-600">Sort by:</div>
                                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                                        <option>Latest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Rating</option>
                                    </select>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-semibold">52</span> Results Found
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                {allProducts.map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                                        <div className="bg-gray-50 rounded-lg h-32 flex items-center justify-center mb-3">
                                            <span className="text-4xl">{product.image}</span>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <div className="text-xs text-gray-500">{product.category}</div>
                                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                                            <div className="text-sm text-gray-600">By {product.seller}</div>
                                            
                                            <div className="flex items-center gap-1">
                                                {renderStars(product.rating)}
                                                <span className="text-xs text-gray-500">({product.reviews})</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-semibold text-green-600">${product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                                )}
                                            </div>

                                            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
                                                <Phone size={14} />
                                                Contact
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mb-11 flex justify-center items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
                                            currentPage === page
                                                ? 'bg-green-500 text-white'
                                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <span className="text-gray-400">...</span>
                                
                                <button className="w-8 h-8 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">
                                    21
                                </button>

                                <button
                                    onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                                    disabled={currentPage === 5}
                                    className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
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
                <footer className="bg-[#24231D] py-16 px-4 md:px-8 lg:px-12">
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

    // Main Shop Page Component
    return (
        <div className=" bg-[#FFFFFF]relative min-h-screen w-full overflow-x-hidden">
            {/* Fixed Navbar */}
            <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/greenlogo.png"
                            alt="Biovision Africa Trust"
                            className="h-12 md:h-14 object-contain"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="bg-white hidden lg:flex items-center space-x-2">
                        {navigationItems.map((item, index) => (
                            <div key={item.name} className="flex items-center">
                                <Link
                                    href={item.href}
                                    className={`text-sm font-semibold px-2 transition ${
                                        pathname === item.href
                                            ? "text-green-500"
                                            : "text-black hover:text-green-400"
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
                        <div className="hidden md:flex items-center border border-gray-500 rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent text-black placeholder-white/50 text-sm px-4 py-2 w-32 focus:outline-none"
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
        
            <section className=" mt-12 bg-[#D6E1D6] py-20 px-4 md:px-12 relative overflow-visible">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    
                    {/* LEFT SIDE: Text */}
                    <div className="ml-4">
                        <p className=" text-sm text-[#2E7D32] font-semibold uppercase">Welcome to Shopery</p>
                        <h1 className=" text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Fresh & Healthy <br />
                            Organic Products
                        </h1>
                        <p className="text-lg text-gray-700 mt-2">
                            Certified organic products from <br /> Africa's most innovative farmers
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Free shipping on all your order. we deliver, you enjoy
                        </p>
                         <button 
                            onClick={scrollToFeaturedProducts}
                            className="mt-4 bg-[#2E7D32] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#256829] transition"
                        >
                            Shop Now
                        </button>
                    </div>

                    {/* RIGHT SIDE: Image */}
                    <div className="flex justify-end items-center h-full w-full">
                        <img
                            src="/images/vegetables.png"
                            alt="Organic Vegetables Basket"
                            className="w-full h-auto object-contain lg:max-h-[400px]"
                        />
                    </div>
                </div>

                {/* BOTTOM ICONS */}
                <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-xl py-6 px-6">
                        
                        <div className="flex items-start gap-3">
                            <Truck className="w-6 h-6 mt-1 text-green-700" />
                            <div>
                                <p className="font-semibold">Free Shipping</p>
                                <p className="text-sm text-gray-500">Free shipping on all your order</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Headphones className="w-6 h-6 mt-1 text-green-700" />
                            <div>
                                <p className="font-semibold">Customer Support 24/7</p>
                                <p className="text-sm text-gray-500">Instant access to Support</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 mt-1 text-green-700" />
                            <div>
                                <p className="font-semibold">100% Secure Payment</p>
                                <p className="text-sm text-gray-500">We ensure your money is safe</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Box className="w-6 h-6 mt-1 text-green-700" />
                            <div>
                                <p className="font-semibold">Money-Back Guarantee</p>
                                <p className="text-sm text-gray-500">30 Days Money-Back Guarantee</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section id="featured-products" className="bg-white -mt-2 pt-32  px-4 md:px-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Featured Products
    </h2>

                {/* Main Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                    {[
                        { name: "Green Apples", img: "/images/greenapples.png" },
                        { name: "Chinese Cabbage", img: "/images/chinese-cabbage.png" },
                        { name: "Lettuce", img: "/images/lettuces.png" },
                        { name: "Green Peppers", img: "/images/pepper.png" },
                        { name: "Corn", img: "/images/corn.png" },
                    ].map((product) => (
                        <div
                            key={product.name}
                            className="bg-white rounded-xl shadow-lg p-4 text-center"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="h-32 mx-auto mb-4 object-contain"
                            />
                            {/* Bottom info area with subtle background */}
                            <div className="bg-[#FFF9F2] rounded-b-xl p-3 text-left">
                                <p className="text-xs text-gray-400 mb-1">Vegetables</p>
                                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-700 font-semibold mb-1">By Mr.food</p>
                                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                                    ★★★★☆ <span className="text-gray-500 text-xs">(4)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-green-700 font-bold text-lg">$2</span>
                                    <span className="line-through text-gray-400 text-sm">$3.99</span>
                                    <button className="border border-green-600 text-green-600 px-3 py-1 rounded-full text-sm">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Secondary Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Hot Deals */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Hot Deals</h4>
                        {[
                            { name: "Green Apple", image: "/images/greenapples.png" },
                            { name: "Oranges", image: "/images/orange.png" },
                            { name: "Lettuce", image: "/images/lettuce.png" },

                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between border border-green-500 rounded-xl p-2 mb-3"
                            >
                                <img src={item.image} alt={item.name} className="w-12 h-12" />
                                <div className="flex-1 ml-2 bg-[#FDFBF6]">
                                    <p className="text-xs text-gray-500">Vegetables</p>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">By Mr.food</p>
                                </div>
                                <div className="text-right bg-[#FDFBF6]">
                                    <span className="text-green-700 font-semibold text-sm">$2</span><br />
                                    <span className="text-gray-400 line-through text-xs">$3.99</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Best Seller */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Best Seller</h4>
                        {[
                            { name: "Eggplant", image: "/images/eggplant.png" },
                            { name: "Okra", image: "/images/okra.png" },
                            { name: "Tomatoes", image: "/images/tomato.png" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between border  border-green-500 rounded-xl p-2 mb-3"
                            >
                                <img src={item.image} alt={item.name} className="w-12 h-12" />
                                <div className="flex-1 ml-2 bg-[#FDFBF6]">
                                    <p className="text-xs text-gray-500">Vegetables</p>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">By Mr.food</p>
                                </div>
                                <div className="text-right bg-[#FDFBF6]">
                                    <span className="text-green-700 font-semibold text-sm">$2</span><br />
                                    <span className="text-gray-400 line-through text-xs">$3.99</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Top Rated */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Top Rated</h4>
                        {[
                            { name: "Potatoes", image: "/images/potato.png" },
                            { name: "Corn", image: "/images/corn.png" },
                            { name: "Cauliflower", image: "/images/cauliflower.png" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between border border-green-500 rounded-xl p-2 mb-3"
                            >
                                <img src={item.image} alt={item.name} className="w-12 h-12" />
                                <div className="flex-1 ml-2 bg-[#FDFBF6]">
                                    <p className="text-xs text-gray-500">Vegetables</p>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">By Mr.food</p>
                                </div>
                                <div className="text-right bg-[#FDFBF6]">
                                    <span className="text-green-700 font-semibold text-sm">$2</span><br />
                                    <span className="text-gray-400 line-through text-xs">$3.99</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div 
                        className="rounded-xl mt-9 text-center p-6 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[200px]"
                        style={{ 
                            backgroundImage: "url('/images/promo-bag.png')",
                            backgroundColor: '#F4F8F4'
                        }}
                    >
                        <p className="mt-[-149] text-xs text-gray-700 font-medium">SUMMER SALE</p>
                        <h3 className="text-2xl font-bold text-green-800 mb-2 drop-shadow-sm">75% off</h3>
                        <button className="bg-white text-green-800 px-6 py-2 rounded-full text-sm hover:bg-green-800 shadow-md">
                            Shop Now →
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button 
                        onClick={handleShowAllProducts}
                        className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold text-lg"
                    >
                        Shop All Products
                    </button>
                </div>
            </section>

            // {/* ✅ Promo Cards Section */}
 <section className="bg-white py-16 px-4 md:px-12">
   <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
     {/* Promo Card 1 - Fresh Cow Milk */}
     <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-left shadow-md relative overflow-hidden h-36"
         style={{
           backgroundImage: "url('/images/milk.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>

      <div className="relative z-10">
        <h3 className="text-sm font-semibold text-white mb-0.5 drop-shadow-lg">100% Fresh<br/>Cow Milk</h3>
        <p className="text-xs text-white mb-2 drop-shadow-md">Starting at $14.99</p>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs hover:bg-blue-50 transition-colors shadow-lg">
          Shop Now →
        </button>
      </div>
      <div className="absolute right-2 top-2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
        <div className="w-8 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
          <div className="w-6 h-8 bg-gradient-to-b from-white to-gray-100 rounded-lg relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 z-5">
        <div className="w-full h-full bg-white rounded-full transform translate-x-4 -translate-y-4"></div>
      </div>
    </div>

    {/* Promo Card 2 - Water & Soft Drinks */}
    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-lg text-left shadow-md relative overflow-hidden h-36"
         style={{
           backgroundImage: "url('/images/soda.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>

      <div className="text-right relative z-10">
        <h3 className="text-xs font-semibold text-black mb-0.5 drop-shadow-lg">DRINK SALE</h3>
        <p className="text-sm font-bold text-black mb-2 drop-shadow-md">Water &<br/>Soft Drink</p>
        <button className="bg-white text-cyan-600 px-3 py-1 rounded-full text-xs hover:bg-cyan-50 transition-colors shadow-lg">
          Shop Now →
        </button>
      </div>
      <div className="absolute right-3 bottom-2 w-10 h-14 z-10">
        <div className="w-full h-full bg-gradient-to-b from-amber-900 to-amber-800 rounded-lg relative shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-2 bg-amber-700 rounded-t-lg"></div>
          <div className="absolute inset-1 bg-gradient-to-b from-amber-600 to-amber-900 rounded opacity-80"></div>
          <div className="absolute top-0.5 left-0.5 right-0.5 h-1 bg-gradient-to-r from-white to-transparent rounded opacity-30"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-white opacity-10 transform -skew-x-12 z-5"></div>
    </div>

    {/* Promo Card 3 - Quick Breakfast */}
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-lg text-left shadow-md relative overflow-hidden border h-36"
         style={{
           backgroundImage: "url('/images/breakfast.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>

      <div className="relative z-10">
        <h3 className="text-xs font-semibold text-gray-800 mb-0.5 drop-shadow-sm">100% ORGANIC</h3>
        <p className="text-sm font-bold text-gray-800 mb-2 drop-shadow-sm">Quick<br/>Breakfast</p>
        <button className="bg-green-700 text-white px-3 py-1 rounded-full text-xs hover:bg-green-800 transition-colors shadow-lg">
          Shop Now →
        </button>
      </div>
      <div className="absolute right-2 bottom-2 flex gap-1 z-10">
         <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-sm"></div>
         <div className="w-4 h-4 bg-amber-600 rounded-full shadow-sm"></div>
         <div className="w-4 h-4 bg-yellow-600 rounded-full shadow-sm"></div>
       </div>
       <div className="absolute right-2 top-8 flex gap-1 z-10">
         <div className="w-3 h-3 bg-amber-800 rounded-full shadow-sm"></div>
         <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
       </div>
       <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-200 to-transparent opacity-30 rounded-full transform translate-x-2 -translate-y-2 z-5"></div>
     </div>
   </div>

   {/* ✅ Special Deal Section */}
   <div className="bg-[#EAF5EA] py-12 px-4 md:px-12 rounded-xl">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
       <div className="flex justify-center">
         <img src="/images/vegetables.png" alt="Special Deal" className="w-64 sm:w-80 lg:w-96 object-contain" />
       </div>
       <div className="text-center lg:text-left flex-1">
         <p className="text-sm text-gray-500 uppercase font-medium">Best Deals</p>
         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           Our Special Products Deal of the Month
         </h2>
         <div className="flex justify-center lg:justify-start gap-4 text-center mb-6">
           {["00", "02", "18", "46"].map((value, index) => (
            <div key={index}>
              <p className="text-2xl md:text-3xl font-bold text-green-700">{value}</p>
              <p className="text-xs text-gray-600 uppercase">
                {["Days", "Hours", "Mins", "Secs"][index]}
              </p>
            </div>
          ))}
        </div>
         <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">
           Shop now →
         </button>
       </div>
       <div className="hidden lg:flex justify-center">
         <img src="/images/farmer-box.png" alt="Farmer Holding Basket" className="w-64 lg:w-80 object-contain" />
       </div>
     </div>
   </div>

   {/* ✅ Newest Products Section */}
   <div className="mt-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-8">Newest Products</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
       {[
        { name: "Green Apples", img: "/images/greenapples.png" },
        { name: "Chinese Cabbage", img: "/images/chinesecabbage.png" },
        { name: "Lettuce", img: "/images/lettuce.png" },
        { name: "Green Peppers", img: "/images/green-peppers.png" },
        { name: "Corn", img: "/images/corn.png" },
      ].map((product) => (
        <div key={product.name} className=" rounded-xl shadow-sm border p-4 text-left">
          <img src={product.img} alt={product.name} className="h-32 mx-auto mb-4 object-contain" />
          <p className="text-xs text-gray-500">Vegetables</p>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">By Mr.food ★★★★☆(4)</p>
          <div className="flex justify-center items-center gap-1 text-yellow-400 mt-1">
             <span className="text-gray-500 text-xs"></span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-green-700 font-bold text-lg">$2</span>
            <span className="line-through text-gray-400 text-sm">$3.99</span>
            <button className="border border-green-600 text-green-600 px-3 py-1 rounded-full text-sm">
              Contact
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ✅ Testimonials + Instagram Section */}
<section className="bg-[#EDF6ED] py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto">
    {/* Section Title */}
    <h2 className="text-2xl md:text-3xl font-bold mb-12">Client Testimonial</h2>

    {/* Testimonial Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Robert Fox",
          role: "Customer",
          img: "/images/robert.png",
          review: "Pellentesque eu nibh eget mauris congue mattis nec ut tellus. Praesent imperdiet nulla nec magna dapibus, nec iaculis velit molestie.",
        },
        {
          name: "Dianne Russel",
          role: "Customer",
          img: "/images/dianne.png",
          review: "Pellentesque eu nibh eget mauris congue mattis nec ut tellus. Praesent imperdiet nulla nec magna dapibus, nec iaculis velit molestie.",
        },
        {
          name: "Eleanor Pena",
          role: "Customer",
          img: "/images/eleanor.png",
          review: "Pellentesque eu nibh eget mauris congue mattis nec ut tellus. Praesent imperdiet nulla nec magna dapibus, nec iaculis velit molestie.",
        },
      ].map((t, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm relative">
          <div className="text-3xl text-green-600 mb-4">“</div>
          <p className="text-gray-700 text-sm mb-6">{t.review}</p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>
          <div className="flex mt-3 gap-1 text-yellow-400 text-sm">
            ★★★★★
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* ✅ Instagram Gallery Section */}
 <section className="mb-9 bg-white py-16 px-4 md:px-12">
   <div className="max-w-7xl mx-auto">
     <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Follow us on Instagram</h2>
     <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
       {[
        "/images/tomatoes.png",
        "/images/green-leaf.png",
        "/images/leaf-closeup.png",
        "/images/pepper.png",
        "/images/coconut.png",
        "/images/fruits.png",
      ].map((src, i) => (
        <img key={i} src={src} alt={`insta-${i}`} className="rounded-lg w-full h-24 md:h-32 object-cover" />
      ))}
    </div>
  </div>
</section>

    
 {/* Newsletter Section */}
      <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
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

      
     {/* ✅ Footer Section */}
<footer className="bg-[#24231D] py-8 px-4 md:px-8 lg:px-12">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
                {/* Logo */}
                <div className="mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
                                alt="Biovision Africa Trust"
                                className="h-12 object-contain filter brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">
                    Growing Africa's Future Through Sustainable Agriculture
                </h4>
                <p className="text-white font-bold text-sm leading-relaxed mb-4">
                    We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
                </p>
                
                {/* Social Media Links */}
                <div className="flex gap-2">
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Explore Links */}
            <div>
                <h5 className="text-base font-semibold text-white mb-4">Explore</h5>
                <ul className="space-y-2">
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Our Mission</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Shop</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Learn</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> FAQs</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Press & Media</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Career</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Become a Partner</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h5 className="text-base font-semibold text-white mb-4">Contact</h5>
                <div className="space-y-2 text-white font-bold text-sm">
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+254 (0) 20 632 4806</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>info@biovisionafricatrust.org</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <p>P.O. Box 12345, Nairobi, Kenya</p>
                        </div>
                    </div>
                    
                    <div className="pt-2 space-y-0.5 text-xs">
                        <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
                        <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
                        <p><span className="text-white font-bold">Sunday:</span> Closed</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-yellow-500 text-xs font-medium">
                © 2025 BioVision Africa Trust. All Rights Reserved.
            </p>
            <div className="flex gap-3 text-xs">
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







