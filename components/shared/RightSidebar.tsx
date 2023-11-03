import React from "react";

function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-light-1 text-heading4-medium">
          suggested communities
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-light-1 text-heading4-medium">users</h3>
      </div>
    </section>
  );
}

export default RightSidebar;
