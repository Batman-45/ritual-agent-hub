import { supabase } from "../services/supabase";

export async function getUpvoteCount(projectId) {
  const { count, error } = await supabase
    .from("Upvotes")
    .select("*", { count: "exact", head: true })
    .eq("project_id", projectId);

  if (error) {
    console.error(error);
    return 0;
  }

  return count || 0;
}

export async function hasUserUpvoted(projectId, email) {
  if (!email) return false;

  const { data } = await supabase
    .from("Upvotes")
    .select("id")
    .eq("project_id", projectId)
    .eq("user_email", email)
    .maybeSingle();

  return !!data;
}

export async function toggleUpvote(projectId, email) {
  if (!email) {
    alert("Please login first.");
    return false;
  }

  const { data } = await supabase
    .from("Upvotes")
    .select("id")
    .eq("project_id", projectId)
    .eq("user_email", email)
    .maybeSingle();

  if (data) {
    await supabase
      .from("Upvotes")
      .delete()
      .eq("id", data.id);

    return false;
  }

  await supabase
    .from("Upvotes")
    .insert({
      project_id: projectId,
      user_email: email,
    });

  return true;
}