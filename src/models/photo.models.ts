// Init supabase
import { supabase } from "../config/supabase";

async function getAllPhoto() {
  const { data, error } = await supabase.from('pp_photos').select('*');

  if (error) {
    console.error(`Erreur lors de la récupération des photos :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des photos`,
    };
  }

  return { data, error };
}

async function getPhoto(id: number) {
  const { data, error } = await supabase
    .from('pp_photos')
    .select('*')
    .eq("id_photo", id);

  if (error) {
    console.error(`Erreur lors de la récupération de la photo avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération de la photo avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllPhoto, getPhoto };
