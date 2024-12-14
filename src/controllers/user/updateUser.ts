import { supabase } from "../../config/supabase";

export async function updateUserController(req: any, res: any) {
  try {
    const { id: id_user } = req.params;
    const {
      firstname,
      lastname,
      mail,
      password,
      address,
      profile_picture,
    } = req.body;

    // Check if user is complete
    if (!id_user) {
      return res.status(400).json({ message: "Id_user is required." });
    }
    if (!firstname) {
      return res.status(400).json({ message: "Firstname is required." });
    }
    if (!lastname) {
      return res.status(400).json({ message: "Lastname is required." });
    }
    if (!mail) {
      return res.status(400).json({ message: "Mail is required." });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }
    if (!address) {
      return res.status(400).json({ message: "Address is required." });
    }

    const { data, error } = await supabase
      .from("pp_users")
      .update({
        firstname,
        lastname,
        mail,
        password,
        address: address.toLowerCase(),
        profile_picture,
      })
      .eq("id_user", id_user)
      .select();

    if (data) {
      res.status(200).json({ message: "User update successfully." });
    } else {
      res.status(500).json({
        message: "An error has occurred while updating user.",
        error: error.toString(),
      });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
