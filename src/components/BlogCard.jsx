


const BlogCard = ({ blog }) => {
  
  return (
    <div className="bg-white rounded-xl  p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        
        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
         </div>
         <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
         <p className="text-blue-600">Answer</p>
          <p className=''>{blog.content} </p>
          <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
          <p className=" text-gray-500">Added at {blog.date}</p>
        </div>
      
  );
};

export default BlogCard;