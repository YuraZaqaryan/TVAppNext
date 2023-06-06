import styled from "./ui.module.scss"
import MainLogo from "@/assets/image/youtube_logo.svg"
import Image from "next/image";
const Logo = () => {
    return (
        <div className={styled.logo}>
            <Image src={MainLogo} alt="logo" width={100} height={55} />
        </div>
    );
};

export default Logo;