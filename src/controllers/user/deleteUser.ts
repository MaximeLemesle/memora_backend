import { supabase } from "../../config/supabase";

export async function deleteUserController(req: any, res: any) {
  try {
    console.log(req.params);
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const { error } = await supabase
    .from('pp_users')
    .delete()
    .eq('id_user', id);

    if (error) {
      return res.status(500).json({ message: `An error has occurred while deleting user id ${id}.`, error: error.toString() });
    }

    return res.status(200).json({ message: `User has been successfully deleted` });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
}