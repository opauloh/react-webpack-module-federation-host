import * as React from "react";

const Modal = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      {open && (
        <div
          style={{
            zIndex: 999,
            background: "rgba(0, 0, 0, 0.3)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
      <div
        style={{
          zIndex: 1000,
          display: open ? "block" : "none",
          width: 400,
          height: 400,
          position: "absolute",
          top: "50%",
          marginTop: -200,
          left: "50%",
          marginLeft: -200,
          background: "#fff",
        }}
      >
        <div>Modal Content</div>
        {children}
        <div>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      </div>
      <button onClick={handleOpen}>Open Modal</button>
    </>
  );
};

export default Modal;
