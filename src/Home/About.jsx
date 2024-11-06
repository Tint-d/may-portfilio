import React from "react";
import { useState } from "react";
import ReactTyped from "react-typed";
import { Data } from "../assets/PresentData";
import animation4 from "../assets/img/animation4.gif";
import experience from "../assets/img/experience.png";

const About = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        {/* intro-ani  */}
        <div className=" sm:flex sm:gap-10 sm:items-center sm:justify-around">
          {/* intro */}

          <div className="sm:w-4/5  mb-5">
            <h2 className="sm:text-3xl main-text-color text-2xl font-semibold ">
              <p>-May Phoo Maung</p>
              <ReactTyped
                strings={["Accountant", "Financial Analyst", "Tax Advisor"]}
                typeSpeed={120}
                backSpeed={70}
                loop
                cursorChar="-"
              />
            </h2>
            <hr className="sm:w-36 w-20 border-[rgb(224,36,36)] border-b-2 mb-5" />
            <h1 className=" tracking-wider leading-8">
              As a skilled accountant, I bring a unique blend of expertise and
              precision to financial management. I am dedicated to collaborating
              with your company to achieve outstanding financial accuracy and
              efficiency that align with your objectives. From budgeting to
              auditing, I focus on delivering top-notch financial solutions
              tailored to your organization's specific needs. Explore more about
              my background below and discover the key projects and successes
              I've contributed to!
            </h1>
          </div>

          {/* animation */}
          <img src={animation4} className="sm:w-1/5" alt="animation" />
        </div>

        {/* experince */}
        <div className=" flex flex-col gap-5">
          <div className="mb-3 ">
            <h3 className="sm:text-4xl text-2xl sm:mb-2 main-text-color font-bold ">
              -Experience
            </h3>
            <h1 className="sm:text-2xl text-lg sm:ml-10 ml-5">
              Everything About Me
            </h1>
          </div>

          <div className="sm:flex flex flex-col sm:flex-row sm:flex-wrap">
            <p className="text-sm font-thin  leading-8 tracking-wide ">
              Review, verify, and approve office and operational expenses
              submitted by the administration, ensuring they align with company
              policies.Perform regular checks on expenses to ensure accuracy and
              compliance before finalizing approvals. Warehouse and Admin’s
              department Expense Management Check and validate expenses related
              to warehouse operations, maintaining clear records for each
              transaction.Process supplier invoices and payments, coordinating
              with the finance team to meet payment deadlines.Liaise with the
              administration and warehouse teams to clarify expense queries and
              ensure smooth processing of payments. Work closely with suppliers
              and internal departments to manage outstanding payments and
              address any discrepancies. After approval from the regional sale
              manager , national sale manager and the CEO,the dealer’s order is
              allowed to be released.And then monitor the credit period and ask
              for credit and pay the money.In the event of delay in the credit
              prediod and in the period of policy change, I have to attend a
              meeting with therelevant seniors. From the logistics side,when the
              sales order comes in,the due,limit, and approve are asked to the
              relevant regional accountants who hold the relevant department,
              and the amount to be paid is calculated.After the invoices are
              registered in the software,a logistic e-mail is sent back.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
