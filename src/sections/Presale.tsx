import Button from "@/components/Button";

export default function Presale() {
    return(
        <section className="bg-yellow">
            <div className="max-w-4xl mx-auto w-11/12 py-20">
                <h3 className="text-center mb-5">Exclusive <i>Pre-Sale</i> Now Open!</h3>
                <p className="font-madefor-display max-w-[570px] mx-auto text-center">Our team is ready to assist you in securing your piece of luxury. Don{"'"}t miss out on this opportunity to make La Perla your address of distinction.</p>
                <div className="flex justify-center mt-5">
                    <Button bgColor="#3e2b24" textColor="#c5b593" borderColor="#3e2b24">
                        Submit
                    </Button>
                </div>
            </div>
        </section>
    )
}