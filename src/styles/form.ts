import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 500px;
  background-color: #000;
  padding: 50px;
  margin: 0 20px;
  border-radius: 32px;
  text-align: center;

  h2 {
    color: #fff;
    font-weight: bold;
  }

  p {
    text-decoration: underline;
    color: #fff;
  }
`

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
