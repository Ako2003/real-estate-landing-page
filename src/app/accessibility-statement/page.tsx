export default function Page() {
    return(
        <main>
            <section className="bg-yellow">
                <div className="pt-30 pb-10 max-w-4xl mx-auto w-11/12">
                    <p className="font-madefor-display mb-5">The purpose of the following template is to assist you in writing your accessibility statement. Please note that you are responsible for ensuring that your site{"'"}s statement meets the requirements of the local law in your area or region.</p>
                    <p className="font-madefor-display italic mb-5">*Note: This page currently has two sections. Once you complete editing the Accessibility Statement below, you need to delete this section.</p>
                    <p className="font-madefor-display">To learn more about this, check out our article “Accessibility: Adding an Accessibility Statement to Your Site”.</p>
                </div>
            </section>
            <section className="pt-15 pb-10 max-w-4xl mx-auto w-11/12">
                <h3 className="mb-5">Accessibility Statement</h3>
                <p className="font-madefor-display mb-5">This statement was last updated on <i
                    className="font-madefor-display">[enter relevant date]</i>.</p>
                <p className="font-madefor-display">We at <i className="font-madefor-display">[enter organization /
                    business name]</i> are working to make our site <i className="font-madefor-display">[enter site name
                    and address]</i> accessible to people with disabilities.</p>
                <hr className="border-t-2 border-black my-10"/>

                <div className="mb-20">
                    <h6 className="mb-3">What web accessibility is</h6>
                    <p className="font-madefor-display">An accessible site allows visitors with disabilities to
                        browse the site with the same or a similar level of ease and enjoyment as other visitors. This
                        can be achieved with the capabilities of the system on which the site is operating, and through
                        assistive technologies.</p>
                </div>

                <div className="mb-20">
                    <h6 className="mb-3">Accessibility adjustments on this site</h6>
                    <p className="font-madefor-display mb-5">We have adapted this site in accordance with WCAG <i
                        className="font-madefor-display">[2.0 / 2.1 / 2.2 - select relevant option]</i> guidelines, and
                        have made the site accessible to the level of <i className="font-madefor-display">[A / AA / AAA
                            - select relevant option]</i>. This site{"'"}s contents have been adapted to work with
                        assistive technologies, such as screen readers and keyboard use. As part of this effort, we have
                        also <i className="font-madefor-display">[remove irrelevant information]:</i>
                    </p>

                    <ul className="list-disc ml-10">
                        <li>
                            <p className="font-madefor-display">Used the Accessibility Wizard to find and fix potential
                                accessibility issues</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Set the language of the site</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Set the content order of the site’s pages</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Defined clear heading structures on all of the site’s
                                pages</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Added alternative text to images</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Implemented color combinations that meet the required
                                color contrast</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Reduced the use of motion on the site</p>
                        </li>
                        <li>
                            <p className="font-madefor-display">Ensured all videos, audio, and files on the site are
                                accessible</p>
                        </li>
                    </ul>
                </div>

                <div className="mb-20">
                    <h6 className="mb-3">Declaration of partial compliance with the standard due to third-party
                        content <i>[only add if relevant]</i></h6>
                    <p className="font-madefor-display">The accessibility of certain pages on the site depend on
                        contents that do not belong to the organization, and instead belong to <i
                            className="font-madefor-display">[enter relevant third-party name]</i>. The following pages
                        are affected by this: <i className="font-madefor-display">[list the URLs of the pages]</i>. We
                        therefore declare partial compliance with the standard for these pages.
                    </p>
                </div>

                <div className="mb-20">
                    <h6 className="mb-3">
                        Accessibility arrangements in the organization <i>[only add if relevant]</i></h6>
                    <i className="font-madefor-display">[Enter a description of the accessibility arrangements in the physical offices / branches of your site{"'"}s organization or business. The description can include all current accessibility arrangements  - starting from the beginning of the service (e.g., the parking lot and / or  public transportation stations) to the end (such as the service desk, restaurant table, classroom etc.). It is also required to specify any additional accessibility arrangements, such as disabled services and their location, and accessibility accessories (e.g. in audio inductions and elevators) available for use].
                    </i>
                </div>

                <div className="mb-20">
                    <h6 className="mb-3">Requests, issues, and suggestions</h6>
                    <p className="font-madefor-display mb-5">If you find an accessibility issue on the site, or if you
                        require further assistance, you are welcome to contact us through the organization{"'"}s
                        accessibility coordinator:
                    </p>
                    <ul className="list-disc ml-10">
                        <li>
                            <i className="font-madefor-display">[Name of the accessibility coordinator]</i>
                        </li>
                        <li>
                            <i className="font-madefor-display">[Telephone number of the accessibility coordinator]</i>
                        </li>
                        <li>
                            <i className="font-madefor-display">[Email address of the accessibility coordinator]</i>
                        </li>
                        <li>
                            <i className="font-madefor-display">[Enter any additional contact details if relevant / available]</i>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}