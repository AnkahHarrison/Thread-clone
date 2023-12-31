"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { DbParams } from "@/types/DbParams";

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: DbParams): Promise<void> {
  try {
    connectToDB();
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new error(`fail to create/update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User
    .findOne({ id: userId })
   //// .populate({
////path: "communities",
////model : 'community'


   //// });
  } catch (error:any) {

    throw new Error(`fail to fetch user: ${error.message}`);
  }
}
