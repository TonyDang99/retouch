import React, { useState } from "react";
import { connect } from "react-redux";
import RetouchItem from "./RetouchItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
    return {
        retouchs: state,
    };
  };

  const DisplayRetouch = (props) => {
    const [sort, setSort] = useState("active");
    return (
    //   <div className="todo_display">
    //     <row>
    //       <AnimatePresence>
    //         {props.retouchs.length > 0 && sort === "active"
    //           ? props.retouchs.map((item) => {
    //               return (
    //                 item.completed === false && (
    //                   <RetouchItem
    //                     key={item.id}
    //                     item={item}
    //                     // removeTodo={props.removeTodo}
    //                     // updateTodo={props.updateTodo}
    //                     // completeTodo={props.completeTodo}
    //                   />
    //                 )
    //               );
    //             })
    //           : null}
    //       </AnimatePresence>
    //     </row>
    //   </div>
    <div></div>
    );
  };

  export default connect(mapStateToProps)(DisplayRetouch);