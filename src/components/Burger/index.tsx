import React from "react";

import * as S from "./styles";

interface Props {
  active: boolean;
  onClick: () => void;
}

const Burger: React.FC<Props> = ({ active, onClick }) => {
  return (
    <S.Container className={active ? "active" : ""} onClick={onClick}>
      <div className={"meat meat-1"} />
      <div className={"meat meat-2"} />
      <div className={"meat meat-3"} />
    </S.Container>
  );
};

export default Burger;
