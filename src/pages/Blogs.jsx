
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "What is useState and how does it work in React?",
      
      content: "useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. When the state changes, React re-renders the component. This is the fundamental way to manage local state in functional components, replacing the need for class components with this.state.",
      date: "2023-11-12"
    },
    {
      id: 2,
      title: "What is the purpose of useEffect in React?",
     
      content: "The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. It runs after every render by default. You can control when it runs by passing a dependency array as the second argument. This Hook is essential for data fetching, subscriptions, timers, and other side effects.",
      date: "2023-11-15"
    },
    {
      id: 3,
      title: "What is a custom hook in React and when should you use one?",
     
      content: "A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks. Custom Hooks let you extract component logic into reusable functions. You should use them when you want to share stateful logic between components. They don't create a new state but reuse stateful logic. Examples include useFetch for data fetching, useLocalStorage for persisting state, and useForm for form handling.",
      date: "2023-11-18"
    },
    {
      id: 4,
      title: "Difference between controlled and uncontrolled components? Which one is better?",
     
      content: "Controlled components have form data handled by React state, while uncontrolled components have form data handled by the DOM itself. Controlled components are generally preferred as they provide more control and predictability, but uncontrolled components can be simpler for quick implementations. Controlled components make it easier to implement complex validation, conditional disabling of buttons, and dynamic inputs.",
      date: "2023-11-20"
    },
    {
      id: 5,
      title: "Tell us something about useFormStatus() (explore and explain)",
     
      content: "useFormStatus is a React Hook that provides status information about the last form submission. It can tell you whether a form is currently submitting, whether the submission was successful, or if there were any errors. This is particularly useful for displaying loading states or success/error messages. It works well with server actions and helps create better user experiences during form submissions.",
      date: "2023-11-22"
    }
  ];

  return (
    <div className="w-full bg-[#EFEFEF] bg mx-auto pb-6">
      <div className='text-center'>
      <h1 className="text-3xl font-bold mb-5 pt-6">Blogs</h1>
      <p className="text-gray-600 mb-12 text-center">
        Let's explore some basic concepts that will make you a good developer
      </p>
      </div>
      
      <div className="space-y-8 w-11/12 mx-auto">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;