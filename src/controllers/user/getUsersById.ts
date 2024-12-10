import { supabase } from "../../config/supabase";

export async function getUserByIdController(req: any, res: any) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const { error, data } = await supabase.from("pp_users").select("*").eq("id_user", id);

    if (error) {
      res.status(404).json({ message: `User id ${id} not found`, error: error.toString() });
    } else if (data.length === 0) {
      res.status(400).json({ message: `User id ${id} not found`, user: data });
    }

    return res.status(200).json({ message: `User retrieved`, user: data });
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}