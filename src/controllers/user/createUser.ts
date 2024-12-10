import { supabase } from "../../config/supabase";

export async function createUserController(req: any, res: any) {
  try {
    const { firstname, lastname, mail, password, address, profile_picture } = req.body;

    // Check if user is complete
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

    // Check if user already exist
    const { data: existingUser, error: existingUserError } = await supabase.from("pp_users").select("*").eq("mail", mail.toLowerCase());

    if (existingUserError) {
      return res.status(500).json({ message: "An error occurred during user verification.", error: existingUserError.toString() });
    } else if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Post user in the database
    const { data, error } = await supabase
      .from("pp_users")
      .insert([
        {
          firstname,
          lastname,
          mail,
          password,
          address: address.toLowerCase(),
          profile_picture,
        },
      ])
      .select();

    if (data) {
      res.status(200).json({ message: "User created successfully." });
    } else {
      res.status(500).json({ message: "An error has occurred while creating user." , error: error.toString() });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}