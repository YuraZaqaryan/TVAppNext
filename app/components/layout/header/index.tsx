import { Search} from "@/layout/header/elements";
import styled from "./header.module.scss"
import Title from "@/layout/header/elements/title/Title";
const Header = () => {
    return (
        <header className={styled.header}>
            <Title />
            {/*<Search />*/}
        </header>
    );
};

export default Header;