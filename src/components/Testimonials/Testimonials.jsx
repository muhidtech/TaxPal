import React from "react";
import "./Testimonials.css";
import amy_hahn from "../../assets/amy-hahn.webp";
import erin_powlowski from "../../assets/erin-powlowski.webp";
import leland_kiehn from "../../assets/leland-kiehn.webp";
import peter_renolds from "../../assets/peter-renolds.webp";
import sheryl_berge from "../../assets/sheryl-berge.webp";

function Testimonials() {
  const info = [
    {
      text: "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      name: "Sheryl Berge",
      title: "CEO at Lynch LLC",
      img: sheryl_berge,
    },
    {
      text: "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      name: "Leland Kiehn",
      title: "Founder of Kiehn and Sons",
      img: leland_kiehn,
    },
    {
      text: "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      name: "Peter Renolds",
      title: "Founder of West Inc",
      img: peter_renolds,
    },
    {
      text: "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      name: "Amy Hahn",
      title: "Director at Velocity Industries",
      img: amy_hahn,
    },
    {
      text: "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      name: "Erin Powlowski",
      title: "COO at Armstrong Inc",
      img: erin_powlowski,
    },
    {
      text: "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      name: "Amy Hahn",
      title: "Director at Velocity Industries",
      img: amy_hahn,
    },
  ];

  return (
    <div id="testimonials"
    className="w-full flex flex-col items-center px-6 py-20">
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl font-medium">Loved by businesses worldwide.</h1>
        <p className="text-lg text-gray-600">
          Our software is so simple that people can’t help but fall in love
          with it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {info.map((item, key) => (
          <div
            key={key}
            className="bg-white shadow-lg  rounded-2xl p-6 space-y-6 w-full lg:max-w-md max-w-2xl"
          >
            <p className="text-lg">{item.text}</p>
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
