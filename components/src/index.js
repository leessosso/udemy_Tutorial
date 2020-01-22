import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="LEE"
          timeAgo="Today at 4:45PM"
          content="Nice blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00 AM"
          content="Happy New Year!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yseterday at 5:45PM"
          content="Good Morning!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesderday at 9:30PM"
          content="MoonJaeAng"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      did it?
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
