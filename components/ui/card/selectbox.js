import { ArrowDownIcon } from "../../icons";
export default function SelectBox({ text }) {
  return (
    <div className="selectBox">
      <span className="truncate-text">{text}</span>
      <ArrowDownIcon />
    </div>
  );
}
