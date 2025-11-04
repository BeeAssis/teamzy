import { Priority } from "@/state/api";
import ReusablePriorityPage from "../reusablePriorityPage";

type Props = {};

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;
