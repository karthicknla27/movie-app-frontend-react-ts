import React from "react";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  dialog: boolean;
  setDialog: (value: boolean) => void;
  open?: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ dialog, setDialog }) => {
  const navigate = useNavigate();
  function handlecancel() {
    setDialog(false);
    navigate("/");
  }
  return (
    <div>
      <dialog open={dialog}>
        <article>
          <p>API request success</p>
          <footer>
            <button onClick={handlecancel}>ok </button>
          </footer>
        </article>
      </dialog>
    </div>
  );
};

export default Modal;
