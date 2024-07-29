import { api } from "../baseApi";
import { IAPIDoctor } from "./types";


export const getDoctor = (): Promise<IAPIDoctor> => {
  return api.get()
}