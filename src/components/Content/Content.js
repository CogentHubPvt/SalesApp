import AddLead from "./AddLead";

const Content = ({ content }) => {
  return (
    <div>
      {content === "1" && <AddLead />}
      {content === "2" && <div>{content}</div>}
    </div>
  );
};

export default Content;
