import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
      display: flex;
      background-color: #20212c;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 10px;
      justify-content: space-between;

      .input{
        display: flex;
        align-items: center;
      }
  
      input{
          width: 25px;
          height: 25px;
          margin-right: 5px;
      }
  
      label{
          color: #ccc;
          text-decoration: ${done ? "line-through" : "initial"}
      }
  `
);

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  button {
    font-size: 20px;
    background: none;
    border: none;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const EditText = styled.div`
  display: flex;
  gap: 10px;
  button {
    background: white;
    border: 2px solid #20212c;
  }
  button:hover{
    cursor: pointer;
    background: #EEE;
  }
`;
