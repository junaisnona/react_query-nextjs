import { NextApiRequest, NextApiResponse } from "next";
import { IPerson } from "../../../ts/interfaces/IPerson";

export default (
  req: NextApiRequest,
  res: NextApiResponse<IPerson | Error>
): void => {
  const data: IPerson = JSON.parse(req.body);

  res.status(200).json(data);
};
