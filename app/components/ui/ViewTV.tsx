import React, {FC, PropsWithChildren, useState, useEffect, useRef, memo} from "react";
interface ICategoryItem {
    tabIndex?: number
    categoryIndex?: number
    className: string
    start: "ArrowLeft" | "ArrowUp"
    end: "ArrowRight" | "ArrowDown"
}

const ViewTV: FC<PropsWithChildren<ICategoryItem>> = memo(props => {
    const { children, categoryIndex, tabIndex, className, start, end } = props;
    const [focusedIndex, setFocusedIndex] = useState(100);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === start && focusedIndex > 100) {
                setFocusedIndex(focusedIndex - 1);
            } else if (event.key === end) {
                setFocusedIndex(focusedIndex + 1);
            }
            if(event.key === "ArrowUp" && focusedIndex > 100) {
                setFocusedIndex(focusedIndex - 100)
            }else if (event.key === "ArrowDown") {
                setFocusedIndex(focusedIndex + 100)
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [focusedIndex]);

    useEffect(() => {
        if (ref.current && focusedIndex === tabIndex) {
            ref.current.focus();
        }
    }, [focusedIndex, tabIndex]);

    return (
        <div
            ref={ref}
            tabIndex={tabIndex}
            className={`viewTV ${className}`}
        >
            {children}
        </div>
    );
});

export default ViewTV;