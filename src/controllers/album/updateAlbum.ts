import { supabase } from "../../config/supabase";

export async function updateAlbumController(req: any, res: any) {
  try {
    const { id: id_album } = req.params;
    const { title, album_description, owner, privacy } = req.body;

    // Check if Album is complete
    if (!id_album) {
      return res.status(400).json({ message: "Id_album is required." });
    }
    if (!title) {
      return res.status(400).json({ message: "Title is required." });
    }
    if (!owner) {
      return res.status(400).json({ message: "Owner is required." });
    }
    if (!privacy) {
      return res.status(400).json({ message: "Privacy is required." });
    }

    const { data, error } = await supabase
      .from("pp_albums")
      .update({
        title,
        album_description,
        owner,
        privacy,
      })
      .eq("id_album", id_album)
      .select();

      console.log(data);
    if (data) {
      res.status(200).json({ message: "Album update successfully." });
    } else {
      res.status(500).json({
        message: "An error has occurred while updating album.",
        error: error.toString(),
      });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
