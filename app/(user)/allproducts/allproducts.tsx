import { useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight, ChevronDown, Filter, Phone } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function AllProductsPage() {
    const pathname = usePathname();
          const [searchQuery, setSearchQuery] = useState("");
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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState(['Vegetables']);
  const [priceRange, setPriceRange] = useState([50, 1500]);
  const [selectedRating, setSelectedRating] = useState('4.0 & up');
  const [selectedTags, setSelectedTags] = useState(['Low fat']);
  
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
  
  const products = [
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

  const renderStars = (rating: number) => {
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

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="mt-24 min-h-screen bg-gray-50">
      {/* Header with breadcrumb and vegetable images */}
        {/* ✅ Fixed Navbar */}
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
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center text-sm space-x-2">
            <span>🏠</span>
            <ChevronRight size={16} />
            <span>Categories</span>
            <ChevronRight size={16} />
            <span className="text-green-400">Vegetables</span>
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
              {products.map((product) => (
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
      {/* ✅ Newsletter Section */}
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
{/* ✅ Footer Section */}
        {/* Main Footer Section */}
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