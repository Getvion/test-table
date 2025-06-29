import { GraphState } from "@/store/graph/graphSlice";
import { UsersState } from "@/store/users/usersSlice";

export interface Store {
  users: UsersState;
  graph: GraphState;
}
