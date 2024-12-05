import { supabase } from "../../config/supabase";

export async function getCommentsController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_comments").select("*");

    if (error) {
      console.error(
        `Erreur lors de la récupération des commentaires : ${error.message}`
      );
    }

    res.status(200).json({ comments: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}
