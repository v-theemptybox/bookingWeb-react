import React from "react";

const FooterItem = (props) => {
  return (
    <div>
      {props.col_values.map((element) => {
        return <div key={props.col_number}>{element}</div>;
      })}
    </div>
  );
};

export default FooterItem;
