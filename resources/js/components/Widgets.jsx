import React from 'react';
import { MessageCircleMore, MapPinHouseIcon, NewspaperIcon, Send } from 'lucide-react';

const Widgets = ({ metrics }) => {

    const defaultMetrics = [
    {
      title: 'Total Blogs',
      value: '1,1125',
      change: -2.5,
      icon: <NewspaperIcon className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Destinations',
      value: '15.8',
      change: -2.5,
      icon: <MapPinHouseIcon className="w-6 h-6 text-pink-600" />,
      bgColor: 'bg-pink-100',
    },
    {
      title: 'Total Messages',
      value: '3,132',
      change: 2.5,
      icon: <MessageCircleMore className="w-6 h-6 text-pink-600" />,
      bgColor: 'bg-pink-100',
    },
    {
      title: 'News Letters',
      value: '3,132',
      change: 2.5,
      icon: <Send className="w-6 h-6 text-orange-600" />,
      bgColor: 'bg-orange-100',
    },
  ];

  // Use provided metrics or default
  const data = metrics || defaultMetrics;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.map((metric, index) => (
        <div
          key={index}
          className="relative bg-gray-200 h-[150px] rounded-lg shadow-md p-4 flex flex-col space-y-4"
        >
          {/* Icon */}
          <div className={`p-3 h-12 w-12 flex items-center justify-center rounded-full ${metric.bgColor}`}>
            {metric.icon}
          </div>

          {/* Metric Details */}
          <div className="flex-1">
            <h3 className="text-gray-500 text-sm font-medium">{metric.title}</h3>
            <div className="flex justify-between items-center space-x-2">
              <p className="text-2xl font-semibold text-gray-800">{metric.value}</p>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.change >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {metric.change >= 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Widgets;