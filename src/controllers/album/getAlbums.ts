import { supabase } from "../../config/supabase";

export async function getAlbumsController(req: any, res: any) {
  try {
    const { error, data } = await supabase.from("pp_albums").select("*");

    if (error) {
      return res.status(500).json({ message: "An error has occurred while retrieving albums.", error: error.toString(), });
    } else if (data.length === 0) {
      res.status(400).json({ message: `No albums found`, album: data });
    }

    return res.status(200).json({ message: `Albums retrieved`, album: data });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}