import { CSSProperties, InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons";

const WrapperStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  width: 132,
  height: 26,
  borderRadius: 13,
};

const InputStyle: CSSProperties = {
  background: "none",
  width: 72,
  outline: "none",
  border: 0,
  color: "rgba(255, 255, 255)",
};

export interface InputSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

const Index = ({ onSearch, style, ...rest }: InputSearchProps) => {
  return (
    <div style={{ ...WrapperStyle, ...style }}>
      <input {...rest} style={InputStyle}></input>
      <div onClick={onSearch} style={{ height: 24 }}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Index;
