import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="flex container">
            <div className="flex flex-col h-[880px] justify-center">
                <h4 className="italic">Meet me at</h4>
                <h1 className="font-bold">LA PERLA</h1>
                <h4 className="italic">52 Brook St.</h4>

                <div className="lg:mt-32 mt-10 max-w-sm">
                    <p className="font-madefor-display mb-5">Introducing a new living experiencing at the best location in town</p>
                    <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#3e2b24"> See Video </Button>
                </div>
            </div>
        </section>
    )
}