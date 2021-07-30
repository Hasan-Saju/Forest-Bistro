import React from "react";

const Loading = () => {
  return (
    <div className="col-12" style={{ padding: "60px" }}>
      <span className="fa fa-spinner fa-5x text-primary fa-fw fa-pulse"></span>
      {/* have to change the class to className and fas will be fa */}
    </div>
  );
};

export default Loading;
