import React from "react";
import '../Tailwind/App.css';

// type GreetingsType={
//     name:string;
// };


export const Greetings=()=>{
    return(
        <div className=" bg-slate-900 pt-11">
        <div
         className="w-3/5 wel text-start  flex flex-col gap-4 mx-auto  border-2 p-11 
         rounded-xl bg-slate-800 border-slate-700 pt-7 flex-wrap">
          <p className="text-xl text-slate-300">
            Welcome to Bubble! We're so glad you've decided to visit our website and learn more about our insurance products. At Bubble, we believe that insurance should be simple, affordable, and accessible to everyone. That's why we've created a range of insurance products that cater to a variety of different needs and budgets
          </p>
          <p className="text-xl text-slate-300">
            Whether you're looking for coverage for your home, your car, your business, or your family, we have an insurance solution that will suit your needs. Our team of experienced and knowledgeable insurance professionals is here to help you find the right coverage at the right price.
          </p>
          <p className="text-xl text-slate-300">
            But at Bubble, we understand that shopping for insurance can be overwhelming and confusing. That's why we've designed our website to be user-friendly and easy to navigate. You'll find all the information you need to make an informed decision about your insurance coverage right here on our website.
          </p>
          <p className="text-xl text-slate-300">
            If you have any questions or need additional information, don't hesitate to reach out to us. Our customer service team is always ready and willing to help. We're here to support you every step of the way, from finding the right coverage to filing a claim.
          </p>
          <p className="text-xl text-slate-300">
            Thank you for choosing Bubble for your insurance needs. We look forward to working with you and helping you protect the things that matter most to you.
          </p>
        </div>
       
       
        </div>
    );
}