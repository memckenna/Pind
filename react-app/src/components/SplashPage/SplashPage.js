import React from "react";
import SplashPageFooter from "../Footer/SplashPageFooter";
import "./SplashPage.css"


function SplashPage() {


    return (
        <>
            <div className="splash-container">
                <div className="splash-header">
                    Get inspired for <br/> your next idea
                </div>
                <div className="splash-image-container">
                    <div className="splash-image" id="col-1"><img src="https://www.palmbeachlately.com/wp-content/uploads/2019/05/IMG_3355.jpg"/><img src="https://64.media.tumblr.com/9fe325d00388b15955380259c05671c7/fe920c1e60cf50be-aa/s500x750/0d72ff1ae56a910ce248469ddb96c6fe4d7fca57.jpg" /></div>
                    <div className="splash-image" id="col-2"><img src="https://i.pinimg.com/originals/4c/5e/3b/4c5e3b138999a2e68b0b3443dd1549ee.jpg" /><img src="https://i.pinimg.com/564x/5e/3f/e7/5e3fe7a51e2b3ca6757dd26f9fc486ec.jpg"/></div>
                    <div className="splash-image" id="col-3"><img src="https://i.pinimg.com/564x/b7/56/63/b75663b8f3254ded99e328af4e9cceb9.jpg" /><img src="https://i.pinimg.com/564x/d3/3a/91/d33a91961e86e9b9deed3943c25d51eb.jpg"/></div>
                    <div className="splash-image" id="col-4"><img src="https://i.pinimg.com/564x/c2/53/cb/c253cbc0aaffb1ab8b5d63c9d35ce7ea.jpg" /><img src="https://i.pinimg.com/originals/88/2c/b6/882cb65c3d91cd327a61ab1f39b92a04.jpg"/></div>
                    <div className="splash-image" id="col-5"><img src="https://i.pinimg.com/originals/c6/00/72/c60072ab97110193c33048bbd9cfc5cc.jpg" /><img src="https://i.pinimg.com/originals/a3/8a/cc/a38accc3db6548bd18082e2cafad91fd.jpg"/></div>
                    {/* <div className="splash-image" id="col-6"><img src="" /><img src=""/></div> */}
                    {/* <div className="splash-image" id="col-7"><img src="" /><img src=""/></div> */}
                </div>
                <div>
                    <SplashPageFooter />
                </div>
            </div>
        </>
    )

}

export default SplashPage;
