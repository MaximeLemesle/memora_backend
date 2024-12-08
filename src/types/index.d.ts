export type Album = {
  id_album: number;
  title: string;
  album_description: string;
  owner: number;
  created_date: Date;
  privacy: boolean;
};

export type User = {
  id_user: number;
  firstname: string;
  lastname: string;
  mail: string;
  password: string;
  address: string;
  profile_picture: string;
  created_date_account: Date;
};
