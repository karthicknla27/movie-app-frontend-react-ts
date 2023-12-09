import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal1(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <dialog open>
          <article>{props.children}</article>
        </dialog>
      )}
    </>
  );
}
import { useState } from "react";

export function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
