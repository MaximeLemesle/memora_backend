// Init supabase
import { supabase } from "../config/supabase";

// --- TYPE --- //
type Album = {
  id_album: number;
  title: Text;
  album_description: Text;
  owner: number;
  created_date: Date;
  privacy: boolean;
};

// --- GET --- //
async function getAllAlbum() {
  const { data, error } = await supabase
    .from("pp_albums")
    .select("*, pp_pages(*)");

  if (error) {
    console.error(`Erreur lors de la récupération des albums :`, error.message);
    return {
      data: null,
      error: `Une erreur s'est produite lors de la récupération des albums`,
    };
  }

  return { data, error };
}

async function getAlbum(id: number) {
  const { data, error } = await supabase
    .from("pp_albums")
    .select("*, pp_pages(*)")
    .eq("id_album", id);

  if (error) {
    console.error(
      `Erreur lors de la récupération de l'album avec l'id ${id} :`,
      error.message
    );
    return {
      data: null,
      error: `Une erreur s'est produite lors de la récupération de l'album avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllAlbum, getAlbum };

// --- POST --- //

async function postAlbum(album: Album) {
  const { data, error } = await supabase
    .from("pp_albums")
    .insert([album])
    .select();

  if (error) {
    console.error(`Erreur lors de la création de l'album :`, error.message);
    return {
      data: null,
      error: `Une erreur s'est produite lors de la création de l'album`,
    };
  }

  return { data, error };
}

export { postAlbum };

// --- UPDATE --- //

async function updateAlbum(album: Album) {
  const { data, error } = await supabase
    .from("pp_albums")
    .update(album)
    .eq("id_album", album.id_album);

  if (error) {
    console.error(`Erreur lors de la mise à jour de l'album n°${album.id_album} :`, error.message);
    return {
      data: null,
      error: `Une erreur s'est produite lors de la mise à jour de l'album  n°${album.id_album}`,
    };
  }

  return { data, error };
}

export { updateAlbum };

// --- DELETE --- //
