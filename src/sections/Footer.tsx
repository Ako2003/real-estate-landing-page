import Button from "@/components/Button";

export default function Footer() {
    return(
        <section className="flex items-end">
            <div className="bg-brown w-full">
                <div className="flex flex-col items-center pb-30">
                    <h3 className="!text-yellow mt-20">Get in Touch</h3>
                    <h6 className="!text-yellow max-w-md mb-10">Please submit your contact information and one of our sales
                        associates will be in touch with you shortly</h6>
                    <Form/>
                </div>
                <div className="">
                    <Rights />
                </div>
            </div>
        </section>
    )
}

export function Form() {
    return (
        <form>
            <div className="flex justify-between gap-10">
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="firstName">First name *</label>
                    <input type="text"
                           className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display"
                           required/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="lastName">Last name *</label>
                    <input type="text" className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display" required/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="email">Email *</label>
                    <input type="email" className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display" required/>
                </div>
            </div>
            <div className="flex justify-between gap-5 mt-10">
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="image">Residence Type *</label>
                    <select className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display" name="cars" id="cars" required>
                        <option value=""></option>
                        <option value="garderia">Garderia</option>
                        <option value="ocean">Ocean</option>
                        <option value="sky">Sky</option>
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="image">Phone *</label>
                    <input className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display"/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="!text-yellow font-madefor-display" htmlFor="image">Price Range *</label>
                    <select className="!text-yellow ring-0 outline-0 border-b mt-5 pl-3 pb-1 font-madefor-display" name="cars" id="cars" required>
                        <option value=""></option>
                        <option value="garderia">1M$-2M$</option>
                        <option value="ocean">2M$-4M$</option>
                        <option value="sky">4M$-8M$</option>
                    </select>
                </div>
            </div>
            <Button type="submit" bgColor="#c5b593" textColor="#3e2b24" borderColor="#c5b593" className="w-full mt-10">
                Submit
            </Button>
        </form>
    )
}

export function Rights() {
    return (
        <footer className="bg-brown w-full">
            <div className="pb-10 max-w-4xl mx-auto flex justify-between">
                <div className="flex gap-10">
                    <a href={"/accessibility-statement"} className="!text-yellow font-madefor-display underline">Accessibility Statement</a>
                    <a href={"/privacy-policy"}  className="!text-yellow font-madefor-display underline">Privacy Policy</a>
                </div>
                <div>
                    <p className="!text-yellow font-madefor-display">©2035 by La Perla.</p>
                </div>
            </div>
        </footer>
    )
}