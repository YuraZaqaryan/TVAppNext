import styled from "@/layout/header/header.module.scss";
import Logo from "@/assets/image/avatar.jpg"
import Image from "next/image";

const Title = () => {
    return (
        <div className={styled.title}>
            <Image src={Logo} alt={"logo"} width={35} className={styled.avatar}/>
            <h1 className={styled.name}>3aqaryan App Downloader for SMART TV</h1>
        </div>
    );
};

export default Title;