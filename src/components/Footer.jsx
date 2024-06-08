import '../../static/fonts.css';
import DicerLogo from '/DicerLogoWhite.svg';
import RightsDices from '/FooterRightsIcons.svg';
import EmailSubmitButton from '/FooterEmailDice.svg';
import Twitter from '/FooterTwitter.svg';
import Medium from '/FooterMedium.svg';
import Telegram from '/FooterTelegram.svg';
import Discord from '/FooterDiscord.svg';
import Github from '/FooterGithub.svg';

const background = "bg-backgroundColorPrimary";
const rights1 = "© ";
const rights2 = "Dicer. ";
const rights3 = "All rights reserved.";
const emailText = "Let’s stay in touch:";

function Footer(props) {
    // Column 1 content
    const column1Header = "About";
    const column1Links = [
        "Privacy",
        "Terms",
        "Security",
        "Cookie Policy"
    ];

    // Column 2 content
    const column2Header = "Resources";
    const column2Links = [
        "Articles",
        "Docs",
        "Brand Assets",
        "Bug Bounty"
    ];

    // Column 3 content
    const column3Header = "Other";
    const column3Links = [
        "Payouts",
        "Token",
        "Staking",
        "Games"
    ];

    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative">
                <div className='py-24 px-20 w-full '>
                    <div class="grid grid-cols-[30%,16.5%,16.5%,16.5%,20%]">
                        {/* Rights Column */}
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <img src={DicerLogo} alt="Dicer Logo" className="w-8 h-8" />
                            </div>
                            <div className="sfui5 text-textColorTertiary flex gap-1">
                                {rights1}
                                <img src={RightsDices} alt="Dicer Logo" className="" />
                                <div className="">
                                    {rights2}
                                </div>
                                <div className="font-light">
                                    {rights3}
                                </div>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {/* Column 1 */}
                        <div>
                            <h3 className="sfui4 text-textColorPrimary mb-6">{column1Header}</h3>
                            <ul className="sfuiFooter text-textColorFooterLink space-y-4">
                                {column1Links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="sfui4 text-textColorPrimary mb-6">{column2Header}</h3>
                            <ul className="sfuiFooter text-textColorFooterLink space-y-4">
                                {column2Links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="sfui4 text-textColorPrimary mb-6">{column3Header}</h3>
                            <ul className="sfuiFooter text-textColorFooterLink space-y-4">
                                {column3Links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Email */}
                        <div className="bg-transparent flex flex-col justify-between">
                            <div className=''>
                                <h3 className="sfui4 text-textColorPrimary mb-4">{emailText}</h3>
                                <div className="relative sfui4 font-light text-textColorTertiary block w-full py-3 px-3 border border-textColorTertiary border-1 rounded">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent focus:outline-none"
                                    />
                                    <button 
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    >
                                        <img src={EmailSubmitButton} alt="Submit" className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <img src={Twitter} alt="Twitter" className="w-10 h-10" />
                                <img src={Medium} alt="Medium" className="w-10 h-10 " />
                                <img src={Telegram} alt="Telegram" className="w-10 h-10" />
                                <img src={Discord} alt="Discord" className="w-10 h-10" />
                                <img src={Github} alt="Github" className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
