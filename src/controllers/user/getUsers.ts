import { supabase } from "../../config/supabase";

export async function getUsersController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_users").select("*").order("id_user", { ascending: true });

    if (error) {
      return res.status(500).json({ message: "An error has occurred while retrieving users.", error: error.toString(), });
    } else if (data.length === 0) {
      res.status(400).json({ message: `No users found`, user: data });
    }

    return res.status(200).json({ message: `Users retrieved`, user: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}