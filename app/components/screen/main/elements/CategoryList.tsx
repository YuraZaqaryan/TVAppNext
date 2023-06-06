import {FC, PropsWithChildren} from "react";
import styled from "./../main.module.scss"
const CategoryList:FC<PropsWithChildren> = (props) => {
    const { children } = props

    return (
        <div className={styled.categoryList}>
            {children}
        </div>
    );
};

export default CategoryList;