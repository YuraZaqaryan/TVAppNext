"use client"
import styled from "./main.module.scss"
import {CategoryItem, CategoryList} from "@/screen/main/elements";
import Image from "next/image";
import AndroidLogo from "@/assets/image/android.png"
import WindowsLogo from "@/assets/image/windows.png"

interface IMain {
    image: string
    alt: string
}
const Main = () => {
    const categoryItems:IMain[] = [
        {
            image: require("@/assets/image/TorrServe-MatriX.png"),
            alt: "torrserve",
        },
        {
            image: require("@/assets/image/TorrServe-MatriX.png"),
            alt: "torrserve",
        },
        {
            image: require("@/assets/image/TorrServe-MatriX.png"),
            alt: "torrserve",
        },
    ];
    return (
        <main className={styled.main}>
            <div className={styled.category}>
                <div className={styled.categoryTitle}>
                    <Image src={AndroidLogo} alt={"android"} />
                </div>
                <CategoryList>
                    {categoryItems.map((item, index) => (
                        <CategoryItem key={index} tabIndex={100 + index}>
                            <Image src={item.image} alt={item.alt} width={190} />
                        </CategoryItem>
                    ))}
                </CategoryList>
            </div>
            <div className={styled.category}>
                <div className={styled.categoryTitle}>
                    <Image src={WindowsLogo} alt={"windows"} />
                </div>
                <CategoryList>
                    {categoryItems.map((item, index) => (
                        <CategoryItem key={index} tabIndex={200 + index}>
                            <Image src={item.image} alt={item.alt} width={190} />
                        </CategoryItem>
                    ))}
                </CategoryList>
            </div>
        </main>
    );
};

export default Main;
