// Init supabase
import { supabase } from "../config/supabase";

async function getAllPage() {
  const { data, error } = await supabase.from('pp_pages').select('*, pp_photos(*)');

  if (error) {
    console.error(`Erreur lors de la récupération des pages :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération des pages`,
    };
  }

  return { data, error };
}

async function getPage(id: number) {
  const { data, error } = await supabase
    .from('pp_pages')
    .select('*, pp_photos(*)')
    .eq("id_page", id);

  if (error) {
    console.error(`Erreur lors de la récupération de la page avec l'id ${id} :`, error.message);
    return {
      data: null,
      error:
        `Une erreur s'est produite lors de la récupération de la page avec l'id ${id}`,
    };
  }

  return { data, error };
}

export { getAllPage, getPage };
