import { supabase } from "../../config/supabase";

export async function getUserByIdController(req: any, res: any) {
  try {
    const id = req.params.id;

    const { error, data } = await supabase
      .from("pp_users")
      .select("*")
      .eq("id_user", id);

    if (error) {
      res
        .status(500)
        .json({
          message: `Erreur lors de la récupération de l'utilisateur ${id}`,
          error: error.toString(),
        });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
