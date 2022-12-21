import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  display: flex;
  padding: 20px;
  width: 420px;
  flex-direction: column;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ContactDetails = styled.p`
  width: calc(100% / 3);
  font-size: 16px;
`;

export const DeleteBtn = styled.button`
  appearance: none;
  background-color: salmon;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  :hover {
    transform: scale(1.05);
  }
`;
