import React, { useState } from 'react';
import { ChartBarIcon, ClipboardDocumentIcon, UserIcon } from "@heroicons/react/24/solid";
import './SecondFeatures.css';
import profit_loss from '../../assets/profit-loss.webp';
import inventory from '../../assets/inventory.webp';
import contacts from '../../assets/contacts.webp';

const images = [profit_loss, inventory, contacts];

function SecondFeatures() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='w-full h-full lg:p-20 flex flex-col text-center justify-center max-sm:p-10 pb-15'>
      <div className="mx-auto max-w-2xl md:text-center">
        <h1 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl max-sm:p-5'>
          Simplify everyday business tasks.
        </h1>
        <p className='mt-4 text-lg tracking-tight text-slate-700'>
          Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.
        </p>
      </div>

      <div className='md:mx-30  max-sm:mx-5 mx-10 flex flex-col justify-center items-center'>
        {/* Grid Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
          {[
            { icon: ChartBarIcon,
                title: "Reporting", 
                text: "Stay on top of things with always up-to-date reporting features.",
                secText: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity."
            },
            { icon: ClipboardDocumentIcon, 
                title: "Inventory", 
                text: "Never lose track of what’s in stock with accurate inventory tracking.",
                secText: "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure."
            },
            { icon: UserIcon, 
                title: "Contacts", 
                text: "Organize all of your contacts, service providers, and invoices in one place.",
                secText: "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional."
            }
          ].map((item, index) => (
            <div key={index} className="cursor-pointer my-15 p-4 rounded-lg hover:bg-gray-100 lg:bg-transparent bg-white"
              onClick={() => handleSelect(index)}>
              <item.icon className={`w-10 h-10 p-2 rounded-lg transition-all duration-300 text-blue-600 bg-blue-200 ${selectedIndex === index ? 'lg:text-blue-600 lg:bg-blue-200' : 'lg:text-gray-400 lg:bg-gray-200'}`} />
              <h3 className={`mt-4 mb-5 lg:text-gray-600 text-md transition-colors duration-300 text-start text-blue-600 ${selectedIndex === index ? 'lg:text-blue-600' : 'lg:text-gray-600'}`}>{item.title}</h3>
              <p className='mt-2 hover:text-gray-500 text-start text-xl font-medium'>{item.text}</p>
              <p className='text-md text-gray-600 text-start mt-5'>{item.secText}</p>
              <img className="mt-4 lg:hidden w-full h-auto rounded-lg shadow-md" src={images[index]} alt={item.title} />
            </div>
          ))}
        </div>

        {/* Image Slider Section */}
        <div className="relative overflow-hidden hidden lg:block mt-10 w-full max-w-5xl mx-auto bg-gray-200/40 rounded-4xl p-20 pr-50 h-full">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${selectedIndex * 33.33}%)`, width: '300%' }}>
            {images.map((img, index) => (
              <div key={index} className="w-1/3 px-2">
                <img src={img} alt={`Slide ${index}`} className="w-full h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFeatures;
