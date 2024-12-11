import { supabase } from "../../config/supabase";

export async function createAlbumController(req: any, res: any) {
  try {
    const { title, album_description, owner, privacy } = req.body;

    // Check if album is complete
    if (!title) {
      return res.status(400).json({ message: "Title is required." });
    }

    // TODO: Check if album title already exist
    // const { data: existingAlbum, error: existingAlbumError } = await supabase
    //   .from("pp_albums")
    //   .select("*")
    //   .eq("title", title);

    // if (existingAlbumError) {
    //   return res.status(500).json({ message: "An error occurred during album verification.", error: existingAlbumError.toString(),});
    // } else if (existingAlbum) {
    //   return res.status(400).json({ message: "Album title is already use." });
    // }

    // Post album in the database
    const { data, error } = await supabase
      .from("pp_albums")
      .insert([
        {
          title,
          album_description,
          owner,
          privacy,
        },
      ])
      .select();

    if (data) {
      res.status(200).json({ message: "Album created successfully." });
    } else {
      res
        .status(500)
        .json({
          message: "An error has occurred while creating album.",
          error: error.toString(),
        });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
