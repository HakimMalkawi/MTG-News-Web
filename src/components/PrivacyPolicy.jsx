import { useEffect, useRef, memo } from "react"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Back from "./Back"
import "../styles/privacy-policy.css"

const PrivacyPolicy = props => {
    const { setMenu, language, id } = props

    const privacyPolicy = useRef(null)
    
    const classNamesForToggle = [privacyPolicy, "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle) )

    return  <>  <main ref={privacyPolicy} aria-label="Our Privacy Policy" className="privacy-policy-container">
                <h1>Privacy Policy & GDPR Disclaimer<br/>(Last Updated 20th March 2021)</h1>
                    <div>
                        <p>
                            <strong>1. Content:</strong>

                            <br/><br/>

                            <strong>M. Target Group</strong> and its’ associated companies reserve the right not to be responsible for the topicality, correctness, completeness, or quality of the information provided. Liability claims regarding damage caused using any information provided, including any kind of information which is incomplete or incorrect, will therefore be rejected.
                        </p>

                        <br/><hr/><br/>
                        
                        <p>
                            <strong>2. GDPR Disclaimer:</strong>

                            <br/><br/>

                            <strong>M. Target Group</strong> is strongly committed to protecting the privacy of personal data, and maintaining it for clients, candidates, employees, and other individuals. As part of this commitment to privacy, <strong>M. Target Group</strong> is regularly reviewing its data protection practices complying with applicable laws, industry standards and best practices.

                            <br/><br/>

                            As a result of the General Data Protection Regulation (GDPR) entered into force as of 25th May 2018, as well as other regulations impacting privacy, if for any reason you do not wish that we possess and process your personal data for any such purposes which includes profiling to the extent that it is related either to direct marketing material or such as processing credentials for the consideration of future job opportunities as well as processing personal information for the purpose of servicing a specified request, which ever may arise, please feel free to notify <strong>M. Target Group</strong> so that the erasure of all your personal data from the companies files is complete without undue delay.

                            <br/><br/>

                            Any personal client, candidate, employee, or other individual’s data is protected in all stages of data processing and it is kept by <strong>M. Target Group</strong> under the strict requirements emanating from the General Data Protection Regulation (GDPR). Said data shall not be used for any other purposes, apart from the one associated with your request. Personal data will be safely kept, under strict confidentiality, and it will be erased as soon as it is no longer needed in relation to the requested services.
                        </p>

                        <br/><hr/><br/>

                        <p>
                            <strong>3. Revisions to This Privacy Policy:</strong>

                            <br/><br/>

                            <strong>M. Target Group</strong> reserves the right to change this Privacy Policy from time to time. Please check the Privacy Policy frequently and particularly before you submit additional personal information via the website. All revisions of this Privacy Policy will be posted on the website via a link from the homepage. <strong>M. Target Group</strong> also displays the effective date of the Privacy Statement on the top of this page.
                        </p>

                        <br/><hr/><br/>

                        <p>
                            <strong>4. Categories of Personal Information That M. Target Group Collects:</strong>
                        </p>

                        <br/>

                        <ul>
                            <li>
                                Information you provide to the company by filling out the forms that are initially requested from you (i.e., contact details and other information to confirm your identity and your communications with us including your name, home phone, mobile phone, home address and email address.)
                            </li>

                            <li>
                                Information you provide to the company when you submit your consent or when you report a problem through the website.
                            </li>

                            <li>
                                Information provided by you in case you contact <strong>M. Target Group</strong> (i.e. your general communications, including emails, and phone calls.)
                            </li>
                        </ul>

                        <hr/><br/>

                        <p>
                            <strong>5. What About Personal Data Security?</strong>

                            <br/><br/>

                            <strong>M. Target Group</strong> has put appropriate technical and organizational security policies and procedures in place to protect personal data (including sensitive personal data) from loss, misuse, alteration or destruction. <strong>M. Target Group</strong> aims to ensure that access to your personal data is limited only to those who need to access it. Those individuals who have access to the data are required to maintain the confidentiality of such information. Security measures may consist of pseudonymization, de-identification and other appropriate anonymization techniques in an effort to further protect personal data. Please be aware that the transmission of data via the internet is not completely secure. Whilst <strong>M. Target Group</strong> does it’s best to try to protect the security of your personal data, it cannot ensure or guarantee the security of your data transmitted to our site; any transmission is at your own risk.
                        </p>

                        <br/><hr/><br/>

                        <p>
                            <strong>6. How Long Does M. Target Group Retain Personal Data?</strong>

                            <br/><br/>

                            <strong>M. Target Group</strong> retains personal data to provide it’s services, stay in contact with you and to comply with applicable laws, regulations and professional obligations that <strong>M. Target Group</strong> is subjected to. <strong>M. Target Group</strong> retains personal data for as long as it has a legitimate business purpose to do so and where a specific legal, regulatory or contractual requirement applies. <strong>M. Target Group</strong> will dispose of personal data in a secure manner when it is no longer needed or required.
                        </p>

                        <br/><hr/><br/>

                        <p>
                            <strong>7. Does The M. Target Group Link To Other Websites?</strong>

                            <br/><br/>

                            The <strong>M. Target Group</strong> website may contain links to other sites, including sites maintained by other organization and firms that are not governed by this Privacy Statement. Please review the destination websites’ privacy statements before submitting personal data on those sites. Whilst <strong>M. Target Group</strong> tries to link only to sites that share high standards and respect for privacy, <strong>M. Target Group</strong> is not responsible for the content, security, or privacy practices employed by other sites.
                        </p>
                    </div>
                    <Back 
                        setShowState={setMenu} 
                        language={language}
                        className="all"
                        classNamesForToggle={classNamesForToggle} 
                        id={id} />
                </main> </> }

export default memo(PrivacyPolicy)