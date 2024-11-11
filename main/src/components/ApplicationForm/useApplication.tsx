"use client"

import { DatabaseTables } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"

import { createSupabaseBrowser } from "@/lib/supabase/client"

import { Database } from "../../../database.types"

// T - Represents the return type aka the actual database Model's row (with "ROW")
// I - Represents the input type aka the actual input values fro the model, typed as "INSERT"
export function useCreateApplication<T, I>() {
  return useMutation({
    mutationKey: ["create-application"],
    mutationFn: createApplication<T, I>,
  })
}

async function createApplication<T, I>({
  model,
  tableName,
}: {
  model: I
  tableName: DatabaseTables
}): Promise<T> {
  const db = createSupabaseBrowser()

  // const model = createDriversLicenseModel(user, application)
  const { data, error, status } = await db
    .from(tableName)
    .insert(model)
    .returns<Database["public"]["Tables"][typeof tableName]["Row"]>()

  console.log(error)

  if (error) {
    console.log(`Create ${tableName} Error: `, error.message)
    throw Promise.reject(error.message)
  }
  return data as T
}