import Styled from "styled-components";
import React from "react";

export default ({size, children}) => {
    const Header = Styled(size)`
        text-align: center;
        position: absolute;
        top: 0;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
    `;

    return <Header>{children}</Header>;
}
