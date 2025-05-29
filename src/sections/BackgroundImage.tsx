import Image from "next/image";

export default function BackgroundImage() {
    return(
        <section className="flex h-full items-end secondary-background">
            <div className="flex flex-col items-center bg-brown w-full">
                <h3 className="!text-yellow">Get in Touch</h3>
                <h6 className="!text-yellow max-w-md">Please submit your contact information and one of our sales associates will be in touch with you shortly</h6>
                <Form />
            </div>
        </section>
    )
}

export function Form() {
    return(
        <form>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="firstName">First name *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="lastName">Last name *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="email">Email *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="image">First name *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="image">First name *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
            <div className="flex flex-col">
                <label className="!text-yellow font-madefor-display" htmlFor="image">First name *</label>
                <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3"/>
            </div>
        </form>
    )
}