
import { useState } from "react";
import FaqComponentItem from "../components/Accordian/faq";

// Faq Page Details
export default function Faq() {
    const [open, setOpen] = useState(0);
    const toggle = (index:any) => {
      if(open === index) {
        return setOpen
      }
      setOpen(index)
    }

    const faqs = [
        {
            key: 0,
            title: "What is Node Army?",
            description: "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes."
        },
        {
            key: 1,
            title: "How can I benefit from using Node Army?",
            description: "Node Army"
        },
        {
            key: 2,
            title: "Do I need technical expertise to use Node Army?",
            description: "Technical Node Army"
        },
        {key: 2, title: "What kind of support does Node Army provide?", description: "Support does"},
        {key: 2, title: "How do I get started with Node Army?", description: "Get Started"},
        {key: 2, title: "How will I be rewarded by using Node Army?", description: "Rewarded By"},
    ];

    return( 
      <>
      <div className="container h-full sm:w-100">
        <div className="grid place-center min-screen">
          <div className="flex flex-col  gap-4">
            <h1 className="text-4xl md:text-7xl  font-bold text-white my-8">FREQUENTLY ASKED</h1>
            {faqs.map((data,index) => {
              return (<FaqComponentItem 
              key = {index}
              open={index === open}
              title={data.title}
              desc={data.description}
              toggle={() => toggle(index)}
              />);
             })}
          </div>
        </div>
      </div>
      
      </>
    )
}