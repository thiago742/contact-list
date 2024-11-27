import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;
  width: 500px;
  height: 90vh;
  overflow-y: scroll;

  /* Estilização para esconder o scroll */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Edge */
  }

  h1 {
    color: #fff;
    margin-bottom: 32px;
  }
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
`

export const Nome = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`


export const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;  // Espaçamento entre o perfil e o resto das informações
`;

export const ListItem = styled.li`
  margin: 10px 0;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
`;

export const P = styled.p`
  color: #fff;
`

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;


  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonDelete = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #e32636;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;


  &:hover {
    background-color: #b91826;
  }
`;
