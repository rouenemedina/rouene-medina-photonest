import "./Buttons.scss";
import React from "react";

function Buttons({
  showLearnMore,
  showSecondary,
  showDelete,
  showEdit,
}) {
  return (
    <div>
      {showLearnMore && (
        <button type="submit" className="button__primary">
          LEARN MORE
        </button>
      )}
      {showSecondary && (
        <button type="submit" className="button__secondary">
          Cancel
        </button>
      )}
      {showDelete && (
        <button type="submit" className="button__delete">
          Delete
        </button>
      )}
      {showEdit && (
        <button type="submit" className="button__edit">
          Edit
        </button>
      )}
    </div>
  );
}

export default Buttons;
