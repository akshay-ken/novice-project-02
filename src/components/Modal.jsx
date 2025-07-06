import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export function Modal({ open, onClose, children }) {
  const dlgRef = useRef(null);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 m-0 w-full h-full bg-Grayish-blue">
      <div>{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
