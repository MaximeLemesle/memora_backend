import { supabase } from "../../config/supabase";

export async function getPhotosController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_photos").select("*");

    if (error) {
      console.error(
        `Erreur lors de la récupération des photos : ${error.message}`
      );
    }

    res.status(200).json({ photos: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}