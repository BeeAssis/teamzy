import { Priority } from "@/state/api";
import ReusablePriorityPage from "../reusablePriorityPage";

type Props = {};

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Medium} />;
};

export default Urgent;
