import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <div className={`border-l-4 p-3 alert-${alert.type}`}>
          <i className="fas fa-info-circle mr-2"></i> {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
