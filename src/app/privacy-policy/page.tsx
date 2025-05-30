import {Footer} from "@/sections";

export default function Page() {
    return(
        <main>
            <div className="max-w-4xl mx-auto w-11/12">
                <h3 className="pt-30 mb-15">Privacy Policy</h3>
            </div>

            <section className="max-w-4xl mx-auto w-11/12 mb-15">
                <h6 className="mb-5">A legal disclaimer</h6>
                <p className="font-madefor-display">The explanations and information provided on this page are only
                    general and high-level explanations and information on how to write your own document of a Privacy
                    Policy. You should not rely on this article as legal advice or as recommendations regarding what you
                    should actually do, because we cannot know in advance what are the specific privacy policies you
                    wish to establish between your business and your customers and visitors. We recommend that you seek
                    legal advice to help you understand and to assist you in the creation of your own Privacy
                    Policy.</p>
            </section>

            <section className="max-w-4xl mx-auto w-11/12 mb-15">
                <h6 className="mb-5">Privacy Policy - the basics</h6>
                <p className="font-madefor-display mb-5">Having said that, a privacy policy is a statement that
                    discloses some or all of the ways a website collects, uses, discloses, processes, and manages the
                    data of its visitors and customers. It usually also includes a statement regarding the website’s
                    commitment to protecting its visitors’ or customers’ privacy, and an explanation about the different
                    mechanisms the website is implementing in order to protect privacy. </p>
                <p className="font-madefor-display mb-5">Different jurisdictions have different legal obligations of
                    what must be included in a Privacy Policy. You are responsible to make sure you are following the
                    relevant legislation to your activities and location.</p>
            </section>

            <section className="max-w-4xl mx-auto w-11/12 mb-15">
                <h6 className="mb-5">What to include in the Privacy Policy</h6>
                <p className="font-madefor-display mb-5">Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the website is collecting and the manner in which it collects the data; an explanation about why is the website collecting these types of information; what are the website’s practices on sharing the information with third parties; ways in which your visitors and customers can exercise their rights according to the relevant privacy legislation; the specific practices regarding minors’ data collection; and much, much more.</p>
            </section>
            <Footer />
        </main>
    )
}