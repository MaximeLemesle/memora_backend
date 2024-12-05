import { supabase } from "../../config/supabase";

export async function getPagesController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_pages").select("*");

    if (error) {
      console.error(
        `Erreur lors de la récupération des pages : ${error.message}`
      );
    }

    res.status(200).json({ pages: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}
