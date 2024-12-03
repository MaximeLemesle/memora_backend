import { supabase } from "../../config/supabase";

export async function getUsersController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_users").select("*");

    if (error) {
      console.error(
        `Erreur lors de la récupération des utilisateurs : ${error.message}`
      );
    }

    res.status(200).json({ users: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}
