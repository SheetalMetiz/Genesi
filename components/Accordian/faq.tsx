import { Collapse } from "react-collapse";
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";

// Faq Page Layout
const FaqComponentItem = (props: { open: any; toggle: any; title: any; desc: any; }) => {
    const {open,toggle,title,desc}  = props
    return (
        <div className="flex flex-col p-3 border-b text-white cursor-pointer">
            <div className="flex flex-row items-center text-white" onClick={toggle}>
                <p className = "flex-auto hover:text-yellow-500">{title}</p>
                <div className="flex-none w-3">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="transition-max-height text-white duration-700 ease-in-out overflow-hidden">{desc}</div>
            </Collapse>
        </div>
    )
}
export default FaqComponentItem
