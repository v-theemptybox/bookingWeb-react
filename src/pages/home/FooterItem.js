import React from "react";

const FooterItem = (props) => {
  return (
    <div>
      {props.col_values.map((element, id) => {
        return <div key={id}>{element}</div>;
      })}
    </div>
  );
};

export default FooterItem;
