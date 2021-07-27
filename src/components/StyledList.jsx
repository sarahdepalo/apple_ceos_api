import styled from 'styled-components';

// Will dynamically create a unique class name
const StyledList = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    text-align: left;
    &:hover { 
        color: pink; 
    }
`;

export default StyledList;