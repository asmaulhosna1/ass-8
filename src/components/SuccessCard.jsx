import CountUp from 'react-countup';

const SuccessCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <span className="text-4xl mb-2 inline-block">{item.icon}</span>
      <CountUp 
        end={item.value} 
        duration={2.5} 
        className="text-3xl font-bold block mb-2 text-primary"
      />
      <p className="text-gray-600 font-medium">{item.title}</p>
    </div>
  );
};

export default SuccessCard;