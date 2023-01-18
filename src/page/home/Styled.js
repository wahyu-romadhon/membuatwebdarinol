import styled, { css } from "styled-components";

//kita samakan dengan kebutuhan
//misalnya yg di kiri button
//berarti kita panggil button

//sekarang kita sudah mempunyai component Button global

export const Btn = styled.button`
  margin: 0px 5px;
  border-radius: 7px;
  padding: 0px 10px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  color: rgb(3, 172, 14);
  border: 1px solid rgb(3, 172, 14);

  //jadi yg di atas ini adalah defaultnya

  ${(props) =>
    props.isDaftar &&
    css`
      background-color: rgb(3, 172, 14);
      color: white;
      border: white;
    `}
`;

export const IconDana = styled.img`
  width: 100px;
  height: 30px;
  margin: 30px 0px;
`;

export const WrapMainDana = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: grey;
  margin-top: 50px;
`;

export const BorderDana = styled.div`
  display: flex;
  flex-direction: column; //saya bikin menurun
  border-left: 2px solid silver;
  border-right: 2px solid silver;
  border-radius: 5px;
`;

export const WrapContext = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.icon &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.text &&
    css`
      justify-content: space-between;
      margin: 10px;
    `}

    ${(props) =>
    props.underline &&
    css`
      border-bottom: 0.5px solid silver;
    `}

    ${(props) =>
    props.leftText &&
    css`
      font-size: 12px;
      margin: 10px;
    `}

    ${(props) =>
    props.silverBackground &&
    css`
      background-color: #f0f0f0;
      width: 70px;
      color: black;
      margin: 10px 20px;
      padding: 2px;
    `}

    ${(props) =>
    props.blueBackground &&
    css`
      padding: 2px;
      background-color: #d9f1ff;
      color: black;
      margin: 10px 20px;
      justify-content: space-between;
    `}
`;

export const TextDana = styled.p`
  font-size: 14px;
  margin: 5px 10px;

  ${(props) =>
    props.little &&
    css`
      margin: 3px 5px;
      font-size: 12px;
    `}

  ${(props) =>
    props.leftText &&
    css`
      margin: 5px 20px;
      font-weight: bold;
    `}
`;

export const SetengahBulat = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid silver;

  ${(props) =>
    props.posisi === "atas" &&
    css`
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: 0;
    `}

  ${(props) =>
    props.posisi === "bawah" &&
    css`
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom: 0;
    `}
`;

export const Garis = styled.div`
  width: 20px;

  ${(props) =>
    props.posisi === "atas" &&
    css`
      border-top: 2px solid silver;
    `}

  ${(props) =>
    props.posisi === "bawah" &&
    css`
      border-bottom: 2px solid silver;
    `}
`;
