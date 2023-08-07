// #Global Imports
import React from "react";
// #endGlobal Imports

// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic";
import {
  BoldFontContainer,
  LawfulBasisContainer,
  LegalMainContainer,
  LegalSubHeadingContainer,
  LinkTagContainer,
  ListItem,
  MainCondition,
  NormalFontContainer,
  OrderList,
  TableContainer,
  TableData,
  TableHeaderContainer,
  TableHeading,
  TableRow,
} from "./style/TabContentStyle";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
// #endregion Local Imports

export const PrivacyPolicy = () => {
  return (
    <LegalMainContainer>
      <DJobsTypography styleName="djLegalHeading" color="blue100">
        Privacy Policy
      </DJobsTypography>
      <LegalSubHeadingContainer>
        <DJobsTypography styleName="djLegalSubHeading" color="blue100">
          DITTO JOBS’ PRIVACY AND PERSONAL INFORMATION POLICY
        </DJobsTypography>
      </LegalSubHeadingContainer>
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Montserrat",
          marginBottom: "10px",
        }}
      >
        Ditto Jobs (Pty) Ltd. (reg: 2015/372082/07) (“ <b>Ditto Jobs</b> ”)
        adheres to the highest standards of protecting your personal information
        when we process it by virtue of your use of our Services, your use of
        our website
        <LinkTagContainer href={DJOBS_ROUTES.dittoWebpage}>
          {DJOBS_ROUTES.dittoWebpage}
        </LinkTagContainer>
        or any of its related blogs, websites, applications or platforms
        (collectively, “ <b>the Website</b>
        ”), or by providing us with your personal information in any other way
        (such as emailing us or telephoning us). As such, we have created this
        specific and detailed Privacy Policy for you to read and appreciate
        exactly how we safeguard your personal information and respect your
        privacy (“ <b> Policy</b>”).
      </div>
      <ul
        style={{
          fontFamily: "Montserrat",
        }}
      >
        <li>
          Please note that Ditto Jobs is a private limited liability company
          duly registered and operating in accordance with the laws of South
          Africa.
        </li>
        <li>
          For more information regarding your personal information lawfully
          stored or used by Ditto Jobs, please contact legal@dittohire.com who
          will gladly assist.
        </li>
        <li> Not all terms are necessarily defined in order.</li>
        <li>
          Please ensure that you read all the provisions below, and our other
          Ditto Jobs rules and policies which may apply from time to time and
          made available to you, to understand all of your, and our, rights and
          duties.
        </li>
        <li>
          Please use the following links to jump to the relevant sections
          described in this Privacy Policy:
          <BoldFontContainer>
            <MainCondition>
              <li> Important information and who we are</li>
              <li> The data we collect about you</li>
              <li> How is your personal data collected</li>
              <li> How we use your personal data</li>
              <li> Disclosures of your personal data</li>
              <li> International transfers</li>
              <li> Data security</li>
              <li> Data retention</li>
              <li> Your legal rights</li>
              <li> Glossary</li>
            </MainCondition>
          </BoldFontContainer>
        </li>
      </ul>
      <OrderList>
        <BoldFontContainer>
          <ListItem>
            Important information and who we are
            <NormalFontContainer>
              Purpose of this Privacy Policy:
              <OrderList>
                <ListItem>
                  This Privacy Policy aims to give you information on how Ditto
                  Jobs collects and processes your personal data through any
                  form of your engagement with Ditto Jobs such as your
                  engagement with us when contracting or corresponding with us,
                  when using our Services, accessing or using the Website, or
                  providing us with your personal information in any other way
                  (such as when participating in surveys, participating in
                  events or signing up for newsletters with Ditto Jobs).
                </ListItem>
                <ListItem>
                  This Privacy Policy complies with, and facilitates the
                  obligations required from, the South African Protection of
                  Personal Information Act, No. 4 of 2013 (“<b>POPI</b>”), as
                  amended.
                </ListItem>
                <BoldFontContainer>
                  <ListItem>
                    Users with citizenships from jurisdictions other than of
                    South Africa, please note that Ditto Jobs complies with all
                    South African data protection laws when processing your
                    personal information pursuant to the Services as we are a
                    South African entity operating in the South African market.
                    Should foreign law be applicable in any regard to your use
                    of the Services and/or the Website in any way, including how
                    we may process your personal information, please contact
                    Ditto Jobs at legal@dittohire.com who will gladly engage you
                    on its application and your rights.
                  </ListItem>
                </BoldFontContainer>
                <ListItem>
                  It is important that you read this Privacy Policy together
                  with any other privacy policy or fair processing notice we may
                  provide on specific occasions when we are collecting or
                  processing personal data about you, so that you are fully
                  aware of how and why we are using your data. This Privacy
                  Policy supplements the other notices and is not intended to
                  override them.
                </ListItem>
                <BoldFontContainer>
                  <ListItem>
                    We never intentionally request or process sensitive data or
                    the personal data of minors. Do not provide us with any such
                    personal data, where the provision of same will constitute
                    an immediate and automatic material breach of these terms.
                    If you are a candidate below the age of 18 (eighteen), you
                    may only provide us with your personal data on an express
                    and additional prior consent provided by your ward/parent to
                    Ditto Jobs.
                  </ListItem>
                </BoldFontContainer>
                <BoldFontContainer>
                  <ListItem>
                    Controller and Operator
                    <NormalFontContainer>
                      <OrderList>
                        <ListItem>
                          Ditto Jobs is the “Responsible Party” and is
                          responsible for your personal data in instances where
                          we decide the processing operations concerning your
                          personal data, and for the purposes and needs of Ditto
                          Jobs only.{" "}
                        </ListItem>

                        <ListItem>
                          We also operate as a “Operator” of personal data on
                          behalf of a third-party Responsible Party (such as our
                          corporate clients who provide us with candidate or
                          employment data from their own Responsible Parties),
                          where that Responsible Party’s privacy terms will
                          apply. Please consult the privacy policy of any such
                          parties to whom you may be providing your personal
                          data as their terms will apply as they are the
                          Responsible Party directing us to process your
                          personal data for their purposes.
                        </ListItem>
                        <ListItem>
                          We have appointed a data representative at Ditto Jobs
                          who is responsible for overseeing questions in
                          relation to this Privacy Policy. If you have any
                          questions about this Privacy Policy, including any
                          requests to exercise your legal rights, please contact
                          the representative using the details set out below.
                        </ListItem>
                        <ListItem>
                          We will not sell, rent, or lease your personally
                          identifiable information to other 3rd parties except
                          in the cases where a user registered as a job seeker
                          has responded to a job advert or when our recruiters
                          contact job seekers with job vacancies available.
                          Unless we have your permission or are required by law,
                          we will only share the personal data you provide
                          online with other 3rd party entities as described in
                          the table below. Such entities and/or business
                          partners, are governed by our privacy policies with
                          respect to the use of this data and are bound by the
                          appropriate confidentiality agreements.
                        </ListItem>
                      </OrderList>
                    </NormalFontContainer>
                  </ListItem>
                  <ListItem>
                    Our Contact Details
                    <NormalFontContainer>
                      <OrderList>
                        <ListItem>
                          Our full details are:
                          <ul>
                            <li>
                              Full name of legal entity: Ditto Jobs (Pty) Ltd.
                            </li>
                            <li>
                              Name or title of data representative: Luther
                              Delport
                            </li>
                            <li>Email address: legal@dittohire.com</li>
                            <li>
                              Postal address: 35 Wesley Street, Canterbury
                              Studios, Cape Town, 8001
                            </li>
                            <li>Telephone number: +27(0)21 422 0871</li>
                          </ul>
                        </ListItem>
                        <ListItem>
                          You have the right to make a complaint at any time to
                          the South African regulator’s office (Information
                          Regulator’s Office of South Africa). We would,
                          however, appreciate the chance to deal with your
                          concerns before you approach any such regulator, so
                          please contact us in the first instance.
                        </ListItem>
                      </OrderList>
                    </NormalFontContainer>
                  </ListItem>
                  <ListItem>
                    Changes to the Privacy Policy and your Duty to Inform us of
                    Changes
                    <NormalFontContainer>
                      <OrderList>
                        <ListItem>
                          This Privacy Policy version was last updated on
                          <b> 04 August 2022</b> and historic versions are
                          archived and can be obtained by contacting us.
                        </ListItem>
                        <ListItem>
                          The personal data provided to Ditto Jobs should be
                          accurate, complete and up to date. Should your
                          personal data change, the onus is on the provider of
                          such data to notify Ditto Jobs of the change and
                          provide Ditto Jobs with the accurate data.
                        </ListItem>
                      </OrderList>
                    </NormalFontContainer>
                  </ListItem>
                  <ListItem>
                    Third-Party Links on Website or otherwise
                    <NormalFontContainer>
                      <OrderList>
                        <ListItem>
                          The Website may include links to third-party websites,
                          plug-ins and applications. Clicking on those links or
                          enabling those connections may allow third parties to
                          collect or share data about you. We do not control
                          these third-party websites and are not responsible for
                          their privacy statements or terms. When you leave our
                          Website, or engage with such third parties, we
                          encourage you to read the distinct privacy policy of
                          every third-party you engage with.
                        </ListItem>
                      </OrderList>
                    </NormalFontContainer>
                  </ListItem>
                </BoldFontContainer>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            The data we collect about you
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  Personal data, or personal identifiable information, means any
                  information about an individual, both natural and juristic
                  entities (i.e. people and companies), from which that entity
                  can be identified. It does not include data where the identity
                  has been removed (anonymous data).
                </ListItem>
                <ListItem>
                  We may collect, use, store and transfer (“<b>process</b>”)
                  different kinds of personal data about you, for our own
                  purposes, which we have grouped together as follows:
                  <OrderList>
                    <ListItem>
                      <b>Identity</b> Data including first name, maiden name,
                      last name, country of residence, username or similar
                      identifier, non-biometric photograph, title, date of birth
                      and gender, or the information about your company such as
                      company registration details, company address and name;
                    </ListItem>
                    <ListItem>
                      <b> Contact Data</b> including email address,
                      physical/registered addresses and telephone numbers;
                    </ListItem>
                    <ListItem>
                      <b>Financial Data </b> including bank account details,
                      third-party payment provider information and payment card
                      details (which we do not store but only provide to our
                      authorised third-party payment service provider under
                      contract with us);
                    </ListItem>
                    <ListItem>
                      <b> Social Media Data </b>including all information
                      accessible on your publicly available profile such as
                      images, photos, photo tags, likes, followers, comments,
                      posts and stories;
                    </ListItem>
                    <ListItem>
                      <b> Transaction Data</b> including details about payments
                      to and from you, contracts, contractual terms, contract
                      fees, signups, subscriptions, invoices and other details
                      of products and services you have obtained from us, or
                      provide to us;
                    </ListItem>
                    <ListItem>
                      <b> Profile Data</b> including your Website/Profile
                      username, preferences, feedback, ratings and reviews, and
                      survey responses;
                    </ListItem>
                    <ListItem>
                      <b>Usage Data</b> including information about how you use
                      our company, Website, surveys, events and Services; and
                    </ListItem>
                    <ListItem>
                      <b> Technical Data</b> including cookies, web beacons, log
                      information (for example, information about your
                      interactions with our platforms and other services you
                      use, the content you view and the search queries you
                      submit); device information (for example, the type of
                      device you are using, how you access our platforms, your
                      browser, your operating system and your Internet Protocol
                      (“IP”) address); Location information (for example, your
                      device’s GPS signal and information about nearby WiFi
                      networks and cell towers) when you use location enabled
                      services;
                    </ListItem>
                    <ListItem>
                      <b>Employer Data </b> including where you interact with us
                      in your capacity as an employee of an organisation, the
                      name, address, telephone number and email address of your
                      employer, to the extent relevant; and
                    </ListItem>
                    <ListItem>
                      <b>Content and Advertising Data</b> including records of
                      your interactions with our online advertising and content,
                      preferences in receiving notices and marketing from us and
                      our third parties and your communication preferences,
                      records of advertising and content displayed on pages
                      displayed to you, and any interaction you may have had
                      with such content or advertising (including, but not
                      limited to, mouse hover, mouse clicks and any forms you
                      complete).
                    </ListItem>
                  </OrderList>
                </ListItem>
                <ListItem>
                  We also collect, use and share <b>Aggregated Data</b>
                  such as statistical or demographic data for any purpose.
                  Aggregated Data may be derived from your personal data but is
                  not considered personal data in law as this data does
                  <b> not</b> directly or indirectly reveal your identity. For
                  example, we may aggregate your Usage Data to calculate the
                  percentage of users accessing a specific Website feature.
                  However, if we combine or connect Aggregated Data with your
                  personal data so that it can directly or indirectly identify
                  you, we treat the combined data as personal data which will be
                  used in accordance with this Privacy Policy.
                </ListItem>
                <ListItem>
                  Where we need to collect personal data by law, or under the
                  terms of a contract we have with you and you fail to provide
                  that data when requested, we may not be able to perform the
                  contract we have or are trying to enter into with you (for
                  example, to provide you with services or allow you to provide
                  us with your services). In this case, we may have to cancel
                  Website-access or Services you have with us, but we will
                  notify you if this is the case at the time.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            How is your personal data collected?
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We use different methods to collect data from and about you,
                  including through:
                  <OrderList>
                    <ListItem>
                      <b>Direct interactions:</b> You may give us your
                      <b>
                        Identity, Contact, Financial, Social Media, Transaction,
                        Profile, Employer and Content and Advertising Data
                      </b>
                      by filling in various Ditto Jobs forms, Website forms or
                      by corresponding with us by post, phone, email or
                      otherwise. This includes personal data you provide when
                      you:
                      <OrderList>
                        <ListItem>
                          provide information directly through our platforms or
                          via phone, SMS, fax or other medium;
                        </ListItem>
                        <ListItem>
                          fill in forms on our platforms or otherwise;
                        </ListItem>
                        <ListItem>
                          have your data provided to us by another recruitment
                          company or provider who already has your consent to
                          provide us with your data for a migration into our
                          system;
                        </ListItem>
                        <ListItem>
                          create an account or subscribe or register for a
                          service;
                        </ListItem>
                        <ListItem>
                          enter a competition, promotion or complete a survey;{" "}
                        </ListItem>
                        <ListItem>
                          post comments or content on our platforms;{" "}
                        </ListItem>
                        <ListItem>
                          purchase one of our products or services;{" "}
                        </ListItem>
                        <ListItem> contact us; </ListItem>
                        <ListItem>
                          provide us with information in ways not described in
                          this list;
                        </ListItem>
                        <ListItem>
                          use our platforms, products or services;
                        </ListItem>
                        <ListItem> contract with us;</ListItem>
                        <ListItem> consult with us;</ListItem>
                        <ListItem> sign-up for newsletters;</ListItem>
                        <ListItem>
                          interact with us via webinar or social platform group,
                          such as a Facebook™ group
                        </ListItem>
                        <ListItem>
                          subscribe to any of our publications;
                        </ListItem>
                        <ListItem>
                          provide any services to us as a service provider or
                          independent contractor on contract with us;
                        </ListItem>
                        <ListItem>
                          request information to be sent to you;
                        </ListItem>
                        <ListItem>
                          attend any Ditto Jobs event whether online or in
                          person; or
                        </ListItem>
                        <ListItem> give us some feedback.</ListItem>
                      </OrderList>
                    </ListItem>
                    <ListItem>
                      <b> Automated technologies or interactions:</b> As you
                      interact with our Website, we may automatically collect
                      <b> Profile, Technical</b> and <b> Usage Data </b>
                      about your equipment, browsing actions and patterns. We
                      may collect this personal data by using cookies, server
                      logs and other similar technologies. We may also receive
                      Technical Data about you if you visit other websites
                      employing our cookies.{" "}
                    </ListItem>
                    <ListItem>
                      {" "}
                      <b>Third parties or publicly available sources:</b> We may
                      receive personal data about you from various third parties
                      and public sources as set out below:
                      <OrderList>
                        <ListItem>
                          <b>Identity, Contact, Social Media</b> and{" "}
                          <b> Consent Data </b>
                          from the following parties:
                          <OrderList>
                            <ListItem>
                              analytics providers Google Analytics, Google
                              AdSense and Google Ads Manager all based in the
                              USA;
                            </ListItem>
                            <ListItem>
                              social networks for using linked-in logging only,
                              being Google, LinkedIn, GitHub and Apple all based
                              in the USA;
                            </ListItem>
                          </OrderList>
                        </ListItem>
                      </OrderList>
                    </ListItem>
                  </OrderList>
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            How we use your personal data
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We will only use your personal data when the law allows us to
                  and for legitimate reasons, which you hereby expressly
                  understand and consent to. Most commonly, we will use your
                  personal data in the following circumstances:
                  <OrderList>
                    <ListItem>
                      where we have your express consent to do so;
                    </ListItem>
                    <ListItem>
                      where we need to consult with you or perform on the
                      Services contract we are about to enter into or have
                      entered into with you;
                    </ListItem>
                    <ListItem>
                      where it is necessary for our legitimate interests (or
                      those of a third party) and your interests and fundamental
                      rights do not override those interests; and/or
                    </ListItem>
                    <ListItem>
                      where we need to comply with a legal or regulatory
                      obligation.{" "}
                    </ListItem>
                  </OrderList>
                </ListItem>
                <ListItem>
                  Purposes for which we will use your personal data:
                  <OrderList>
                    <ListItem>
                      We have set out below, in a table format, a description of
                      all the ways we plan to use your personal data for our own
                      purposes, and which of the legal bases we rely on to do
                      so. We have also identified what our legitimate interests
                      are, where appropriate, and which exact External Third
                      Parties your personal data is handed to for same reasons.
                    </ListItem>
                    <ListItem>
                      Note that we may process your personal data for more than
                      one lawful ground depending on the specific purpose for
                      which we are using your data. Please contact us if you
                      need details about the specific legal ground we are
                      relying on to process your personal data where more than
                      one ground has been set out in the table below.
                    </ListItem>
                    <ListItem>
                      Certain providers/third parties to whom we hand your data
                      can change quite quickly due to the dynamic nature of
                      placements, but careful consideration occurs when we
                      change providers and their privacy policies are carefully
                      scrutinised. Further, a full list of the exact
                      third-parties applicable at any time, can be provided to
                      you on request.
                    </ListItem>
                    <TableContainer>
                      <TableHeaderContainer>
                        <TableRow>
                          <TableHeading>PURPOSE / ACTIVITY</TableHeading>
                          <TableHeading style={{ width: "120px" }}>
                            TYPE OF DATA{" "}
                          </TableHeading>
                          <TableHeading>
                            LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST
                          </TableHeading>
                          <TableHeading>
                            SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)
                          </TableHeading>
                        </TableRow>
                      </TableHeaderContainer>
                      <tbody>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To engage with you after you have contacted us
                              requesting an engagement via the Website or
                              otherwise
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>
                                Necessary for our legitimate interests (to
                                contact a person who has a legitimate desire to
                                engage us for valid business purposes)
                              </div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <p>Hetzner based in Germany</p>
                            <p>Amazon Web Services based in the USA</p>
                            <p>
                              Pipedrive based in Estonia Atlassian based in
                              Australia
                            </p>
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To provide you with our Services as client
                              (whether a corporate employer, recruitment
                              facilitator or as a candidate)
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Social media</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(h)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(i)</div>
                              <div>Employer</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(j)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a) </div>
                              <div>Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c) </div>
                              <div>
                                Necessary to comply with a legal obligation
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d) </div>
                              <div>
                                Necessary for our legitimate interests (to
                                provide you with the Services you contracted to
                                acquire from us, and to keep our records updated
                                and to study how engagees use our Services)
                              </div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Pipedrive based in Estonia <br />
                            <br />
                            Hetzner based in Germany <br />
                            <br />
                            Amazon Web Services based in the USA <br />
                            <br />
                            Atlassian based in Australia
                            <br />
                            <br /> Stripe based in the USA <br />
                            <br />
                            Our various list of recruiters which changes from
                            time to time – please contact us for our full and
                            exact list applicable at any time.
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To contract with you as a service provider to
                              Ditto Jobs
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div> (f)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div> (a)</div>
                              <div> Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div> (c)</div>
                              <div>
                                {" "}
                                Necessary to comply with a legal obligation
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to allow
                                you to provide us with your services, and to
                                keep our records updated and to study how we may
                                use third-party services)
                              </div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            N/A
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To provide it to our authorised third-party
                              service providers who need your personal data to
                              provide their private services to you (such as
                              payment gateway providers, or analysis providers){" "}
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(h)</div>
                              <div>Employer</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(i)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div> Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b) </div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to
                                provide you with the Services you have
                                contracted from the authorised third-party, and
                                to develop our services and grow our
                                organisation)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Pipedrive based in Estonia <br />
                            <br /> Hetzner based in Germany <br />
                            <br />
                            Amazon Web Services based in the USA <br />
                            <br />
                            Atlassian based in Australia <br />
                            <br />
                            Stripe based in the USA
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To process and service your payment for any
                              services rendered by Ditto Jobs or its service
                              providers <br />
                              To manage payments, fees and charges
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div> (a)</div>
                              <div> Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to make
                                or receive necessary organisation payments)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div> Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Pipedrive based in Estonia <br />
                            <br />
                            Hetzner based in Germany <br />
                            <br /> Amazon Web Services based in the USA <br />
                            <br />
                            Atlassian based in Australia <br />
                            <br />
                            Stripe based in the USA <br />
                            <br />
                            Our various list of recruiters which changes from
                            time to time – please contact us for our full and
                            exact list applicable at any time.
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To manage our relationship with you which may
                              include notifying you about changes to our terms
                              or Privacy Policy or Services
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div> Performance of a contract with you</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div> (b)</div>
                              <div>
                                {" "}
                                Necessary to comply with a legal obligation
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div> (c) </div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to keep
                                our records updated and to study how engagees
                                use our Services)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div> Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Hetzner based in Germany
                            <br />
                            <br /> Amazon Web Services based in the USA
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To administer and protect our organisation and our
                              Website (including troubleshooting, data analysis,
                              testing, system maintenance, support, reporting
                              and hosting of data)
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (for
                                running our organisation, provision of
                                administration and IT services, network
                                security, to prevent fraud and in the context of
                                an organisation restructuring exercise)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>
                                {" "}
                                Necessary to comply with a legal obligation{" "}
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div> Express consent</div>
                            </LawfulBasisContainer>{" "}
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Hetzner based in Germany
                            <br />
                            <br /> Amazon Web Services based in the USA
                            <br />
                            <br /> Atlassian based in Australia
                            <br />
                            <br /> Google based in the USA
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To deliver relevant Website content and Services
                              to you and measure or understand the effectiveness
                              of the information we serve to you
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Social media</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(h)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(i)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to study
                                how engagees use our services, to develop them,
                                to grow our organisation and to inform our
                                marketing strategy)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            {" "}
                            <br />
                            Amazon Web Services based in the USA <br />
                            <br /> Google based in the USA
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              To use data analytics to improve our Website,
                              Services, engagee relationships and experiences
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Social media</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(h)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(i)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>
                                {" "}
                                Necessary for our legitimate interests (to
                                define types of engagees for our services, to
                                keep our Website updated and relevant, to
                                develop our organisation and to inform our
                                marketing strategy)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Amazon Web Services based in the USA <br />
                            <br /> Google based in the USA
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData data-label="PURPOSE / ACTIVITY">
                            <LawfulBasisContainer>
                              direct and user-specific marketing, make
                              suggestions and recommendations to you about
                              events or services that may be of interest to you
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData data-label="TYPE OF DATA">
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>Identity</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Contact</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(c)</div>
                              <div>Technical</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(d)</div>
                              <div>Financial</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(e)</div>
                              <div>Social media</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(f)</div>
                              <div>Transaction</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(g)</div>
                              <div>Profile</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(h)</div>
                              <div>Usage</div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(i)</div>
                              <div>Content and Advertising</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF
                            LEGITIMATE INTEREST"
                          >
                            <LawfulBasisContainer>
                              <div>(a)</div>
                              <div>
                                Necessary for our legitimate interests (to
                                develop our services and grow our organisation)
                              </div>
                            </LawfulBasisContainer>
                            <LawfulBasisContainer>
                              <div>(b)</div>
                              <div>Express consent</div>
                            </LawfulBasisContainer>
                          </TableData>
                          <TableData
                            data-label="SPECIFIC EXTERNAL THIRD PARTY TO WHOM THE
                            INFORMATION IS PROVIDED (IF ANY)"
                          >
                            <br />
                            Amazon Web Services based in the USA <br />
                            <br /> Google based in the USA
                          </TableData>
                        </TableRow>
                      </tbody>
                    </TableContainer>
                    <ListItem>
                      <BoldFontContainer> Marketing</BoldFontContainer>
                      <OrderList>
                        <ListItem>
                          We strive to provide you with choices regarding
                          certain personal data uses, particularly around
                          marketing and advertising. To manifest your rights
                          attached to any marketing sent to you as an existing
                          customer, please use the in-built prompts provided on
                          those communications, or contact us.
                        </ListItem>
                        <ListItem>
                          You will receive marketing communications from us if
                          you have registered with us, have participated in any
                          Ditto Jobs Service or event, or if you provided us
                          with your details when registering for a promotion or
                          event and, in each case, you have not opted-out of
                          receiving that marketing.
                        </ListItem>
                      </OrderList>
                    </ListItem>
                    <ListItem>
                      <BoldFontContainer>
                        Third-Party Marketing
                      </BoldFontContainer>
                      <OrderList>
                        <ListItem>
                          Whilst we may use your personal data within our Ditto
                          Jobs organisation group, we will get your express
                          opt-in consent before we share your personal data
                          publicly with any entity outside the Ditto Jobs group
                          of organisations for public purposes.
                        </ListItem>
                      </OrderList>
                    </ListItem>
                    <ListItem>
                      <BoldFontContainer> Opting-Out</BoldFontContainer>
                      <OrderList>
                        <ListItem>
                          You can ask us or authorised third parties to stop
                          sending you marketing messages at any time by
                          contacting us or the relevant third party at any time
                          and requesting us to cease or change your marketing
                          preferences.
                        </ListItem>
                        <ListItem>
                          Where you opt-out of receiving these marketing
                          messages, this opt-out will not apply to other
                          personal data of yours which we process for another
                          lawful basis.
                        </ListItem>
                      </OrderList>
                    </ListItem>
                    <ListItem>
                      <BoldFontContainer>Change of Purpose</BoldFontContainer>
                      <OrderList>
                        <ListItem>
                          We will only use your personal data for the purposes
                          for which we collected it, unless we reasonably
                          consider that we need to use it for another reason and
                          that reason is compatible with the original purpose.
                          If you wish to get an explanation as to how the
                          processing for the new purpose is compatible with the
                          original purpose, please contact us.
                        </ListItem>
                        <ListItem>
                          If we need to use your personal data for an unrelated
                          purpose, we will notify you and we will explain the
                          legal basis which allows us to do so.
                        </ListItem>
                        <ListItem>
                          Please note that we may process your personal data
                          without your knowledge or consent, in compliance with
                          the above rules, where this is required or permitted
                          by law.
                        </ListItem>
                      </OrderList>
                    </ListItem>
                  </OrderList>
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            Disclosures of your personal data
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We may have to share your personal data with the parties set
                  out below for the purposes set out in the table above and
                  below.
                  <OrderList>
                    <ListItem>
                      Internal Third Parties as set out in the Glossary;
                    </ListItem>
                    <ListItem>
                      External Third Parties as set out in the Glossary;
                    </ListItem>
                    <ListItem>
                      Specific third parties listed in the table above; and/or
                    </ListItem>
                    <ListItem>
                      Third parties to whom we may choose to sell, transfer, or
                      merge parts of our organisation or our assets.
                      Alternatively, we may seek to acquire other organisations
                      or merge with them. If a change happens to our
                      organisation, then the new owners may use your personal
                      data in the same way as set out in this Privacy Policy.
                    </ListItem>
                  </OrderList>
                </ListItem>
                <ListItem>
                  We require all third parties to respect the security of your
                  personal data and to treat it in accordance with the law. We
                  do not allow our third-party service providers to use your
                  personal data for their own purposes and only permit them to
                  process your personal data for specified purposes and in
                  accordance with our instructions and standards.
                </ListItem>
                <BoldFontContainer>Express Cookies provision</BoldFontContainer>
                <ListItem>
                  The Website makes use of “cookies” to automatically collect
                  information and data through the standard operation of the
                  Internet servers. “Cookies” are small text files a website can
                  use (and which we may use) to recognise repeat users,
                  facilitate the user’s on-going access to and use of a website
                  and allow a website to track usage behaviour and compile
                  aggregate data that will allow the Website operator to improve
                  the functionality of the Website and its content, and to
                  display more focused advertising to a user by way of third
                  party tools.
                </ListItem>
                <ListItem>
                  The type of information collected by cookies is not used to
                  personally identify you. If you do not want information
                  collected through the use of cookies, there is a simple
                  procedure in most browsers that allows you to deny or accept
                  the cookie feature. Please note that cookies may be necessary
                  to provide you with certain features available on our Website,
                  and thus if you disable the cookies on your browser you may
                  not be able to use those features, and your access to our
                  Website will therefore be limited. If you do not disable
                  “cookies”, you are deemed to consent to our use of any
                  personal information collected using those cookies, subject to
                  the provisions of this Policy and our other policies or terms.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            International transfers
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We share your personal data within the Ditto Jobs group of
                  organisations and affiliates, and this may involve
                  transferring and processing your data outside of South Africa.
                </ListItem>
                <ListItem>
                  Whenever we transfer your personal data out of either
                  territory, we ensure a similar degree of protection is
                  afforded to it by ensuring at least one of the following
                  safeguards is implemented:
                  <OrderList>
                    <ListItem>
                      We will only ever share data with an entity with whom we
                      have a contract specifically detailing all same parties’
                      duties in relation to your data; and
                    </ListItem>
                    <ListItem>
                      We will only transfer your personal data to countries that
                      have been deemed to provide an adequate level of
                      protection for personal data by the Information
                      Regulator’s Office of South Africa; and/or
                    </ListItem>
                    <ListItem>
                      Where we use certain service providers, we may use
                      specific contracts/clauses approved by the Information
                      Regulator’s Office which give personal data the same
                      protection it has in South Africa.
                    </ListItem>
                  </OrderList>
                </ListItem>
                <ListItem>
                  Please contact us if you want further information on the
                  specific mechanism used by us when transferring your personal
                  data out of South Africa.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            Data security
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed by using
                  various multi-factor authentication methods, limiting the
                  number/type of employees who can access data, and enforcing
                  access controls to prevent the loss or unauthorised access to
                  your data. These might include but are not limited to using
                  firewalls, restricted and / or closed access and various
                  encryption methods on the storing of personal and sensitive
                  data. In addition, we limit access to your personal data to
                  those employees, agents, contractors and other third parties
                  who have a legitimate need to know. They will only process
                  your personal data on our instructions and they are subject to
                  a duty of confidentiality.
                </ListItem>
                <ListItem>
                  We have put in place procedures to deal with any suspected
                  personal data breach and will notify you and any applicable
                  regulator of a breach where we are legally required to do so.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            Data retention
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  We will only retain your personal data for as long as
                  necessary to fulfil the purposes we collected it for,
                  including for the purposes of satisfying any legal,
                  accounting, or reporting requirements.
                </ListItem>
                <ListItem>
                  To determine the appropriate retention period for personal
                  data, we consider the amount, nature, and sensitivity of the
                  personal data, the potential risk of harm from unauthorised
                  use or disclosure of your personal data, the purposes for
                  which we process your personal data, any other South African
                  applicable law requiring us to retain the data and whether we
                  can achieve those purposes through other means, and the
                  applicable legal requirements.
                </ListItem>
                <ListItem>
                  Details of retention periods for different aspects of your
                  personal data are available from us by contacting us.
                </ListItem>
                <ListItem>
                  In some circumstances you can ask us to delete your data; see
                  below for further information.
                </ListItem>
                <ListItem>
                  In some circumstances we may anonymise your personal data (so
                  that it can no longer be associated with you) for research or
                  statistical purposes in which case we may use this information
                  indefinitely without further notice to you.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            Your legal rights
            <NormalFontContainer>
              <OrderList>
                <ListItem>
                  Under certain circumstances, you have rights under data
                  protection laws in relation to your personal data where we are
                  the relevant “Responsible Party” over such personal data.
                  Please contact us to find out more about, or manifest, these
                  rights:
                  <OrderList>
                    <ListItem>request access to your personal data;</ListItem>
                    <ListItem>
                      request correction of your personal data;
                    </ListItem>
                    <ListItem>request erasure of your personal data;</ListItem>
                    <ListItem>
                      object to the processing of your personal data;
                    </ListItem>
                    <ListItem>
                      request a restriction of processing your personal data;
                    </ListItem>
                    <ListItem>
                      request transfer of your personal data; and/or
                    </ListItem>
                    <ListItem> right to withdraw consent.</ListItem>
                  </OrderList>
                </ListItem>
                <ListItem>
                  You will not have to pay a fee to access your personal data
                  (or to exercise any of the other rights). However, we may
                  charge a reasonable fee if your request is clearly unfounded,
                  repetitive or excessive. Alternatively, we may refuse to
                  comply with your request in these circumstances.
                </ListItem>
                <ListItem>
                  We may need to request specific information from you to help
                  us confirm your identity and ensure your right to access your
                  personal data (or to exercise any of your other rights). This
                  is a security measure to ensure that personal data is not
                  disclosed to any person who has no right to receive it. We may
                  also contact you to ask you for further information in
                  relation to your request to speed up our response.
                </ListItem>
                <ListItem>
                  We try to respond to all legitimate requests within one month.
                  Occasionally it may take us longer than a month if your
                  request is particularly complex or you have made a number of
                  requests. In this case, we will notify you and keep you
                  updated.
                </ListItem>
              </OrderList>
            </NormalFontContainer>
          </ListItem>
          <ListItem>
            Glossary
            <OrderList>
              <ListItem>
                Lawful Basis
                <NormalFontContainer>
                  <OrderList>
                    <ListItem>
                      <b>Legitimate Interest</b> means the interest of our
                      organisation in conducting and managing our organisation
                      to enable us to give you the best service and the most
                      secure experience. We make sure we consider and balance
                      any potential impact on you (both positive and negative)
                      and your rights before we process your personal data for
                      our legitimate interests. We do not use your personal data
                      for activities where our interests are overridden by the
                      impact on you (unless we have your consent or are
                      otherwise required or permitted to by law). You can obtain
                      further information about how we assess our legitimate
                      interests against any potential impact on you in respect
                      of specific activities by contacting us.
                    </ListItem>
                    <ListItem>
                      <b>Performance of Contract</b> means processing your data
                      where it is necessary for the performance of a contract to
                      which you are a party or to take steps at your request
                      before entering into such a contract.
                    </ListItem>
                    <ListItem>
                      <b>Comply with a legal or regulatory obligation </b> means
                      processing your personal data where it is necessary for
                      compliance with a legal or regulatory obligation that we
                      are subject to.
                    </ListItem>
                    <ListItem>
                      <b>Express consent</b> means the confirmed express consent
                      you have provided to our processing of your personal data
                      by actively accepting this Privacy Policy.
                    </ListItem>
                  </OrderList>
                </NormalFontContainer>
              </ListItem>
              <ListItem>
                Third Parties
                <NormalFontContainer>
                  <OrderList>
                    <ListItem>
                      <b> Internal Third Parties</b> means other entities,
                      customers, or parties in the Ditto Jobs group acting as
                      joint controllers or processors and provide IT and system
                      administration services and undertake reporting.
                    </ListItem>
                    <ListItem>
                      <b>External Third Parties</b> means:
                      <OrderList>
                        <ListItem>
                          Authorised third-party service providers under
                          contract with Ditto Jobs who need your personal
                          information in order to contact and transact with you
                          pursuant to your use of the Services (such as
                          recruiters);
                        </ListItem>
                        <ListItem>
                          specific third parties who have been identified in the
                          table above;
                        </ListItem>
                        <ListItem>
                          service providers acting as processors who provide IT
                          and system administration services;
                        </ListItem>
                        <ListItem>
                          our affiliates, in other words, other companies,
                          websites or platforms owned and operated by Ditto Jobs
                          (Pty) Ltd. By sharing this information amongst
                          business units, we may learn more about our customers,
                          allowing us to create a more relevant and engaging
                          customer experience;
                        </ListItem>
                        <ListItem>
                          business partners where we may share Aggregated Data
                          with select business partners;
                        </ListItem>
                        <ListItem>
                          other parties in response to legal process or when
                          necessary to conduct or protect our Website. We may
                          disclose your information if we are under a duty to
                          disclose or share your information in order to comply
                          with any legal obligation or to protect our Website.
                          We may also disclose your information during the
                          process of debt collection, or to our attorneys in
                          connection with any potential, threatened or actual
                          litigation, or to our auditors for the purpose of
                          auditing our accounts;
                        </ListItem>
                        <ListItem>
                          other parties in connection with certain business
                          transactions. In the event that we sell any of our
                          businesses or assets, we may disclose your personal
                          information to the prospective buyer of such business
                          or assets;
                        </ListItem>
                        <ListItem>
                          third parties where you have provided consent. In some
                          cases, third parties (often advertisers), may wish to
                          attain information about you in order to promote their
                          products to you, or for whatever other reason. We may
                          share information with third-parties where you provide
                          consent in the form of explicit opt-in. Such
                          circumstances may include (but are not limited to) an
                          entry into a competition sponsored by a third-party
                          where the provision of your information is a condition
                          for entry to the competition, or where you express
                          your interest in a product or service for which you
                          would like more information;
                        </ListItem>
                        <ListItem>
                          South African or other national governments and/or
                          their respective authorities pursuant to our adherence
                          with anti-corruption and crime-fighting legislation;
                          and/or
                        </ListItem>
                        <ListItem>
                          professional advisers acting as processors or joint
                          controllers including lawyers, bankers, auditors and
                          insurers based in South Africa who provide
                          consultancy, banking, legal, insurance and accounting
                          services as required.
                        </ListItem>
                      </OrderList>
                    </ListItem>
                  </OrderList>
                </NormalFontContainer>
              </ListItem>
              <ListItem>
                Your legal rights
                <NormalFontContainer>
                  <OrderList>
                    <ListItem>
                      You have the right to:
                      <OrderList>
                        <ListItem>
                          <b>Request access</b> to your personal data (commonly
                          known as a “data subject access request”). This
                          enables you to receive a copy of the personal data we
                          hold about you and to check that we are lawfully
                          processing it.
                        </ListItem>
                        <ListItem>
                          <b>Request correction</b> of the personal data that we
                          hold about you. This enables you to have any
                          incomplete or inaccurate data we hold about you
                          corrected, though we may need to verify the accuracy
                          of the new data you provide to us.
                        </ListItem>
                        <ListItem>
                          <b>Request erasure</b> of your personal data. This
                          enables you to ask us to delete or remove personal
                          data where there is no valid reason for us continuing
                          to process it. You also have the right to ask us to
                          delete or remove your personal data where you have
                          successfully exercised your right to object to
                          processing (see below), where we may have processed
                          your information unlawfully or where we are required
                          to erase your personal data to comply with local law.
                          <b>
                            Note, however, that we may not always be able to
                            comply with your request of erasure for specific
                            legal reasons which will be communicated to you, if
                            applicable, at the time of your request.
                          </b>
                        </ListItem>
                        <ListItem>
                          <b>Object to processing</b> of your personal data
                          where we are relying on a legitimate interest (or
                          those of a third party) and there is something about
                          your particular situation which makes you want to
                          object to processing on this ground as you feel it
                          impacts on your fundamental rights and freedoms. You
                          also have the right to object where we are processing
                          your personal data for direct marketing purposes. In
                          some cases, we may demonstrate that we have compelling
                          legitimate grounds to process your information which
                          override your rights and freedoms.
                        </ListItem>
                        <ListItem>
                          <b> Request restriction of processing</b> of your
                          personal data. This enables you to ask us to suspend
                          the processing of your personal data in the following
                          scenarios:
                          <OrderList>
                            <ListItem>
                              if you want us to establish the data’s accuracy;
                            </ListItem>
                            <ListItem>
                              where our use of the data is unlawful but you do
                              not want us to erase it;{" "}
                            </ListItem>
                            <ListItem>
                              where you need us to hold the data even if we no
                              longer require it as you need it to establish,
                              exercise or defend legal claims; or{" "}
                            </ListItem>
                            <ListItem>
                              you have objected to our use of your data, but we
                              need to verify whether we have overriding
                              legitimate grounds to use it.
                            </ListItem>
                          </OrderList>
                        </ListItem>
                        <ListItem>
                          <b>Request the transfer</b> of your personal data to
                          you or to a third party. We will provide to you, or a
                          third party you have chosen, your personal data in a
                          structured, commonly used, machine-readable format.
                          Note that this right only applies to automated
                          information which you initially provided consent for
                          us to use or where we used the information to perform
                          on a contract with you.
                        </ListItem>
                        <ListItem>
                          <b>Withdraw consent at any time</b> where we are
                          relying on consent to process your personal data.
                          However, this will not affect the lawfulness of any
                          processing carried out before you withdraw your
                          consent. If you withdraw your consent, we may not be
                          able to provide certain Website access or Services to
                          you. We will advise you if this is the case at the
                          time you withdraw your consent.{" "}
                          <b>
                            Please take note that regardless of your right to
                            withdraw consent under POPI, other South African
                            legislation applies and may require that we continue
                            to process your data in order to comply with
                            anti-corruption, crime-fighting and/or other
                            national legislation, which you expressly understand
                            and agree to.
                          </b>
                        </ListItem>
                      </OrderList>
                    </ListItem>
                  </OrderList>
                </NormalFontContainer>
              </ListItem>
            </OrderList>
          </ListItem>
        </BoldFontContainer>
      </OrderList>
    </LegalMainContainer>
  );
};
