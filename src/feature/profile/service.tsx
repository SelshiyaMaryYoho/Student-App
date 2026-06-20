import client from "../../api";

export const GetProfileService = async (uuid: string) => {
  const res = await client.profile.getById(uuid);
  return res;
};