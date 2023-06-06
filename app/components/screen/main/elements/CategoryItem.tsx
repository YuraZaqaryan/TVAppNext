    import React, {FC, PropsWithChildren, useState, useEffect, useRef, memo} from "react";
    import styled from "./../main.module.scss";
    import {ViewTV} from "@/app/components/ui";
    interface ICategoryItem {
        tabIndex: number;
    }

    const CategoryItem: FC<PropsWithChildren<ICategoryItem>> = memo((props) => {
        const { children, tabIndex } = props;

        return (
            <ViewTV
                tabIndex={tabIndex}
                start="ArrowLeft"
                end="ArrowRight"
                className={styled.categoryItem}
            >
                <div>
                    {children}
                </div>
            </ViewTV>
        );
    });

    export default CategoryItem;