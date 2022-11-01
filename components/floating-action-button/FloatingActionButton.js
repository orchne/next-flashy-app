import { IoMdAdd } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { Action, Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const FloatingActionButton = () => {
  const actionDashboard = () => {
    console.log("test");
  };
  const actionAddFlashcard = () => {
    console.log("test");
  };

  return (
    <Fab
      icon={<IoMdAdd />}
      alwaysShowTitle={true}
      mainButtonStyles={{ background: "#e95677" }}
    >
      <Action
        text="Add flashcard"
        style={{ background: "#e95677" }}
        onClick={actionAddFlashcard}
      >
        <IoMdAdd></IoMdAdd>
      </Action>
      <Action
        text="Dashboard"
        style={{ background: "#e95677" }}
        onClick={actionDashboard}
      >
        <MdPeople />
      </Action>
    </Fab>
  );
};

export default FloatingActionButton;
