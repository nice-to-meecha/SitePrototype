import "../css/pages/About.css"

export default function About() {

    return (
        <>
            <div className="about-hero">
                <p>Image(s) or statement(s)</p>
            </div>

            <div className="mission-statement">
                <p>
                    At Blantyre Business Services, our founding mission was inspired by a deep-seated
                    commitment to making a meaningful difference in the success of nonprofit
                    organizations and small businesses. We understand that these sectors face unique
                    challenges when it comes to financial reporting and remaining compliant with
                    evolving regulations.
                </p>
                <p>
                    Nonprofits and small businesses often grapple with limited resources and the need
                    for precise financial management. Recognizing that each organization's data needs
                    are unique, we offer personalized data solutions that align precisely with your
                    challenges and objectives. With a wealth of experience, our team crafts
                    customized strategies and solutions designed to harness the power of data for
                    your specific case.
                </p>
                <p>
                    By choosing BBS, you're choosing a partner that understands the challenges you
                    face and is dedicated to alleviating the burdens associated with financial
                    management. We're here to empower your organization, providing the expertise
                    and guidance you need to flourish.
                </p>
            </div>

            <div className="team">
                <h4>Meet The Team</h4>
                <p>Dedication. Expertise. Passion.</p>
                <div className="team-gallery">
                    <div className="gallery-card">
                        Christina Kadzamira, MPA
                        <i>email</i>
                    </div>
                    <div className="gallery-card">
                        Kingston Govati, CPA
                        <i>email</i>
                        <i>206 730 5715</i>
                    </div>
                    <div className="gallery-card">
                        Theo Munthali, MBA
                        <i>email</i>
                    </div>
                    <div className="gallery-card">
                        Tume Mendbayar, MBA
                        <i>email</i>
                        <i>206 730 5713</i>
                    </div>
                </div>
            </div>
        </>
    );
}