import { supabase } from "../../config/supabase";

export async function getAlbumByIdController(req: any, res: any) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Album ID is required" });
    }

    const { error, data } = await supabase
      .from("pp_albums")
      .select("*")
      .eq("id_album", id);

    if (error || data.length === 0) {
      res.status(404).json({
        message: `Album id ${id} not found`,
        error: error ? error.toString() : null,
      });
    }

    return res.status(200).json({ message: `Album retrieved`, album: data });
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
