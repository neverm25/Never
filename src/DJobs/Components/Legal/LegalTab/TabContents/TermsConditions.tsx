/* eslint-disable react/no-unescaped-entities */
// #Global Imports
import React from "react";
// #endGlobal Imports

// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic";
import {
  BoldFontContainer,
  LegalMainContainer,
  LegalSubHeadingContainer,
  LinkTagContainer,
  ListItem,
  NormalFontContainer,
  OrderList,
  UnOrderList,
} from "./style/TabContentStyle";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
// #endregion Local Imports

export const TermsConditions = () => {
  return (
    <LegalMainContainer>
      <DJobsTypography styleName="djLegalHeading" color="blue100">
        Terms & Conditions
      </DJobsTypography>
      <LegalSubHeadingContainer>
        <DJobsTypography styleName="djLegalSubHeading" color="blue100">
          DITTO JOBS’ TERMS AND CONDITIONS OF PLATFORM USE AND SERVICES
        </DJobsTypography>
      </LegalSubHeadingContainer>
      <div style={{ fontSize: "14px", fontFamily: "Montserrat" }}>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            marginBottom: "10px",
          }}
        >
          By accessing or using{" "}
          <a
            href="http://www.ditto.jobs/"
            style={{ textDecoration: "underline" }}
          >
            www.ditto.jobs
          </a>{" "}
          or any of its related blogs, websites, applications or platforms
          (collectively, “the Platform”), owned by <b> Ditto Jobs (Pty) Ltd.</b>{" "}
          (reg: 2015/372082/07)(“<b> Ditto Jobs </b>”) or any of its Services,
          you agree that you have read, understood and agree to be bound to the
          terms and conditions contained herein (“ <b>Terms</b> ”), in
          conjunction with any additional Ditto Jobs terms particularly
          applicable to you and the Services you utilise. All rights in and to
          the content of the Platform remain at all times expressly reserved by
          Ditto Jobs.
          <br />
          <br />
          Please see Ditto Jobs’ distinct sections on{" "}
          <LinkTagContainer href={DJOBS_ROUTES.legalPrivacy}>
            {" "}
            Privacy
          </LinkTagContainer>
          and{"    "}
          <LinkTagContainer href={DJOBS_ROUTES.legalTerms}>
            Disclaimers & Indemnities.
          </LinkTagContainer>
        </div>
        <div
          style={{
            width: "70%",
            border: "1px solid black",
            padding: "10px",
            margin: "20px 0px",
          }}
        >
          <span style={{ fontWeight: "500" }}>
            Please pay specific attention to the BOLD paragraphs of the Ditto
            Jobs Terms. These paragraphs limit the risk or liability of Ditto
            Jobs, constitutes an assumption of risk or liability by you, impose
            an obligation by you to indemnify Ditto Jobs or is an
            acknowledgement of any fact by you.
          </span>
        </div>
        <BoldFontContainer>
          <UnOrderList>
            <li>
              Please read these terms carefully before accessing or using the
              Platform or Services. Ditto Jobs will assume you have read and
              understood these terms should you continue to access or make use
              of the Platform and/or Services.
            </li>
            <li>
              By using the Platform and/or Services, you warrant that you have
              carefully read and understood these Ditto Jobs Terms, and have
              familiarized yourself with all the information provided to you
              about our Services and Platform and agree to all stated conditions
              set forth in these Terms.{" "}
            </li>
            <li>
              You further understand and agree that these Terms also contain a
              release of liability in Ditto Jobs’ favour, and that you accept
              these Terms of your own free will. These Terms are binding on your
              heirs, dependents, legal representatives and assigns.
            </li>
            It is important to note the following:
            <NormalFontContainer>
              <li>
                The terms " <b>user</b> ", “ <b>you</b> ", “ <b>user</b>” and "
                <b>your</b>" are used interchangeably in these Terms and refer
                to all persons accessing the Platform or using the Services for
                any reason whatsoever. Accordingly, the terms" <b>us</b> ", “
                <b>our</b>” or “<b>we</b>” refers to Ditto Jobs or its
                possession.
              </li>
              <li> Not all terms are necessarily defined in order</li>
              <li> These terms were last updated on 12 April 2021.</li>
              <li>
                ATS Users are recruiter clients of ours who make use of our full
                suite of our Platform’s and other Services (also known as “{" "}
                <b> the Customer</b>”). Their use of the Services is subject to
                these Terms, as well as the additional{" "}
                <LinkTagContainer href={DJOBS_ROUTES.legalTerms}>
                  {" "}
                  ATS Terms.
                </LinkTagContainer>
              </li>
              <li>
                Candidate Users are users who can search for, view and apply to
                job postings available on the Platform, as well as submit their
                profiles to their own ATS Users who may then disseminate that
                information to Ditto Jobs, Ditto Hire and/or other authorised
                job portals.{" "}
              </li>
            </NormalFontContainer>
          </UnOrderList>
        </BoldFontContainer>
      </div>
      <OrderList>
        <ListItem>
          <b>INTRODUCTION TO THE PLATFORM AND SERVICES</b>
          <OrderList>
            <ListItem>
              Ditto Jobs provides a recruitment platform providing various
              Platform-as-a-Service software services, including but not limited
              to allowing ATS Users the ability to create and manage their own
              job placements and opportunities as well as receive and manage
              feedback when Candidate Users have activated these opportunities
              on associated job placement websites. Further, Candidate Users can
              also upload their qualifications and CVs to the Platform to build
              a personal profile which can be reviewed by other users who wish
              to engage the candidate for employment and/or other transactions.
              Ditto Jobs and the Platform provides its various PaaS Services as
              tools for the users to privately and easily engage with each other
              and manage recruitment opportunities (collectively, the “{" "}
              <b>Service/s</b>”).{" "}
            </ListItem>
            <ListItem>
              These Terms explain the conditions applicable to how users must
              make use of the Platform and the core provisions applicable to a
              user’s use of any Services derived from Ditto Jobs. Depending on
              the exact Services used, a user may also need to conclude
              additional agreements/terms with Ditto Jobs, which
              agreements/terms will contain more specific details and/or
              conditions relating to the exact Service acquired, including exact
              services and fees to be expected.
              <OrderList>
                <ListItem>
                  {" "}
                  <b>
                    ATS Users are also subject to the{" "}
                    <LinkTagContainer href={DJOBS_ROUTES.legalTerms}>
                      ATS Terms
                    </LinkTagContainer>
                    , dictating their use of the Services as well as the Fees
                    applicable.
                  </b>
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              The Platform and these Terms are subject to change without notice.
              These Terms are updated or amended from time to time and will be
              effective upon Ditto Jobs uploading the amended Terms (including
              the{" "}
              <LinkTagContainer href={DJOBS_ROUTES.legalTerms}>
                ATS Terms
              </LinkTagContainer>
              ) to the Platform. Your continued access or use of the Platform
              constitutes your acceptance to be bound by the Terms, as amended.
              It is therefore your responsibility to read these Terms
              periodically to ensure you are aware of any changes.
            </ListItem>
            <ListItem>
              Unauthorised use of the Platform may give rise to a claim for
              damages and/or be a criminal offence.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> RELATIONSHIP BETWEEN THE PARTIES </b>
          <BoldFontContainer>
            <OrderList>
              <ListItem>
                www.ditto.jobs is a web service which carries job advertisement
                and CV content independently published by third parties on the
                Ditto Jobs Platform. Ditto Jobs is not involved in the
                recruitment process and must not be considered to be a recruiter
                and/or employer with respect to the use of the Platform. Ditto
                Jobs shall not be responsible for any user entering into
                agreements or making decisions of whatever nature in connection
                with the posting of jobs, CV and/or the contents thereof and/or
                any other information obtained on the Platform.{" "}
              </ListItem>
              <ListItem>
                All negotiation, engagement and transaction occurring between
                users in relation to any such possible employment or contracting
                between them has nothing to do with Ditto Jobs, and is
                exclusively the liability and responsibility of the those
                privately engaging users.
              </ListItem>
              <ListItem>
                Your use of the Platform, the tools thereon or the Services is
                entirely at your own risk and based on your own volition and
                expertise.
              </ListItem>
            </OrderList>
          </BoldFontContainer>
        </ListItem>
        <ListItem>
          <b> PRIVACY AND EXCHANGE OF PERSONAL INFORMATION</b>
          <OrderList>
            <ListItem>
              Ditto Jobs takes the processing of your personal information very
              seriously and does so in accordance with not just the South
              African Protection of Personal Information Act, 2013 (“{" "}
              <b>POPI</b>” - as amended).
            </ListItem>
            <ListItem>
              You should carefully read our full{" "}
              <LinkTagContainer href={DJOBS_ROUTES.legalTerms}>
                {" "}
                Privacy Policy
              </LinkTagContainer>{" "}
              before using the Platform as it is hereby incorporated into this
              Agreement by reference, and governs our treatment of any
              information, including personally identifiable information you
              submit to Ditto Jobs.{" "}
            </ListItem>
            <ListItem>
              Please note that certain information, statements, data, and
              content (such as photographs) which you may submit to Ditto Jobs
              are likely to reveal your gender, ethnic origin, nationality, age,
              and/or other personal information about you. You acknowledge that
              your submission of any information, statements, data, and content
              to us is voluntary on your part and that Ditto Jobs may process
              such information, within the terms of the Privacy Policy.
            </ListItem>
            <ListItem>
              Do not provide us with any personal information which is not
              yours, or which you have no lawful right to provide on another
              entity’s/person’s behalf. Do not provide us with the personal
              information of a minor in any way. Your failure to adhere to these
              provisions constitutes your immediate and material breach of these
              Terms.
            </ListItem>
            <ListItem>
              <b>
                Users understand and agree that should they upload their and/or
                a candidate’s personal information, including CVS and employment
                history to the Platform, that information will be shared with
                our authorised job placement portals and websites. Similarly,
                users who activate a job placement advert on another website,
                where such an advert is managed by our Services, the user’s
                information inputted on that third-party website will be
                forwarded to us for processing and management via our Platform
                and Services.
              </b>
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> USER REGISTRATION PROCESS </b>
          <OrderList>
            <ListItem>
              In order to make use of most of the Services, you must complete
              the necessary registration process detailed on the Platform and
              acquire a Profile. Each user shall have only one (1) Profile and
              agrees to provide accurate, current, and complete information
              during the registration process and to update such information as
              and when it changes.
            </ListItem>
            <ListItem>
              Ditto Jobs requires you to submit your full name, e-mail address,
              location, and phone number when registering a Profile. Users may
              then setup additional features of their Profile, depending on the
              exact Services acquired, as prompted by the Platform.
            </ListItem>
            <ListItem>
              To protect your privacy and security, the Platform takes
              reasonable steps to verify your identity by requiring a password
              together with your provided e-mail address in order to grant
              access to your Profile and data. To view or change your personal
              information provided, you can edit your Profile, edit your company
              Profile and/or request your password to be changed.
            </ListItem>
            <ListItem>
              By entering your personal information on the Platform, you warrant
              that the person using the Platform is you and/or you have the
              legal authority to act on behalf of a corporate entity. You are
              responsible for your Profile and all actions perpetrated therewith
              and thereon, and you should not share your log-in details or
              password with anyone.{" "}
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          THE SERVICES
          <OrderList>
            <ListItem>
              For further and exact information on the various Services
              currently offered by Ditto Jobs, or those specific to you, please
              consult the relevant help pages on the Platform or please contact
              <a
                href="support@ditto.jobs"
                style={{ textDecoration: "underline", margin: " 5px" }}
              >
                support@ditto.jobs
              </a>
              who will gladly assist. ATS Users must also review the
              <a
                style={{ textDecoration: "underline", margin: " 5px" }}
                href={DJOBS_ROUTES.legalTerms}
              >
                ATS Terms.{" "}
              </a>
              for further information on their available tools and functions
              using the Platform and Services.
            </ListItem>
            <ListItem>
              For general information purposes, and subject to further
              information relating to these Services made available by Ditto
              Jobs on the Platform or elsewhere, users can create job adverts,
              client records and candidate profiles using the easy-to-use tools
              on the Platform, and then maximise the dissemination of such
              information using our many linked authorised recruitment and job
              websites.
            </ListItem>
            <ListItem>
              Candidate users can also use the relevant parts and tools of
              Platform to create an employment/qualifications profile which
              houses the Candidate User’s various qualifications, CV and work
              experience. Candidate Users can also upload their work permits,
              copies of their ID and other documentation as prompted/allowed.
              Other users can then search through these profiles, and then
              subsequently engage with Candidate Users whom they so choose.
              Please bear in mind however, that Ditto Hire clients do not
              automatically have access to our entire candidate database. Only
              once a candidate submits their profile to a company or applies for
              a specific company’s job, will the client receive access to the
              candidate’s information.{" "}
            </ListItem>
            <ListItem>
              Users are solely responsible for any and all information they
              provide to Ditto Jobs/the Platform in creating their profile,
              which they warrant to Ditto Jobs as being true and correct in
              every regard.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> FEE FOR DITTO JOBS’ SERVICES</b>
          <OrderList>
            <ListItem>
              Ditto Jobs’ services that facilitate applications for employment
              are free of charge (including actions done by Candidate Users),
              where only ATS Users using our full suite of management software
              Services will be charged a transaction fee that is payable at the
              execution of the transaction (“ <b>Fee</b>”).{" "}
            </ListItem>
            <ListItem>
              Your telephone or cellular service provider will charge all
              telephone calls that you make to Ditto Hire telephony-based
              facilities at their normal rates. The same applies for internet
              usage required to use the Platform.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b>USER RESPONSIBILITIES AND WARRANTIES</b>
          <OrderList>
            <ListItem>
              By using the Platform and/or the Services, you warrant that:
              <OrderList>
                <ListItem>
                  you have read and agreed to these Terms and will use the
                  Platform and Services in accordance with them;
                </ListItem>
                <ListItem>
                  all information you provide to the Platform and/or Ditto Jobs
                  is true and accurate in every respect, recognising that
                  furnishing false employment or qualifications information is a
                  criminal offence under South African law;
                </ListItem>
                <ListItem>
                  <b>
                    you understand and agree that Ditto Jobs is not a regulated
                    advisory, educational, payments service provider, nor labour
                    broker or recruiter, and you take all responsibility for the
                    decisions you make via the Platform and/or Services;
                  </b>
                </ListItem>
                <ListItem>
                  you are above the age of 18 (eighteen) years old and have the
                  legal capacity to understand, agree with and be bound with
                  these Terms;
                </ListItem>
                <ListItem>
                  you lawfully possess and submit all information to the
                  Platform and/or Ditto Jobs for the use of it or the Services;
                </ListItem>
                <ListItem>
                  you will only ever provide correct and true job adverts
                  reflecting a real available position, and never use the
                  Services, Platform or Ditto Hire platform for fake or scam
                  positions/opportunities which do not actually exist or have
                  features different to those actually advertised. We reserve
                  the right to remove any such fake, suspicious or fictitious
                  advert or Profile associated to such actions, even on the
                  basis of a reasonable suspicion of such actions occurring;
                </ListItem>
                <ListItem>
                  you will make us aware of any suspicious, criminal or
                  dishonest job postings or Profiles you come across on the
                  Platform or the associate Ditto Hire platform;
                </ListItem>
                <ListItem>
                  you will not post, upload, replicate or transmit any abusive
                  content on the Platform that is or could reasonably be
                  considered to be threatening, harassing, defamatory, abusive,
                  racist, sexist, discriminatory, in breach of confidence, in
                  breach of privacy or restrict any user in any way from
                  properly using the Platform;
                </ListItem>
                <ListItem>
                  you will not send any unsolicited electronic messages or use
                  any software, routine or device to interfere or attempt to
                  interfere electronically or manually with the operation or
                  functionality of the Platform including but not limited to
                  uploading or making available files containing corrupt data or
                  viruses via whatever means or deface, alter or interfere with
                  the front end ‘look and feel’ of the Platform or the
                  underlying software code;
                </ListItem>
                <ListItem>
                  you will not use any device, software or routine or the like
                  to interfere or attempt to interfere with the proper working
                  of the Platform or take any action that imposes an
                  unreasonable or disproportionately large load on the Platform
                  infrastructure;
                </ListItem>
                <ListItem>
                  you will not access the Platform by any means other than
                  through the interface that is provided by Ditto Jobs or
                  attempting to access the Platform without first logging in
                  through the Platform login page;
                </ListItem>
                <ListItem>
                  you will not copy, reproduce, alter, modify, creating
                  derivative works, or publicly display any content from the
                  Platform without Ditto Jobs’ prior written permission;
                </ListItem>
                <ListItem>
                  you will not reverse assemble or otherwise attempt to discover
                  any source code relating to the Platform or any tool and
                  function therein, except to the extent that such activity is
                  expressly permitted by applicable law;
                </ListItem>
                <ListItem>
                  you will not access data not intended for you or log into a
                  server or account which you are not authorized to access;
                </ListItem>
                <ListItem>
                  you will not attempt to probe, scan or test the vulnerability
                  of a Ditto Jobs system or network or to breach security or
                  authentication measures without proper authorization;
                </ListItem>
                <ListItem>
                  you will not “scrape” nor copy any information from the
                  Platform or Ditto Jobs for any use or replication on any other
                  website or for any other purpose;
                </ListItem>
                <ListItem>
                  you will not attempt to interfere with the service to any
                  user, host or network, including, without limitation, via
                  means of submitting a virus to the Platform, overloading,
                  "flooding", "spamming", "mail bombing" or "crashing", sending
                  and/or posting unsolicited email, including promotions;{" "}
                </ListItem>
                <ListItem>
                  you will not advertise content, products or services without
                  our prior written permission;
                </ListItem>
                <ListItem>
                  you will not forge any TCP/IP packet header or any part of the
                  header information in any email or newsgroup;
                </ListItem>
                <ListItem>
                  you will not post, delete or revise any material posted by any
                  other person or entity, using any device, software or routine
                  to interfere or attempt to interfere with the proper working
                  of the Platform or any activity being conducted on the
                  Platform;
                </ListItem>
                <ListItem>
                  <b>
                    you will not infringe the intellectual property or other
                    rights of any third party or the Platform or transmit
                    content that the user does not own or does not have the
                    right to publish or distribute;
                  </b>
                </ListItem>
                <ListItem>
                  you will not use the Platform for any commercial purpose other
                  than as expressly provided for by Ditto Jobs herein;
                </ListItem>
                <ListItem>
                  you will not use the Platform to breach any applicable law or
                  regulation or perform or encourage any illegal activity
                  including (without limitation) promoting or facilitating money
                  laundering or financial crimes; and/or
                </ListItem>
                <ListItem>
                  you will not facilitate or assist any third party to do any of
                  the above, <br />
                  failing which, your failure will automatically deemed to be a
                  material breach of these Terms, allowing Ditto Jobs to use its
                  full spectrum of rights available to it against the infringing
                  party, including reporting you to the authorities, denying you
                  access to or use of any Service or the Platform and/or
                  claiming contractual (including consequential) damages from
                  you.
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              The Platform is only available on compatible devices connected to
              the internet. It is your responsibility to obtain these devices
              and any data network access necessary to utilise the Platform. The
              network’s data and messaging rates and fees may apply if you use
              the Platform and you shall be responsible for such rates and fees.{" "}
            </ListItem>
            <ListItem>
              <b>
                Without prejudice to any of Ditto Jobs’ other rights (whether at
                law or otherwise), Ditto Jobs reserves the right to deny you
                access to the Platform or the Services where Ditto Jobs believes
                (in its reasonable discretion) that you are in breach of any of
                these Terms.
              </b>
            </ListItem>
            <ListItem>
              <b>
                Ditto Jobs does not guarantee that the Platform, or any portion
                thereof, will function on any particular hardware or device.
              </b>
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> ADDITIONAL TERMS APPLICABLE TO CANDIDATES /JOB SEEKERS</b>
          <OrderList>
            <ListItem>
              <b>
                You indemnify Ditto Jobs against all claims, actions, suits,
                liabilities, costs and expenses incurred on any account as a
                result of the listing or intended listing of any résumé by you
                on www.ditto.jobs, or any related site. For clarity, this
                includes any claims that may arise out of any user’s creation
                and/or dissemination of any fake or scam placements/adverts.
              </b>
            </ListItem>
            <ListItem>
              Ditto Jobs makes every effort to ensure that Applicant Data is
              treated in the strictest confidence, however, you will not hold
              Ditto Jobs responsible if your résumé was unlawfully copied from
              the Ditto Jobs Platform through nefarious means and/or distributed
              without consent, or if a Profile was registered on your behalf.
            </ListItem>
            <ListItem>
              Recruiters cannot log into the Ditto Jobs Platform to view
              Candidates. A Candidate User’s data will only be sent to a Ditto
              Hire ATS User if the Candidate submits their Profile or applies to
              that ATS User’s job. Ditto Jobs reserves the right to either
              reject or remove any résumé from its Platform/s for any reason
              whatsoever. Candidates also have the ability to remove their data
              from our Platform which will also remove any client users’ access
              to the candidate profile when logging into Ditto Hire.
            </ListItem>
            <ListItem>
              You agree to present yourself truthfully in your résumés on Ditto
              Jobs.
            </ListItem>
            <ListItem>
              Ditto Jobs makes every effort to deliver applications to vacancies
              in the shortest possible time. You will however not hold Ditto
              Jobs liable for any loss or damage as a result of any failure or
              delay in the delivery of an application for employment to an
              Advertiser.
            </ListItem>
            <ListItem>
              You agree, at all times, to deal with any information or products
              provided by Ditto Jobs in a manner which abides by all applicable
              laws of South Africa, or of any other relevant jurisdiction
              (including, without limitation, privacy and copyright laws).
            </ListItem>
            <ListItem>
              Ditto Jobs and its associates at all times limit their liability
              to the re-supply, where possible, of services not properly
              rendered; and where the re-supply of the service is not possible,
              to the refund of moneys paid for such services.{" "}
            </ListItem>
            <ListItem>
              Ditto Jobs will not be liable under this paragraph where the
              failure to render services properly is attributable partially or
              wholly to your actions or omissions.
            </ListItem>
            <ListItem>
              You may not assign or transfer your rights and obligations to any
              other person without Ditto Jobs’ prior written approval (which
              will not be unreasonably withheld).
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> RECEIPT AND TRANSMISSION OF DATA MESSAGES</b>
          <OrderList>
            <ListItem>
              Data messages, including email messages, sent by you to Ditto Jobs
              will be considered to be received only when acknowledged or
              responded to.
            </ListItem>
            <ListItem>
              Data messages sent by Ditto Jobs to you will be regarded as
              received when the complete data message enters an information
              system designated or used for that purpose by the recipient and is
              capable of being retrieved and processed by the recipient.
            </ListItem>
            <ListItem>
              Ditto Jobs reserves the right not to respond to any email or other
              data message which contains obscene, threatening, defamatory or
              otherwise illegal, unlawful or inappropriate content, and to take
              appropriate action against the sender of such email or data
              message where necessary.
            </ListItem>
            <ListItem>
              Messages sent over the internet cannot be guaranteed to be
              completely secure as they can be intercepted, lost or corrupted.
              Ditto Jobs is therefore not responsible for the accuracy or safety
              of any message sent by email or automated systems over the
              internet, whether from Ditto Jobs to a user, between users or from
              a user to Ditto Jobs.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> HYPERLINKS, DEEP LINKS, FRAMING</b>
          <OrderList>
            <ListItem>
              The Platform may include links to other internet sites ("{" "}
              <b>the other sites</b>"), which may include other job portal sites
              and External Feeder Partners. Ditto Jobs does not own or endorse
              the other sites and is not responsible for the information,
              material, products or services contained on or accessible through
              the other sites. Any such hyperlinks do not imply any endorsement,
              agreement on or support of the content or products of such target
              sites.
            </ListItem>
            <ListItem>
              Ditto Jobs does not purport to own the content on other sites
              which may be shown on the Platform. Should the owner of any
              content showcased on the Platform want the content to be removed,
              please write to{" "}
              <LinkTagContainer href="mailto:support@ditto.jobs">
                support@ditto.jobs
              </LinkTagContainer>{" "}
              to request the removal of such content.
            </ListItem>
            <ListItem>
              The user’s access and use of the other sites remain solely at the
              user’s own risk and on the terms set by the relevant third-party
              operator of the other sites.{" "}
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> ADVERTISING AND SPONSORSHIP</b>
          <OrderList>
            <ListItem>
              The Platform may contain advertising and sponsorship. Advertisers
              and sponsors are responsible for ensuring that material submitted
              for inclusion in the Platform complies with all applicable laws
              and regulations.
            </ListItem>
            <ListItem>
              Ditto Jobs, its members, employees, suppliers, partners,
              affiliates and agents accordingly exclude, to the maximum extent
              permitted in law, any responsibility or liability for any error or
              inaccuracy appearing in advertising or sponsorship material.
            </ListItem>
            <ListItem>
              For clarity, our Ditto Jobs website will show:
              <OrderList>
                <ListItem>
                  Ditto Hire jobs created by our ATS Users; and
                </ListItem>
                <ListItem>
                  External job ads from external third-party job portals.
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              We may also show advertisements from advertising networks such as
              Google AdSense and Google AdX, as well as sourcing advertising
              from our own media clients.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b>INTELLECTUAL PROPERTY PROTECTION </b>
          <OrderList>
            <ListItem>
              All Platform layout, content, material, information, data,
              software, icons, text, graphics, images, sound clips,
              advertisements, video clips, user interface design, trade names,
              logos, trademarks, designs, copyright and/or service marks
              (whether registered or un-registered), together with the
              underlying software code and everything submitted by a user to the
              Platform and Ditto Jobs in use of the Services, (“{" "}
              <b>the intellectual property</b>”) are owned (or co-owned or
              licenced, as the case may be) by Ditto Jobs, its shareholders,
              associates and/or partners, whether directly or indirectly, and as
              such, are protected from infringement by domestic and
              international legislation and treaties.{" "}
              <OrderList>
                <ListItem>
                  For clarity, all rights to any intellectual property provided
                  by a user to the Platform will remain with the user, but for
                  which the user has provided Ditto Jobs with a non-exclusive,
                  non-transferable licence to use such user intellectual
                  property as Ditto Jobs deems fit on the Platform and/or in
                  advertising, for as long as the user remains registered on the
                  Platform.
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              <b>
                Subject to the rights afforded to you in these terms, all other
                rights to all intellectual property and content on the Platform
                are expressly reserved. You may not copy, download, print,
                modify, alter, publish, broadcast, distribute, sell, or transfer
                any intellectual property, editorial content, multi-media
                content, graphics or other material on the website or the
                underlying software code whether in whole or in part, without
                the written consent of Ditto Jobs first being granted (through a
                content use-license or otherwise), which consent may be refused
                at the discretion of Ditto Jobs. No modification of any
                intellectual property or editorial content or graphics is
                permitted. Should you breach these provisions, Ditto Jobs and/or
                the rightful intellectual property rights owner may launch legal
                proceedings against you for a breach of contract, resulting in
                (amongst other things) a claim of damages being brought against
                you.
              </b>
            </ListItem>
            <ListItem>
              Ditto Jobs reserves the right to make improvements or changes to
              the intellectual property, information, artwork, graphics, and
              other materials on the Platform or to suspend or terminate the
              Platform, at any time on reasonable notice to you; provided that
              any transactions or functions already concluded through the
              Platform, will not be affected by such suspension or termination
              (as the case may be).{" "}
            </ListItem>
            <ListItem>
              Where any of the Platform intellectual property has been licensed
              to Ditto Jobs or belongs to any third party, other than that which
              has been submitted by a user to the Platform in the use of the
              Services, all rights of use will also be subject to any terms and
              conditions which that licensor or third party imposes from time to
              time, and you agree to comply with such third party terms and
              conditions.
            </ListItem>
            <ListItem>
              Subject to adherence to the Terms, Ditto Jobs grants to users a
              personal, non-exclusive, non-assignable and non-transferable
              license to use and display all content and information contained
              on the Platform on any machine which the user is the primary user.
              <b>
                {" "}
                However, nothing contained on the Platform or in these Terms
                should be construed as granting any licence or right to use any
                intellectual property without the prior written permission of
                Ditto Hire.
              </b>{" "}
            </ListItem>
            <ListItem>
              Any enquiries regarding any of the above relating to intellectual
              property must be directed to Ditto Hire at info@ditto.jobs
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> DISCLAIMERS AND LIMITATIONS OF LIABILITY</b>
          <OrderList>
            <ListItem>
              <b>
                Neither Ditto Jobs nor any of our subsidiaries, affiliated
                companies, suppliers, employees, shareholders, or directors
                ("Ditto Jobs Affiliates") shall be cumulatively liable for any
                special, incidental, indirect, punitive, or consequential
                damages or loss of use, profit, revenue or data to you or any
                third person arising from your use of the Services, or any of
                the content or other materials on, accessed through or
                downloaded from Ditto Jobs and/or the Platform.
              </b>
              <OrderList>
                <ListItem>
                  This limitation of liability is part of the basis of the
                  bargain between the parties and without it the terms and
                  prices charged would be different.{" "}
                </ListItem>
                <ListItem>
                  This limitation of liability shall apply regardless of whether
                  you base your claim on contract, tort, statute or any other
                  legal theory.
                </ListItem>
                <ListItem>
                  This limitation of liability shall not apply to any damage
                  that Ditto Jobs may cause you intentionally or knowingly in
                  violation of this Agreement or applicable law, or as otherwise
                  mandated by applicable law that cannot be disclaimed in this
                  Agreement.
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              <b>
                The Platform and Services, including any intellectual property
                appearing therein, are provided "as is" and "as available".
                Ditto Jobs makes no representations or warranties, express or
                implied, including but not limited to warranties as to the
                accuracy, correctness or suitability of either the Platform or
                the Services.
              </b>
            </ListItem>
            <ListItem>
              All information or opinions of users made available on the
              Platform in relation to any of the Services are those of the
              authors and not Ditto Jobs. While Ditto Jobs makes every
              reasonable effort to present such information accurately and
              reliably on the Platform, Ditto Jobs does not endorse, approve or
              certify such information, nor guarantee the accuracy or
              completeness of such information on the Platform.
            </ListItem>
            <ListItem>
              Ditto Jobs takes reasonable security measures to ensure the safety
              and integrity of the Platform and to exclude viruses, unlawful
              monitoring and/or access from the Platform. However, Ditto Jobs
              does not warrant or represent that your access to the Platform
              will be uninterrupted or error-free or that any information, data,
              content, software or other material accessible through the
              Platform will be free of bugs, viruses, worms, trojan horses or
              other harmful components.{" "}
              <b>
                The user’s access to and use of the Platform remains solely at
                the user’s own risk and the user should take their own
                precautions accordingly.
              </b>
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b>INDEMNITIES</b>
          <OrderList>
            <ListItem>
              <b>
                The user indemnifies and holds harmless Ditto Jobs, its
                shareholders, employees, and partners from any demand, action or
                application or other proceedings, including for attorneys’ fees
                and related costs such as tracing fees, made by any third party
                and arising out of or in connection with the user’s use of the
                Platform and/or Services offered or concluded through the
                Platform in any way.
              </b>
            </ListItem>
            <ListItem>
              <b>
                The user agrees to indemnify, defend and hold Ditto Jobs
                harmless from any direct or indirect liability, loss, claim and
                expense (including reasonable legal fees) related to the user’s
                breach of these Terms.
              </b>
            </ListItem>
            <ListItem>
              <b>This clause will survive termination of this agreement.</b>
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> COMPANY INFORMATION</b>
          <OrderList>
            <ListItem>
              <b> Site owner: </b>Ditto Jobs (Pty) Ltd.
            </ListItem>
            <ListItem>
              <b> Legal status: </b>For profit, limited liability
            </ListItem>
            <ListItem>
              <b> Registration number: </b>2015/372082/07
            </ListItem>
            <ListItem>
              <b> Directors: </b>L. Delport, C. Fourie, JC Van Niekerk
            </ListItem>
            <ListItem>
              <b> Description of main business:</b>Platform-as-a-Service
              software
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> DISPUTE RESOLUTION AND GOVERNING LAW</b>
          <OrderList>
            <ListItem>
              The user’s access and/or use of the Platform and/or Services, any
              downloaded material from it and the operation of these Terms
              (including any transaction/license concluded pursuant thereto)
              shall be governed by and construed in accordance with the laws of
              the Republic of South Africa only.{" "}
            </ListItem>
            <ListItem>
              Should any dispute, disagreement or claim arise between a user and
              Ditto Hire concerning use of the Platform or the Services, the
              parties shall endeavour to resolve the dispute amicably, by
              negotiation, and with the best interests of both parties in mind.
            </ListItem>
            <ListItem>
              Should the parties fail to resolve such dispute in the aforesaid
              manner or within such further period as the parties may agree to
              in their negotiation, the parties will approach an independent
              industry expert who shall mediate the discussion between them, for
              the purposes of finding a mutually beneficial solution.
            </ListItem>
            <ListItem>
              Notwithstanding the above, both parties consent to the
              non-exclusive jurisdiction of the High Court of South Africa,
              Gauteng North Division, Pretoria, even in the event where the
              quantum in the dispute may be less than the monetary jurisdiction
              of that court. Either party may also always use the dispute
              resolution services of any applicable legislative tribunal or
              Ombud, as provided for in applicable legislation.
            </ListItem>
            <ListItem>
              The parties both agree that in no circumstance will either party
              publicize the dispute on any social media or other public
              platform. The parties understand that any publicity of this nature
              can cause serious damage to the other party, which damage may
              result in a financial claim against the infringing party.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> TERMINATION OF USE OF PLATFORM OR SERVICES</b>
          <OrderList>
            <ListItem>
              <b>
                IN ADDITION TO ITS OTHER RIGHTS HEREIN, DITTO JOBS RESERVES THE
                RIGHT TO TERMINATE AND CANCEL YOUR USE OF THE PLATFORM, SERVICES
                AND OR ANY CONTENT USE-LICENSE IF YOU BREACH ANY OF THESE TERMS,
                OR{" "}
                <span style={{ textDecoration: "underline" }}>
                  FOR ANY OTHER REASON IN ITS SOLE DISCRETION
                </span>{" "}
                PROVIDED THAT DITTO HIRE GIVES REASONABLE NOTICE TO YOU.
              </b>
            </ListItem>
            <ListItem>
              Should you want to terminate your use of the Services and Platform
              as a Candidate User, simply deregister your Profile and we will
              delete all of your personal data on our system.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> FORCE MAJEURE</b>If Ditto Jobs is prevented from or hindered or
          delayed in performing any obligation under these Terms by reason of
          any circumstance beyond its reasonable control (including but not
          limited to, acts of god, medical pandemics, governmental restraints,
          strikes, labour disputes (other than strikes or labour disputes by its
          own staff), war, extreme weather, electrical/internet load-shedding,
          fire, flood, riot, sabotage and terrorism), it shall be excused
          performance to the extent affected by the circumstances concerned so
          long as it shall both give notice to any effected user, if applicable,
          of those circumstances promptly after they first affected performance
          and use all reasonable commercial endeavours to remove or avoid their
          cause or effect.
        </ListItem>
        <ListItem>
          <b> NOTICES AND SERVICE ADDRESS</b>
          <OrderList>
            <ListItem>
              Each of the parties chooses their service address for the purposes
              of the giving of any notice, the serving of any process and for
              any other purposes arising from these Terms as being:
              <OrderList>
                <ListItem>
                  in the case of Ditto Hire, at{" "}
                  <LinkTagContainer href="mailto:info@ditto.jobs">
                    info@ditto.jobs
                  </LinkTagContainer>{" "}
                  ; or
                </ListItem>
                <ListItem>
                  in the case of the user, at the e-mail and addresses provided
                  by the user to Ditto Jobs in their Profile
                  registration/subscription confirmation process, or otherwise.
                </ListItem>
              </OrderList>
            </ListItem>
            <ListItem>
              Each of the parties will be entitled from time to time, by written
              notice to the other to vary its service address to any other
              address which is not a post office box or poste restante, provided
              that the change will become effective only 14 (fourteen) days
              after service of the notice in question.
            </ListItem>
            <ListItem>
              otwithstanding the above, any notice given in writing in English,
              and actually received by the party to whom the notice is
              addressed, will be deemed to have been properly given and
              received, notwithstanding that such notice has not been given in
              accordance with this clause.
            </ListItem>
          </OrderList>
        </ListItem>
        <ListItem>
          <b> GENERAL</b>
          <OrderList>
            <ListItem>
              This document contains the entire agreement between the parties in
              relation to the subject matter hereof. Save as contemplated in
              clause 1.4 above, no alteration, cancellation, variation of, or
              addition hereto will be of any force or effect unless reduced to
              writing and signed by all the parties to these Terms or their duly
              authorised representatives.
            </ListItem>
            <ListItem>
              No indulgence, leniency or extension of time granted by Ditto Hire
              shall constitute a waiver of any of Ditto Jobs’ rights under these
              Terms and, accordingly, Ditto Jobs shall not be precluded as a
              consequence of having granted such indulgence, from exercising any
              rights against the user which may have arisen in the past or which
              might arise in the future.
            </ListItem>
            <ListItem>
              Words importing the singular will include the plural and vice
              versa. Words importing one gender will include the other genders,
              and words importing persons will include partnerships, trusts and
              bodies corporate, and vice versa.
            </ListItem>
            <ListItem>
              The headings to the paragraphs in the Terms are inserted for
              reference purposes only and will not affect the interpretation of
              any of the provisions to which they relate.
            </ListItem>
            <ListItem>
              Should you have any complaints or queries, kindly address an email
              to Ditto Jobs at{" "}
              <LinkTagContainer href="mailto:info@ditto.jobs">
                info@ditto.jobs
              </LinkTagContainer>{" "}
              of same.{" "}
            </ListItem>
            <ListItem>
              In the event of the user failing to pay any amount timeously or
              breaching these Terms, the user shall be liable for all legal
              costs (on the scale as between attorney and user) (including
              collection commission) which may be incurred by Ditto Hire in
              relation to the payment failure or breach.
            </ListItem>
            <ListItem>
              Each sentence, paragraph, term, clause and provision of these
              Terms and any portion thereof shall be considered severable and
              if, for any reason, any such sentence, paragraph, term, clause or
              provision is held to be invalid, contrary to, or in conflict with
              any applicable present or future law or regulation or in terms of
              a final, binding judgment issued by any court, it shall to that
              extent be deemed not to form part hereof and shall not impair the
              operation of, or have any effect upon such other sentence,
              paragraph, term, clause or provision hereof as may otherwise
              remain valid or intelligible, which shall continue to be given
              full force and effect and bind the parties hereto.
            </ListItem>
            <ListItem>
              No term or condition of these Terms is intended to breach any
              peremptory provisions of any consumer protection legislation and
              any regulations thereto (" <b>Prohibited Provision</b>"). Any
              breach of any such Prohibited Provision shall be governed by the
              provisions of clause 20.7.
            </ListItem>
          </OrderList>
        </ListItem>
      </OrderList>
    </LegalMainContainer>
  );
};
