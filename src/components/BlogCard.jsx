
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

const BlogCard = ({ blog }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-gray-400 hover:text-primary"
        >
          <FontAwesomeIcon 
            icon={isBookmarked ? solidBookmark : regularBookmark} 
            className={isBookmarked ? 'text-primary' : ''}
          />
        </button>
      </div>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="font-medium">By {blog.author}</span>
        <span className="mx-2">•</span>
        <span>{blog.date}</span>
      </div>
      
      <p className={`text-gray-700 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
        {blog.content}
      </p>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-dark text-sm font-medium"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            className="checkbox checkbox-sm checkbox-primary" 
            checked
            readOnly
          />
          <span className="text-xs text-gray-500">Added at {blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;