import { IPerson } from "./../../../ts/interfaces/IPerson";
import type { NextApiRequest, NextApiResponse } from "next";

export default (_req: NextApiRequest, res: NextApiResponse<IPerson>): void => {
  res.status(200).json({ id: "1", name: "John Doe", age: 20 });
};
