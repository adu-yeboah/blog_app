import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import MainLayout from "../../layout/mainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  FiCalendar, 
  FiMapPin, 
  FiClock, 
  FiEye, 
  FiHeart, 
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
  FiBookmark,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";
import { 
  TbCalendarTime, 
  TbMapPin, 
  TbClock, 
  TbEye,
  TbBookmark,
  TbMessageCircle,
  TbArrowBack
} from "react-icons/tb";

export default function BlogDetails() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(248);
    const [views, setViews] = useState(1543);
    const [isLiked, setIsLiked] = useState(false);

    const blog = {
        title: "Confronting History: My Emotional Visit to Cape Coast Castle",
        date: "June 15, 2023",
        category: "Historical Sites",
        location: "Cape Coast, Central Region",
        readTime: "7 min read",
        description: "Walking through the 'Door of No Return' at Cape Coast Castle was one of the most profound experiences of my travels. This UNESCO World Heritage site, located in the Central Region of Ghana, stands as a somber reminder of the transatlantic slave trade. The castle's walls echo with the stories of resilience and survival, offering a deep connection to Ghana's past. As I explored the dungeons and courtyards, I felt the weight of history and the strength of the human spirit. This visit left an indelible mark on my journey.",
        images: [
            "https://via.placeholder.com/1200x600?text=Cape+Coast+Castle+Main+Entrance",
            "https://via.placeholder.com/1200x600?text=View+from+Castle+Ramparts",
            "https://via.placeholder.com/1200x600?text=Door+of+No+Return",
        ],
        author: {
            name: "Kwame Ansah",
            avatar: "https://via.placeholder.com/100?text=KA",
            bio: "Ghana travel expert with 5+ years exploring every region"
        },
        tags: ["history", "unesco", "ghana", "heritage", "emotional", "travel"],
        content: `
            <p>Standing before the imposing white walls of Cape Coast Castle, I felt a mix of anticipation and reverence. This wasn't just another tourist attraction; it was a pilgrimage to understand a crucial chapter of human history that continues to shape our world today.</p>
            
            <h2>The Journey Begins</h2>
            <p>As I passed through the main gate, the contrast between the bright exterior and the dimly lit interior was striking. Our guide, a knowledgeable local historian, began sharing stories that transformed the stone walls into living history. Each cannon, each courtyard, each doorway had a story to tell.</p>
            
            <h2>The Dungeons</h2>
            <p>Descending into the dungeons was an experience that words struggle to capture. The darkness, the cool damp air, and the sheer scale of these holding cells where thousands of people were imprisoned before being forced through the "Door of No Return" created a profound sense of connection to the past.</p>
            
            <h2>Moments of Reflection</h2>
            <p>In the castle's chapel, built directly above the dungeons, I found a space for quiet reflection. The irony of worship spaces above places of immense suffering prompted deep contemplation about the complexities of human history and the capacity for both cruelty and resilience.</p>
            
            <h2>The Door of No Return</h2>
            <p>Standing before the infamous "Door of No Return" - now serving as a "Door of Return" for descendants of the African diaspora - was particularly moving. Looking out at the Atlantic Ocean, I imagined the unimaginable journeys that began at this very spot.</p>
            
            <h2>Why This Visit Matters</h2>
            <p>Visiting Cape Coast Castle isn't just about seeing historical architecture; it's about bearing witness. It's about understanding the depth of human experience and honoring the memory of those who passed through these halls. This visit changed my perspective on history, resilience, and the importance of remembering.</p>
        `,
        relatedPosts: [
            { id: 1, title: "Elmina Castle: A Sister Fortress", image: "https://via.placeholder.com/400x300?text=Elmina+Castle", category: "History" },
            { id: 2, title: "Kakum Canopy Walk Adventure", image: "https://via.placeholder.com/400x300?text=Kakum+Canopy", category: "Nature" },
            { id: 3, title: "Traditional Festivals of Ghana", image: "https://via.placeholder.com/400x300?text=Festivals", category: "Culture" },
        ]
    };

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        customPaging: (i) => (
            <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></div>
        )
    };

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                onClick={onClick}
            >
                <FiChevronLeft className="text-white text-2xl" />
            </button>
        );
    }

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                onClick={onClick}
            >
                <FiChevronRight className="text-white text-2xl" />
            </button>
        );
    }

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    return (
        <MainLayout>
            <motion.div
                className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Section */}
                <div className="relative bg-gradient-to-b from-gray-900 to-black">
                    {/* Back Button */}
                    <div className="container mx-auto px-4 pt-8">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
                        >
                            <TbArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Stories
                        </Link>
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 py-12 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Category Badge */}
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-full mb-6">
                                {blog.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                                <div className="flex items-center">
                                    <TbCalendarTime className="mr-2" />
                                    <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <TbMapPin className="mr-2" />
                                    <span>{blog.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <TbClock className="mr-2" />
                                    <span>{blog.readTime}</span>
                                </div>
                                <div className="flex items-center">
                                    <TbEye className="mr-2" />
                                    <span>{views.toLocaleString()} views</span>
                                </div>
                            </div>

                            {/* Author Card */}
                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl max-w-md">
                                <img 
                                    src={blog.author.avatar} 
                                    alt={blog.author.name}
                                    className="w-14 h-14 rounded-full border-2 border-white/30"
                                />
                                <div>
                                    <div className="font-bold text-white">{blog.author.name}</div>
                                    <div className="text-sm text-white/70">{blog.author.bio}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2">
                            {/* Image Carousel */}
                            <motion.div
                                className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Slider {...settings}>
                                    {blog.images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={image}
                                                alt={`${blog.title} - Image ${index + 1}`}
                                                className="w-full h-[500px] object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                                <div className="text-white text-sm">
                                                    Image {index + 1} of {blog.images.length}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </motion.div>

                            {/* Article Content */}
                            <motion.article
                                className="prose prose-lg lg:prose-xl max-w-none"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Tags */}
                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-3">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <button
                                    onClick={handleLike}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                                        isLiked
                                            ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <FiHeart className={`${isLiked ? 'fill-current' : ''}`} />
                                    <span>{likes} Likes</span>
                                </button>

                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                                        isBookmarked
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {isBookmarked ? <FiBookmark className="fill-current" /> : <TbBookmark />}
                                    <span>Bookmark</span>
                                </button>

                                <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                                    <TbMessageCircle />
                                    <span>42 Comments</span>
                                </button>

                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600">Share:</span>
                                    {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, index) => (
                                        <button
                                            key={index}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            <Icon />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-8">
                            {/* Author Card Expanded */}
                            <motion.div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <img 
                                        src={blog.author.avatar} 
                                        alt={blog.author.name}
                                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.author.name}</h3>
                                    <p className="text-gray-600 mb-4">{blog.author.bio}</p>
                                    <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-full hover:shadow-lg transition-all">
                                        View Profile
                                    </button>
                                </div>
                            </motion.div>

                            {/* Related Posts */}
                            <motion.div
                                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
                                <div className="space-y-6">
                                    {blog.relatedPosts.map((post) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.id}`}
                                            className="group block"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                                                        {post.category}
                                                    </span>
                                                    <h4 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-amber-600 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Newsletter CTA */}
                            <motion.div
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Travel Insights</h3>
                                <p className="text-gray-600 mb-4">
                                    Subscribe to get my latest Ghana travel stories and tips
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                                        Subscribe
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <motion.div
                    className="border-t border-gray-200 bg-white py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                            <Link
                                href="/blog"
                                className="group inline-flex items-center text-gray-700 hover:text-gray-900"
                            >
                                <FiChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to All Stories
                            </Link>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={handleLike}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                                        isLiked
                                            ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <FiHeart className={`${isLiked ? 'fill-current' : ''}`} />
                                    <span>{likes}</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                                    <FiShare2 />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </MainLayout>
    );
}