
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
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut pretium tellus. Quisque orci ligula, imperdiet tempus orci sit amet, euismod vestibulum est. Etiam iaculis orci ac magna efficitur condimentum. Morbi eget gravida nunc. Nulla ac ex diam. Curabitur aliquet, erat et volutpat euismod, massa turpis aliquet augue, eget iaculis nunc ligula aliquam purus. Pellentesque a efficitur purus. Quisque ipsum quam, posuere in gravida quis, dignissim gravida nulla. Sed id massa ornare, cursus metus et, congue erat. Suspendisse vestibulum, nulla ac accumsan tristique, felis turpis tincidunt mi, a fermentum risus velit ac tellus. Nulla ante ante, faucibus eu facilisis id, vestibulum at diam If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        },
        {
            key: 2,
            title: "Do I need technical expertise to use Node Army?",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
        },
        {key: 2, title: "What kind of support does Node Army provide?", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text."},
        {key: 2, title: "How do I get started with Node Army?", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."},
        {key: 2, title: "How will I be rewarded by using Node Army?", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
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
