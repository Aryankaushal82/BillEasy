import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      duration: "/month",
      description: "No credit card required. Ever",
      features: [
        "Use your own browser",
        "Use your own OpenAI key",
        "Data export",
        "Basic support",
      ],
      limitations: [
        "Scheduled jobs",
        "Smart downloader and cost-optimized AI",
        "Dedicated server",
      ],
      buttonText: "Get Started",
      buttonClass: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
    {
      name: "Cloud",
      price: "$15",
      duration: "/month",
      description: "For Hobbyist.",
      features: [
        "Use our servers",
        "Use our specialized AI",
        "Data export",
        "Full support",
        "Scheduled jobs",
        "Smart downloader and cost-optimized AI",
      ],
      limitations: ["Dedicated server"],
      buttonText: "Get Started",
      buttonClass: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
    {
      name: "Enterprise",
      price: "$100",
      duration: "/month",
      description: "For professionals.",
      features: [
        "Your own server",
        "Use our specialized AI",
        "Data export",
        "Full support",
        "Scheduled jobs",
        "Smart downloader and cost-optimized AI",
        "Dedicated server",
      ],
      limitations: [],
      buttonText: "Get Started",
      buttonClass: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
  ];

  return (
    <section className="p-8 w-full h-auto flex justify-center items-center">
      <div className="py-8 max-w-screen-xl lg:py-16">
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-800">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose a plan that best suits your data needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:gap-6 xl:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 max-w-md text-center rounded-2xl shadow-lg xl:p-8 mx-auto ${
                index === 1 ? "bg-gradient-to-br from-purple-500 to-blue-600 text-white" : "bg-white"
              }`}
            >
              <h3 className={`mb-4 text-3xl font-semibold ${index === 1 ? "text-white" : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <div className="flex justify-center items-baseline my-1 h-10">
                <p className={`font-light sm:text-lg ${index === 1 ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="flex justify-center items-baseline my-9">
                <span className={`mr-2 text-5xl font-extrabold ${index === 1 ? "text-white" : "text-gray-800"}`}>
                  {plan.price}
                </span>
                <span className={`${index === 1 ? "text-gray-300" : "text-gray-600"}`}>{plan.duration}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className={`w-6 h-6 ${index === 1 ? "text-white" : "text-blue-500"}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                    </svg>
                    <span className={`text-base-content/80 ${index === 1 ? "text-gray-300" : "text-gray-800"}`}>{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"></path>
                    </svg>
                    <span className={`text-base-content/30 ${index === 1 ? "text-gray-400" : "text-gray-600"}`}>{limitation}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-bold gap-2 shadow uppercase p-4 text-white rounded-lg ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
