import { supabase } from "../../config/supabase";

export async function getAlbumsController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_albums").select("*");

    if (error) {
      console.error(
        `Erreur lors de la récupération des albums : ${error.message}`
      );
    }

    res.status(200).json({ albums: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}